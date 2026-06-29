# Kata: Jump Spatially Through Quickfix

## Task

Practice jumping to quickfix entries above or below the cursor with `:cbelow` and `:cabove`.

## Start

Open a scratch buffer and insert:

```text
alpha intro
TODO first
plain spacer
cursor anchor
TODO second
plain spacer
lower anchor
TODO third
omega tail
```

Start in Normal mode on the `c` in `cursor anchor` at line 4, column 1.

## End

The buffer text should be unchanged, and the cursor should finish on the `T` in `TODO first` at line 2, column 1. The quickfix list should contain entries for the three `TODO` lines in the current buffer.

## Commands

Run these command steps:

```text
1. :call setqflist([{'bufnr': bufnr('%'), 'lnum': 2, 'col': 1, 'text': getline(2)}, {'bufnr': bufnr('%'), 'lnum': 5, 'col': 1, 'text': getline(5)}, {'bufnr': bufnr('%'), 'lnum': 8, 'col': 1, 'text': getline(8)}], 'r', {'title': 'Scratch TODOs'})<CR>
2. :cbelow<CR>
3. 7G
4. :cabove<CR>
5. 3G
6. :2cbelow<CR>
7. 7G
8. :2cabove<CR>
```
