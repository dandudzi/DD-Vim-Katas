# Kata: Fine Viewport Scroll

## Task

Practice scrolling the window one line at a time with `<C-e>` and `<C-y>` while the cursor stays on the same buffer line.

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
Line 16
Line 17
Line 18
Line 19
Line 20
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
Line 16
Line 17
Line 18
Line 19
Line 20
```

The final cursor position should still be on line 13, and the visible window should span lines 8 through 14.

## Commands

Run these command steps:

```text
1. :set nowrap scrolloff=0<CR>
2. :resize 7<CR>
3. 8Gzt
4. 13G
5. <C-e>
6. 2<C-e>
7. 2<C-y>
8. <C-y>
```
