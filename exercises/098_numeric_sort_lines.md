# Kata: Numeric Sort Lines Through the Shell

## Task

Practice filtering all lines through a shell sort with numeric ordering.

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

Start in Normal mode on the `i` in line 1.

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
1. ggVG
2. !sort -t_ -k2,2n<CR>
```

