# Kata: Viewport-Relative Landing

## Task

Practice using `H`, `M`, and `L` to land on the top, middle, and bottom visible lines of the current window.

## Start

Open a scratch buffer and insert:

```text
Line 01
Line 02
Line 03
Line 04
Line 05
Line 06
Line 07
Line 08
Line 09
Line 10
Line 11
Line 12
Line 13
Line 14
Line 15
```

Start in Normal mode on the `L` in `Line 01`.

## End

The buffer should remain:

```text
Line 01
Line 02
Line 03
Line 04
Line 05
Line 06
Line 07
Line 08
Line 09
Line 10
Line 11
Line 12
Line 13
Line 14
Line 15
```

The final cursor position should be on line 5, and the visible window should span lines 5 through 11.

## Commands

Run these command steps:

```text
1. :set nowrap scrolloff=0<CR>
2. :resize 7<CR>
3. 5Gzt
4. H
5. M
6. L
7. M
8. H
```
