# Kata: Run Normal Commands Across a Range

> **Environment:** Vim or Neovim; built-in `:normal` only.

## Objective
Apply the same Normal-mode edit independently to each line in an Ex range.

## Fixture and Start
```javascript
let foo = 1
let bar = "a"
let ready = true;
let total = foo + bar
```
Start in Normal mode on line 1. Restore before each drill.

## Tasks
1. Append `;` to lines 1-2 with one ranged command. **Verify:** line 3 still has its single original semicolon.
2. Reset; prefix lines 2-4 with `// ` using a range. **Verify:** line 1 is unchanged.
3. Challenge: append semicolons only to lines that lack them, using `:normal` on the explicit ranges 1-2 and 4. **Verify:** every line ends in exactly one semicolon.

## Hints
<details><summary>Hints</summary>`:normal` executes its following keys once per addressed line. Run a second ranged command for a non-contiguous line.</details>

## Solution
<details><summary>Show commands</summary>

1. `:1,2normal A;`
2. `:2,4normal I// `
3. `:1,2normal A;` followed by `:4normal A;`
</details>

## Reset and Safety
Use `u` after each `:normal` command or restore the fixture; close with `:bd!`. Prefer `:normal!` in mappings/scripts when user mappings must be ignored. See `:help :normal` and `:help :normal-range`.

| Command | Effect |
|---|---|
| `:{range}normal {keys}` | Execute keys on each addressed line |
| `:{range}normal! {keys}` | Same, ignoring mappings |
