# Kata: Append at End of Line

## Task

Practice using `A` to append at the end of a line, then repeat the same append with `.` on later lines.

## Start

Open a scratch buffer and insert:

```text
const foo = 1
const bar = "a"
const ready = true;
const total = foo + bar
```

Start in Normal mode on the `c` in `const foo = 1`.

## End

The buffer should become:

```text
const foo = 1;
const bar = "a";
const ready = true;
const total = foo + bar;
```

## Commands

Run these command steps:

```text
1. A;<Esc>
2. j.
3. jj.
```
