# Kata: Navigate Between Folds

## Task

Practice moving between closed folds with `zj` and `zk`.

## Start

Open a scratch buffer and insert:

```text
one {{{
  alpha
}}}
two {{{
  beta
}}}
three {{{
  gamma
}}}
```

Start in Normal mode on line 1, column 1.

## End

The cursor should finish on line 6, the closing marker of the second fold, and the folds should remain closed.

## Commands

Run these command steps:

```text
1. :setlocal foldmethod=marker foldlevel=0<CR>
2. zj
3. zj
4. zk
5. :echo line('.') . ' ' . getline('.')<CR>
```
