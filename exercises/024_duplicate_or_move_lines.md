# Kata: Copy and Move Lines with Ex

> **Environment:** Vim or Neovim; built-in Ex commands only.

## Objective
Use `:copy`/`:t` and `:move` with explicit destinations to reorganize lines predictably.

## Fixture and Start
```text
Shopping list
Hardware store
Buy nails
Beauty parlor
Buy remover
Done
```
Start in Normal mode on line 2. Restore before each drill.

## Tasks
1. Copy line 3 below the current line using the current-line destination. **Verify:** lines 3-4 are both `Buy nails`.
2. Reset; duplicate the current line below itself with the short form. **Verify:** `Hardware store` appears on lines 2-3.
3. Reset; move lines 4-5 to the end as one range. **Verify:** final order is `Shopping list`, `Hardware store`, `Buy nails`, `Done`, `Beauty parlor`, `Buy remover`.

## Hints
<details><summary>Hints</summary>`:t` abbreviates `:copy`; a destination names the line after which text is placed. `$` is the final line.</details>

## Solution
<details><summary>Show commands</summary>

1. `:3copy.`
2. `:t.`
3. `:4,5move$`
</details>

## Reset and Safety
Use `u` once after each Ex edit or restore the fixture; close with `:bd!`. See `:help :copy` and `:help :move`.

| Command | Effect |
|---|---|
| `:{range}t{address}` | Copy range after address |
| `:{range}m{address}` | Move range after address |
