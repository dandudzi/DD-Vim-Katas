# Kata: Full Page Scroll

## Task

Practice moving through a buffer by full pages with `<C-f>` and `<C-b>`, including counted page scrolls.

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
Line 21
Line 22
Line 23
Line 24
Line 25
Line 26
Line 27
Line 28
Line 29
Line 30
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
Line 21
Line 22
Line 23
Line 24
Line 25
Line 26
Line 27
Line 28
Line 29
Line 30
```

The final cursor position should be on line 16, and the visible window should span lines 16 through 25.

## Commands

Run these command steps:

```text
1. :set nowrap scrolloff=0 window=6<CR>
2. :resize 10<CR>
3. 8Gzt
4. <C-f>
5. 18Gzt
6. <C-b>
7. 8Gzt
8. 2<C-f>
```
