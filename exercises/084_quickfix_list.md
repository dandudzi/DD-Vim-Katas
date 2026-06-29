# Kata: Build and Navigate a Quickfix List

## Task

Practice building a quickfix list with `:vimgrep`, opening it, and moving through entries.

## Start

Open a scratch buffer and insert:

```text
alpha TODO
plain
omega TODO
```

Start in Normal mode on the `a` in `alpha`.

## End

The current quickfix list should contain the two `plain` matches from the disposable files, and the current buffer should be `one.txt` on line 2.

```text
plain
```

## Commands

Run these command steps:

```text
1. :let g:kata_084_dir = tempname() | call mkdir(g:kata_084_dir, 'p')<CR>
2. :call writefile(['alpha TODO', 'plain', 'omega TODO'], g:kata_084_dir . '/one.txt')<CR>
3. :call writefile(['TODO beta', 'plain'], g:kata_084_dir . '/two.txt')<CR>
4. :execute 'edit ' . fnameescape(g:kata_084_dir . '/one.txt')<CR>
5. :execute 'vimgrep /TODO/gj ' . fnameescape(g:kata_084_dir) . '/*.txt'<CR>
6. :copen<CR>
7. G<CR>
8. :cclose<CR>
9. :cfirst<CR>
10. :cnext<CR>
11. :cnext<CR>
12. :cprev<CR>
13. :execute 'vimgrep /plain/gj ' . fnameescape(g:kata_084_dir) . '/*.txt'<CR>
14. :cfirst<CR>
```
