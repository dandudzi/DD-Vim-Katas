# Kata: Append After Ragged Visual Blocks

## Task

Practice using blockwise `$` with `A` to append at the true end of lines with
different lengths.

## Start

Open a scratch buffer and insert:

```text
let x = 1
let longerName = "a"
let total = x + longerName
```

Start in Normal mode on the `l` of line 1.

## End

The buffer should become:

```text
let x = 1;
let longerName = "a";
let total = x + longerName;
```

## Commands

Run these command steps:

```text
1. <C-v>jj$A;<Esc>
```
