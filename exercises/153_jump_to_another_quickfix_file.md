# Kata: Jump to Another Quickfix File

## Task

Practice skipping from one represented quickfix file to another with `:cnfile` and `:cpfile`.

## Start

Open a scratch buffer and insert:

```text
alpha.txt
TODO alpha first
plain alpha
TODO alpha second

beta.txt
header beta
TODO beta first
plain beta
TODO beta second

gamma.txt
start gamma
plain gamma
TODO gamma first
middle gamma
TODO gamma second
```

Start in Normal mode on line 1, column 1 of the scratch buffer.

## End

The disposable files should be unchanged. The current buffer should be `gamma.txt`, the cursor should be on `TODO gamma first` at line 3, column 1, and the quickfix list should contain six `TODO` entries across `alpha.txt`, `beta.txt`, and `gamma.txt`.

## Commands

Run these command steps:

```text
1. :let g:kata_153_dir = tempname() | call mkdir(g:kata_153_dir, 'p')<CR>
2. :call writefile(['TODO alpha first', 'plain alpha', 'TODO alpha second'], g:kata_153_dir . '/alpha.txt')<CR>
3. :call writefile(['header beta', 'TODO beta first', 'plain beta', 'TODO beta second'], g:kata_153_dir . '/beta.txt')<CR>
4. :call writefile(['start gamma', 'plain gamma', 'TODO gamma first', 'middle gamma', 'TODO gamma second'], g:kata_153_dir . '/gamma.txt')<CR>
5. :execute 'vimgrep /TODO/gj ' . fnameescape(g:kata_153_dir . '/alpha.txt') . ' ' . fnameescape(g:kata_153_dir . '/beta.txt') . ' ' . fnameescape(g:kata_153_dir . '/gamma.txt')<CR>
6. :cfirst<CR>
7. :cnfile<CR>
8. :cpfile<CR>
9. :cfirst<CR>
10. :2cnfile<CR>
```
