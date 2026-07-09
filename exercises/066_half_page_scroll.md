# Kata: Half Page Scroll

## Task

Practice moving the cursor and viewport with half-page scrolls using `<C-d>` and `<C-u>`.

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

The final cursor position should be on line 9, and the visible window should span lines 6 through 15.

## Commands

Run these command steps:

```text
1. :set nowrap scrolloff=0 scroll=4<CR>
2. :resize 10<CR>
3. 9Gzt
4. <C-d>
5. <C-u>
```
