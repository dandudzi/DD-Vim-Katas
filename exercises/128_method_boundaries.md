# Kata: Jump to Method Starts and Ends

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode motions `[m`, `]m`, `[M`, and `]M`. The fixture is Java-like because these motions assume a class with brace-delimited methods.

## Objective

By the end of this kata, you will be able to jump to previous or next method starts and ends with `[m`, `]m`, `[M`, and `]M`.

Success means: from inside a method body, you can land on the correct opening or closing brace without using search.

## Prerequisites

- Know: `G` and how to place the cursor on an exact line.
- Required option/state: `:set filetype=java`
- Required external tool/plugin: none.
- Readiness check: run `:set filetype?` and confirm `filetype=java`.

## Setup

1. Open a new scratch buffer with `:enew`.
2. Run `:setlocal filetype=java`.
3. Insert the fixture exactly as shown below.
4. Put the cursor on the `r` in `return 1;` on line 3, column 9.
5. Confirm `:echo line('.') . ',' . col('.')` prints `3,9`.

## Initial Fixture

Create a new buffer and insert exactly:

```java
class Sample {
    int sum() {
        return 1;
    }

    int min() {
        return 2;
    }

    int max() {
        return 3;
    }
}
```

Start in Normal mode on the `r` in `return 1;` on line 3. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `[m`, `]m`, `[M`, and `]M` for the final landing in each drill.
- Do not use `/`, `?`, `%`, `[[`, `]]`, `[{`, `]}`, or the mouse.
- Reset to the documented start state before each drill unless the drill says otherwise.

## Tasks

### Drill A - Isolate the skill

**Goal:** jump to the next method start.

1. From the documented start in `sum`, jump to the start of the next method.

**Verify:** the cursor is on the `{` in `int min() {`, and `:echo line('.') . ',' . col('.')` prints `6,15`.

### Drill B - Add precision or repetition

**Goal:** skip directly to a later method start with one counted motion.

1. Reset to line 3, column 9 on the `r` in `return 1;`.
2. Jump directly to the opening brace of the third method with one counted method-start motion.

**Verify:** the cursor is on the `{` in `int max() {`, and `:echo line('.') . ',' . col('.')` prints `10,15`.

### Drill C - Apply the workflow

**Goal:** move to the previous method end.

1. Reset the fixture.
2. Put the cursor on the `r` in `return 3;` on line 11, column 9.
3. Jump to the end of the previous method.

**Verify:** the cursor is on the `}` that closes `min`, and `:echo line('.') . ',' . col('.')` prints `8,5`.

### Challenge - Recall without prompts

Reset the fixture. Put the cursor on the `r` in `return 2;` on line 7, column 9. Jump to the end of the current method, then jump to the start of the next method, using only method-boundary motions.

**Verify:** the final cursor position is on the `{` in `int max() {`, `:echo line('.') . ',' . col('.')` prints `10,15`, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

```java
class Sample {
    int sum() {
        return 1;
    }

    int min() {
        return 2;
    }

    int max() {
        return 3;
    }
}
```

## Hints

<details>
<summary>Hint 1</summary>

The lowercase motions land on method starts, and the uppercase motions land on method ends.

</details>

<details>
<summary>Hint 2</summary>

These motions land on braces, not on the method name. Counts apply to the motion itself.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `]m` - jump to the next method start, landing on the `{` for `min`.

### Drill B

1. `2]m` - skip two method starts ahead, landing on the `{` for `max`.

### Drill C

1. `[M` - jump to the previous method end, landing on the `}` for `min`.

### Challenge

`]M]m`

`]M` lands on the `}` that closes `min`, and `]m` moves from there to the `{` that opens `max`.

</details>

## Reset and Cleanup

- Between drills: restore the documented cursor position for that drill.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: these motions are built into Vim and Neovim.
- Structural assumption: the help text assumes a class surrounded by `{` and `}` and methods also surrounded by `{` and `}`.
- Landing detail: `[m` and `]m` land on opening `{`; `[M` and `]M` land on closing `}`.
- This fixture uses Java-like syntax so the brace structure matches the documented method model exactly.
- LazyVim note: Treesitter and `mini.ai` can expose function or method text objects that select a whole method rather than jumping to its brace. Verify those objects with `:verbose omap`/`:verbose xmap` before use; they complement these built-in boundary motions rather than replacing them.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `]m` | Normal | Jump to the next method start. |
| `[m` | Normal | Jump to the previous method start. |
| `]M` | Normal | Jump to the next method end. |
| `[M` | Normal | Jump to the previous method end. |
| `{count}]m` | Normal | Jump forward by `count` method starts. |
| `{count}[M` | Normal | Jump backward by `count` method ends. |

## References

- [`:help ]m`](https://vimhelp.org/motion.txt.html#%5Dm) - next method start.
- [`:help [m`](https://vimhelp.org/motion.txt.html#%5Bm) - previous method start.
- [`:help ]M`](https://vimhelp.org/motion.txt.html#%5DM) - next method end.
- [`:help [M`](https://vimhelp.org/motion.txt.html#%5BM) - previous method end.
