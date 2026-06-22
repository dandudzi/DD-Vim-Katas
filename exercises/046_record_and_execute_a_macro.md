# Kata: Record and Execute a Macro

> **Environment:** Vim or Neovim; built-in macros

## Objective
Record a repeatable line transformation, inspect it, and replay it with `@a` and `@@`. Success means transforming all fixture lines identically.

## Initial Fixture
```javascript
foo = 1
bar = 'a'
foobar = foo + bar
```
Start in Normal mode at line 1, column 1. Clear register `a` with `:let @a=''`.

## Tasks

### Drill A - Record one complete unit
Record into `a` a transformation that prefixes `var `, appends `;`, and advances to the next line. **Verify:** line 1 is `var foo = 1;`, cursor is on line 2, and `:reg a` ends with `j`.

### Drill B - Replay once
Execute `a` on line 2. **Verify:** line 2 is `var bar = 'a';` and cursor is on line 3.

### Drill C - Repeat latest macro
Replay the most recently executed macro without naming its register. **Verify:** line 3 is `var foobar = foo + bar;`.

### Challenge
Reset, record on line 1, then transform the remaining two lines using one counted replay. Verify the exact three lines shown by the drills.

## Hints
<details><summary>Hints</summary>
Start/stop recording with `q{register}`/`q`. Use `@{register}`, then `@@`; counts work with `@`.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `qaIvar <Esc>A;<Esc>jq`
- B: `@a`
- C: `@@`
- Challenge: record as above, then `2@a`
</details>

## Reset and Cleanup
Restore the fixture and run `:let @a=''` between attempts. Close with `:bwipeout!`.

## Command Reference
| Keys | Effect |
|---|---|
| `qaq` | Start/stop recording register `a` |
| `@a` | Execute register `a` |
| `@@` | Repeat latest executed register |

## References
- [`:help recording`](https://vimhelp.org/repeat.txt.html#recording)
