# Kata: Navigate Between Folds

## Task

Practice moving between closed folds with `zj` and `zk`.

## Start

Open an empty scratch buffer. Use `practice_166_folds.txt`:

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

Start in Normal mode in the scratch buffer on line 1, column 1.

## End

The `:echo` command should print `6 }}}`. After closing the split, one window should remain showing the scratch buffer.

## Commands

Run these command steps:

```text
1. :split practice_166_folds.txt<CR>
2. :setlocal foldmethod=marker foldlevel=0<CR>
3. zj
4. zj
5. zk
6. :echo line('.') . ' ' . getline('.')<CR>
7. :close<CR>
```
