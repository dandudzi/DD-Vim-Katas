# Kata: Insert Calculated Results

> **Environment:** Vim or Neovim; built-in expression register only.

## Objective
Use the expression register, `<C-r>=`, to calculate and insert results without an external calculator.

## Fixture and Start
```text
6 chairs at $35 = $
18 boxes in 3 rows =
Subtotal $48 plus 20% = $
```
Start in Normal mode on line 1. Restore before each drill.

## Tasks
1. Append the product of 6 and 35 to line 1. **Verify:** it ends `$210`.
2. Append the quotient of 18 and 3 to line 2. **Verify:** it ends `6`.
3. Challenge: append 48 plus 20 percent of 48 to line 3. **Verify:** it ends `$57.6`.

## Hints
<details><summary>Hints</summary>In Insert mode, `<C-r>=` opens an expression prompt; `<CR>` evaluates and inserts it.</details>

## Solution
<details><summary>Show keys</summary>

1. `A<C-r>=6*35<CR><Esc>`
2. `jA<C-r>=18/3<CR><Esc>`
3. `jjA<C-r>=48+48*0.2<CR><Esc>`
</details>

## Reset and Notes
Use `u` or restore the fixture; close with `:bd!`. Floating-point display follows Vim's expression rules. See `:help i_CTRL-R_=` and `:help expression`.

| Keys | Effect |
|---|---|
| `<C-r>=expr<CR>` | Evaluate and insert expression in Insert mode |
