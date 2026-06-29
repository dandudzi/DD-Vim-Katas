# Kata: Run a Command on Visible Fold Lines

## Task

Practice using `:folddoopen` to run one Ex command only on lines that are not
inside closed folds.

## Start

Open a scratch buffer and insert:

```text
section visible_a start
end
section hidden start
end
section hidden finish
section visible_b start
end
section open start
end
section open finish
```

Start in Normal mode on line 1, column 1. The fold covering lines 3 through 5
should be closed, and the fold covering lines 8 through 10 should be open.

## End

The buffer should become:

```text
section visible_a start
loop_end
section hidden start
end
section hidden finish
section visible_b start
loop_end
section open start
end
section open finish
```

The folds starting on lines 3 and 8 should both be closed.

## Commands

Run these command steps:

```text
1. :setlocal foldmethod=manual foldenable foldlevel=99<CR>
2. :3,5fold<CR>
3. :8,10fold<CR>
4. :3foldclose<CR>
5. :8foldopen<CR>
6. :1,7folddoopen s/end/loop_end/ge<CR>
7. u
8. :8foldclose<CR>
9. :folddoopen s/end/loop_end/ge<CR>
```
