# Kata: Noice Message History

## Task

Practice opening Noice message history after creating two messages.

## Start

Open a scratch buffer in Neovim with LazyVim and Noice, then insert:

```text
noice buffer stays unchanged
```

Start in Normal mode on the `n` in `noice`.

## End

The buffer should stay unchanged, and the Noice history should show both kata messages.

## Commands

Run these command steps:

```text
1. :echo 'kata-199-one'<CR>
2. :echo 'kata-199-two'<CR>
3. <leader>snh
4. q
```
