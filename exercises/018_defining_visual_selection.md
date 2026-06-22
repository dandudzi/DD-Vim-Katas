# Kata: Define Visual Selections

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Create characterwise, linewise, and blockwise selections and recover the last selection with `gv`.

## Fixture and Start
```text
alpha one
bravo two
charlie three
```
Start in Normal mode on the `a` of `alpha`. No text is changed in the first two drills.

## Tasks
1. Select `alpha` characterwise, exit Visual mode, then reselect it. **Verify:** `alpha` alone is highlighted.
2. Exit and select the first two complete lines linewise. **Verify:** both lines including their newlines are selected.
3. Exit, return to line 1 column 1, select the first three columns of all three lines as a block, then replace the block with `X`. **Verify:** lines begin `XXXha`, `XXXvo`, and `XXXrlie`.

## Hints
<details><summary>Hints</summary>Use `v`, `V`, and `<C-v>` for the three shapes; `gv` restores the most recent selection.</details>

## Solution
<details><summary>Show keys</summary>

1. `ve<Esc>gv`
2. `<Esc>ggVj`
3. `<Esc>gg0<C-v>jjllrX`
</details>

## Reset and Reference
Only Drill 3 changes text; undo with `u`. Close with `:bd!`. See `:help visual`, `:help CTRL-V`, and `:help gv`.

| Keys | Effect |
|---|---|
| `v` / `V` / `<C-v>` | Character / line / block Visual mode |
| `gv` | Reselect last Visual area |
