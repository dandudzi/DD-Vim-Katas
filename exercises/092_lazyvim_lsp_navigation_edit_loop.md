# Kata: Same-File Definition Return

## Task

Practice a same-file `gd` definition jump, then return to the use site with `<C-o>`.

## Start

Use the prepared TypeScript fixture:

```text
practice_js_ts_filetypes.ts
```

Start in Normal mode on the `p` in `practice_js_ts_filetypes.ts`.

## End

Before closing the split, the cursor should be back on the original `kata176ComputeTotal` call. The split should be closed.

## Commands

Run these command steps:

```text
1. <leader>|
2. gf
3. /kata176ComputeTotal(kata176Subtotal, kata176Tax)<CR>
4. gd
5. <C-o>
6. <leader>wd
```
