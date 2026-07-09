# Kata: Delete, Yank, and Put with the Unnamed Register

## Task

Practice how deleting or yanking text fills the unnamed register, then put that text back to transpose nearby text.

## Start

Open a scratch buffer and insert:

```text
Practical vim
2) two
1) one
3) three
```

Start in Normal mode on the `l` in `Practical` on line 1.

## End

The buffer should become:

```text
Practica lvim
1) one
2) two
3) three
```

## Commands

Run these command steps:

```text
1. xp
2. jddp
```
