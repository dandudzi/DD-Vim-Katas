# Kata: Build and Navigate a Split Layout

## Task

Practice creating, navigating, resizing, and closing split windows with
`<C-w>` commands.

## Start

Open a scratch buffer and insert:

```text
split practice
```

Start in Normal mode on the `s` of line 1 with one window open.

## End

Only one window should remain, and the buffer should still contain:

```text
split practice
```

## Commands

Run these command steps:

```text
1. :set splitright nosplitbelow<CR>
2. <C-w>v
3. <C-w>s
4. <C-w>h
5. <C-w>l
6. <C-w>j
7. <C-w>=
8. 8<C-w>_
9. <C-w>o
```
