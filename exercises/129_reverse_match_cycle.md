# Kata: Reverse a Match Cycle with `g%`

> **Environment:** Vim or Neovim with the standard `matchit` runtime plugin available.
> **Dependencies:** `matchit`, loaded with `:packadd matchit`.
> **Portability:** `%` is built in, but `g%` comes from `matchit`. Verify the active mapping with `:verbose nmap g%`.

## Objective

By the end of this kata, you will be able to move backward through a matching `#if/#else/#endif` group with `g%`.

Success means: you can predict where `g%` lands in a preprocessor match cycle and use repeated `g%` presses to move backward through nested groups.

## Prerequisites

- Know: basic `%` matching on brackets or `#if/#else/#endif`.
- Required option/state: `:set filetype=c`
- Required external tool/plugin: `matchit`
- Readiness check: run `:packadd matchit | echo exists(':MatchDisable')` and confirm `2`.

## Setup

1. Open a new scratch buffer with `:enew`.
2. Run `:setlocal filetype=c`.
3. Run `:packadd matchit`.
4. Insert the fixture exactly as shown below.
5. Put the cursor on the `#` in `#if OUTER` on line 1, column 1.
6. Confirm `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```c
#if OUTER
int start = 1;
#else
#if INNER
int middle = 2;
#else
int finish = 3;
#endif
#endif
```

Start in Normal mode on the `#` in `#if OUTER` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `g%` for the final landing in each drill unless a drill explicitly mentions `%`.
- Do not use search, `[#`, `]#`, or the mouse.
- Reset to the documented start state before each drill unless the drill says otherwise.

## Tasks

### Drill A - Isolate the skill

**Goal:** move backward from an inner `#else` to its matching `#if`.

1. Reset the fixture.
2. Put the cursor on the `#` in the inner `#else` on line 6, column 1.
3. Move backward one step through that match cycle.

**Verify:** the cursor is on the `#` in `#if INNER`, and `:echo line('.') . ',' . col('.')` prints `4,1`.

### Drill B - Add precision or repetition

**Goal:** wrap around the outer cycle in reverse.

1. Reset to line 1, column 1 on `#if OUTER`.
2. Move backward one step through the outer match cycle.

**Verify:** the cursor is on the last `#endif`, and `:echo line('.') . ',' . col('.')` prints `9,1`.

### Drill C - Apply the workflow

**Goal:** keep moving backward through the same cycle without switching commands.

1. Reset to line 1, column 1 on `#if OUTER`.
2. Move backward twice through the outer cycle.

**Verify:** the cursor is on the outer `#else`, and `:echo line('.') . ',' . col('.')` prints `3,1`.

### Challenge - Recall without prompts

Reset the fixture. Put the cursor on the inner `#endif` on line 8, column 1. Move backward through the inner cycle until you land on `#if INNER`, using only `g%`.

**Verify:** the final cursor position is line 4, column 1, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```c
#if OUTER
int start = 1;
#else
#if INNER
int middle = 2;
#else
int finish = 3;
#endif
#endif
```

## Hints

<details>
<summary>Hint 1</summary>

`g%` uses the same matching groups as `%`, but it walks the cycle in the opposite direction.

</details>

<details>
<summary>Hint 2</summary>

From `#if`, `%` moves forward to `#else`, while `g%` wraps backward to `#endif`. Repeating `g%` keeps moving backward through the same cycle.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `g%` - move from the inner `#else` back to `#if INNER`.

### Drill B

1. `g%` - wrap backward from `#if OUTER` to the matching outer `#endif`.

### Drill C

1. `g%g%` - first land on the outer `#endif`, then continue backward to the outer `#else`.

### Challenge

`g%g%`

From the inner `#endif`, the first `g%` lands on the inner `#else`, and the second `g%` lands on `#if INNER`.

</details>

## Reset and Cleanup

- Between drills: restore the documented cursor position for that drill.
- After the kata: run `:MatchDisable` if you want to restore the default `%` behavior for this session, then close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in contrast: `%` already matches `#if/#else/#endif` in Vim and Neovim.
- Dependency detail: `g%` is provided by the standard `matchit` runtime plugin, not by plain `%`.
- Activation: load the plugin with `:packadd matchit`.
- Filetype detail: this kata uses `filetype=c` so the standard C filetype support defines the preprocessor match groups that `matchit` consumes.
- Mapping check: run `:verbose nmap g%` to confirm that `g%` is mapped by `matchit` in your session.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:packadd matchit` | Command-line | Load the standard `matchit` runtime plugin for the current session. |
| `g%` | Normal | Cycle backward through the current matching group. |
| `%` | Normal | Cycle forward through the current matching group. |
| `:MatchDisable` | Command-line | Disable `matchit` mappings for the rest of the session. |

## References

- [`:help %`](https://vimhelp.org/motion.txt.html#%25) - built-in forward matching, including `#if/#else/#endif`.
- [`:help matchit`](https://vimhelp.org/matchit.txt.html#matchit) - overview of the standard `matchit` plugin.
- [`:help g%`](https://vimhelp.org/matchit.txt.html#g%25) - reverse match cycling.
- [`:help matchit-activate`](https://vimhelp.org/matchit.txt.html#matchit-activate) - loading `matchit` with `:packadd`.
