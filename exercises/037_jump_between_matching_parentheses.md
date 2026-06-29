# Kata: Jump Between Matching Parentheses

## Task

Practice using `%` to move between matching delimiters and as an operator motion.

## Start

Open a scratch buffer and insert:

```text
call([one, {two: 2}], three);
```

Start in Normal mode on the opening `(` in `call(`.

## End

The buffer should become:

```text
call(, three);
```

## Commands

Run these command steps:

```text
1. %
2. 0
3. f[
4. %
5. h
6. %
7. 0
8. f[
9. d%
```
