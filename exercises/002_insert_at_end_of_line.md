# Kata: Append at End of Line

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use `A` and dot repeat to append punctuation without navigating to line ends. Success means adding semicolons only where requested.

## Fixture and Start
Create a new buffer containing:

```javascript
const foo = 1
const bar = "a"
const ready = true;
const total = foo + bar
```

Start in Normal mode on the first character of line 1. Reset each drill with `u` as needed.

## Tasks
1. Append `;` to line 1 with the target command. **Verify:** line 1 ends in exactly one semicolon.
2. Reset; append to line 1, move down once, and repeat the change. **Verify:** lines 1-2 end in `;`, line 3 is unchanged.
3. Reset; fix lines 1, 2, and 4 using one insertion plus dot repeats. **Verify:** every line ends in exactly one `;`.

## Hints
<details><summary>Hints</summary>`A` enters Insert mode after the last character. Dot repeats the complete insertion.</details>

## Solution
<details><summary>Show keys</summary>

1. `A;<Esc>`
2. `A;<Esc>j.`
3. `A;<Esc>j.jj.`
</details>

## Reset and Reference
Use `u` once per dot-repeated change, or restore the fixture; finish with `:bd!`. See `:help A` and `:help .`.

| Keys | Effect |
|---|---|
| `A` | Append at end of line |
| `.` | Repeat the last change |
