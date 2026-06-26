# Kata: Operate on Inner and Outer Sentences

> **Environment:** Vim or Neovim; built-in text objects only.
> **Dependencies:** None.
> **Portability:** Uses built-in sentence text objects `is` and `as`. This kata explicitly controls `'cpoptions'` so one space after punctuation counts as a sentence boundary.

## Objective

By the end of this kata, you will be able to target the current sentence with `is` or `as` and predict whether surrounding whitespace is included.

Success means: you can yank, change, or delete the middle sentence and correctly predict the whitespace difference between `is` and `as`.

## Prerequisites

- Know: basic operator motions such as `y`, `d`, and `c`.
- Required option/state: `:set cpoptions-=J`
- Required external tool/plugin: none.
- Readiness check: run `:echo &cpoptions =~# 'J'` and confirm it prints `0`.

## Setup

1. Run `:enew`.
2. Run `:set cpoptions-=J`.
3. Insert the fixture exactly as shown below.
4. Put the cursor on the `B` in `Beta` at line 1, column 20.
5. Confirm `:echo line('.') . ',' . col('.')` prints `1,20`.

## Initial Fixture

Create a new buffer and insert exactly:

```text
Alpha begins here. Beta stays centered. Gamma ends now.
```

Start in Normal mode on the `B` in `Beta`. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `is` or `as` as the final text object in every drill.
- Do not use `/`, `?`, Visual character selection, or manual Insert-mode repair to reach the expected result.
- Reset to the initial fixture before each drill unless the drill explicitly builds on the current buffer.

## Tasks

### Drill A - Isolate the skill

**Goal:** capture the current sentence without any surrounding separator space.

1. From `Beta`, yank the inner sentence with one operator and one text object.

**Verify:** all of the following are true:

- `:echo string(getreg('0'))` prints `'Beta stays centered.'`
- The buffer text is unchanged.

### Drill B - Add precision or repetition

**Goal:** capture the current sentence together with its trailing sentence separator space.

1. Reset to the initial fixture.
2. From `Beta`, yank an outer sentence with one operator and one text object.

**Verify:** all of the following are true:

- `:echo string(getreg('0'))` prints `'Beta stays centered. '`
- The buffer text is unchanged.

### Drill C - Apply the workflow

**Goal:** replace only the sentence content while leaving the neighboring sentence spacing intact.

1. Reset to the initial fixture.
2. From `Beta`, change the inner sentence to `Middle sentence.`.

**Verify:** the buffer becomes exactly:

```text
Alpha begins here. Middle sentence. Gamma ends now.
```

### Challenge - Recall without prompts

Reset the fixture. Delete the middle sentence together with the space that separates it from the following sentence.

**Verify:** the final buffer is exactly:

```text
Alpha begins here. Gamma ends now.
```

## Expected Final State

After the challenge, the buffer content must be:

```text
Alpha begins here. Gamma ends now.
```

Verify all of the following:

- `:echo string(getreg('"'))` prints `'Beta stays centered. '`.
- The remaining two sentences are separated by exactly one space.
- No other text changed.

## Hints

<details>
<summary>Hint 1</summary>

For sentence text objects, `i` excludes surrounding whitespace while `a` includes it.

</details>

<details>
<summary>Hint 2</summary>

When there is whitespace after the sentence, `as` includes that trailing separator instead of the whitespace before the sentence.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `yis` - yank only the current sentence text.

### Drill B

1. `yas` - yank the sentence plus its trailing separator space.

### Drill C

1. `cisMiddle sentence.<Esc>` - replace the current inner sentence and leave surrounding spacing alone.

### Challenge

`das`

Because `as` includes the separator space after the sentence, the remaining text closes up to one space between the surrounding sentences.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, `:set cpoptions-=J`, reinsert the fixture, and return the cursor to line 1, column 20.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: `is` and `as` are standard text objects in Vim and Neovim.
- Sentence boundary detail: with `'cpoptions'` containing `J`, one space after `.`, `!`, or `?` is not enough for a sentence boundary.
- Edge case: abbreviations and punctuation-heavy prose can create surprising sentence boundaries; this kata uses simple full-stop sentences only.
- LazyVim note: `mini.ai` can add custom text objects, but sentence objects `is` and `as` are built in and option-sensitive. Use `:verbose omap is` or `:verbose xmap as` only to diagnose remaps; keep the `'cpoptions'` readiness check for this drill.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `yis` | Normal | Yank the inner sentence without surrounding separator whitespace. |
| `yas` | Normal | Yank the sentence plus trailing or leading separator whitespace. |
| `cis` | Normal | Change the inner sentence. |
| `das` | Normal | Delete the sentence including its separator whitespace. |

## References

- [`:help v_is`](https://vimhelp.org/motion.txt.html#v_is) - inner sentence text object.
- [`:help v_as`](https://vimhelp.org/motion.txt.html#v_as) - outer sentence text object.
- [`:help sentence`](https://vimhelp.org/motion.txt.html#sentence) - sentence boundary rules.
- [`:help cpo-J`](https://vimhelp.org/options.txt.html#cpo-J) - the compatibility flag that changes sentence spacing rules.
