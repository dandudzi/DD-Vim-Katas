# Kata: Recover Small Deletion

## Task

Practice restoring the latest characterwise deletion from the small-delete register `"-` after another delete.

## Start

Open a scratch buffer and insert:

```text
keep beta gamma
drop this line
alpha seed
```

Start in Normal mode on the `b` in `beta` at line 1, column 6.

## End

The buffer should become:

```text
keep beta gamma
alpha seed
```

Register `0` should still contain `alpha`, register `"-` should contain `beta `, and register `1` should contain `drop this line`.

## Commands

Run these command steps:

```text
1. 3G0yiw
2. 1G6|
3. dw
4. jdd
5. 1G6|
6. "-P
```
