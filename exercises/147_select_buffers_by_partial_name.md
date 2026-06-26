# Kata: Select Buffers by Partial Name

> **Environment:** Vim or Neovim; built-in commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in buffer-list commands `:ls` and `:buffer {bufname}`. Partial names work only when the fragment is unique among listed buffers.

## Objective

By the end of this kata, you will be able to switch to a listed buffer with `:buffer {partial-name}` after identifying a unique fragment in `:ls`.

Success means: from a group of similarly named buffers, you can choose the target with a short unique fragment instead of a buffer number or the full name.

## Prerequisites

- Know: basic Ex commands and how to read `:ls`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: open a separate throwaway session and confirm `:echo bufnr('$')` prints `1`.

## Setup

1. In the fresh session, create four scratch buffers in this exact order:
   - `:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-alpha-notes.txt`
   - `:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-alpha-tests.txt`
   - `:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-beta-notes.txt`
   - `:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-beta-tests.txt`
2. Put this exact two-line text into each buffer and mark it unmodified with `:setlocal nomodified`:

```text
buffer practice
safe scratch
```

3. Return to the first buffer with `:buffer kata-alpha-notes.txt`.
4. Confirm all of the following:
   - `:echo bufname('%')` prints `kata-alpha-notes.txt`.
   - `:echo mode()` prints `n`.
   - `:ls` shows exactly these four listed buffer names and no others created by this kata.

## Initial Fixture

Use the four scratch buffers from Setup. Each buffer must contain exactly:

```text
buffer practice
safe scratch
```

Start in Normal mode in `kata-alpha-notes.txt`. Do not change the buffer text during this kata.

## Constraints

- Use `:ls` to inspect the buffer list and `:buffer {partial-name}` to switch.
- Do not use buffer numbers, `:bnext`, `:bprevious`, the mouse, or tab completion.
- Do not type the full buffer name in the final switching step of any drill.
- Reset to the documented setup before each drill unless the drill says otherwise.

## Tasks

### Drill A - Isolate the skill

**Goal:** switch from one `alpha` buffer to the other by unique fragment.

1. Starting in `kata-alpha-notes.txt`, inspect `:ls`.
2. Visit `kata-alpha-tests.txt` using a unique partial name rather than its full name.

**Verify:** `:echo bufname('%')` prints `kata-alpha-tests.txt`.

### Drill B - Add precision or repetition

**Goal:** use the shortest unique fragment that selects a similar `beta` buffer.

1. Reset to the setup state.
2. Visit `kata-beta-notes.txt` using a unique fragment that does not include `.txt`.

**Verify:** `:echo bufname('%')` prints `kata-beta-notes.txt`.

### Drill C - Apply the workflow

**Goal:** move between similar names without falling back to numbers.

1. Reset to the setup state.
2. Visit `kata-beta-tests.txt` with a unique fragment.
3. From there, return to `kata-alpha-notes.txt` with another unique fragment.

**Verify:** `:echo bufname('%')` prints `kata-alpha-notes.txt`.

### Challenge - Recall without prompts

Reset to the setup state. Starting in `kata-alpha-notes.txt`, visit `kata-alpha-tests.txt`, then `kata-beta-tests.txt`, then `kata-beta-notes.txt`, using only unique partial names.

**Verify:** `:echo bufname('%')` prints `kata-beta-notes.txt`, and `:ls` still shows the same four scratch buffers.

## Expected Final State

After the challenge, verify all of the following:

- `:echo bufname('%')` prints `kata-beta-notes.txt`.
- `:ls` still lists `kata-alpha-notes.txt`, `kata-alpha-tests.txt`, `kata-beta-notes.txt`, and `kata-beta-tests.txt`.
- Every buffer still contains only `buffer practice` and `safe scratch`.

## Hints

<details>
<summary>Hint 1</summary>

The fragment can match anywhere in the buffer name, but it must be unique among listed buffers.

</details>

<details>
<summary>Hint 2</summary>

`alpha` and `beta` are not enough on their own here. Add just enough of the suffix to disambiguate the target.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:ls` - inspect the four similarly named listed buffers.
2. `:buffer alpha-t` - visit `kata-alpha-tests.txt` by unique fragment.

### Drill B

1. `:buffer beta-n` - visit `kata-beta-notes.txt` by the shortest unique fragment in this fixture.

### Drill C

1. `:buffer beta-t` - visit `kata-beta-tests.txt`.
2. `:buffer alpha-n` - return to `kata-alpha-notes.txt`.

### Challenge

`:buffer alpha-t`
`:buffer beta-t`
`:buffer beta-n`

Each fragment is unique within the listed buffer names created by setup, so Vim or Neovim resolves it to the intended target without needing a number.

</details>

## Reset and Cleanup

- Between drills: restore the setup buffer list and return to `kata-alpha-notes.txt`.
- After the kata: run `:silent! bwipeout! kata-alpha-notes.txt`, `:silent! bwipeout! kata-alpha-tests.txt`, `:silent! bwipeout! kata-beta-notes.txt`, and `:silent! bwipeout! kata-beta-tests.txt`.
- Preserve user data: use a separate throwaway session and only scratch buffers with `buftype=nofile` and `noswapfile`.

## Notes and Portability

- Built-in behavior: partial buffer names are supported in both Vim and Neovim.
- Uniqueness rule: if the fragment matches more than one listed buffer, the command is ambiguous and will not select the intended target reliably.
- Naming edge case: a buffer whose name is only digits must be referenced by buffer number, not by that name.
- Escaping edge case: names with spaces require backslashes before the spaces.
- LazyVim note: buffer pickers make fuzzy partial selection interactive. Verify the active mapping with `:verbose nmap <leader>,`; provider-internal selection keys vary, so do not assume a specific key for bulk actions.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:ls` | Command-line | List the current buffers and their numbers, flags, and names. |
| `:buffer {partial-name}` | Command-line | Visit the unique listed buffer whose name matches the fragment. |
| `:buffer alpha-t` | Command-line | Example of selecting `kata-alpha-tests.txt` by fragment. |

## References

- [`:help :buffer`](https://vimhelp.org/windows.txt.html#%3Abuffer) - buffer switching command.
- [`:help {bufname}`](https://vimhelp.org/windows.txt.html#%7Bbufname%7D) - unique partial-name matching rules and edge cases.
- [`:help :ls`](https://vimhelp.org/windows.txt.html#%3Als) - inspecting the buffer list before choosing a fragment.
