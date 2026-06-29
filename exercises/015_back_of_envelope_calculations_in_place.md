# Kata: Insert Calculated Results

## Task

Practice using the expression register, `<C-r>=`, to calculate and insert
results in place.

## Start

Open a scratch buffer and insert:

```text
6 chairs at $35 = $
18 boxes in 3 rows =
Subtotal $48 plus 20% = $
```

Start in Normal mode on the `6` of line 1.

## End

The buffer should become:

```text
6 chairs at $35 = $210
18 boxes in 3 rows =6
Subtotal $48 plus 20% = $57.6
```

## Commands

Run these command steps:

```text
1. A<C-r>=6*35<CR><Esc>
2. jA<C-r>=18/3<CR><Esc>
3. jA<C-r>=48+48*0.2<CR><Esc>
```
