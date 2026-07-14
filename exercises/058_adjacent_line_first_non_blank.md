# Kata: Adjacent Line First Non-Blank

## Task

Practice using `+` and `-` to move to a nearby line and land on that line's first non-blank character.

## Start

Open a scratch buffer and insert:

```text
alpha root
  beta branch
    gamma leaf
```

Start in Normal mode on the `t` in `beta` on line 2.

## End

The buffer should remain:

```text
alpha root
  beta branch
    gamma leaf
```

The final cursor position should be on the `g` in `gamma` on line 3.

## Commands

Run these command steps:

```text
1. +
2. -
3. -
4. 2+
```
