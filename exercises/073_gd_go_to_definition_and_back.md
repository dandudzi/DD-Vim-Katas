# Kata: Jump to a Definition and Back

> **Environment:** Vim or Neovim. This kata uses built-in `gd`, not an LSP mapping.
> **Portability:** Run `:verbose nmap gd`; if remapped, use `:normal! gd` or temporarily remove the mapping.

## Objective
Use built-in `gd` for same-file local declarations and traverse the jump list with `<C-o>` and `<C-i>`.

## Fixture and Start
Create a new buffer containing:

```c
int normalize(int value) {
  return value < 0 ? -value : value;
}

int report(int raw) {
  int cleaned = normalize(raw);
  return cleaned;
}
```

Run `:set filetype=c`, then place the cursor on `cleaned` in `return cleaned;`, Normal mode.

## Drills
1. Jump to the local declaration of `cleaned` and return. **Verify:** `gd` lands on `cleaned` in line 6; `<C-o>` returns to line 7.
2. From `normalize` on line 6, jump to its declaration, then walk back and forward. **Verify:** `gd` lands on line 1, `<C-o>` returns to line 6, `<C-i>` returns to line 1.
3. Challenge: start at line 7, visit the `cleaned` declaration, then the `normalize` declaration, and return to line 7 using jump history only.

## Hints
<details><summary>Hints</summary>

Built-in `gd` searches for a local declaration in the current file. LSP definition behavior is separate and configuration-dependent.
</details>

## Solution
<details><summary>Exact keys</summary>

1. On line 7 `cleaned`: `gd<C-o>`
2. On line 6 `normalize`: `gd<C-o><C-i>`
3. `gdf=wgd<C-o><C-o>` (after the first `gd`, `f=w` moves from `cleaned` through `=` to `normalize` before the second `gd`).
</details>

## Cleanup and Reference
`:bwipe!`. The former companion-file/LSP assumption is removed. See `:help gd`, `:help CTRL-O`, `:help CTRL-I`.

| Keys | Effect |
|---|---|
| `gd` | Find local declaration in current file |
| `<C-o>` / `<C-i>` | Older / newer jump-list position |
