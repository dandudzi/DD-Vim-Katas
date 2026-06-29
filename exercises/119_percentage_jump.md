# Kata: Percentage Jump

## Task

Practice using `{count}%` to jump to an approximate percentage position in the current buffer.

## Start

Open a scratch buffer and insert:

```text
01 anchor
02 branch
03 canopy
04 drift
05 ember
06 field
07 grove
08 harbor
09 island
10 junction
11 knoll
12 lantern
```

Start in Normal mode on the `a` in `anchor` on line 1.

## End

The buffer should remain:

```text
01 anchor
02 branch
03 canopy
04 drift
05 ember
06 field
07 grove
08 harbor
09 island
10 junction
11 knoll
12 lantern
```

The final cursor position should be on line 9 at `09 island`.

## Commands

Run these command steps:

```text
1. 25%
2. 50%
3. 75%
```
