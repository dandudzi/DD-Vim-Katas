# Kata: Repeat a Line Macro on Contiguous Lines

## Task

Practice recording a per-line macro and replaying it with a count across neighboring lines.

## Start

Open a scratch buffer and insert:

```text
1. one
2. two
3. three
```

Start in Normal mode on the `1` on line 1.

## End

The buffer should become:

```text
1) One
2) Two
3) Three
```

## Commands

Run these command steps:

```text
1. :let @a=''<CR>
2. qa0f.r)w~jq
3. 2@a
```
