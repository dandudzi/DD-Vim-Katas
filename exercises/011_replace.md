# Kata: Replace Characters in Place

## Task

Practice using `r` with a count for fixed replacement and `R` for continuous overwrite.

## Start

Open a scratch buffer and insert:

```text
cat XXXXX
draft title
version 1234
```

Start in Normal mode on the `c` in `cat XXXXX`.

## End

The buffer should become:

```text
bat -----
final title
version 1234
```

## Commands

Run these command steps:

```text
1. rb
2. w5r-
3. j0Rfinal<Esc>
```
