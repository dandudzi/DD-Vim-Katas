# Kata: Indent to the End of the File

> **Environment:** Vim or Neovim; built-in commands only.

## Objective
Use the `>` operator with `j`, a count, and `G`. Success means shifting exactly the requested lines by one `shiftwidth`.

## Setup and Fixture
Open a new buffer, run `:setlocal shiftwidth=2 expandtab`, and insert:

```javascript
const root = true;
const alpha = 1;
const beta = 2;
const gamma = 3;
const omega = 4;
```

Start in Normal mode on the `c` of line 2. Reset with `u` after each drill.

## Tasks
1. **Isolate:** shift lines 2 and 3 right. **Verify:** only those lines begin with two spaces.
2. **Count:** reset, then shift lines 2 through 4 using a count with the operator. **Verify:** line 5 remains at column 1.
3. **Challenge:** reset and shift line 2 through end-of-file. **Verify:** lines 2-5 have two leading spaces and line 1 has none.

## Hints
<details><summary>Hints</summary>The shift operator accepts any linewise motion; `G` reaches the last line.</details>

## Solution
<details><summary>Show keys</summary>

1. `>j`
2. `3>>`
3. `>G`

`>G` applies one uniform shift from the cursor line through the last line; it does not create mixed indentation depths.
</details>

## Reset and Reference
Use `u`, or restore the fixture; close the throwaway buffer with `:bd!`. See `:help >` and `:help G`.

| Keys | Effect |
|---|---|
| `>j` | Shift current and next line right |
| `[count]>>` | Shift count lines right |
| `>G` | Shift through end-of-file |
