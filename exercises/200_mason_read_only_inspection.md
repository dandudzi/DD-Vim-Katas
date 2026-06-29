# Kata: Mason Read-Only Inspection

## Task

Practice opening Mason and inspecting package status without installing, uninstalling, or updating anything.

## Start

Open a scratch buffer in Neovim with LazyVim and Mason, then insert:

```text
mason inspection only
```

Start in Normal mode on the `m` in `mason`.

## End

The buffer should become:

```text
mason inspection only
```

## Commands

Run these command steps:

```text
1. :verbose nmap <Space>cm<CR>
2. <Space>cm
3. g?
4. q
5. :echo getline(1)<CR>
```
