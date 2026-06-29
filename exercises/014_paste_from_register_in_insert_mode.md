# Kata: Insert a Register in Insert Mode

## Task

Practice yanking text into register `0` and inserting it with `<C-r>0` while in
Insert mode.

## Start

Open a scratch buffer and insert:

```text
Practical Vim, by Drew Neil
Read Drew Neil's
Title:
```

Start in Normal mode on the `P` of `Practical`.

## End

The buffer should become:

```text
Practical Vim, by Drew Neil
Read Drew Neil's Practical Vim.
Title: Practical Vim
```

## Commands

Run these command steps:

```text
1. yt,
2. jA <C-r>0.<Esc>
3. jA <C-r>0<Esc>
```
