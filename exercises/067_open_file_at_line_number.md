# Kata: Open File at Line Number

## Task

Practice using `gF` to open the file under the cursor and jump to the line number after it.

## Start

Open a scratch buffer and insert:

```text
practice_135_line_target.txt:3
```

Start in Normal mode on the `p` in `practice_135_line_target.txt:3` at line 1, column 1.

## End

The current buffer should be `practice_135_line_target.txt`, with the cursor on the `s` in `ship kata fix` at line 3, column 1.

`practice_135_line_target.txt` should remain unchanged:

```text
collect notes
review line jump
ship kata fix
```

## Commands

Run these command steps:

```text
1. gF
```
