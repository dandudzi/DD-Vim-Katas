# Kata: Jump Between Quickfix Files

## Task

Practice navigating prepared quickfix entries across several files with LazyVim mappings.

## Start

Start in Normal mode anywhere in the project containing the
`practice_153_*.txt` files. The cursor position does not matter.

## End

The quickfix list should contain six `TODO` matches in alpha, beta, gamma file
order. It should be visible, and the current buffer should be
`practice_153_gamma.txt` on its first `TODO` at line 3.

## Commands

Run these command steps:

```text
1. <leader>sg
2. TODO -- practice_153_*.txt
3. <C-q>
4. ]q
5. ]q
6. ]q
7. ]q
```
