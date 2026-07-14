# Kata: Edit the Contents of a Macro

## Task

Practice putting a macro register into the buffer, editing it as text, and yanking it back.

## Start

Open a scratch buffer and insert:

```text
1. One
2. Two
3. three
4. four
```

Record `qa0f.r)w~jq`, then start in Normal mode on line 1, column 1.

## End

The original four lines should remain, and register `a` should contain `0f.r)wvUj`.

## Commands

Run these command steps:

```text
1. Go<Esc>
2. "ap
3. 0f~clvU<Esc>
4. $x
5. 0"ay$
6. dd
```

