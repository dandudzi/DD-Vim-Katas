# Kata: Save a File with Ctrl-S

## Task

Practice saving a change to a prepared file with LazyVim's `<C-s>` mapping.

## Start

Open a scratch buffer and insert:

```text
practice_124_ctrl_s.txt
```

Start in Normal mode on the `p` in line 1.

## End

The practice split should be closed, and `practice_124_ctrl_s.txt` should
contain:

```text
saved with Ctrl-S
```

## Commands

Run these command steps:

```text
1. <leader>| (LazyVim: Split Window Right)
2. gf
3. ccsaved with Ctrl-S<Esc>
4. <C-s>
5. <leader>wd (LazyVim: Delete Window)
```
