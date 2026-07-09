# Kata: Search Help into a Location List

## Task

Practice searching help into the current window's location list with `:lhelpgrep`, then navigate those matches with LazyVim keys.

## Start

Open a scratch buffer and insert:

```text
scratch
```

Start in Normal mode on the `s` in `scratch` at line 1, column 1.

## End

The current buffer should be a help buffer on a line containing `quickfix`, and the current window's location list should contain help matches.

## Commands

Run these command steps:

```text
1. :lhelpgrep quickfix<CR>
2. <leader>xl
3. <CR>
4. ]q
```
