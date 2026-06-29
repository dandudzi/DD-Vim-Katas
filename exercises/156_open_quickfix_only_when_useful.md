# Kata: Open Quickfix Only When Useful

## Task

Practice using `:cwindow` to open quickfix when a parsed list has entries and close it when the list is empty.

## Start

Open a scratch buffer and insert:

```text
header
broken line
footer
```

Start in Normal mode on the `h` in `header` at line 1, column 1.

## End

The buffer should be unchanged. The current quickfix list should contain one entry for line 2, and the quickfix window should be open after the failing log is loaded.

## Commands

Run these command steps:

```text
1. :let g:kata_156_dir = tempname() | call mkdir(g:kata_156_dir, 'p')<CR>
2. :call writefile(['header', 'broken line', 'footer'], g:kata_156_dir . '/app.txt')<CR>
3. :call writefile(['app.txt:2:1: build failed'], g:kata_156_dir . '/fail.log')<CR>
4. :call writefile([], g:kata_156_dir . '/clean.log')<CR>
5. :execute 'cd ' . fnameescape(g:kata_156_dir)<CR>
6. :edit app.txt<CR>
7. :set errorformat=%f:%l:%c:%m<CR>
8. :cgetexpr readfile('clean.log')<CR>
9. :cwindow<CR>
10. :cgetexpr readfile('fail.log')<CR>
11. :cwindow<CR>
12. :cfirst<CR>
```
