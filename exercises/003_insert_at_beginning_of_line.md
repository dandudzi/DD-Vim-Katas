# Kata: Insert at First Non-Blank

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use `I` and dot repeat to insert at the first non-blank character while preserving indentation.

## Fixture and Start
Insert exactly:

```javascript
foo = 1;
  bar = "a";
    total = foo + bar;
```

Start in Normal mode anywhere on line 1. Restore this fixture before each drill.

## Tasks
1. Prefix line 1 with `let `. **Verify:** it reads `let foo = 1;`.
2. Reset; prefix lines 1-2 using one insertion and one repeat. **Verify:** line 2 reads `  let bar = "a";`.
3. Reset; prefix all lines using one insertion and dot repeat. **Verify:** indentation is unchanged and each first non-blank token is `let`.

## Hints
<details><summary>Hints</summary>`I` differs from `0i`: it inserts after existing indentation.</details>

## Solution
<details><summary>Show keys</summary>

1. `Ilet <Esc>`
2. `Ilet <Esc>j.`
3. `Ilet <Esc>j.j.`
</details>

## Reset and Reference
Undo each change with `u` or restore the fixture; close with `:bd!`. See `:help I` and `:help .`.

| Keys | Effect |
|---|---|
| `I` | Insert before first non-blank |
| `.` | Repeat last change |
