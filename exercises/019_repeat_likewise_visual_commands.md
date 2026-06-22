# Kata: Indent a Line Range Once

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use a linewise selection and one shift command to indent an exact code block without over-indenting it.

## Setup and Fixture
Run `:setlocal shiftwidth=4 expandtab`, then insert:

```python
def fib(n):
    a, b = 0, 1
    while a < n:
print(a)
a, b = b, a + b
fib(42)
```

Start in Normal mode on the `p` of line 4. Restore before each drill.

## Tasks
1. Shift only line 4 right once. **Verify:** it has four leading spaces.
2. Reset; select lines 4-5 linewise and shift once. **Verify:** both have four spaces; line 6 has none.
3. Challenge: produce valid indentation for lines 4-5 with one operator command and no repeated dot. **Verify:** `:4,5s/^    //n` reports two matches before undoing.

## Hints
<details><summary>Hints</summary>`>` in Visual mode shifts the whole selection once; repeating it would add another four spaces.</details>

## Solution
<details><summary>Show keys</summary>

1. `>>`
2. `Vj>`
3. `>j`
</details>

## Reset and Reference
Use `u`; restore options with `:setlocal shiftwidth< expandtab<`, then `:bd!`. See `:help >`, `:help V`, and `:help shiftwidth`.

| Keys | Effect |
|---|---|
| `>>` | Shift current line once |
| `Vj>` | Select two lines and shift once |
| `>j` | Shift current and next line once |
