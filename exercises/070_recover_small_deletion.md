# Kata: Recover Small Deletion

## Task

Practice restoring the latest characterwise deletion from the small-delete register `"-` after another delete.

## Start

Open a scratch buffer and insert:

```text
alpha seed
keep beta gamma
drop this line
```

Start in Normal mode on the `a` in `alpha` at line 1, column 1.

## End

The buffer should become:

```text
alpha seed
keep beta gamma
```

Register `0` should still contain `alpha`, register `"-` should contain `beta`, and register `1` should contain `drop this line`.

## Commands

Run these command steps:

```text
1. yiw
2. j5l
3. diw
4. jdd
5. "-P
```
