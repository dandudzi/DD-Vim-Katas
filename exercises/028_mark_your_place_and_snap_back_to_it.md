# Kata: Mark Your Place and Snap Back to It

## Task

Practice setting a local mark, returning to it exactly, and using built-in marks for a Visual selection.

## Start

Open a scratch buffer and insert:

```text
alpha one
beta two
gamma three
delta four
epsilon five
```

Start in Normal mode on the `t` in `two`.

## End

The buffer should become:

```text
alpha one
beta two
gamma three
delta four
epsilon five
```

The cursor should finish on the `r` in `four`.

## Commands

Run these command steps:

```text
1. ma
2. G
3. `a
4. j0
5. vj9l<Esc>
6. gg
7. `>
```
