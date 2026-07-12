# Kata: Exact Screen Column

## Task

Practice using `{count}|` to jump to a requested screen column on the current line.

## Start

Open a scratch buffer and insert:

```text
12345678901234567890
short
abcdefghijklmnop
```

Start in Normal mode on the first `1` of line 1.

## End

The buffer should remain:

```text
12345678901234567890
short
abcdefghijklmnop
```

The final cursor position should be on the `t` in `short` on line 2 because `12|` clamps to the end of that short line.

## Commands

Run these command steps:

```text
1. 7|
2. j12|
3. k10|
4. j12|
```
