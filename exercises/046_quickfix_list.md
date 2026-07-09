# Kata: Build and Navigate a Quickfix List

## Task

Practice building a quickfix list with `:vimgrep`, opening it, and moving through entries with built-in quickfix commands.

## Start

Open a scratch buffer. The command steps create two disposable files for quickfix practice.

Start in Normal mode on line 1, column 1.

## End

The quickfix list should contain the two `TODO` matches from the disposable files, the quickfix window should be closed, and the current buffer should be `one.txt` on line 1.

```text
alpha TODO
```

## Commands

Run these command steps:

```text
1. :let g:kata_084_dir = tempname() | call mkdir(g:kata_084_dir, 'p')<CR>
2. :call writefile(['alpha TODO', 'plain', 'omega'], g:kata_084_dir . '/one.txt')<CR>
3. :call writefile(['beta TODO', 'plain'], g:kata_084_dir . '/two.txt')<CR>
4. :execute 'edit ' . fnameescape(g:kata_084_dir . '/one.txt')<CR>
5. :execute 'vimgrep /TODO/gj ' . fnameescape(g:kata_084_dir) . '/*.txt'<CR>
6. :copen<CR>
7. :cfirst<CR>
8. :cnext<CR>
9. :cprev<CR>
10. :cclose<CR>
```
