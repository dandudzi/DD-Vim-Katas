# Kata: Start Or Numbered Line

## Task

Practice using `gg` to jump to line 1 and `{count}gg` to jump to an exact line number.

## Start

Open a scratch buffer and insert:

```text
ab1xy
ab2xy
ab3xy
ab4xy
ab5xy
ab6xy
```

Start in Normal mode on the `5` on line 5, column 3.

## End

The buffer should remain:

```text
ab1xy
ab2xy
ab3xy
ab4xy
ab5xy
ab6xy
```

The final cursor position should be on the `a` on line 6, column 1.

## Commands

Run these command steps:

```text
1. gg
2. 4gg
3. 6gg
```
