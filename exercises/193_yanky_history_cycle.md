# Kata: Yanky History Cycle

## Task

Practice cycling a pasted value through Yanky history after verifying the mappings.

## Start

Open a scratch buffer in Neovim with LazyVim and Yanky, then insert:

```text
first yank
second yank
paste below
```

Start in Normal mode on the `f` in `first`.

## End

The buffer should become:

```text
first yank
second yank
paste below
second yank
```

## Commands

Run these command steps:

```text
1. :verbose nmap [y<CR>
2. :verbose nmap ]y<CR>
3. :verbose nmap <leader>p<CR>
4. yy
5. jyy
6. Gp
7. [y
8. :echo getline('.')<CR>
9. ]y
10. :echo getline('.')<CR>
11. <leader>p<Esc>
```
