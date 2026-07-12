# Kata: Adjust Fold Depth Incrementally

## Task

Practice raising and lowering visible fold depth with `zr` and `zm`.

## Start

Open a scratch buffer with one outer manual fold containing two nested manual folds and insert:

```text
root
  child one
    leaf A
  child two
    leaf B
tail
```

Start in Normal mode on line 1, column 1.

## End

The text should remain unchanged, with the outer fold open and nested folds closed.

## Commands

Run these command steps:

```text
1. zM
2. zr
3. zr
4. zm
```
