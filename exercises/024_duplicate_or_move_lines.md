# Kata: Copy and Move Lines with Ex

## Task

Practice using `:copy`, `:t`, and `:move` to reorganize lines by Ex address.

## Start

Open a scratch buffer and insert:

```text
Shopping list
Hardware store
Buy nails
Beauty parlor
Buy remover
Done
```

Start in Normal mode on the `H` of line 2.

## End

The buffer should become:

```text
Shopping list
Hardware store
Hardware store
Buy nails
Buy nails
Done
Beauty parlor
Buy remover
```

## Commands

Run these command steps:

```text
1. :3copy2<CR>
2. :2t2<CR>
3. :6,7move$<CR>
```
