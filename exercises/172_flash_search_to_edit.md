# Kata: Flash Search to Edit

> **Environment:** Neovim with LazyVim or another config using `folke/flash.nvim`.
> **Dependencies:** Flash mapping for Normal mode.
> **Portability:** `s` is a mapping in this kata, not Vim's built-in substitute command. Verify it before use.

## Objective

Use Flash to jump to a visible search target, then apply ordinary Vim edits at the target.

Success means: you can reach a visible token by the label shown in your editor and complete the edit with built-in commands such as `ciw`, `ci"`, and `r`.

## Prerequisites

- Know: `ciw`, `ci"`, `r{char}`, and undo.
- Required option/state: none.
- Required external tool/plugin: `folke/flash.nvim`.
- Readiness check: run `:verbose nmap s` and confirm it reports a Flash jump mapping. If it reports Vim's built-in `s` or another plugin, use that mapping's documentation or skip this kata.

## Setup

1. Open a scratch buffer with `:enew`.
2. Insert the fixture exactly as shown below.
3. Start in Normal mode at line 1, column 1.
4. Confirm `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

```ts
const userName = "Ada";
const userEmail = "ada@example.com";
const retryCount = 3;

sendWelcomeEmail(userName, userEmail);
logMetric("welcome_email_sent", retryCount);
```

Start in Normal mode on the first `c` in `const`.

## Constraints

- Use the checked Flash jump mapping to reach the edit target in every drill.
- Do not use `/`, `?`, `n`, mouse clicks, or line-number jumps for the target jump.
- Do not hard-code labels from another run; press the labels currently displayed.
- Use built-in Vim edits after the jump.

## Tasks

### Drill A - Jump to a word and change it

**Goal:** rename the visible `retryCount` declaration to `maxRetries`.

1. Invoke Flash and type enough of the target text to identify the declaration.
2. Press the displayed label for the declaration, not the later usage.
3. Change the whole word to `maxRetries`.

**Verify:** line 3 is `const maxRetries = 3;`; line 6 still contains `retryCount`.

### Drill B - Jump to a string and change inside it

**Goal:** change the metric name to `welcome_email_delivered`.

1. Reset the fixture.
2. Use Flash to jump to the visible metric string on the final line.
3. Change only the quoted contents.

**Verify:** the final line is `logMetric("welcome_email_delivered", retryCount);`.

### Drill C - Jump to one character and replace it

**Goal:** change the retry count from `3` to `5`.

1. Reset the fixture.
2. Use Flash to jump to the visible `3`.
3. Replace that single character.

**Verify:** line 3 is `const retryCount = 5;` and no other line changed.

### Challenge - Recall without prompts

Reset the fixture. Using Flash for each target jump, change the declaration name to `maxRetries`, change the metric name to `welcome_email_delivered`, and change `3` to `5`.

**Verify:** the final buffer is exactly:

```ts
const userName = "Ada";
const userEmail = "ada@example.com";
const maxRetries = 5;

sendWelcomeEmail(userName, userEmail);
logMetric("welcome_email_delivered", retryCount);
```

## Hints

<details>
<summary>Hint 1</summary>

Flash gets you to the target. Once there, use normal Vim changes.

</details>

<details>
<summary>Hint 2</summary>

Type enough of the target text that the label set is small, then choose the label attached to the intended occurrence.

</details>

## Solution

<details>
<summary>Show command shapes</summary>

### Drill A

1. `sretry` - start Flash and search for the visible declaration text.
2. Press the displayed label attached to `retryCount` on line 3.
3. `ciwmaxRetries<Esc>` - change the word under the cursor.

### Drill B

1. `swelcome` - start Flash and search for the metric text.
2. Press the displayed label attached to the string on the final line.
3. `ci"welcome_email_delivered<Esc>` - replace only the string contents.

### Drill C

1. `s3` - start Flash and search for the visible digit.
2. Press the displayed label attached to the retry count.
3. `r5` - replace that character.

### Challenge

Use the three drill patterns in sequence. The labels are omitted because they depend on the current window, label configuration, and screen state.

</details>

## Reset and Cleanup

- Between drills: use `u` until the fixture is restored, or run `:enew` and paste the fixture again.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: all edits happen in a scratch buffer.

## Notes and Portability

- LazyVim's default keymap page lists Flash on `s` in Normal, Visual, and operator-pending modes, but local config can override it.
- Flash labels are dynamic. Never put a specific label in notes, tests, or muscle-memory drills.
- Flash moves you; it does not replace the built-in editing command you apply after landing.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:verbose nmap s` | Command-line | Show the active Normal-mode `s` mapping source. |
| `s{pattern}{label}` | Normal | Flash jump shape; `{label}` is chosen from the current screen. |
| `ciw` | Normal | Change inner word at the jump target. |
| `ci"` | Normal | Change quoted contents at the jump target. |
| `r{char}` | Normal | Replace the character under the cursor. |

## References

- [LazyVim keymaps](https://www.lazyvim.org/keymaps) - default Flash mapping list.
- [flash.nvim README](https://github.com/folke/flash.nvim) - search labels and jump behavior.
- [`:help change.txt`](https://vimhelp.org/change.txt.html) - built-in change commands used after the jump.
