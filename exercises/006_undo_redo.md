# Kata: Undo, Redo, and Branch

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use `u` and `<C-r>` to traverse changes and recognize when a new edit creates an undo branch.

## Fixture and Start
```text
alpha
beta
gamma
```
Start in Normal mode on line 1. Restore the fixture before each drill.

## Tasks
1. Append `!` to line 1, then undo. **Verify:** the original fixture returns.
2. Make the same edit, undo, then redo. **Verify:** line 1 is `alpha!`.
3. Challenge: append `!` to line 1, append `?` to line 2, undo twice, redo once, then append `#` to line 3. **Verify:** lines are `alpha!`, `beta`, `gamma#`; `<C-r>` now reports that you are at the newest change.

## Hints
<details><summary>Hints</summary>A new edit made after undoing starts a different branch; redo no longer follows the abandoned branch.</details>

## Solution
<details><summary>Show keys</summary>

1. `A!<Esc>u`
2. `A!<Esc>u<C-r>`
3. `A!<Esc>jA?<Esc>uu<C-r>GA#<Esc>`
</details>

## Reset and Reference
Restore the fixture between drills and close with `:bd!`. See `:help undo`, `:help redo`, and `:help undo-branches`.

| Keys | Effect |
|---|---|
| `u` | Undo one change |
| `<C-r>` | Redo one undone change |
