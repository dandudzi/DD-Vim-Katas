# Kata: Evaluate an Iterator to Number a List

## Task

Practice using the expression register inside a macro to insert and increment a line number.

## Start

Open a scratch buffer and insert:

```text
partridge in a pear tree
turtle doves
French hens
calling birds
golden rings
```

Start in Normal mode on the `p` in `partridge` on line 1.

## End

The buffer should become:

```text
1) partridge in a pear tree
2) turtle doves
3) French hens
4) calling birds
5) golden rings
```

## Commands

Run these command steps:

```text
1. :let i=1 | let @a=''<CR>
2. qaI<C-r>=i<CR>) <Esc>:let i += 1<CR>jq
3. 4@a
```
