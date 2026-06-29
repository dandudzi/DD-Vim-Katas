# Kata: Preserve a Yank While Deleting

## Task

Practice preserving a yanked word while deleting other text by using register `0` and the black-hole register.

## Start

Open a scratch buffer and insert:

```text
alpha source
result: wrongName
discard this line
```

Start in Normal mode on the `a` in `alpha` on line 1.

## End

The buffer should become:

```text
alpha source
result: alpha alpha
```

## Commands

Run these command steps:

```text
1. yiw
2. jw"_ciw<C-r>0<Esc>
3. j"_dd
4. A<Space><Esc>p
```
