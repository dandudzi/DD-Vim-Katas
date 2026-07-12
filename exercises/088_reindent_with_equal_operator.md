# Kata: Reindent with the Equal Operator

## Task

Practice reindenting an existing C file with the `=` operator.

## Start

Open a scratch buffer and insert:

```text
practice_168_reindent.c
```

Start in Normal mode on the `p` in line 1.

## End

The C file should display consistently indented nested blocks, and its split should be closed.

## Commands

Run these command steps:

```text
1. <leader>|
2. gf
3. gg=G
4. <leader>wd
```

