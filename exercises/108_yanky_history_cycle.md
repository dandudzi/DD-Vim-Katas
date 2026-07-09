# Kata: Yanky History Cycle

## Task

Practice cycling the just-pasted text through Yanky history.

## Start

Open a scratch buffer in Neovim with LazyVim and Yanky, then insert:

```text
first yank
second yank
paste below
```

Start in Normal mode on the `f` in `first`.

## End

The buffer should become:

```text
first yank
second yank
paste below
first yank
```

## Commands

Run these command steps:

```text
1. yy
2. jyy
3. Gp
4. [y
```
