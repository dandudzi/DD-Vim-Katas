# Kata: Filter Buffer Text Through the Shell

## Task

Practice running shell commands from Vim, inserting shell output, and filtering
a line range through `sort`.

## Start

Open a scratch buffer and insert:

```text
name,team
Zoe,blue
Amy,amber
Ian,cyan
```

Start in Normal mode on the `n` of line 1.

## End

The buffer should become:

```text
name,team
Amy,amber
Zoe,blue
Ian,cyan
generated
```

## Commands

Run these command steps:

```text
1. :!printf shell-ready<CR>
2. G:read !printf generated<CR>
3. :2,4!sort -t, -k2,2<CR>
```
