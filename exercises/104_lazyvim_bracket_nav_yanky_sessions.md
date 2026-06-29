# Kata: LazyVim TODO Bracket Navigation

## Task

Practice verified LazyVim TODO bracket navigation with `[t` and `]t`.

## Start

Open a scratch buffer and insert:

```text
-- TODO: first task
plain work line
another work line
-- TODO: final task
```

Start in Normal mode on the `T` in `TODO` on line 1.

## End

The buffer should become:

```text
-- TODO: first task
plain work line
another work line
-- TODO: final task
```

## Commands

Run these command steps:

```text
1. :verbose nmap ]t<CR>
2. :verbose nmap [t<CR>
3. ]t
4. :echo line('.')<CR>
5. [t
6. :echo line('.')<CR>
7. 2G
8. ]t
9. :echo line('.')<CR>
10. [t
11. :echo line('.')<CR>
```
