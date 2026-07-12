# Kata: Insert-Mode Editing Shortcuts

## Task

Practice opening a prepared file in a split and fixing its text and indentation
with insert-mode `<C-w>`, `<C-u>`, `<C-t>`, and `<C-d>`.

## Start

Use the prepared file `practice_054_insert_mode_shortcuts.js` with two-space
indentation active. Open a scratch buffer and insert:

```text
practice_054_insert_mode_shortcuts.js
```

Start in Normal mode on the `p` in line 1.

## End

The practice split should contain:

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
1. <leader>| (LazyVim: Split Window Right)
2. gf
3. jI<C-t><Esc>
4. jI<C-t><C-t><Esc>
5. /total<CR>ea<C-w>result<Esc>
6. jccconsole.log("wrong message here<C-u>    console.log("order processed");<Esc>
7. jI<C-t><C-t><C-d><Esc>
```
