# Kata: Navigate a Prepared Quickfix List

## Task

Practice moving through a prepared quickfix list with LazyVim's quickfix mappings.

## Start

Start in Normal mode anywhere in the project containing
`practice_152_spatial_quickfix.txt`. The cursor position does not matter.

## End

The quickfix list should contain the three `TODO` matches from
`practice_152_spatial_quickfix.txt` in line order. It should be visible, with
the cursor on the first match at line 2.

## Commands

Run these command steps:

```text
1. <leader>sg
2. TODO -- practice_152_spatial_quickfix.txt
3. <C-q>
4. ]q
5. ]q
6. [q
7. [q
```
