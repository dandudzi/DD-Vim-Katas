# Kata: Filter an Existing Quickfix List

## Task

Practice narrowing an existing quickfix list with the standard `cfilter` plugin.
Use LazyVim keys to open and move through the filtered list.

## Start

Open `practice_154_quickfix_filter.txt`:

```text
TODO core auth
plain spacer
TODO test checkout
TODO vendor shim
TODO docs update
TODO api health
```

Start in Normal mode on the `T` in `TODO core auth` at line 1, column 1.

## End

The quickfix list should be visible with four `TODO` entries, excluding
`TODO vendor shim`. The current buffer should be
`practice_154_quickfix_filter.txt` on line 1.

## Commands

Run these command steps:

```text
1. :edit practice_154_quickfix_filter.txt<CR>
2. :packadd cfilter<CR>
3. :vimgrep /TODO/gj %<CR>
4. <leader>xq
5. :Cfilter /test/<CR>
6. :colder<CR>
7. :Cfilter! /vendor/<CR>
8. :cfirst<CR>
9. ]q
10. [q
```
