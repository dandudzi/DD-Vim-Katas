# Kata: LSP Hover and References

## Task

Practice using `K` for LSP hover and `gr` to list references for one symbol.

## Start

Open a scratch buffer with an attached LSP client and insert:

```text
function calculateTotal(price, taxRate) {
  return price * (1 + taxRate);
}

const subtotal = 99.99;
const tax = 0.08;
const total = calculateTotal(subtotal, tax);
const discountedTotal = calculateTotal(subtotal * 0.9, tax);
```

Start in Normal mode on line 7, column 15, on the `c` in `calculateTotal`.

## End

The buffer should remain:

```text
function calculateTotal(price, taxRate) {
  return price * (1 + taxRate);
}

const subtotal = 99.99;
const tax = 0.08;
const total = calculateTotal(subtotal, tax);
const discountedTotal = calculateTotal(subtotal * 0.9, tax);
```

The references UI should show the declaration and both call sites for
`calculateTotal`.

## Commands

Run these command steps:

```text
1. K
2. <Esc>
3. gr
```
