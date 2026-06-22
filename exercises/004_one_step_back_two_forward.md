# Kata: Repeat a Change at the Next Match

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Combine `f`, `;`, `cl`, and `.` to normalize operators on one line. Success means spacing every plus sign without altering commas or quotes.

## Fixture and Start
```javascript
const result = "method("+argument1+","+argument2+")";
```
Start in Normal mode on the first character. Restore the fixture before each drill.

## Tasks
1. Find the first `+` and replace it with a space-padded plus. **Verify:** only the plus after `"method("` is padded.
2. Reset; make the first change, advance to the next occurrence of the found character, and repeat it. **Verify:** the first two plus signs are padded.
3. Reset; normalize all four plus signs with one authored change. **Verify:** the line becomes:
```javascript
const result = "method(" + argument1 + "," + argument2 + ")";
```

## Hints
<details><summary>Hints</summary>`;` repeats the latest `f` search; `.` repeats the replacement.</details>

## Solution
<details><summary>Show keys</summary>

1. `f+cl + <Esc>`
2. `f+cl + <Esc>;.`
3. `f+cl + <Esc>;.;.;.`

There are four plus signs, so the initial change needs three repeats.
</details>

## Reset and Reference
Use `u` for each change or restore the fixture; close with `:bd!`. See `:help f`, `:help ;`, and `:help .`.

| Keys | Effect |
|---|---|
| `f{char}` / `;` | Find character / repeat find |
| `cl` | Change character under cursor |
| `.` | Repeat change |
