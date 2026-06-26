# Kata: Execute One Normal Command from Terminal Mode

> **Environment:** Neovim.
> **Dependencies:** `/bin/sh` and `cat`.
> **Portability:** Uses Neovim terminal-mode key `<C-\><C-o>`.

## Objective

By the end of this kata, you will be able to execute exactly one Normal-mode
command from Terminal mode with `<C-\><C-o>` and then continue typing into the
terminal job immediately.

Success means: you can move once in terminal scrollback and then send more
text to `cat` without separately re-entering Terminal mode.

## Prerequisites

- Know: how to leave Terminal mode with `<C-\><C-n>`.
- Required option/state: none.
- Required external tool/plugin: a POSIX shell and `cat`.
- Readiness check: run `:echo has('terminal') && executable('sh') && executable('cat')`
  and confirm it prints `1`.

## Setup

1. Open a fresh Neovim window for the kata.
2. Run:

```vim
:terminal sh -c "printf 'alpha\nbeta\ngamma\n'; exec cat"
```

3. Wait until the terminal buffer shows the three seeded lines.
4. Stay in Terminal mode with the cursor at the live input line.

## Initial Fixture

The terminal buffer should contain at least:

```text
alpha
beta
gamma
```

Start in Terminal mode at the live `cat` prompt after those lines.

## Constraints

- Use `<C-\><C-o>` for the single navigation command in each drill.
- Do not use `<C-\><C-n>` until a drill explicitly asks for it.
- Type fresh text only after the one Normal command has returned you to
  Terminal mode.

## Tasks

### Drill A - Move once, then keep typing

**Goal:** move up one line in scrollback and immediately resume terminal input.

1. Press `<C-\><C-o>k`.
2. Type `delta` and press `<CR>`.

**Verify:** a new line `delta` appears at the bottom of the terminal output,
showing you returned to Terminal mode automatically.

### Drill B - Use a different one-shot Normal command

**Goal:** jump to the top of the terminal buffer once, then keep typing.

1. Press `<C-\><C-o>gg`.
2. Type `epsilon` and press `<CR>`.

**Verify:** `epsilon` is appended as a new terminal line without pressing `i`
or `a`.

### Drill C - Contrast one-shot Normal mode with a full exit

**Goal:** see the difference between temporary and full Normal-mode entry.

1. Press `<C-\><C-n>`.
2. Press `G`.
3. Re-enter Terminal mode with `i`.
4. Type `zeta` and press `<CR>`.

**Verify:** `zeta` appears, but this time you had to re-enter Terminal mode
manually after a full Normal-mode exit.

### Challenge - Bounce through scrollback once

From Terminal mode, move once in scrollback with `<C-\><C-o>`, then send one
more line to `cat` without using `i`, `a`, or `<C-\><C-n>`.

**Verify:** the new line appears at the bottom of the terminal output and no
extra mode-switch command was needed.

## Hints

<details>
<summary>Hint 1</summary>

`<C-\><C-o>` behaves like Insert mode's `<C-o>`: one Normal command, then
automatic return.

</details>

<details>
<summary>Hint 2</summary>

Commands like `k`, `gg`, and `G` each count as one Normal command after
`<C-\><C-o>`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `<C-\><C-o>k`
2. `delta<CR>`

### Drill B

1. `<C-\><C-o>gg`
2. `epsilon<CR>`

### Drill C

1. `<C-\><C-n>`
2. `G`
3. `i`
4. `zeta<CR>`

### Challenge

`<C-\><C-o>komega<CR>`

</details>

## Reset and Cleanup

- Between drills: reopen the terminal command if you want the original seeded
  output again.
- After the kata: stop input with `<C-\><C-n>` and close the terminal buffer
  with `:bd!`.
- Preserve user data: the terminal runs only a throwaway `cat` process.

## Notes and Portability

- `<C-\><C-o>` is specific to Neovim terminal buffers, not regular shell
  terminals.
- This kata uses `cat` because it echoes whatever you type, making the return
  to Terminal mode obvious.
- LazyVim note: terminal toggle mappings are optional and may open floating or split terminals. Verify them with `:verbose nmap <leader>ft` or the exact keys in your config before use.
- Safety: stop the throwaway job with `exit` or `<C-d>` before force-closing the terminal buffer; avoid running long-lived project commands in this drill.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-\><C-o>{cmd}` | Terminal | Execute one Normal-mode command, then return to Terminal mode. |
| `<C-\><C-n>` | Terminal | Leave Terminal mode for full Normal-mode control. |
| `i` | Normal (terminal buffer) | Re-enter Terminal mode. |

## References

- [`:help terminal-input`](https://vimhelp.org/terminal.txt.html#terminal-input) - terminal-mode input behavior.
- [`:help t_CTRL-\_CTRL-O`](https://vimhelp.org/terminal.txt.html#t_CTRL-%5C_CTRL-O) - one-shot Normal command from Terminal mode.
- [Neovim help: `terminal`](https://neovim.io/doc/user/terminal.html#terminal) - terminal buffer behavior.
