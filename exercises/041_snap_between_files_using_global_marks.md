# Kata: Jump Between Files with Global Marks

> **Environment:** Vim or Neovim; built-in commands

## Objective
Set uppercase marks that retain file identity and jump between two files. Success means round-tripping to exact line and column positions.

## Setup
Create a unique owned directory and two files inside it:

```vim
:let g:kata_mark_dir = tempname()
:call mkdir(g:kata_mark_dir, 'p')
:let g:kata_mark_a = g:kata_mark_dir . '/a.txt'
:let g:kata_mark_b = g:kata_mark_dir . '/b.txt'
:call writefile(['alpha one', 'alpha two'], g:kata_mark_a)
:call writefile(['beta one', 'beta two'], g:kata_mark_b)
:execute 'edit ' . fnameescape(g:kata_mark_a)
```

Start on line 2, column 7 in Normal mode (`2G6l`).

## Tasks

### Drill A - Set and inspect
Set global mark `A`, then inspect it. **Verify:** `:marks A` reports `a.txt`, line 2, column 7.

### Drill B - Cross-file jump
Edit the path stored in `g:kata_mark_b`, move to line 1 column 6, set mark `B`, then jump exactly to `A`. **Verify:** `:echo expand('%:t')` prints `a.txt` at line 2 column 7.

### Drill C - Round trip
Jump exactly to `B`. **Verify:** `:echo expand('%:t')` prints `b.txt` at line 1 column 6.

### Challenge
Alternate `A`, `B`, `A` without using `:edit`. **Verify:** final location is file A, line 2 column 7.

## Hints
<details><summary>Hints</summary>
Uppercase marks are file marks. Use a backtick, not an apostrophe, for exact column restoration.
</details>

## Solution
<details><summary>Show exact commands and keys</summary>
- A: `mA:marks A<CR>`
- B: `:execute 'edit ' . fnameescape(g:kata_mark_b)<CR>05lmB` then `` `A ``
- C: `` `B ``
- Challenge: `` `A`B`A ``
</details>

## Reset and Cleanup
Run `:delmarks A B`. Wipe only the owned buffers with `:execute 'silent! bwipeout! ' . bufnr(g:kata_mark_a)` and the equivalent command for `g:kata_mark_b`. Remove the owned directory with `:call delete(g:kata_mark_dir, 'rf')`, then `:unlet g:kata_mark_a g:kata_mark_b g:kata_mark_dir`. No working-directory file is created or deleted.

## Command Reference
| Keys | Effect |
|---|---|
| `m{A-Z}` | Set global/file mark |
| `` `{A-Z} `` | Jump to exact file position |
| `:marks {mark}` | Inspect mark |

## References
- [`:help file-marks`](https://vimhelp.org/motion.txt.html#file-marks)
