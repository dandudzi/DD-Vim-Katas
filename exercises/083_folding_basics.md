# Kata: Folding Basics

## Task

Practice manual folds by creating two folds, then opening, closing, toggling, and restoring them.

## Start

Open a scratch buffer and insert:

```text
Alpha
  plan
  build

Beta
  test
  ship
```

Start in Normal mode on the `A` in `Alpha`.

## End

The buffer text should be unchanged, with all manual folds open.

```text
Alpha
  plan
  build

Beta
  test
  ship
```

## Commands

```text
1. :setlocal foldmethod=manual<CR>
2. zfap
3. /Beta<CR>
4. zfap
5. zozczazMzR
```
