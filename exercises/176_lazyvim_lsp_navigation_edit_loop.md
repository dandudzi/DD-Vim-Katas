# Kata: LazyVim LSP Navigation and Edit Loop

> **Environment:** Neovim with LazyVim and an attached LSP client.
> **Dependencies:** Any language server already configured for the file you choose.
> **Portability:** LazyVim mappings are configuration-dependent. Verify every mapping with `:verbose nmap {keys}` and verify server support with `:LspInfo` plus capability checks.

## Objective

By the end of this kata, you will be able to inspect an attached LSP client's capabilities, navigate a symbol with LazyVim's LSP mappings, and apply rename/code-action edits only when the server advertises support.

Success means: you can move from a use to its definition, inspect hover/signature/reference data, perform one semantic rename or code action, and return to the original location without assuming a particular language server.

## Prerequisites

- Know: jump-list return with `<C-o>` and basic quickfix/location-list review.
- Required option/state: one buffer with an attached LSP client.
- Required external tool/plugin: LazyVim LSP configuration and a language server for your chosen filetype.
- Readiness check: run `:LspInfo` and confirm at least one client is attached to the current buffer.

Use this helper to check capabilities without naming a server:

```vim
:lua for _, c in ipairs(vim.lsp.get_clients({bufnr=0})) do print(c.name, 'def', c:supports_method('textDocument/definition', 0), 'refs', c:supports_method('textDocument/references', 0), 'rename', c:supports_method('textDocument/rename', 0), 'codeAction', c:supports_method('textDocument/codeAction', 0)) end
```

## Setup

1. Open a disposable file in a project where `:LspInfo` shows an attached client.
2. Choose a small symbol that has one definition and at least two references. If your language supports it, also choose a call site with a visible function signature.
3. Run these mapping checks and note the source file reported by `:verbose`:

```vim
:verbose nmap gd
:verbose nmap gr
:verbose nmap gI
:verbose nmap gy
:verbose nmap gD
:verbose nmap K
:verbose nmap gK
:verbose nmap <Space>cr
:verbose nmap <Space>ca
```

4. Put the cursor on a use of the chosen symbol, not on its definition.
5. Save the original symbol name so you can restore it after the rename drill.

## Constraints

- Do not proceed with a drill until the relevant `client:supports_method(...)` check prints `true`.
- Do not hard-code server names, filetypes, or picker action keys.
- Use `<C-o>` to return from navigation jumps unless the UI you opened documents a different local action.
- For code actions, read the offered action text before applying it; skip actions that would affect files outside your disposable practice target.

## Tasks

### Drill A - Definition, Declaration, And Return

**Goal:** use LSP navigation only after verifying definition support.

1. Confirm `textDocument/definition` support.
2. From a symbol use, jump to its definition with the active `gd` mapping.
3. Return to the use with jump history.
4. If `textDocument/declaration` is supported, try `gD` and return again.

**Verify:** `:echo expand('%:p') . ':' . line('.') . ':' . col('.')` after returning matches the starting use location.

### Drill B - References, Implementations, And Type Definitions

**Goal:** inspect related locations without assuming the UI provider.

1. Confirm `textDocument/references` support, then use the active `gr` mapping.
2. Select one reference from the displayed UI and jump to it.
3. Return to the starting use.
4. If supported, repeat the same check-and-jump pattern for `gI` (`textDocument/implementation`) and `gy` (`textDocument/typeDefinition`).

**Verify:** every visited location belongs to the symbol you started from, and `<C-o>` can return to the original use.

### Drill C - Hover And Signature Help

**Goal:** inspect information without moving through files.

1. Confirm `textDocument/hover` support, then press the active `K` mapping.
2. Close the hover using the UI's documented close action or by moving the cursor.
3. At a call site, confirm `textDocument/signatureHelp` support and use `gK`.

**Verify:** hover or signature content names the symbol under the cursor, and the buffer text is unchanged.

### Drill D - Rename And Code Action

**Goal:** apply one semantic edit only when the server advertises support.

1. Confirm `textDocument/rename`, then use the mapping reported by `:verbose nmap <Space>cr`.
2. Rename the disposable symbol to a temporary name.
3. Use `gr` or the server's reference UI to confirm the same semantic references changed.
4. Rename it back to the original name.
5. Confirm `textDocument/codeAction`, then use the mapping from `:verbose nmap <Space>ca` and inspect the offered actions. If an organize-imports action is offered, apply it only in the disposable file; otherwise apply no action and record that the server did not offer one.

**Verify:** the symbol name is restored after the drill, no unrelated file changed, and `:LspInfo` still shows the client attached.

### Challenge - Recall Without Prompts

Starting from a symbol use, run the readiness checks, jump to definition and back, inspect hover, inspect references, perform a temporary rename and restore it, then check for a safe code action.

**Verify:** `:checktime`, `:write`, or your VCS diff shows only the intended disposable edits, or no diff if you restored the rename.

## Hints

<details>
<summary>Hint 1</summary>

LazyVim's keys are discoverable. `:verbose nmap gd` tells you what will run before you press it.

</details>

<details>
<summary>Hint 2</summary>

LSP methods are independent. A server may support definition and hover but not implementation, type definition, rename, or organize imports.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Readiness

1. `:LspInfo` - confirm an attached client.
2. `:verbose nmap gd` and the other mapping checks - confirm LazyVim mappings in this setup.
3. `:lua for _, c in ipairs(vim.lsp.get_clients({bufnr=0})) do print(c.name, c:supports_method('textDocument/definition', 0)) end` - confirm a method before using its mapping.

### Navigation Loop

1. `gd` - jump to definition when supported.
2. `<C-o>` - return through the jump list.
3. `gr` - open references when supported, then choose an entry using the provider's documented UI.
4. `gI`, `gy`, `gD` - use only if the matching capability check succeeds.

### Inspection And Edit

1. `K` - hover when supported.
2. `gK` - signature help at a call site when supported.
3. `<Space>cr` - LazyVim's usual rename mapping, after `:verbose nmap <Space>cr` confirms it in your setup.
4. `<Space>ca` - LazyVim's usual code-action mapping, after `:verbose nmap <Space>ca` confirms it.

</details>

## Reset and Cleanup

- Between drills: use undo, LSP rename back to the original symbol, or reload the disposable file.
- After the kata: close temporary LSP UI windows and restore any temporary rename.
- Preserve user data: do not run rename or code actions in a real project file unless you are willing to keep or review the diff.

## Notes and Portability

- LazyVim mappings can be changed by user config. `:verbose nmap {keys}` is part of the drill.
- `:LspInfo` shows attachment state, but method support must still be checked per buffer.
- Organize imports is normally exposed as a code action and is not guaranteed by every server.
- Picker, quickfix, and Trouble UIs may all appear depending on configuration; use each UI's help instead of fixed provider keys.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:LspInfo` | Command-line | Show attached LSP clients for the current buffer. |
| `:verbose nmap gd` | Command-line | Show the active Normal-mode mapping and where it was defined. |
| `gd` | Normal | Jump to LSP definition when mapped and supported. |
| `gr` | Normal | Show references when mapped and supported. |
| `gI` | Normal | Show implementations when mapped and supported. |
| `gy` | Normal | Jump to type definition when mapped and supported. |
| `gD` | Normal | Jump to declaration when mapped and supported. |
| `K` | Normal | Show hover documentation when mapped and supported. |
| `gK` | Normal/Insert | Show signature help when mapped and supported. |
| `<Space>cr` | Normal | Rename symbol when mapped and supported. |
| `<Space>ca` | Normal/Visual | Show code actions when mapped and supported. |

## References

- [Neovim help: LSP](https://neovim.io/doc/user/lsp.html) - built-in LSP client concepts and functions.
- [Neovim help: `vim.lsp.Client:supports_method()`](https://neovim.io/doc/user/lsp.html#vim.lsp.Client:supports_method()) - method capability checks.
- [LazyVim keymaps](https://lazyvim.github.io/keymaps) - default mappings, subject to user configuration.
