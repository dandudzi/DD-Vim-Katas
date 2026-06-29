# Kata: Insert at First Non-Blank

## Task

Practice using `I` to insert before the first non-blank character while preserving indentation.

## Start

Open a scratch buffer and insert:

```text
foo = 1;
  bar = "a";
    total = foo + bar;
```

Start in Normal mode on the `f` in `foo = 1;`.

## End

The buffer should become:

```text
let foo = 1;
  let bar = "a";
    let total = foo + bar;
```

## Commands

Run these command steps:

```text
1. Ilet <Esc>
2. j.
3. j.
```
