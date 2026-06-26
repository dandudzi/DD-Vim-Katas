# Kata: Move Sentence by Sentence

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode sentence motions `(` and `)`.

## Objective

By the end of this kata, you will be able to move to the previous or next sentence boundary with `(` and `)`.

Success means: you can navigate prose by sentence starts instead of word-by-word or line-by-line movement.

## Prerequisites

- Know: word motions and how punctuation ends a sentence in Vim.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm `n`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
Alpha starts here.  Beta continues here.
Gamma asks now?  Delta answers soon.
Epsilon ends well.  Zeta closes.
```

Start in Normal mode on the `A` in `Alpha` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `(` and `)` for the final landing in each drill.
- Do not use `/`, `w`, `b`, `j`, `k`, or the mouse.
- Reset to the documented start state before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** move to the next sentence start on the same line.

1. From the start of `Alpha`, jump to the beginning of the next sentence.

**Verify:** the cursor is on the `B` in `Beta`, and `:echo line('.') . ',' . col('.')` prints `1,21`.

### Drill B - Add precision or repetition

**Goal:** skip ahead by two sentences with one counted motion.

1. Reset to the documented start state.
2. Jump forward two sentence starts with one counted motion.

**Verify:** the cursor is on the `G` in `Gamma`, and `:echo line('.') . ',' . col('.')` prints `2,1`.

### Drill C - Apply the workflow

**Goal:** move backward to the previous sentence start.

1. Reset the fixture.
2. Move to the end of line 3 with `G$`.
3. Jump backward to the start of the previous sentence.

**Verify:** the cursor is on the `Z` in `Zeta`, and `:echo line('.') . ',' . col('.')` prints `3,21`.

### Challenge - Recall without prompts

Reset the fixture. Starting on the `A` in `Alpha`, jump forward two sentences, then jump backward one sentence, using only sentence motions and counts.

**Verify:** the final cursor position is on the `B` in `Beta`, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```text
Alpha starts here.  Beta continues here.
Gamma asks now?  Delta answers soon.
Epsilon ends well.  Zeta closes.
```

## Hints

<details>
<summary>Hint 1</summary>

Vim treats `.`, `!`, and `?` followed by whitespace or end of line as sentence endings.

</details>

<details>
<summary>Hint 2</summary>

The count applies to the sentence motion itself, so you can skip more than one sentence at once.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `)` - move to the next sentence start.

### Drill B

1. `2)` - move forward to the start of the second next sentence.

### Drill C

1. `G$(` - go to the end of the last line, then move back to the previous sentence start.

### Challenge

`2)(`

`2)` lands on `Gamma`, and `(` returns to the previous sentence start at `Beta`.

</details>

## Reset and Cleanup

- Between drills: return to the documented start position or restore the fixture.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- This fixture uses two spaces after sentence-ending punctuation so the boundaries remain clear regardless of `'cpoptions'`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `)` | Normal | Move to the next sentence boundary. |
| `(` | Normal | Move to the previous sentence boundary. |
| `{count})` | Normal | Move forward by `count` sentence boundaries. |
| `{count}(` | Normal | Move backward by `count` sentence boundaries. |

## References

- `:help )`
- `:help (`
- `:help sentence`
