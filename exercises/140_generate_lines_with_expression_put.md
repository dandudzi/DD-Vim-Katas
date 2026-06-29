# Kata: Generate Lines with Expression Put

## Task

Practice generating multiple lines from a Vimscript expression with `:put =...`.

## Start

Open a scratch buffer and insert:

```text
HEADER
ANCHOR
FOOTER
```

Start in Normal mode on the `H` in `HEADER` at line 1, column 1.

## End

The buffer should become:

```text
HEADER
ANCHOR
100
110
120
130
140
FOOTER
```

## Commands

Run these command steps:

```text
1. :2put =range(100, 140, 10)<CR>
```
