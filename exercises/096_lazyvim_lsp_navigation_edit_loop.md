# Kata: LazyVim LSP Definition Return

## Task

Practice jumping to a symbol definition with LazyVim LSP navigation, then returning to the use site.

## Start

From a TypeScript buffer with an LSP client attached, open:

```text
:vsplit practice_js_ts_filetypes.ts<CR>
:/kata176ComputeTotal(kata176Subtotal, kata176Tax)<CR>
```

Start in Normal mode on the `k` in `kata176ComputeTotal`.

## End

The current buffer should still be `practice_js_ts_filetypes.ts`, with the cursor returned to the original `kata176ComputeTotal` call.

## Commands

Run these command steps:

```text
1. :setlocal filetype=typescript<CR>
2. gd
3. <C-o>
```
