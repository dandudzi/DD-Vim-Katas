# Kata: Snap Between Files Using Global Marks

## Task

Set uppercase marks in two existing files and use them to jump between exact positions.

## Start

Open a scratch buffer and insert:

```text
practice_151_alpha.txt
practice_151_beta.txt
```

Start in Normal mode on the `p` in `practice_151_alpha.txt`.

## End

The practice split should be closed. `practice_151_alpha.txt` should be active
with the cursor on the `N` in `NOTE alpha`.

## Commands

Run these command steps:

```text
1. <leader>| (LazyVim: Split Window Right)
2. gf
3. j0mA
4. <C-w>h
5. j0gf
6. j0mB
7. `A
8. `B
9. `A
10. <leader>wd (LazyVim: Delete Window)
```
