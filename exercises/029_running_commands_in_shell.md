# Kata: Filter Buffer Text Through the Shell

> **Environment:** Vim or Neovim on Unix-like systems
> **Dependencies:** POSIX `sort`; confirm `:echo executable('sort')` prints `1`.

## Objective
Use `:!`, `:read !`, and range `!` to run a command without replacing text, insert its output, and filter selected lines. Success means producing the exact sorted fixture while leaving its header unchanged.

## Initial Fixture

```text
name,team
Zoe,blue
Amy,amber
Ian,cyan
```

Use an unnamed scratch buffer. Start in Normal mode on line 1.

## Tasks

### Drill A - Run without editing
Run `printf shell-ready` through the shell. **Verify:** the message contains `shell-ready` and the buffer is unchanged.

### Drill B - Read output
Append one line containing `generated` using shell output. **Verify:** line 5 is exactly `generated`.

### Drill C - Filter a range
Reset, then sort only data lines by the second comma-separated field. **Verify:** the buffer is:

```text
name,team
Amy,amber
Zoe,blue
Ian,cyan
```

### Challenge
Repeat Drill C using a Visual-line selection rather than a numeric range.

## Hints

<details><summary>Hints</summary>

`:!` displays output; `:read !` inserts output; `[range]!` replaces a range with filtered output.

</details>

## Solution

<details><summary>Show exact commands</summary>

- A: `:!printf shell-ready<CR>`
- B: `G:read !printf generated<CR>`
- C: `:2,4!sort -t, -k2,2<CR>`
- Challenge: `jV2j:!sort -t, -k2,2<CR>`

</details>

## Reset and Cleanup
Use `:enew!` and restore the fixture. Close the scratch buffer with `:bwipeout!`. Shell filters replace text, so never practise them on unsaved user data.

## Notes and Portability

- LazyVim note: terminal toggles and picker commands are optional conveniences. Verify any shell-related mapping with `:verbose nmap <leader>ft`, `:verbose nmap <leader>fT`, or the exact keys from your config before relying on it.
- Safety: prefer deterministic commands such as `printf` and `sort` in katas; avoid time-, network-, or project-mutating commands unless the setup creates a disposable target.

## Command Reference

| Command | Effect |
|---|---|
| `:!cmd` | Run `cmd`; do not insert output |
| `:read !cmd` | Insert command output below the addressed line |
| `:[range]!cmd` | Replace range with filtered output |

## References
- [`:help :!`](https://vimhelp.org/change.txt.html#%3A%21)
- [`:help :read!`](https://vimhelp.org/insert.txt.html#%3Aread%21)
