# Kata: Walk the Undo Tree

## Task

Practice using `g-` and `g+` to move through chronological undo states after creating an undo branch.

## Start

Open a scratch buffer and insert:

```text
Line 1: original text
Line 2: original text
Line 3: original text
```

Start in Normal mode on the `L` in line 1.

## End

The buffer should become:

```text
Line 1: original text - CHANGE C
Line 2: original text
Line 3: original text
```

## Commands

Run these command steps:

```text
1. 1GA - CHANGE A<Esc>
2. 2GA - CHANGE B<Esc>
3. u
4. u
5. 1GA - CHANGE C<Esc>
6. g-
7. g-
8. g+
9. g+
```
