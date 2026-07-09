# Kata: Count with Insert and Open

## Task

Practice using counts before insert and open commands to repeat inserted text or blank lines.

## Start

Open a scratch buffer and insert:

```text
alpha
omega
```

Start in Normal mode on line 1, column 1.

## End

The buffer should become:

```text
=====alpha



omega
status: todo
status: todo
```

## Commands

Run these command steps:

```text
1. 5i=<Esc>
2. j3O<Esc>
3. /omega<CR>
4. 2ostatus: todo<Esc>
```
