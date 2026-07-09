# Kata: Snap Between Files Using Global Marks

## Task

Practice setting uppercase global marks and jumping between exact positions in two files.

## Start

Create two scratch files for the kata. Put this text in `kata-mark-a.txt`:

```text
alpha one
alpha two
```

Put this text in `kata-mark-b.txt`:

```text
beta one
beta two
```

Start in Normal mode in `kata-mark-a.txt` on the `t` in `two`.

## End

The active file should be `kata-mark-a.txt`, and its buffer should become:

```text
alpha one
alpha two
```

The cursor should finish on the `t` in `two`.

## Commands

Run these command steps:

```text
1. mA
2. :edit kata-mark-b.txt<CR>
3. 0
4. 5l
5. mB
6. `A
7. `B
8. `A
```
