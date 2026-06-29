# Kata: Undo, Redo, and Branch

## Task

Practice using `u` and `<C-r>` to undo, redo, and then make a new change after undoing.

## Start

Open a scratch buffer and insert:

```text
alpha
beta
gamma
```

Start in Normal mode on the `a` in `alpha`.

## End

The buffer should become:

```text
alpha!
beta
gamma#
```

## Commands

Run these command steps:

```text
1. A!<Esc>
2. jA?<Esc>
3. uu
4. <C-r>
5. GA#<Esc>
```
