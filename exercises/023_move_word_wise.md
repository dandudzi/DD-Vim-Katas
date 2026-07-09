# Kata: Move Precisely by Words

## Task

Practice `w`, `e`, `ge`, and counts to land on word starts and word ends across punctuation.

## Start

Open a scratch buffer and insert:

```text
one,two  three-four five
```

Start in Normal mode on the `o` in `one`.

## End

The buffer should become:

```text
one,two  three-four five
```

The cursor should finish on the `f` in `five`.

## Commands

Run these command steps:

```text
1. 2w
2. 0
3. 3e
4. $
5. ge
6. 0
7. 6w
```
