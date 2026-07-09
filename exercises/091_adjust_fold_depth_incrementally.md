# Kata: Adjust Fold Depth Incrementally

## Task

Practice raising and lowering visible fold depth with `zr` and `zm`.

## Start

Open an empty scratch buffer. Use `practice_167_fold_depth.txt`:

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

Start in Normal mode in the scratch buffer on line 1, column 1.

## End

The `:echo` command should print `1 2 5`. After closing the split, one window should remain showing the scratch buffer.

## Commands

Run these command steps:

```text
1. :split practice_167_fold_depth.txt<CR>
2. :setlocal foldmethod=marker foldlevel=0<CR>
3. zr
4. zr
5. zm
6. :echo &foldlevel . ' ' . foldclosed(2) . ' ' . foldclosed(5)<CR>
7. :close<CR>
```
