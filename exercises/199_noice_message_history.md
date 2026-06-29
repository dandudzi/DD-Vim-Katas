# Kata: Noice Message History

## Task

Practice opening Noice message history, checking the last message, and dismissing notifications.

## Start

Open a scratch buffer in Neovim with LazyVim and Noice, then insert:

```text
noice buffer stays unchanged
```

Start in Normal mode on the `n` in `noice`.

## End

The buffer should become:

```text
noice buffer stays unchanged
```

## Commands

Run these command steps:

```text
1. :verbose nmap <Space>sna<CR>
2. :verbose nmap <Space>snl<CR>
3. :verbose nmap <Space>snd<CR>
4. :echo 'kata-199-one'<CR>
5. :echo 'kata-199-two'<CR>
6. <Space>sna
7. q
8. <Space>snl
9. q
10. <Space>snd
11. :echo getline(1)<CR>
```
