# Kata: Repeat One Substitution at New Scopes

> **Environment:** Vim or Neovim; built-in `:substitute` only.
> **Dependencies:** None.
> **Portability:** Uses built-in repeat forms `:&&` and `g&`. No plugins or mappings are required.

## Objective

By the end of this kata, you will be able to apply one substitution, then repeat that same transform on a new line or across the whole buffer with `:&&` and `g&`.

Success means: you can change every `draft` to `final` while typing the full pattern and replacement only once.

## Prerequisites

- Know: basic `:substitute` usage on the current line.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Put the cursor on the `b` in `build` on line 1, column 1.
4. Confirm Normal mode is active and `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
build draft draft
notes keep
release draft
archive draft draft
```

Start in Normal mode on the `b` in `build` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Type the full `draft` -> `final` substitution only once per drill.
- After the first substitution in a drill, use `:&&` or `g&` for repetitions.
- Do not use `/`, `?`, macros, or manual text edits.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the previous step.

## Tasks

### Drill A - Isolate the local repeat

**Goal:** repeat the same substitution on a different line without retyping the pattern or replacement.

1. On line 1, change every `draft` to `final` with one `:substitute`.
2. Move to line 3 and repeat that same substitution there with `:&&`.

**Verify:** line 1 changes from `build draft draft` to `build final final`, and line 3 changes from `release draft` to `release final`.

### Drill B - Keep the original flags

**Goal:** prove that the repeat keeps the `g` flag from the previous substitution.

1. Reset the fixture.
2. On line 1, change every `draft` to `final`.
3. Move to line 4 and repeat the substitution with `:&&`.

**Verify:** line 4 becomes `archive final final`, not `archive final draft`.

### Drill C - Widen the scope

**Goal:** apply the same substitution to the whole buffer without retyping it.

1. Reset the fixture.
2. On line 1, change every `draft` to `final`.
3. Repeat that same substitution across the whole buffer with `g&`.

**Verify:** the buffer changes from:

```text
build draft draft
notes keep
release draft
archive draft draft
```

to:

```text
build final final
notes keep
release final
archive final final
```

### Challenge - Recall without prompts

Reset the fixture. Starting on line 1, transform every `draft` into `final` across the whole buffer while typing the full substitution only once.

**Verify:** the final buffer text matches the Expected Final State exactly.

## Expected Final State

After the challenge, the buffer content must be:

```text
build final final
notes keep
release final
archive final final
```

## Hints

<details>
<summary>Hint 1</summary>

`:&` repeats the last substitution, but it does not keep flags such as `g`. `:&&` does.

</details>

<details>
<summary>Hint 2</summary>

`g&` is the whole-buffer repeat. Do not run a new search between the first substitution and `g&`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:s/draft/final/g<CR>` - change both `draft` matches on line 1.
2. `3G` - move to line 3.
3. `:&&<CR>` - repeat the same substitution with the same flags on the current line.

### Drill B

1. `:s/draft/final/g<CR>` - perform the original substitution with the `g` flag.
2. `4G` - move to line 4.
3. `:&&<CR>` - keep the original `g` flag, so both matches on line 4 change.

### Drill C

1. `:s/draft/final/g<CR>` - perform the original substitution on line 1.
2. `g&` - repeat that substitution on every line with the same flags.

### Challenge

`:s/draft/final/g<CR>g&`

The first command defines the transform. `g&` repeats it across the whole buffer with the previous substitute flags.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, paste the fixture again, and return to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: `:&&` and `g&` are standard substitute-repeat forms in Vim and Neovim.
- Flag detail: `:&&` keeps the prior substitute flags, while `:&` does not.
- Scope detail: `g&` repeats the last substitution on all lines with the same flags.
- Edge case: `g&` uses the last search pattern. If you run `/something` after the original substitution, `g&` will use that newer search pattern instead.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:s/draft/final/g` | Command-line | Change every `draft` on the current line to `final`. |
| `:&&` | Command-line | Repeat the last substitution on the current line and keep its flags. |
| `g&` | Normal | Repeat the last substitution on all lines with the same flags. |
| `:&` | Command-line | Repeat the last substitution without keeping its flags. |

## References

- [`:help :&`](https://vimhelp.org/change.txt.html#%3A%26) - repeat the last substitution.
- [`:help :&&`](https://vimhelp.org/change.txt.html#%3A%26%26) - keep previous substitute flags when repeating.
- [`:help g&`](https://vimhelp.org/change.txt.html#g%26) - repeat the substitution globally.
- [Neovim help: `:substitute`](https://neovim.io/doc/user/change.html#%3Asubstitute) - substitute command and repeat forms.
