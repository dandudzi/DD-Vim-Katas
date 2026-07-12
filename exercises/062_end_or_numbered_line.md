# Kata: End Or Numbered Line

## Task

Practice using `G` to jump to the last line and `{count}G` to jump to an exact line number.

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

Start in Normal mode on the `1` on line 1, column 3.

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

The final cursor position should be on the `a` on line 3, column 1.

## Commands

Run these command steps:

```text
1. G
2. 3G
3. 5G
4. G3G
```
