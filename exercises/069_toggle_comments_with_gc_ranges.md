# Kata: Toggle Comments with `gc` Motions

> **Environment:** Neovim 0.10+ built-in comment operator, or a comment plugin providing `gc`.
> **Readiness:** Run `:verbose nmap gc`, `:verbose xmap gc`, and `:verbose nmap gcc`. For the optional LazyVim line helpers, also run `:verbose nmap gco` and `:verbose nmap gcO`. On older Neovim/Vim, identify the plugin shown there; do not assume these mappings exist.

## Objective
Toggle comments over a motion, paragraph, and Visual range while preserving code text.

## Fixture and Start
```lua
local function total(items)
  local sum = 0
  sum = sum + items[1]
  return sum
end

This note is temporarily disabled.
It must return unchanged.

print(total({ 4 }))
```

Use a new buffer, run `:set filetype=lua`, and start on line 1 in Normal mode. Restore the fixture before each drill.

## Drills
1. Toggle lines 1-5 using the comment operator with a line motion. **Verify:** all five lines gain Lua comment leaders; toggle again and the exact fixture returns.
2. On either note line, toggle the paragraph. **Verify:** exactly the two note lines are commented, then restored on a second toggle.
3. Visually select lines 1-3 and toggle them. **Verify:** only those three lines are commented.
4. Optional LazyVim line drill: run `:verbose nmap gcc`, `:verbose nmap gco`, and `:verbose nmap gcO`. If those mappings exist, use them to toggle the current line and add one commented line below or above; undo each change before continuing. **Verify:** the source reported by `:verbose` is your active comment provider, and no extra lines remain afterward.
5. Challenge: comment lines 1-5 and the final `print` line, leaving the note unchanged.

## Hints
<details><summary>Hints</summary>

The operator is `gc{motion}`. `ap` covers a paragraph. In linewise Visual mode, use `gc` on the selection. LazyVim line helpers are convenience mappings; check them with `:verbose` before use.
</details>

## Solution
<details><summary>Exact keys</summary>

1. `gggc4j`, then `gggc4j`
2. `/This note<CR>gcap`, then `gcap`
3. `ggV2jgc`
4. Mapping-dependent; after `:verbose nmap gcc`, `gcc` toggles the current line when available. If `gco`/`gcO` are mapped, use them only for the optional add-line practice, then undo.
5. `gggc4jGgcc`
</details>

## Reset, Cleanup, and Reference
Use `u` or restore the fixture; `:bwipe!` afterward. See Neovim `:help commenting`; plugin users must consult the plugin reported by `:verbose map`.

| Keys | Effect |
|---|---|
| `gc{motion}` | Toggle comments over motion |
| `gcc` | Toggle current line (default Neovim mapping) |
