# Kata: First Non-Blank Character

## Task

Practice using `^` to jump from indentation or line end to the first non-blank character on the current line.

## Start

Open a scratch buffer and insert:

```text
alpha start
    beta branch
  gamma leaf
```

Start in Normal mode on the second leading space before `beta` on line 2.

## End

The buffer should remain:

```text
alpha start
    beta branch
  gamma leaf
```

The final cursor position should be on the `g` in `gamma` on line 3.

## Commands

Run these command steps:

```text
1. ^
2. j^
3. k$^
4. k^j^j^
```
