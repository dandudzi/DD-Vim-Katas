# Kata: Traverse Quickfix History

## Task

Practice using `:colder` and `:cnewer` to move through quickfix history, then
use LazyVim keys to inspect and navigate the active quickfix list.

## Start

Open `practice_151_alpha.txt`:

```text
TODO alpha
NOTE alpha
plain alpha
FIXME alpha
```

Start in Normal mode on the `T` in `TODO alpha` at line 1, column 1.

## End

The visible quickfix list should contain the two `NOTE` matches. The current
buffer should be `practice_151_beta.txt` on line 3.

## Commands

Run these command steps:

```text
1. :edit practice_151_alpha.txt<CR>
2. :vimgrep /TODO/gj practice_151_alpha.txt practice_151_beta.txt<CR>
3. :vimgrep /NOTE/gj practice_151_alpha.txt practice_151_beta.txt<CR>
4. :vimgrep /FIXME/gj practice_151_alpha.txt practice_151_beta.txt<CR>
5. <leader>xq
6. :colder 2<CR>
7. :cnewer<CR>
8. ]q
```
