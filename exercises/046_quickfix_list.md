# Kata: Navigate a Quickfix List

## Task

Create a quickfix list from TODO matches, then navigate it.

## Start

Start in Normal mode anywhere in the project containing the
`practice_151_*.txt` files. The cursor position does not matter.

## End

The quickfix window should be closed.

## Commands

Run these command steps:

```text
1. <leader>sg
2. TODO -- practice_151_*.txt
3. <C-q>
4. ]q
5. [q
6. <leader>xq (LazyVim: Quickfix List)
7. <leader>wd (LazyVim: Delete Window)
```
