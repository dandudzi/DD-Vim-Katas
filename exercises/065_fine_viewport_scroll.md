# Kata: Fine Viewport Scroll

## Task

Practice scrolling a seven-line window one line at a time while the cursor stays on the same line.

## Start

Open a scratch buffer containing `Line 01` through `Line 20`, one item per line.

Start in Normal mode on line 1, column 1.

## End

The text should remain unchanged, and the cursor should finish on line 13.

## Commands

Run these command steps:

```text
1. 7<C-w>_
2. 8Gzt
3. 13G
4. <C-e>
5. 2<C-e>
6. 2<C-y>
7. <C-y>
```

