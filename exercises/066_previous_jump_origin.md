# Kata: Previous Jump Origin

## Task

Practice returning to the origin of the latest jump with exact and linewise previous-context motions.

## Start

Open a scratch buffer and insert:

```text
alpha lead
    origin marker here
plain middle
target arrives now
omega tail
```

Start in Normal mode on the `m` in `marker` on line 2, column 12.

## End

The buffer should remain:

```text
alpha lead
    origin marker here
plain middle
target arrives now
omega tail
```

The final cursor position should be on the `t` in `target` at line 4, column 1.

## Commands

Run these command steps:

```text
1. /target<CR>
2. ````
3. ````
4. ''
5. ''
```
