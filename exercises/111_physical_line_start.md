# Kata: Return to Physical Line Start

## Task

Practice jumping to the physical start of a line with `0`, including indented lines.

## Start

Open a scratch buffer and insert:

```text
alpha start
    beta branch
  gamma leaf
```

Start in Normal mode on the `b` in `beta` on line 2.

## End

The buffer should become:

```text
alpha start
    beta branch
  gamma leaf
```

## Commands

Run these command steps:

```text
1. 0
2. :echo line('.') . ',' . col('.')<CR>
3. $
4. 0
5. :echo line('.') . ',' . col('.')<CR>
6. j
7. 0
8. :echo line('.') . ',' . col('.')<CR>
```
