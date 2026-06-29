# Kata: Compile and Navigate Errors

## Task

Practice populating quickfix with `:make`, then moving through reported errors with `:cnext` and `:cprevious`.

## Start

Open a scratch buffer and insert:

```text
intro
BROKEN first
middle
BROKEN second
middle
BROKEN third
```

Start in Normal mode on the `i` in `intro` at line 1, column 1.

## End

The buffer should become:

```text
intro
FIXED first
middle
FIXED second
middle
FIXED third
```

The quickfix list should still contain the three build errors.

## Commands

Run these command steps:

```text
1. :let g:kata_158_dir = tempname() | call mkdir(g:kata_158_dir, 'p')<CR>
2. :execute 'write ' . fnameescape(g:kata_158_dir . '/app.txt')<CR>
3. :call writefile(['app.txt:2:1: first error', 'app.txt:4:1: second error', 'app.txt:6:1: third error'], g:kata_158_dir . '/build.log')<CR>
4. :execute 'cd ' . fnameescape(g:kata_158_dir)<CR>
5. :edit app.txt<CR>
6. :set makeprg=cat\ build.log<CR>
7. :set errorformat=%f:%l:%c:%m<CR>
8. :make<CR>
9. cwFIXED<Esc>
10. :cnext<CR>
11. cwFIXED<Esc>
12. :cnext<CR>
13. cwFIXED<Esc>
14. :cprevious<CR>
15. :cnext<CR>
```
