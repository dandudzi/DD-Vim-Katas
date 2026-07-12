# Kata: Indent to the End of the File

## Task

Practice shifting line ranges one level to the right with `>`, a count, and a
motion.

## Start

Open a scratch buffer with two-space indentation active and insert:

```text
const root = true;
const alpha = 1;
const beta = 2;
const gamma = 3;
const omega = 4;
```

Start in Normal mode on the `c` of line 2.

## End

The buffer should become:

```text
const root = true;
  const alpha = 1;
  const beta = 2;
  const gamma = 3;
  const omega = 4;
```

## Commands

Run these command steps:

```text
1. >j
2. u
3. 3>>
4. u
5. >G
```
