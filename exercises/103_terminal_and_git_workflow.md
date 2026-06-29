# Kata: Terminal Mode Escape

## Task

Practice entering a terminal buffer, leaving Terminal mode, and returning to the original scratch buffer.

## Start

Open a scratch buffer and insert:

```text
terminal return point
```

Start in Normal mode on the `t` in `terminal`.

## End

The buffer should become:

```text
terminal return point
```

## Commands

Run these command steps:

```text
1. :terminal<CR>
2. printf 'terminal-ready\n'<CR>
3. <C-\><C-n>
4. :echo mode()<CR>
5. iexit<CR>
6. <C-\><C-n>
7. <C-^>
8. :echo getline(1)<CR>
```
