# Kata: Insert-Mode Editing Shortcuts

## Task

Practice fixing text and indentation with insert-mode `<C-w>`, `<C-u>`, `<C-t>`, and `<C-d>`.

## Start

Open a scratch buffer with two-space indentation active and insert:

```text
function processOrder(order) {
if (order.status === "pending") {
const total = calculateTotal(order.items);
console.log("pending");
}
}
```

Start in Normal mode on line 2, column 1.

## End

The buffer should become:

```text
function processOrder(order) {
  if (order.status === "pending") {
    const result = calculateTotal(order.items);
    console.log("order processed");
  }
}
```

## Commands

Run these command steps:

```text
1. I<C-t><Esc>
2. jI<C-t><C-t><Esc>
3. /total<CR>ea<C-w>result<Esc>
4. jccconsole.log("wrong message here<C-u>    console.log("order processed");<Esc>
5. jI<C-t><C-t><C-d><Esc>
```

