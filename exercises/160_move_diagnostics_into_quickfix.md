# Kata: Move Diagnostics into Quickfix

> **Environment:** Neovim 0.6+; tested with Neovim 0.12.3.
> **Dependencies:** None.
> **Portability:** Uses Neovim's built-in Lua diagnostics API. Vim does not provide `vim.diagnostic.setqflist()`.

## Objective

By the end of this kata, you will be able to convert current-buffer diagnostics into a standard quickfix list using `vim.diagnostic.setqflist()`.

Success means: you can turn synthetic diagnostics into quickfix entries, filter to errors only when needed, and then work through the reported lines with normal quickfix navigation.

## Prerequisites

- Know: basic Ex command usage and how to run a short `:lua` command.
- Required option/state: Neovim with the `vim.diagnostic` API available.
- Required external tool/plugin: none.
- Readiness check: run `:lua print(type(vim.diagnostic.setqflist))` and confirm it prints `function`.

## Setup

1. Run the commands below exactly once:

```vim
:let g:kata_160_qf = getqflist({'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1})
:let g:kata_160_dir = tempname()
:call mkdir(g:kata_160_dir, 'p')
:call writefile(['ERROR alpha', 'WARN beta', 'ERROR gamma'], g:kata_160_dir.'/diag.txt')
:execute 'edit '.fnameescape(g:kata_160_dir.'/diag.txt')
:lua _G.kata_160_ns = vim.api.nvim_create_namespace('kata_160')
:lua local b = vim.api.nvim_get_current_buf(); vim.diagnostic.set(_G.kata_160_ns, b, { {lnum = 0, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'first error'}, {lnum = 1, col = 0, severity = vim.diagnostic.severity.WARN, message = 'one warning'}, {lnum = 2, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'second error'} })
:cclose
:call setqflist([], 'r')
```

2. Put the cursor on the `E` in `ERROR alpha` at line 1, column 1.
3. Confirm Normal mode is active and `:lua print(#vim.diagnostic.get(0))` prints `3`.

## Initial Fixture

`diag.txt`

```text
ERROR alpha
WARN beta
ERROR gamma
```

The current buffer also has three synthetic diagnostics:

- Error on line 1 with the message `first error`.
- Warning on line 2 with the message `one warning`.
- Error on line 3 with the message `second error`.

Start in Normal mode in `diag.txt` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `vim.diagnostic.setqflist()` to populate quickfix from diagnostics.
- Use only minimal inline Lua; do not require an LSP server.
- Do not use `:vimgrep`, `:make`, or manual `:setqflist()` item dictionaries.
- Reset to the documented start state before each drill unless the drill explicitly builds on prior edits.

## Tasks

### Drill A - Isolate the conversion

**Goal:** move all current diagnostics into quickfix.

1. Replace the quickfix list with the current buffer's diagnostics.
2. Inspect the resulting quickfix entries.

**Verify:** `:echo len(getqflist()) . ' ' . getqflist()[1].lnum . ' ' . getqflist()[3].lnum` prints `3 1 3`.

### Drill B - Add precision with severity filtering

**Goal:** create a quickfix list that contains only errors.

1. Reset to the documented start state.
2. Replace quickfix with only the error diagnostics from the current buffer.

**Verify:** `:echo len(getqflist()) . ' ' . getqflist()[1].lnum . ' ' . getqflist()[2].lnum` prints `2 1 3`.

### Drill C - Apply the workflow

**Goal:** convert all diagnostics to quickfix, then fix the reported markers in quickfix order.

1. Reset to the documented start state.
2. Populate quickfix with all three diagnostics.
3. Work through the quickfix entries in order and change each `ERROR` or `WARN` marker to `FIXED`.

**Verify:** the buffer matches the expected final state below, and the quickfix list still has three entries.

### Challenge - Recall without prompts

Reset the fixture. Starting on line 1 of `diag.txt`, move all diagnostics into quickfix and change all three markers to `FIXED` in quickfix order.

**Verify:** the final buffer text matches the expected final state exactly, and line 2 was included because the full diagnostic list was used instead of the errors-only filter.

## Expected Final State

After the challenge, `diag.txt` must be:

```text
FIXED alpha
FIXED beta
FIXED gamma
```

Verify all of the following:

- `:echo len(getqflist())` prints `3`.
- The current line is line 3 if you stop on the last quickfix entry after the final fix.
- Only the leading markers changed; the rest of each line stayed intact.

## Hints

<details>
<summary>Hint 1</summary>

You can call the function directly from `:lua`, and it writes a normal quickfix list that other quickfix commands can navigate.

</details>

<details>
<summary>Hint 2</summary>

The severity filter goes in the options table, and Neovim exposes the constants at `vim.diagnostic.severity`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:lua vim.diagnostic.setqflist()` - replace quickfix with all diagnostics from the current buffer.

### Drill B

1. `:lua vim.diagnostic.setqflist({ severity = vim.diagnostic.severity.ERROR })` - replace quickfix with only the error diagnostics.

### Drill C

1. `:lua vim.diagnostic.setqflist()` - populate quickfix with all three diagnostics.
2. `cwFIXED<Esc>` - fix the line 1 marker.
3. `:cnext` - move to the warning on line 2.
4. `cwFIXED<Esc>` - fix the line 2 marker.
5. `:cnext` - move to the error on line 3.
6. `cwFIXED<Esc>` - fix the line 3 marker.

### Challenge

`:lua vim.diagnostic.setqflist()<CR>cwFIXED<Esc>:cnext<CR>cwFIXED<Esc>:cnext<CR>cwFIXED<Esc>`

`setqflist()` converts the current diagnostics into an ordinary quickfix snapshot, so standard quickfix navigation works immediately afterward.

</details>

## Reset and Cleanup

- Between drills: run `:call writefile(['ERROR alpha', 'WARN beta', 'ERROR gamma'], g:kata_160_dir.'/diag.txt') | edit! | call setqflist([], 'r') | lua local b = vim.api.nvim_get_current_buf(); vim.diagnostic.reset(_G.kata_160_ns, b); vim.diagnostic.set(_G.kata_160_ns, b, { {lnum = 0, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'first error'}, {lnum = 1, col = 0, severity = vim.diagnostic.severity.WARN, message = 'one warning'}, {lnum = 2, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'second error'} })`.
- After the kata: run `:cclose | call setqflist([], 'r', g:kata_160_qf) | bwipeout! diag.txt | call delete(g:kata_160_dir, 'rf') | unlet g:kata_160_qf g:kata_160_dir | lua _G.kata_160_ns = nil`.
- Preserve user data: the file and diagnostics belong only to a temporary buffer created by this kata.

## Notes and Portability

- Built-in behavior: `vim.diagnostic.setqflist()` is built into Neovim, not Vim.
- Built-in behavior: the quickfix list is a snapshot of diagnostics at the moment you call the function; it does not update automatically after edits.
- Alternative: the same function accepts options such as `severity` and `open`, which you can explore later without changing the basic workflow.
- Edge case: this kata creates diagnostics manually, so no LSP server is required and no server-specific ordering differences apply.
- LazyVim/Trouble note: Trouble can show diagnostics directly, but this kata deliberately converts them into the standard quickfix list. Check `:echo exists(':Trouble')` and use `g?` inside Trouble before relying on any Trouble action.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:lua vim.diagnostic.setqflist()` | Command-line | Replace quickfix with all current diagnostics. |
| `:lua vim.diagnostic.setqflist({ severity = vim.diagnostic.severity.ERROR })` | Command-line | Replace quickfix with only error diagnostics. |
| `:cnext` | Command-line | Jump to the next quickfix entry. |
| `cwFIXED<Esc>` | Normal | Replace the marker under the cursor with `FIXED`. |

## References

- [Neovim help: `vim.diagnostic.setqflist()`](https://neovim.io/doc/user/diagnostic.html#vim.diagnostic.setqflist()) - populate quickfix from diagnostics.
- [Neovim help: `vim.diagnostic.set()`](https://neovim.io/doc/user/diagnostic.html#vim.diagnostic.set()) - create deterministic diagnostics for the kata setup.
- [Neovim help: `vim.diagnostic.severity`](https://neovim.io/doc/user/diagnostic.html#vim.diagnostic.severity) - severity filter constants.
- [Neovim help: `quickfix`](https://neovim.io/doc/user/quickfix.html#quickfix) - standard quickfix navigation after conversion.
