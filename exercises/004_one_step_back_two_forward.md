# Kata: Repeat a Change at the Next Match

## Task

Practice using `f`, `;`, `cl`, and `.` to replace each plus sign with a spaced operator.

## Start

Open a scratch buffer and insert:

```text
const result = "method("+argument1+","+argument2+")";
```

Start in Normal mode on the `c` in `const`.

## End

The buffer should become:

```text
const result = "method(" + argument1 + "," + argument2 + ")";
```

## Commands

Run these command steps:

```text
1. f+cl + <Esc>
2. ;.
3. ;.
4. ;.
```
