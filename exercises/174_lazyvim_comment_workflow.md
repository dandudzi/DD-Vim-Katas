# Kata: LazyVim Comment Workflow

> **Environment:** Neovim 0.10+ or LazyVim with a comment provider.
> **Dependencies:** Active `gc`, `gcc`, `gco`, and `gcO` mappings for the optional LazyVim line helpers.
> **Portability:** `gc{motion}` is the core workflow. Line helper mappings are configuration-dependent.

## Objective

Toggle comments with `gc{motion}` and use readiness-checked LazyVim line helpers for current-line and new-comment workflows.

Success means: you can comment a range, toggle a single line, and add a commented line above or below only after verifying the mappings that implement those actions.

## Prerequisites

- Know: Normal-mode motions, Visual line mode, and undo.
- Required option/state: `filetype=lua`.
- Required external tool/plugin: a comment operator if your Neovim does not provide one.
- Readiness check: run `:verbose nmap gc`, `:verbose xmap gc`, `:verbose nmap gcc`, `:verbose nmap gco`, and `:verbose nmap gcO`. Continue with the drills whose mappings exist and come from the provider you intend to practice.

## Setup

1. Open a scratch buffer with `:enew`.
2. Run `:setlocal filetype=lua`.
3. Insert the fixture exactly as shown below.
4. Start in Normal mode on line 1, column 1.
5. Confirm `:echo &commentstring` contains `%s`; for Lua it is usually `-- %s`.

## Initial Fixture

```lua
local function build_total(items)
  local total = 0
  total = total + items[1]
  return total
end

print(build_total({ 10 }))
```

Start in Normal mode on the `l` in `local`.

## Constraints

- Use `gc{motion}` for range comments.
- Use `gcc`, `gco`, or `gcO` only after `:verbose` confirms those mappings exist.
- Do not manually type comment leaders except as text after `gco` or `gcO` opens the commented line.
- Reset to the fixture before each drill unless the drill says otherwise.

## Tasks

### Drill A - Toggle a function range

**Goal:** comment the whole function and then restore it.

1. Use the comment operator with a motion to toggle lines 1-5.
2. Use the same command again.

**Verify:** after the first toggle, lines 1-5 are Lua comments; after the second toggle, the fixture is restored exactly.

### Drill B - Toggle one line

**Goal:** comment only the final `print` line.

1. Reset the fixture.
2. Move to the final line.
3. Use the checked current-line comment mapping.

**Verify:** only line 7 is commented.

### Drill C - Add commented lines around code

**Goal:** add a comment above and below the `return total` line.

1. Reset the fixture.
2. Put the cursor on `return total`.
3. Use the checked add-comment-above mapping and insert `before return`.
4. Return to `return total`, use the checked add-comment-below mapping, and insert `after return`.

**Verify:** the function contains `-- before return` immediately above `return total` and `-- after return` immediately below it.

### Challenge - Recall without prompts

Reset the fixture. Comment the whole function, leave the `print` line active, then add a new commented note below the `print` line that says `manual smoke test`.

**Verify:** lines 1-5 are commented, line 7 still starts with `print`, and the final line is a Lua comment containing `manual smoke test`.

## Expected Final State

After the challenge, the buffer should be equivalent to:

```lua
-- local function build_total(items)
--   local total = 0
--   total = total + items[1]
--   return total
-- end

print(build_total({ 10 }))
-- manual smoke test
```

Exact spacing after the comment leader may vary by provider, but no uncommented function body should remain.

## Hints

<details>
<summary>Hint 1</summary>

For the range drill, think operator plus motion: `gc` starts the operation, and the motion supplies the lines.

</details>

<details>
<summary>Hint 2</summary>

`gco` and `gcO` are insert-style helpers in LazyVim's default keymap list. They create a commented line below or above the current line.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `gggc4j` - toggle comments over lines 1-5.
2. `gggc4j` - toggle the same range back.

### Drill B

1. `Ggcc` - go to the final line and toggle the current line, when `gcc` is mapped.

### Drill C

1. `/return total<CR>` - move to the return line.
2. `gcObefore return<Esc>` - add a commented line above, when `gcO` is mapped.
3. `/return total<CR>` - return to the code line.
4. `gcoafter return<Esc>` - add a commented line below, when `gco` is mapped.

### Challenge

`gggc4jGgcomanual smoke test<Esc>`

This assumes the readiness check confirmed `gc` and `gco`. If your provider inserts a different amount of spacing after the comment leader, preserve the provider's output.

</details>

## Reset and Cleanup

- Between drills: use undo until the fixture is restored, or recreate the scratch buffer.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: all changes stay in the scratch buffer.

## Notes and Portability

- LazyVim's default keymap page lists `gco` as add comment below and `gcO` as add comment above, but local mappings can differ.
- `gc{motion}` is the important transferable shape. `gcc`, `gco`, and `gcO` are convenience mappings that must be readiness-checked.
- Comment output depends on `commentstring` and the active provider.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `gc{motion}` | Normal/operator-pending | Toggle comments over the motion. |
| `gcc` | Normal | Toggle current line when mapped. |
| `gco` | Normal -> Insert | Add a commented line below when mapped. |
| `gcO` | Normal -> Insert | Add a commented line above when mapped. |
| `:verbose nmap gc` | Command-line | Show the active Normal-mode comment mapping source. |

## References

- [LazyVim keymaps](https://www.lazyvim.org/keymaps) - default comment helper mappings.
- [`:help commenting`](https://neovim.io/doc/user/various.html#commenting) - Neovim comment operator documentation.
