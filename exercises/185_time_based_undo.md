# Kata: Time-Based Undo

## Task

Practice using `:earlier` and `:later` to move through undo history by elapsed time.

## Start

Open a scratch buffer and insert:

```text
status:
```

Start in Normal mode on the `s` in `status`.

## End

The buffer should become:

```text
status: reviewed
```

## Commands

Run these command steps:

```text
1. A reviewed<Esc>
2. :sleep 2<CR>
3. A approved<Esc>
4. :earlier 1s<CR>
5. :later 1s<CR>
6. u
```
