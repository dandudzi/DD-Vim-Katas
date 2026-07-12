# Kata: Navigate a Quickfix List

## Task

Create a quickfix list from TODO matches, then navigate it.

## Start

Open a scratch buffer and insert:

```text
practice_151_alpha.txt
```

Start in Normal mode on the `p` in `practice_151_alpha.txt`.

## End

The quickfix window and practice split should be closed.

## Commands

Run these command steps:

```text
1. <leader>| (LazyVim: Split Window Right)
2. gf
3. <leader>sg
4. TODO -- practice_151_*.txt
5. <C-q>
6. ]q
7. [q
8. <leader>xq (LazyVim: Quickfix List)
9. <leader>wd (LazyVim: Delete Window)
```
