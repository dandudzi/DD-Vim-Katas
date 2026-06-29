# Kata: Numeric Sort Lines

## Task

Practice using `:sort n` to sort lines by their first number instead of alphabetically.

## Start

Open a scratch buffer and insert:

```text
item_10_widget
item_2_gadget
item_1_thing
item_20_gizmo
item_3_doohickey
item_100_contraption
```

Start in Normal mode on the `i` in the first line.

## End

The buffer should become:

```text
item_1_thing
item_2_gadget
item_3_doohickey
item_10_widget
item_20_gizmo
item_100_contraption
```

## Commands

Run these command steps:

```text
1. gg
2. V5j
3. :sort n<CR>
```
