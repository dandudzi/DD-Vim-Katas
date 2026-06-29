# Kata: Insert-Mode Editing Shortcuts

## Task

Practice fixing text and indentation with insert-mode `Ctrl-W`, `Ctrl-U`,
`Ctrl-T`, and `Ctrl-D`.

## Start

Open a scratch buffer and insert:

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
1. :setlocal shiftwidth=2 tabstop=2 expandtab<CR>
2. I<C-t><Esc>
3. jI<C-t><C-t><Esc>
4. /total<CR>ea<C-w>result<Esc>
5. jccconsole.log("wrong message here<C-u>    console.log("order processed");<Esc>
6. jI<C-t><C-t><C-d><Esc>
```
