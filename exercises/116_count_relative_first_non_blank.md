# Kata: Count-Relative First Non-Blank

## Task

Practice using `_` and counted `_` motions to land on the first non-blank character of the current line or a later line.

## Start

Open a scratch buffer and insert:

```text
alpha root
  beta branch
    gamma leaf
 delta trunk
    epsilon twig
```

Start in Normal mode on the `e` in `beta` on line 2.

## End

The buffer should remain:

```text
alpha root
  beta branch
    gamma leaf
 delta trunk
    epsilon twig
```

The final cursor position should be on the `e` in `epsilon` on line 5.

## Commands

Run these command steps:

```text
1. _
2. 3_
3. 2_
```
