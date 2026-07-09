# Kata: Gitsigns Preview Hunk

## Task

Practice previewing one changed Git hunk with Gitsigns.

## Start

Open generated `config.txt` in a temporary Git repository with one changed line.

Start in Normal mode on line 1, column 1.

## End

The buffer should still contain:

```text
title = base
alpha = 10
trailer = base
```

## Commands

Run these command steps:

```text
1. :let g:kata_179_dir=tempname()<CR>
2. :call mkdir(g:kata_179_dir, 'p')<CR>
3. :call writefile(['title = base', 'alpha = 1', 'trailer = base'], g:kata_179_dir.'/config.txt')<CR>
4. :call system(['git', '-C', g:kata_179_dir, 'init', '-q'])<CR>
5. :call system(['git', '-C', g:kata_179_dir, 'add', 'config.txt'])<CR>
6. :call system(['git', '-C', g:kata_179_dir, '-c', 'user.name=Kata', '-c', 'user.email=kata@example.invalid', 'commit', '-qm', 'base'])<CR>
7. :call writefile(['title = base', 'alpha = 10', 'trailer = base'], g:kata_179_dir.'/config.txt')<CR>
8. :execute 'edit '.fnameescape(g:kata_179_dir.'/config.txt')<CR>
9. :Gitsigns preview_hunk<CR>
```
