# Kata: Search Help into a Location List

## Task

Practice searching help into the current window's location list with `:lhelpgrep` while leaving the global quickfix list alone.

## Start

Open a scratch buffer and insert:

```text
scratch
```

Start in Normal mode on the `s` in `scratch` at line 1, column 1.

## End

The current buffer should be a help buffer on a line containing `quickfix`. The current window's location list should contain help matches, and the global quickfix list title should still be `kata-159 global`.

## Commands

Run these command steps:

```text
1. :call setqflist([], 'r', {'title': 'kata-159 global', 'items': [{'filename': 'keep.txt', 'lnum': 1, 'col': 1, 'text': 'keep quickfix unchanged'}]})<CR>
2. :lhelpgrep quickfix<CR>
3. :lopen<CR>
4. <CR>
5. :lnext<CR>
6. :lnext<CR>
```
