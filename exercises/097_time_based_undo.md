# Kata: Undo and Redo Deterministically

## Task

Practice stepping backward and forward through undo history with native keys.

## Start

Open a scratch buffer and insert:

```text
status:
```

Start in Normal mode on the `s` in line 1.

## End

The buffer should become:

```text
status: reviewed
```

## Commands

Run these command steps:

```text
1. A reviewed<Esc>
2. A approved<Esc>
3. u
4. u
5. <C-r>
```

