# Kata: Append to Ragged Lines as a Block

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use blockwise `$` with `A` to append at the true end of lines with different lengths.

## Fixture and Start
```javascript
let x = 1
let longerName = "a"
let total = x + longerName
```
Start in Normal mode on the final `1` of line 1. Restore before each drill.

## Tasks
1. Select from the cursor to each line's end over the first two lines. **Verify:** the block has ragged right edges; exit without editing.
2. Reset cursor, make the same selection, and append `;`. **Verify:** only lines 1-2 end in semicolons.
3. Challenge: append one semicolon to all three lines with one block edit. **Verify:** `:%s/;$/&/gn` reports three matches and no line contains `;;`.

## Hints
<details><summary>Hints</summary>In blockwise Visual mode, `$` marks the end of each ragged line; `A` appends to every selected line after `<Esc>`.</details>

## Solution
<details><summary>Show keys</summary>

1. `<C-v>j$<Esc>`
2. `<C-v>j$A;<Esc>`
3. `<C-v>jj$A;<Esc>`
</details>

## Reset and Reference
Use `u` once for the block insertion or restore the fixture; close with `:bd!`. See `:help blockwise-visual` and `:help v_b_A`.

| Keys | Effect |
|---|---|
| `<C-v>...$` | Select ragged block through line ends |
| `A...<Esc>` | Append on every selected line |
