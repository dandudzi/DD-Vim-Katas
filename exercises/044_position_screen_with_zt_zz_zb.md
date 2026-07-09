# Kata: Position the Screen Around the Cursor

## Task

Practice `zt`, `zz`, and `zb` to reframe the viewport without changing the buffer.

## Start

Open a scratch buffer and insert:

```text
Line 01 - The quick brown fox jumps over the lazy dog.
Line 02 - Pack my box with five dozen liquor jugs.
Line 03 - How vexingly quick daft zebras jump.
Line 04 - The five boxing wizards jump quickly.
Line 05 - Jackdaws love my big sphinx of quartz.
Line 06 - The quick brown fox jumps over the lazy dog.
Line 07 - Pack my box with five dozen liquor jugs.
Line 08 - How vexingly quick daft zebras jump.
Line 09 - The five boxing wizards jump quickly.
Line 10 - Jackdaws love my big sphinx of quartz.
Line 11 - The quick brown fox jumps over the lazy dog.
Line 12 - Pack my box with five dozen liquor jugs.
Line 13 - How vexingly quick daft zebras jump.
Line 14 - The five boxing wizards jump quickly.
Line 15 - Jackdaws love my big sphinx of quartz.
Line 16 - The quick brown fox jumps over the lazy dog.
Line 17 - Pack my box with five dozen liquor jugs.
Line 18 - How vexingly quick daft zebras jump.
Line 19 - The five boxing wizards jump quickly.
Line 20 - Jackdaws love my big sphinx of quartz.
Line 21 - The quick brown fox jumps over the lazy dog.
Line 22 - Pack my box with five dozen liquor jugs.
Line 23 - How vexingly quick daft zebras jump.
Line 24 - The five boxing wizards jump quickly.
Line 25 - Jackdaws love my big sphinx of quartz.
Line 26 - The quick brown fox jumps over the lazy dog.
Line 27 - Pack my box with five dozen liquor jugs.
Line 28 - How vexingly quick daft zebras jump.
Line 29 - The five boxing wizards jump quickly.
Line 30 - Jackdaws love my big sphinx of quartz.
Line 31 - The quick brown fox jumps over the lazy dog.
Line 32 - Pack my box with five dozen liquor jugs.
Line 33 - How vexingly quick daft zebras jump.
Line 34 - The five boxing wizards jump quickly.
Line 35 - Jackdaws love my big sphinx of quartz.
Line 36 - The quick brown fox jumps over the lazy dog.
Line 37 - Pack my box with five dozen liquor jugs.
Line 38 - How vexingly quick daft zebras jump.
Line 39 - The five boxing wizards jump quickly.
Line 40 - Jackdaws love my big sphinx of quartz.
Line 41 - The quick brown fox jumps over the lazy dog.
Line 42 - Pack my box with five dozen liquor jugs.
Line 43 - How vexingly quick daft zebras jump.
Line 44 - The five boxing wizards jump quickly.
Line 45 - Jackdaws love my big sphinx of quartz.
Line 46 - The quick brown fox jumps over the lazy dog.
Line 47 - Pack my box with five dozen liquor jugs.
Line 48 - How vexingly quick daft zebras jump.
Line 49 - The five boxing wizards jump quickly.
Line 50 - Jackdaws love my big sphinx of quartz.
```

Start in Normal mode on the `L` in `Line 01`.

## End

The buffer text should be unchanged, and the cursor should finish on `Line 20` with that line positioned at the bottom of the window.

## Commands

Run these command steps:

```text
1. 25Gzt
2. zb
3. 10Gzz
4. 40Gzz
5. gg/Line 30<CR>zt
6. G?Line 20<CR>zb
```
