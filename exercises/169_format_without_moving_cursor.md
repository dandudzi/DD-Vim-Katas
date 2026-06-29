# Kata: Format Without Moving the Cursor

## Task

Practice reflowing a paragraph with `gw` while keeping the cursor on the same text.

## Start

Open a scratch buffer and insert:

```text
This paragraph carries ANCHOR midstream so formatting can reflow without moving the cursor away from the anchor word.
```

Start in Normal mode on the `A` in `ANCHOR`.

## End

The buffer should become:

```text
This paragraph carries ANCHOR
midstream so formatting can
reflow without moving the cursor
away from the anchor word.
```

The cursor should still be on `ANCHOR`.

## Commands

Run these command steps:

```text
1. :setlocal textwidth=32<CR>
2. gwap
3. :echo line('.') . ',' . col('.') . ' ' . expand('<cword>')<CR>
```
