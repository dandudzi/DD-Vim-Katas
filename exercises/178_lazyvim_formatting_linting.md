# Kata: LazyVim Formatting and Linting Readiness

> **Environment:** Neovim with LazyVim.
> **Dependencies:** Optional formatter, linter, or LSP configured for the filetype.
> **Portability:** Formatting and linting providers vary. Verify mappings with `:verbose nmap {keys}` and inspect provider state before running a formatter.

## Objective

By the end of this kata, you will be able to decide whether LazyVim can format
or lint the current buffer, run formatting only when a provider is available,
and distinguish that workflow from built-in `=`, `gq`, and `gw`.

Success means: you can show the active format readiness, run or deliberately
skip the provider format path, and inspect diagnostics without assuming one
formatter or linter is installed everywhere.

## Prerequisites

- Know: built-in `=` reindent and `gq` / `gw` text formatting.
- Required option/state: none.
- Required external tool/plugin: LazyVim with whatever formatting or linting providers your setup actually enables.
- Readiness check: run `:echo has('nvim')` and confirm it prints `1`.

## Setup

1. Create a generated project and open a file:

```vim
:let g:kata_178_dir = tempname()
:call mkdir(g:kata_178_dir, 'p')
:call writefile(['function total(items){', 'return items.reduce((sum,item)=>sum+item.price,0)', '}', '', 'const message = "format me"'], g:kata_178_dir.'/sample.js')
:execute 'edit '.fnameescape(g:kata_178_dir.'/sample.js')
:setlocal filetype=javascript
```

2. Put the cursor on line 2, column 1.
3. Confirm `:echo expand('%:t') . ' ' . &filetype` prints `sample.js javascript`.

## Initial Fixture

```javascript
function total(items){
return items.reduce((sum,item)=>sum+item.price,0)
}

const message = "format me"
```

Start in Normal mode on line 2.

## Constraints

- Do not install formatters or linters during the kata.
- Do not run provider formatting until readiness checks identify a provider.
- Keep all edits inside `g:kata_178_dir`.
- Use built-in `=` only for the contrast drill, not as proof that a LazyVim formatter exists.

## Tasks

### Drill A - Inspect format readiness

**Goal:** discover whether the current buffer has a LazyVim format path.

1. Run `:verbose nmap <Space>cf`.
2. Run:

```vim
:lua local ok, conform = pcall(require, 'conform'); local ok_list, list = false, {}; if ok and type(conform.list_formatters_to_run) == 'function' then ok_list, list = pcall(conform.list_formatters_to_run, 0) end; print(ok_list and vim.inspect(list) or 'conform unavailable')
```

3. If your format mapping is different, inspect that mapping with `:verbose nmap {keys}` as well.

**Verify:** you can name one of these states: mapped format action with at least
one formatter, mapped format action with no formatter for this buffer, or no
provider available.

### Drill B - Contrast with built-in indentation

**Goal:** prove `=` is a Vim indentation operator, not a formatter provider.

1. Reset the fixture with `:edit!`.
2. Run `=G` from line 1.

**Verify:** indentation may change, but missing semicolons, spacing inside
`reduce((sum,item)=>...)`, and quote style are not provider-formatted by `=`.

### Drill C - Run provider formatting only when ready

**Goal:** invoke LazyVim/Conform formatting without assuming an installed tool.

1. Reset the fixture with `:edit!`.
2. Run:

```vim
:lua local ok, conform = pcall(require, 'conform'); local ok_list, list = false, {}; if ok and type(conform.list_formatters_to_run) == 'function' then ok_list, list = pcall(conform.list_formatters_to_run, 0) end; if ok and ok_list and #list > 0 then conform.format({ bufnr = 0, timeout_ms = 3000 }) else print('skip: no formatter for this buffer') end
```

3. If you use a mapping instead, run it only after `:verbose nmap {keys}` identifies the format action.

**Verify:** either the buffer changes through a real provider, or the command
prints `skip: no formatter for this buffer`.

### Drill D - Inspect lint or diagnostic state

**Goal:** check lint-like feedback without assuming a particular linter engine.

1. Run `:lua print(vim.inspect(vim.diagnostic.count(0)))`.
2. If your setup documents a lint command or mapping, inspect it first with `:verbose nmap {keys}` or `:verbose command {CommandName}`.
3. Trigger linting only when the inspected provider exists.

**Verify:** diagnostics are reported as a Lua table, even when it is empty. An
empty table means no diagnostics are currently published for this buffer; it
does not prove a linter is installed.

### Challenge - Decide, format, and inspect

Reset the fixture. Determine whether formatting is available, run it only if
ready, then inspect diagnostics.

**Verify:** you can state which provider path was used or why it was skipped,
and `:echo expand('%:p') =~# g:kata_178_dir` prints `1`.

## Hints

<details>
<summary>Hint 1</summary>

`=` follows indentation rules. It does not call Prettier, stylua, an LSP
formatter, or Conform by itself.

</details>

<details>
<summary>Hint 2</summary>

Provider readiness is buffer-local in practice: filetype, project files,
installed executables, and LSP attachment can all change the answer.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:verbose nmap <Space>cf<CR>`
2. `:lua local ok, conform = pcall(require, 'conform'); local ok_list, list = false, {}; if ok and type(conform.list_formatters_to_run) == 'function' then ok_list, list = pcall(conform.list_formatters_to_run, 0) end; print(ok_list and vim.inspect(list) or 'conform unavailable')<CR>`

### Drill B

1. `:edit!<CR>`
2. `gg=G`

### Drill C

1. `:edit!<CR>`
2. `:lua local ok, conform = pcall(require, 'conform'); local ok_list, list = false, {}; if ok and type(conform.list_formatters_to_run) == 'function' then ok_list, list = pcall(conform.list_formatters_to_run, 0) end; if ok and ok_list and #list > 0 then conform.format({ bufnr = 0, timeout_ms = 3000 }) else print('skip: no formatter for this buffer') end<CR>`

### Drill D

1. `:lua print(vim.inspect(vim.diagnostic.count(0)))<CR>`

### Challenge

Run Drill A, then Drill C, then Drill D from a reset fixture.

</details>

## Reset and Cleanup

- Between drills: `:edit!` restores the generated file from disk unless you wrote provider-formatted changes.
- To fully reset: rerun the setup block.
- After the kata:

```vim
:silent! bwipeout sample.js
:call delete(g:kata_178_dir, 'rf')
:unlet g:kata_178_dir
```

- Preserve user data: all files are created under `tempname()`.

## Notes and Portability

- Built-in `=` reindents. Built-in `gq` and `gw` reflow text.
- LazyVim formatting usually goes through configured format providers such as an LSP or formatter plugin. Availability depends on the buffer.
- Linting may publish diagnostics through different engines. Inspect `vim.diagnostic` for current results and provider docs for trigger keys.
- Always verify mappings with `:verbose nmap {keys}` before a mapping-dependent drill.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `=G` | Normal | Reindent through Vim indentation rules. |
| `:verbose nmap <Space>cf` | Command-line | Show whether this config maps a format action. |
| `conform.list_formatters_to_run(0)` | Lua | Inspect Conform formatter readiness for the current buffer, when Conform is installed. |
| `conform.format({ bufnr = 0 })` | Lua | Run Conform formatting for the current buffer, when ready. |
| `vim.diagnostic.count(0)` | Lua | Count current diagnostics by severity for this buffer. |

## References

- [`:help =`](https://vimhelp.org/change.txt.html#%3D) - built-in indent operator.
- [`:help gq`](https://vimhelp.org/change.txt.html#gq) - built-in text formatting.
- [`:help gw`](https://vimhelp.org/change.txt.html#gw) - built-in text reflow with cursor preservation.
- [Conform.nvim documentation](https://github.com/stevearc/conform.nvim) - formatter readiness and format API.
- [Neovim diagnostics](https://neovim.io/doc/user/diagnostic.html) - diagnostic API used by lint and LSP integrations.
