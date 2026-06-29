# Kata: Byte Offset Jump

## Task

Practice using `{count}go` to jump to an exact byte offset in an ASCII buffer.

## Start

Open a scratch buffer and insert:

```text
abc
def
ghi
jkl
```

Start in Normal mode on the `a` in `abc` on line 1.

## End

The buffer should remain:

```text
abc
def
ghi
jkl
```

The final cursor position should be on the `j` in `jkl` on line 4.

## Commands

Run these command steps:

```text
1. 5go
2. 10go
3. 13go
```
