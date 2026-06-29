# Kata: Adjust Fold Depth Incrementally

## Task

Practice raising and lowering visible fold depth with `zr` and `zm`.

## Start

Open a scratch buffer and insert:

```text
root {{{
  child one {{{
    leaf A
  }}}
  child two {{{
    leaf B
  }}}
}}}
```

Start in Normal mode on line 1, column 1.

## End

The fold level should finish at `1`, with the child folds closed and their headers visible.

## Commands

Run these command steps:

```text
1. :setlocal foldmethod=marker foldlevel=0<CR>
2. zr
3. zr
4. zm
5. :echo &foldlevel . ' ' . foldclosed(2) . ' ' . foldclosed(5)<CR>
```
