# Kata: Repeat a Line Macro Across a Range

> **Environment:** Vim or Neovim; built-in commands

## Objective
Record a per-line macro, replay it with a count, and apply it only to selected lines with `:normal`. Success means formatting list items while preserving a barrier line.

## Initial Fixture
```text
1. one
2. two
3. three
// keep unchanged
4. four
5. five
```
Start line 1, column 1; clear register `a`.

## Tasks

### Drill A - Record
Record a macro that changes `.` to `)`, uppercases the first list word character, and moves down. **Verify:** line 1 is `1) One`, cursor is line 2.

### Drill B - Count contiguous lines
Replay twice. **Verify:** lines 1-3 are formatted and the cursor is on the comment.

### Drill C - Apply to a noncontiguous block
Select only lines 5-6 and execute macro `a` once per selected line using `:normal`. **Verify:** the comment remains exact and lines 5-6 are `4) Four`, `5) Five`.

### Challenge
Reset and produce the final state using one recording, a counted replay for lines 2-3, and a ranged replay for lines 5-6.

## Hints
<details><summary>Hints</summary>
`:'<,'>normal @a` runs the macro once from each selected line. A macro ending in `j` may move after its edit, but the range establishes each starting line.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `qa0f.r)w~jq`
- B: `2@a`
- C: `jVj:normal @a<CR>`
- Challenge: same three sequences after reset
</details>

## Reset and Cleanup
Restore fixture and clear `a`; close scratch buffer. `:normal` can make broad edits, so practise only on this fixture.

## References
- [`:help :normal`](https://vimhelp.org/various.txt.html#%3Anormal)
- [`:help complex-repeat`](https://vimhelp.org/repeat.txt.html#complex-repeat)
