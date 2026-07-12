# Kata: Navigate a Prepared Quickfix List

## Task

Practice moving through a prepared quickfix list with LazyVim's quickfix mappings.

## Start

Open a scratch buffer and insert:

```text
practice_152_spatial_quickfix.txt
```

Start in Normal mode on the `p` in line 1.

## End

The quickfix list should contain the three `TODO` matches from
`practice_152_spatial_quickfix.txt` in line order. It should be visible, with
the cursor on the first match at line 2.

## Commands

Run these command steps:

```text
1. <leader>|
2. gf
3. <leader>wd
4. <leader>sg
5. TODO -- practice_152_spatial_quickfix.txt
6. <C-q>
7. ]q
8. ]q
9. [q
10. [q
```
