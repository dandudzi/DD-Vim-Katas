# Kata: LazyVim Picker Project Workflow

> **Environment:** Neovim with LazyVim and a configured picker provider.
> **Dependencies:** LazyVim picker mappings; provider may be Snacks, Telescope, or fzf-lua.
> **Portability:** This kata is LazyVim-specific. Verify mappings with `:verbose nmap`; provider keys inside the picker vary.

## Objective

By the end of this kata, you will be able to use LazyVim picker mappings to find files, grep project text, switch buffers, and resume a picker without assuming provider-internal keys.

Success means: in a disposable project, you can open a target file, jump to a grep result, switch through the buffer picker, and cancel a resumed picker without changing files.

## Prerequisites

- Know: Normal mode, `:lcd`, and `:ls`.
- Required option/state: current directory can be changed locally with `:lcd`.
- Required external tool/plugin: LazyVim picker support.
- Readiness check: run `:verbose nmap <leader><leader>`, `:verbose nmap <leader>/`, `:verbose nmap <leader>,`, and `:verbose nmap <leader>sR`. Continue only when each mapping resolves to a picker action.

## Setup

1. Create a disposable project:

```vim
:let g:kata_175_dir=tempname()
:call mkdir(g:kata_175_dir.'/app', 'p')
:call mkdir(g:kata_175_dir.'/test', 'p')
:call writefile(['export const marker = "ALPHA_PICKER";'], g:kata_175_dir.'/app/alpha.js')
:call writefile(['import { marker } from "../app/alpha";', 'console.log("BETA_PICKER", marker);'], g:kata_175_dir.'/test/beta.test.js')
:execute 'lcd '.fnameescape(g:kata_175_dir)
:edit app/alpha.js
:edit test/beta.test.js
```

2. Start in `beta.test.js`, Normal mode.
3. Confirm `:echo getcwd() ==# g:kata_175_dir` prints `1`.

## Initial Fixture

The setup creates:

```text
app/alpha.js
test/beta.test.js
```

Start in `test/beta.test.js`. Do not edit either file during the kata.

## Constraints

- Use verified LazyVim picker mappings for file, grep, buffer, and resume actions.
- Do not assume provider-internal keys such as a specific multi-select or quickfix export key.
- Use the active picker's own help or visible prompts for moving, selecting, and cancelling.

## Tasks

### Drill A - Find a project file

**Goal:** open a known file through the project file picker.

1. Open the root file picker.
2. Filter for `alpha`.
3. Select `app/alpha.js`.

**Verify:** `:echo expand('%')` prints `app/alpha.js`.

### Drill B - Grep to a known token

**Goal:** jump to a search result through the root grep picker.

1. Open the root grep picker.
2. Search for `BETA_PICKER`.
3. Select the result in `test/beta.test.js`.

**Verify:** `:echo expand('%') line('.') getline('.')` prints `test/beta.test.js 2 console.log("BETA_PICKER", marker);`.

### Drill C - Switch through the buffer picker

**Goal:** switch back to an already listed buffer without using `:buffer`.

1. Open the buffer picker.
2. Filter for `alpha`.
3. Select `app/alpha.js`.

**Verify:** `:echo expand('%')` prints `app/alpha.js`, and `:ls` still lists both project files.

### Challenge - Resume and cancel safely

Resume the latest picker, then cancel it without selecting an item.

**Verify:** `:echo expand('%')` still prints `app/alpha.js`.

## Hints

<details>
<summary>Hint 1</summary>

LazyVim's documented defaults commonly use `<leader><leader>`, `<leader>/`, `<leader>,`, and `<leader>sR`, but your local `:verbose nmap` output is authoritative.

</details>

<details>
<summary>Hint 2</summary>

If the provider shows a help key inside the picker, use that help for cancel and selection behavior.

</details>

## Solution

<details>
<summary>Show default LazyVim workflow</summary>

### Drill A

1. `<leader><leader>` - open root files.
2. Type `alpha`.
3. Select `app/alpha.js` with the provider's documented selection key.

### Drill B

1. `<leader>/` - open root grep.
2. Type `BETA_PICKER`.
3. Select the result with the provider's documented selection key.

### Drill C

1. `<leader>,` - open buffers.
2. Type `alpha`.
3. Select `app/alpha.js`.

### Challenge

1. `<leader>sR` - resume the latest picker.
2. Cancel with the provider's documented cancel key.

</details>

## Reset and Cleanup

- Between drills: reopen `test/beta.test.js` or `app/alpha.js` as instructed by the drill.
- After the kata: wipe owned buffers with `:for g:kata_175_buf in getbufinfo() | if stridx(g:kata_175_buf.name, g:kata_175_dir) == 0 | execute 'bwipeout! ' . g:kata_175_buf.bufnr | endif | endfor`, then run `:lcd - | call delete(g:kata_175_dir, 'rf') | unlet g:kata_175_buf g:kata_175_dir`.
- Preserve user data: all search and buffer practice stays in the generated temp directory.

## Notes and Portability

- Configuration-dependent behavior: LazyVim can use Snacks, Telescope, or fzf-lua as the picker backend.
- Verify mappings with `:verbose nmap <leader><leader>`, `:verbose nmap <leader>/`, `:verbose nmap <leader>,`, and `:verbose nmap <leader>sR`.
- Provider keys inside pickers vary; do not assume a fixed key for multi-select, quickfix export, split open, or cancel.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<leader><leader>` | Normal | LazyVim root file picker when mapped. |
| `<leader>/` | Normal | LazyVim root grep picker when mapped. |
| `<leader>,` | Normal | LazyVim buffer picker when mapped. |
| `<leader>sR` | Normal | LazyVim resume picker when mapped. |
| `:verbose nmap {keys}` | Command-line | Show the active Normal-mode mapping and source. |

## References

- [LazyVim keymaps](https://lazyvim.github.io/keymaps) - documented LazyVim picker mappings.
- [Snacks picker documentation](https://github.com/folke/snacks.nvim) - one possible LazyVim picker provider.
- [Telescope documentation](https://github.com/nvim-telescope/telescope.nvim) - one possible LazyVim picker provider.
- [fzf-lua documentation](https://github.com/ibhagwan/fzf-lua) - one possible LazyVim picker provider.
