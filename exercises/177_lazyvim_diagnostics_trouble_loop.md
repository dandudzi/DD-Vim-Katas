# Kata: LazyVim Diagnostics and Trouble Loop

> **Environment:** Neovim with LazyVim; Trouble is optional but recommended for the Trouble drills.
> **Dependencies:** None for diagnostics; Trouble only for the optional UI view.
> **Portability:** Diagnostics are created with `vim.diagnostic.set()` so no LSP server is required. Trouble commands and mappings must be discovered in your setup.

## Objective

By the end of this kata, you will be able to create deterministic diagnostics, navigate and inspect them with built-in Neovim commands, convert them to quickfix/location lists, and optionally review the same state in Trouble.

Success means: you can fix three synthetic diagnostics in order while preserving any quickfix and location-list state that existed before the kata.

## Prerequisites

- Know: basic quickfix navigation with `:cnext` and location-list navigation with `:lnext`.
- Required option/state: Neovim with `vim.diagnostic`.
- Required external tool/plugin: Trouble only for the optional Trouble view.
- Readiness check: run `:lua print(type(vim.diagnostic.set), type(vim.diagnostic.setqflist), type(vim.diagnostic.setloclist))` and confirm it prints three `function` values.

## Setup

1. Run the setup block exactly:

```vim
:let g:kata_177_qf = getqflist({'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1})
:let g:kata_177_ll = getloclist(0, {'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1})
:let g:kata_177_dir = tempname()
:call mkdir(g:kata_177_dir, 'p')
:call writefile(['ERROR alpha', 'WARN beta', 'ERROR gamma'], g:kata_177_dir.'/diag.txt')
:execute 'edit '.fnameescape(g:kata_177_dir.'/diag.txt')
:lua _G.kata_177_ns = vim.api.nvim_create_namespace('kata_177')
:lua local b = vim.api.nvim_get_current_buf(); vim.diagnostic.set(_G.kata_177_ns, b, { {lnum = 0, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'alpha must be fixed'}, {lnum = 1, col = 0, severity = vim.diagnostic.severity.WARN, message = 'beta should be reviewed'}, {lnum = 2, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'gamma must be fixed'} })
:cclose
:lclose
:call setqflist([], 'r')
:call setloclist(0, [], 'r')
```

2. Put the cursor on the `E` in `ERROR alpha` at line 1, column 1.
3. Confirm `:lua print(#vim.diagnostic.get(0))` prints `3`.

## Initial Fixture

`diag.txt`

```text
ERROR alpha
WARN beta
ERROR gamma
```

The buffer has three synthetic diagnostics:

- Error on line 1 with message `alpha must be fixed`.
- Warning on line 2 with message `beta should be reviewed`.
- Error on line 3 with message `gamma must be fixed`.

## Constraints

- Use `vim.diagnostic.set()` diagnostics from setup; do not require a real LSP server.
- Save and restore quickfix and location-list state using the setup variables.
- For Trouble, first run `:echo exists(':Trouble')`; skip Trouble-specific steps if it prints `0`.
- Use Trouble's `g?` help inside the Trouble window before invoking local actions.

## Tasks

### Drill A - Inspect Built-In Diagnostics

**Goal:** inspect the diagnostic under the cursor and move to the next one.

1. Open the diagnostic float for the current line.
2. Move to the next diagnostic using a built-in diagnostic command or your verified LazyVim diagnostic mapping.
3. Inspect the diagnostic message there.

**Verify:** `:echo line('.') . ' ' . getline('.')` prints `2 WARN beta`.

### Drill B - Convert Diagnostics To Quickfix

**Goal:** review diagnostics through the standard quickfix list.

1. Reset to the documented start state.
2. Move all current diagnostics into quickfix.
3. Open quickfix only if it has entries.
4. Jump to the third diagnostic from the list.

**Verify:** `:echo len(getqflist()) . ' ' . line('.') . ' ' . getline('.')` prints `3 3 ERROR gamma`.

### Drill C - Convert Diagnostics To A Location List

**Goal:** keep diagnostic review window-local.

1. Reset to the documented start state.
2. Move all current diagnostics into the current window's location list.
3. Open the location list and jump to the second entry.

**Verify:** `:echo len(getloclist(0)) . ' ' . line('.') . ' ' . getline('.')` prints `3 2 WARN beta`.

### Drill D - Optional Trouble Review

**Goal:** inspect the same diagnostics in Trouble without assuming mappings.

1. Run `:echo exists(':Trouble')`. Continue only if it prints `2`.
2. Inspect the LazyVim diagnostic mapping with `:verbose nmap <Space>xx`.
3. Open a diagnostics Trouble view using either the verified mapping or `:Trouble diagnostics toggle`.
4. Press `g?` in Trouble and identify the documented jump and close actions.
5. Jump to the line 3 diagnostic.

**Verify:** the current buffer is `diag.txt` on line 3, and the Trouble action used was discovered from local help.

### Challenge - Recall Without Prompts

Reset the fixture. Navigate the three diagnostics in order, changing each leading `ERROR` or `WARN` marker to `FIXED`, using either built-in diagnostic navigation or a reviewed quickfix/location-list conversion.

**Verify:** the final buffer text matches the expected final state, and quickfix/location-list state is restored during cleanup.

## Expected Final State

```text
FIXED alpha
FIXED beta
FIXED gamma
```

Verify all of the following:

- `:lua print(#vim.diagnostic.get(0))` still prints `3` until cleanup.
- `:echo getline(1, '$')` shows only the leading markers changed.
- No real LSP diagnostics or project files were required.

## Hints

<details>
<summary>Hint 1</summary>

Diagnostics, quickfix, location lists, and Trouble are separate views over problem locations. Practice one conversion at a time.

</details>

<details>
<summary>Hint 2</summary>

Use `vim.diagnostic.setqflist()` for a global quickfix snapshot and `vim.diagnostic.setloclist()` for the current window's list.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:lua vim.diagnostic.open_float()` - show the diagnostic under the cursor.
2. `:lua vim.diagnostic.goto_next()` - move to line 2.
3. `:lua vim.diagnostic.open_float()` - inspect the warning.

### Drill B

1. `:lua vim.diagnostic.setqflist()` - create a quickfix snapshot.
2. `:cwindow` - open quickfix only because entries exist.
3. `:cc 3` - jump to the third diagnostic.

### Drill C

1. `:lua vim.diagnostic.setloclist()` - create a location-list snapshot.
2. `:lopen` - open the current window's location list.
3. `:ll 2` - jump to the second entry.

### Drill D

1. `:echo exists(':Trouble')` - confirm Trouble is available.
2. `:verbose nmap <Space>xx` - inspect LazyVim's diagnostic Trouble mapping if present.
3. `:Trouble diagnostics toggle` - open diagnostics view when the command exists.
4. `g?` - read local Trouble actions before jumping or closing.

### Challenge

One built-in path is:

`:lua vim.diagnostic.setqflist()<CR>cwFIXED<Esc>:cnext<CR>cwFIXED<Esc>:cnext<CR>cwFIXED<Esc>`

</details>

## Reset and Cleanup

- Between drills: run `:call writefile(['ERROR alpha', 'WARN beta', 'ERROR gamma'], g:kata_177_dir.'/diag.txt') | edit! | cclose | lclose | call setqflist([], 'r') | call setloclist(0, [], 'r') | lua local b = vim.api.nvim_get_current_buf(); vim.diagnostic.reset(_G.kata_177_ns, b); vim.diagnostic.set(_G.kata_177_ns, b, { {lnum = 0, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'alpha must be fixed'}, {lnum = 1, col = 0, severity = vim.diagnostic.severity.WARN, message = 'beta should be reviewed'}, {lnum = 2, col = 0, severity = vim.diagnostic.severity.ERROR, message = 'gamma must be fixed'} })`.
- After the kata: run `:silent! Trouble close | cclose | lclose | call setqflist([], 'r', g:kata_177_qf) | call setloclist(0, [], 'r', g:kata_177_ll) | bwipeout! diag.txt | call delete(g:kata_177_dir, 'rf') | unlet g:kata_177_qf g:kata_177_ll g:kata_177_dir | lua _G.kata_177_ns = nil`.
- Preserve user data: diagnostics and files are synthetic and confined to the temporary directory; pre-existing quickfix and location-list state is restored.

## Notes and Portability

- `vim.diagnostic.set()` makes the kata deterministic and avoids server-specific diagnostic wording.
- `vim.diagnostic.setqflist()` and `vim.diagnostic.setloclist()` create snapshots; they do not stay synchronized after edits.
- Trouble is optional and configuration-dependent. Verify `:Trouble`, mappings, and local `g?` help before relying on it.
- LazyVim diagnostic mappings may differ across user configs, so command forms are included as the stable path.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:lua vim.diagnostic.open_float()` | Command-line | Show diagnostics at or near the cursor. |
| `:lua vim.diagnostic.goto_next()` | Command-line | Jump to the next diagnostic. |
| `:lua vim.diagnostic.setqflist()` | Command-line | Replace quickfix with current diagnostics. |
| `:lua vim.diagnostic.setloclist()` | Command-line | Replace the current window's location list with diagnostics. |
| `:cwindow` | Command-line | Open quickfix only when useful. |
| `:lopen` | Command-line | Open the current window's location list. |
| `:Trouble diagnostics toggle` | Command-line | Toggle Trouble diagnostics view when Trouble is installed. |
| `g?` in Trouble | Normal | Show Trouble's local action help. |

## References

- [Neovim help: diagnostics](https://neovim.io/doc/user/diagnostic.html) - built-in diagnostic API.
- [Neovim help: `vim.diagnostic.set()`](https://neovim.io/doc/user/diagnostic.html#vim.diagnostic.set()) - deterministic diagnostic setup.
- [Neovim help: quickfix](https://neovim.io/doc/user/quickfix.html) - quickfix and location-list behavior.
- [Trouble.nvim documentation](https://github.com/folke/trouble.nvim) - Trouble commands and local actions.
