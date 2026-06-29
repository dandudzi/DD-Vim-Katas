# Kata: Walk Deletion History

## Task

Practice restoring whole-line deletions from numbered registers after several `dd` commands.

## Start

Open a scratch buffer and insert:

```text
red
blue
green
yellow
```

Start in Normal mode on the `r` in `red` at line 1, column 1.

## End

The buffer should become:

```text
red
blue
green
yellow
```

Register `1` should contain `yellow`, register `2` should contain `green`, and register `3` should contain `red`.

## Commands

Run these command steps:

```text
1. dd
2. jdd
3. dd
4. gg"3P
5. j"2p
6. "1p
```
