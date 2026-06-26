# Kata: Close and Manage Buffers

> **Environment:** Vim or Neovim; built-in commands only.
> **Dependencies:** None.
> **Portability:** `:bdelete` removes a buffer from the listed buffer set; `:bwipeout` is stronger and should be reserved for disposable buffers.

## Objective

By the end of this kata, you will be able to delete the current buffer, delete a specific buffer by number, and handle unsaved scratch changes safely with `:bdelete`.

Success means: only the intended throwaway buffer disappears from `:ls`, and you can explain when `:bdelete!` discards changes.

## Prerequisites

- Know: how to read `:ls`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: open a throwaway session and confirm `:echo mode()` prints `n`.

## Setup

Create three disposable scratch buffers:

```vim
:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-close-alpha
:call setline(1, ['alpha']) | setlocal nomodified | let g:kata_107_alpha=bufnr()
:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-close-beta
:call setline(1, ['beta']) | setlocal nomodified | let g:kata_107_beta=bufnr()
:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-close-gamma
:call setline(1, ['gamma']) | setlocal nomodified | let g:kata_107_gamma=bufnr()
```

Start in `kata-close-gamma`, Normal mode. Confirm `:echo bufname('%')` prints `kata-close-gamma`.

## Tasks

### Drill A - List and delete the current buffer

**Goal:** remove the current listed buffer.

1. Run `:ls` and note the buffer number for `kata-close-gamma`.
2. Delete the current buffer.

**Verify:** `:echo bufnr('kata-close-gamma')` prints `-1`, while `kata-close-alpha` and `kata-close-beta` still have positive buffer numbers.

### Drill B - Delete a specific buffer by number

**Goal:** delete a buffer without first visiting it.

1. Rebuild setup if needed.
2. From `kata-close-gamma`, delete `kata-close-beta` using the saved buffer number.

**Verify:** `:echo bufnr('kata-close-beta')` prints `-1`, and `:echo bufname('%')` still prints `kata-close-gamma`.

### Drill C - Handle unsaved changes deliberately

**Goal:** see the safety check before forcing a buffer delete.

1. Rebuild setup if needed.
2. In `kata-close-gamma`, append a new line `unsaved`.
3. Try to delete the current buffer without force.
4. Force-delete only this scratch buffer.

**Verify:** the first delete refuses because the buffer is modified; after the force delete, `:echo bufnr('kata-close-gamma')` prints `-1`.

### Challenge - Keep one buffer and remove the others

Reset setup. Starting anywhere, delete `kata-close-beta` and `kata-close-gamma` while keeping `kata-close-alpha` listed.

**Verify:** `:echo bufnr('kata-close-alpha') > 0 bufnr('kata-close-beta') bufnr('kata-close-gamma')` prints `1 -1 -1`.

## Hints

<details>
<summary>Hint 1</summary>

`:bdelete` accepts a buffer number, and this setup saved the numbers in variables.

</details>

<details>
<summary>Hint 2</summary>

Use force only on the scratch buffer you intentionally modified.

</details>

## Solution

<details>
<summary>Show exact commands</summary>

### Drill A

1. `:ls<CR>`
2. `:bdelete<CR>`

### Drill B

1. `:execute 'bdelete ' . g:kata_107_beta<CR>`

### Drill C

1. `Gounsaved<Esc>` - append a new modified line.
2. `:bdelete<CR>` - observe the refusal.
3. `:bdelete!<CR>` - discard the scratch change and delete the buffer.

### Challenge

`:execute 'bdelete ' . g:kata_107_beta<CR>`
`:execute 'bdelete ' . g:kata_107_gamma<CR>`

</details>

## Reset and Cleanup

- Between drills: wipe any remaining owned buffers, then rerun Setup.
- After the kata: run `:silent! bwipeout! kata-close-alpha`, `:silent! bwipeout! kata-close-beta`, and `:silent! bwipeout! kata-close-gamma`.
- Remove variables with `:silent! unlet g:kata_107_alpha g:kata_107_beta g:kata_107_gamma`.
- Preserve user data: the kata uses only `nofile` scratch buffers.

## Notes and Portability

- Built-in behavior: `:bdelete` and `:buffers` work in both Vim and Neovim.
- Safer pattern: avoid `:%bd` during practice because it can close unrelated user buffers. Prefer deleting explicit scratch buffer numbers.
- LazyVim note: LazyVim may provide bufferline or picker mappings for buffer closing/switching. Verify any mapping with `:verbose nmap {keys}` before using it; this kata keeps the built-in `:bdelete` behavior primary.

## Command Reference

| Command | Mode | Effect |
|---|---|---|
| `:ls` / `:buffers` | Command-line | List buffers with numbers and flags. |
| `:bdelete` | Command-line | Delete the current buffer from the buffer list. |
| `:{n}bdelete` | Command-line | Delete buffer number `{n}`. |
| `:bdelete!` | Command-line | Force-delete a modified buffer and discard changes. |
| `:bwipeout` | Command-line | Wipe a buffer more completely; use cautiously. |

## References

- [`:help :bdelete`](https://vimhelp.org/windows.txt.html#%3Abdelete) - delete buffers from the buffer list.
- [`:help :buffers`](https://vimhelp.org/windows.txt.html#%3Abuffers) - buffer list output and flags.
