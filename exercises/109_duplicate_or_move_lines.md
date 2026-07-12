# Kata: Duplicate and Move a Line

## Task

Practice duplicating a line with native operators and moving it with a LazyVim mapping.

## Start

Open a scratch buffer and insert:

```text
alpha
beta
gamma
```

Start in Normal mode on the `b` in line 2.

## End

The buffer should become:

```text
alpha
beta
gamma
beta
```

## Commands

Run these command steps:

```text
1. yyp
2. <A-j>
```

