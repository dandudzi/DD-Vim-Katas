# Kata: Keyword Completion Cycling

## Task

Practice cycling built-in keyword completion and accepting a candidate.

## Start

Open a scratch buffer and insert:

```text
process product profile
pro
```

Start in Insert mode after `pro` on line 2.

## End

The buffer should become:

```text
process product profile
process
```

## Commands

Run these command steps:

```text
1. <C-x><C-n>
2. <C-n>
3. <C-p>
4. <C-y>
5. <Esc>
```
