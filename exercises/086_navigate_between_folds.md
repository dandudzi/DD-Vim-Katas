# Kata: Navigate Between Folds

## Task

Practice creating closed folds and moving between them with `zj` and `zk`.

## Start

Open a scratch buffer with manual folding active and insert:

```text
one
  alpha
two
  beta
three
  gamma
```

Start in Normal mode on line 1, column 1.

## End

The text should remain unchanged, and the cursor should finish at the start of the second fold.

## Commands

Run these command steps:

```text
1. zf2j
2. jzf2j
3. zM
4. gg
5. zj
6. zk
7. zj
```
