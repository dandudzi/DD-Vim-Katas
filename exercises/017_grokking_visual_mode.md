# Kata: Change a Visual Text Object

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use characterwise Visual mode and `iw` to select, inspect, and change one whole word.

## Fixture and Start
```text
I like March better than anything.
March has thirty-one days.
```
Start in Normal mode on the `M` of line 1. Restore before each drill.

## Tasks
1. Select the inner word under the cursor. **Verify:** only `March` is highlighted; press `<Esc>` without editing.
2. Select `March`, switch the active selection endpoint with `o`, then restore the original endpoint with `o`. **Verify:** the same word remains selected; exit with `<Esc>`.
3. Challenge: change both occurrences from `March` to `April`, using dot for the second edit. **Verify:** both lines contain `April`, and punctuation is unchanged.

## Hints
<details><summary>Hints</summary>`viw` creates a characterwise selection; `c` turns that selection into an edit repeatable with dot.</details>

## Solution
<details><summary>Show keys</summary>

1. `viw<Esc>`
2. `viwoo<Esc>`
3. `viwcApril<Esc>j0.`
</details>

## Reset and Reference
Use `u` per change or restore the fixture; close with `:bd!`. See `:help visual-mode`, `:help iw`, and `:help v_o`.

| Keys | Effect |
|---|---|
| `viw` | Select inner word characterwise |
| `o` | Switch active Visual endpoint |
| `c` | Change selection |
