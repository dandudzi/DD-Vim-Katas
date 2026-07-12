# Kata: Folding Basics

## Task

Practice creating manual folds, then opening, closing, toggling, and restoring them.

## Start

Open a scratch buffer with manual folding active and insert:

```text
Alpha
  plan
  build

Beta
  test
  ship
```

Start in Normal mode on the `A` in line 1.

## End

The text should remain unchanged, with all folds open.

## Commands

Run these command steps:

```text
1. zfap
2. /Beta<CR>
3. zfap
4. zo
5. zc
6. za
7. zM
8. zR
```

