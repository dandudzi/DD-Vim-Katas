# Kata: Jump Between Quickfix Files

## Task

Practice navigating prepared quickfix entries across several files with LazyVim mappings.

## Start

Open a scratch buffer and insert:

```text
practice_153_alpha.txt
practice_153_beta.txt
practice_153_gamma.txt
```

Start in Normal mode on the `p` in line 1.

## End

The quickfix list should contain six `TODO` matches in alpha, beta, gamma file
order. It should be visible, and the current buffer should be
`practice_153_gamma.txt` on its first `TODO` at line 3.

## Commands

Run these command steps:

```text
1. <leader>|
2. gf
3. <leader>wd
4. j
5. <leader>|
6. gf
7. <leader>wd
8. j
9. <leader>|
10. gf
11. <leader>wd
12. <leader>sg
13. TODO -- practice_153_*.txt
14. <C-q>
15. ]q
16. ]q
17. ]q
18. ]q
```
