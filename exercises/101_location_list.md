# Kata: Location List

## Task

Practice building and navigating a window-local location list with
`:lvimgrep`, `:lopen`, and `:lnext`.

## Start

Open a scratch buffer and insert:

```text
RED one
plain
RED two
```

Start in Normal mode on line 1, column 1.

## End

The current window should be back in `left.txt` on line 3:

```text
RED one
plain
RED two
```

## Commands

Run these command steps:

```text
1. :let g:kata_101_dir=tempname() | call mkdir(g:kata_101_dir, 'p')<CR>
2. :call writefile(['RED one', 'plain', 'RED two'], g:kata_101_dir . '/left.txt')<CR>
3. :execute 'edit ' . fnameescape(g:kata_101_dir . '/left.txt')<CR>
4. :execute 'lvimgrep /RED/gj ' . fnameescape(g:kata_101_dir . '/left.txt')<CR>
5. :lopen<CR>
6. <CR>
7. :lnext<CR>
8. :lclose<CR>
```
