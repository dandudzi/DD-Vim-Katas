# Kata: Mark Your Place and Snap Back to It

## Task

Practice generating numbered lines, setting a local mark, returning to it
exactly, and using a built-in Visual-selection mark.

## Start

Start in Normal mode on line 1, column 1 in any buffer.

## End

The scratch buffer should contain 100 lines. Line 1 should contain `1`, line 2
should contain `2`, and so on through `100` on line 100. The cursor should
finish on line 49.

## Commands

Run these command steps:

```text
1. <leader>fn (LazyVim: New File)
2. i0<Esc>yy99p
3. ggVGg<C-a>
4. 28G0ma
5. G
6. `a
7. 40GV49G<Esc>
8. gg
9. `>
```
