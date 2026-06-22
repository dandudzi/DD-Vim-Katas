# Kata: Navigate Paragraphs and Join Lines

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use `{`, `}`, `G`, and `J` to reach structural locations and join lines without counting repeated `j` presses.

## Fixture and Start
```text
Heading

First paragraph line one.
First paragraph line two.

Second paragraph line one.
Second paragraph line two.

Footer line one.
Footer line two.
```
Start in Normal mode on `Heading`. Restore the fixture before each drill.

## Tasks
1. Jump to the first line after the next blank-line boundary. **Verify:** cursor is on `First` at line 3.
2. From line 3, jump to the next paragraph and then back. **Verify:** cursor returns to line 3.
3. Challenge: jump to the last line, move to line 9, and join it with line 10. **Verify:** final line is `Footer line one. Footer line two.` and the buffer has nine lines (`:=`).

## Hints
<details><summary>Hints</summary>`}` and `{` move by paragraphs; `G` reaches the final line; `J` joins the following line with normalized spacing.</details>

## Solution
<details><summary>Show keys</summary>

1. `}`
2. `}{`
3. `GkJ`
</details>

## Reset and Notes
Use `u` after joining or restore the fixture; close with `:bd!`. `H`, `M`, and `L` refer to the visible window, not the file. See `:help paragraph`, `:help G`, and `:help J`.

| Keys | Effect |
|---|---|
| `{` / `}` | Previous / next paragraph |
| `G` | Last line |
| `J` | Join current and next line |
