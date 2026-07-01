# Kata: LSP Hover and References

## Task

Practice using `K` for LSP hover and `gr` to list references for one symbol.

## Start

From any buffer with a TypeScript LSP client available, open the shared JS/TS
practice file in a vertical split and jump to this kata:

```text
:vsplit practice_js_ts_filetypes.ts<CR>
:/kata191CalculateTotal(kata191Subtotal, kata191Tax)<CR>
```

Start in Normal mode on the `k` in `kata191CalculateTotal`.

## End

The Kata 191 section of `practice_js_ts_filetypes.ts` should remain unchanged:

```text
function kata191CalculateTotal(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}

const kata191Subtotal = 99.99;
const kata191Tax = 0.08;
const kata191Total = kata191CalculateTotal(kata191Subtotal, kata191Tax);
const kata191DiscountedTotal = kata191CalculateTotal(kata191Subtotal * 0.9, kata191Tax);
```

The references UI should show the declaration and both call sites for
`kata191CalculateTotal`.

## Commands

Run these command steps:

```text
1. :setlocal filetype=typescript<CR>
2. K
3. <Esc>
4. gr
```
