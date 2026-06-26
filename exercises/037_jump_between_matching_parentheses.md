# Kata: Jump and Operate on Matching Delimiters

> **Environment:** Vim or Neovim; built-in `%` motion

## Objective
Use `%` to jump between matching delimiters and as an operator motion. Success means navigating nested pairs and deleting one complete pair-delimited region.

## Initial Fixture
```javascript
call([one, {two: 2}], three);
```
Start in Normal mode on the opening `(` at column 5. Reset before each drill.

## Tasks

### Drill A - Match parentheses
Jump to the matching closing parenthesis. **Verify:** cursor is on `)` at column 28.

### Drill B - Nested matches
Reset, move to `[`, jump to its matching `]`, then move left to `}` and jump to `{`. **Verify:** cursor ends on `{` at column 12.

### Drill C - Operate
Reset, delete from `(` through its matching `)`. **Verify:** buffer is `call;`.

### Challenge
Reset and delete only `[one, {two: 2}]` using an operator with `%`. **Verify:** `call(, three);` remains.

## Hints
<details><summary>Hints</summary>
`%` is inclusive when used as an operator motion. First place the cursor on the opening delimiter.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `%`
- B: `0f[%h%`
- C: `d%`
- Challenge: `f[d%`
</details>

## Reset and Cleanup
Use `u` after deletion drills or restore the fixture. Close with `:bwipeout!`.

## LazyVim Note
`mini.ai` or Treesitter-based text objects can provide alternate ways to target a balanced region, but `%` is the built-in motion this kata trains. If trying plugin text objects afterward, verify them with `:verbose omap i` and compare their range with `%` before editing.

## Command Reference
| Keys | Effect |
|---|---|
| `%` | Jump to matching item |
| `d%` | Delete through matching item |

## References
- [`:help %`](https://vimhelp.org/motion.txt.html#%25)
