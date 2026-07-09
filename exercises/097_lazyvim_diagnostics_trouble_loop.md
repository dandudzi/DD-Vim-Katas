# Kata: Diagnostic Float and Next Diagnostic

## Task

Practice opening a diagnostic float and jumping to the next diagnostic in the same buffer.

## Start

Open a scratch buffer and insert:

```text
ERROR alpha
WARN beta
ERROR gamma
```

Start in Normal mode on the `E` in `ERROR alpha`.

## End

The cursor should be on the `W` in `WARN beta`, and the buffer should stay unchanged.

## Commands

Run these command steps:

```text
1. :lua local ns=vim.api.nvim_create_namespace('kata_177'); vim.diagnostic.set(ns, 0, {{lnum=0,col=0,severity=vim.diagnostic.severity.ERROR,message='fix alpha'}, {lnum=1,col=0,severity=vim.diagnostic.severity.WARN,message='review beta'}})<CR>
2. :lua vim.diagnostic.open_float()<CR>
3. :lua vim.diagnostic.goto_next()<CR>
4. :lua vim.diagnostic.open_float()<CR>
```
