# Kata: Global Declaration Jump

## Task

Practice `gD` to jump from a symbol use to its global declaration in the same buffer.

## Start

Use the prepared TypeScript fixture, which already has its TypeScript filetype configured:

```text
practice_js_ts_filetypes.ts
```

Start in Normal mode on the `p` in `practice_js_ts_filetypes.ts`.

## End

Before closing the split, the cursor should be on the `k` in the global `kata190Output` declaration. The split should be closed.

## Commands

Run these command steps:

```text
1. <leader>|
2. gf
3. /return kata190Output;<CR>
4. w
5. gD
6. <leader>wd
```
