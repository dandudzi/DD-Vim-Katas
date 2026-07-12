# Kata: Jump Between Quickfix Files

## Task

Practice navigating prepared quickfix entries across several files with LazyVim mappings.

## Start

Open `practice_153_alpha.txt` with a prepared quickfix list containing every `TODO` in `practice_153_alpha.txt`, `practice_153_beta.txt`, and `practice_153_gamma.txt`.

Start in Normal mode on the first quickfix entry.

## End

The quickfix list should be visible, and the current buffer should be `practice_153_gamma.txt` on its first `TODO`.

## Commands

Run these command steps:

```text
1. <leader>xq
2. ]q
3. ]q
4. ]q
5. ]q
```

