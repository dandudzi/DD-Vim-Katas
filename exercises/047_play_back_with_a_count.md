# Kata: Replay a Macro with a Count

> **Environment:** Vim or Neovim; built-in macros

## Objective
Design a macro that advances itself and replay it an exact number of times. Success means transforming five targets without overrunning the fixture.

## Initial Fixture
```javascript
var x = "("+a+","+b+","+c+","+d+","+e+")";
```
Start in Normal mode at column 1. Clear register `q`.

## Tasks

### Drill A - First change
Change the first `+` to ` + `. **Verify:** only the first plus has surrounding spaces.

### Drill B - Record repeatable advance
Record in `q` a macro that finds the next plus and repeats the last change. **Verify:** `:reg q` represents `;.` and the cursor is on the second changed plus.

### Drill C - Count remaining targets
Replay `q` exactly eight more times. **Verify:** all ten plus signs have spaces and no text besides whitespace changed.

### Challenge
Reset and finish the entire line with one initial change, one recording, and one counted replay. Do not use an excessive count.

## Hints
<details><summary>Hints</summary>
There are ten `+` characters. The initial edit handles one; recording `;.` also executes once, leaving eight.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `f+cl + <Esc>`
- B: `qq;.q`
- C: `8@q`
- Challenge: `f+cl + <Esc>qq;.q8@q`
</details>

## Expected Final State
```javascript
var x = "(" + a + "," + b + "," + c + "," + d + "," + e + ")";
```

## Reset and Cleanup
Restore fixture; `:let @q=''`; close with `:bwipeout!`.

## References
- [`:help @`](https://vimhelp.org/repeat.txt.html#%40)
