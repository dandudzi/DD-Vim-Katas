# Kata: Jump Spatially Through Quickfix

## Task

Practice jumping to quickfix entries above or below the cursor with `:cbelow`
and `:cabove`, using LazyVim keys to view and step through the list.

## Start

Open `practice_152_spatial_quickfix.txt`:

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

The quickfix list should be visible with entries for the three `TODO` lines.
The current buffer should be `practice_152_spatial_quickfix.txt`, with the
cursor on the `T` in `TODO first` at line 2, column 1.

## Commands

Run these command steps:

```text
1. :edit practice_152_spatial_quickfix.txt<CR>
2. 4G
3. :vimgrep /TODO/gj %<CR>
4. <leader>xq
5. :cbelow<CR>
6. ]q
7. [q
8. :cabove<CR>
```
