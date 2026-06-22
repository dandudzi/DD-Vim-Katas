# Kata: Prefer Operator and Text Object

> **Environment:** Vim or Neovim with HTML filetype; built-in `it` tag text object.

## Objective
Use `gUit` as a repeatable Normal-mode change instead of manually selecting tag contents.

## Fixture and Start
```html
<a href="#">one</a>
<a href="#">two</a>
<a href="#">three</a>
```
Run `:setfiletype html`; start in Normal mode anywhere inside `one`. Restore before each drill.

## Tasks
1. Uppercase only the text inside the first tag. **Verify:** tags and attributes remain unchanged.
2. Reset; uppercase line 1, move inside line 2's tag, and repeat with dot. **Verify:** `ONE` and `TWO` are uppercase; `three` is not.
3. Challenge: uppercase all three contents using one authored operator change. **Verify:** the inner texts are `ONE`, `TWO`, `THREE` and no markup changed.

## Hints
<details><summary>Hints</summary>`gU` is an operator and `it` supplies the inside-tag text object. Dot repeats both together.</details>

## Solution
<details><summary>Show keys</summary>

1. `gUit`
2. `gUitj.`
3. `gUitj.j.`
</details>

## Reset and Notes
Use `u` per change or restore the fixture; close with `:bd!`. Tag text objects depend on recognized markup syntax; confirm `:set filetype?`. See `:help gU` and `:help it`.

| Keys | Effect |
|---|---|
| `gUit` | Uppercase inside current tag |
| `.` | Repeat operator and text object |
