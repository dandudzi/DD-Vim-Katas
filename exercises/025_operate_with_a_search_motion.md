# Kata: Operate With a Search Motion

## Task

Practice using a forward search as the motion for a change operator.

## Start

Open a scratch buffer and insert:

```text
This phrase takes time but
eventually gets to the point.
```

Start in Normal mode on the `t` in `takes`.

## End

The buffer should become:

```text
This phrase finally gets to the point.
```

## Commands

Run these command steps:

```text
1. c/gets<CR>finally <Esc>
```
