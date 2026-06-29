# Kata: Refresh Diff Calculations

## Task

Practice forcing Vim's diff view to recalculate after a manual edit with `:diffupdate`.

## Start

Use two temporary diff buffers. The left buffer starts as:

```text
alpha
BETA
gamma
delta
epsilon
zeta
eta
theta
```

The right buffer starts as:

```text
alpha
beta
gamma
delta
epsilon
zeta
eta
theta
```

Start in Normal mode in the left diff window on the `z` in `zeta`.

## End

Line 6 should first become a visible diff after `:diffupdate`, then stop being a visible diff after the right window is edited to match.

## Commands

Run these command steps:

```text
1. :let g:kata_162_dir = tempname()<CR>
2. :call mkdir(g:kata_162_dir, 'p')<CR>
3. :call writefile(['alpha', 'BETA', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta'], g:kata_162_dir.'/left.txt')<CR>
4. :call writefile(['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta'], g:kata_162_dir.'/right.txt')<CR>
5. :execute 'edit '.fnameescape(g:kata_162_dir.'/left.txt')<CR>
6. :execute 'vert diffsplit '.fnameescape(g:kata_162_dir.'/right.txt')<CR>
7. <C-w>h6G
8. cwZETA<Esc>
9. :echo diff_hlID(6, 1)<CR>
10. :diffupdate<CR>
11. :echo diff_hlID(6, 1) > 0<CR>
12. <C-w>l6GcwZETA<Esc>
13. :diffupdate<CR>
14. :echo diff_hlID(6, 1)<CR>
```
