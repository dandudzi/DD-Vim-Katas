## Kata: `q:` and `q/` — The command-line window

### 1) What the command-line window is (short description)

Vim keeps a history of every Ex command (`:`) and search (`/`) you've run. The command-line window lets you browse, edit, and re-run those commands in a full Vim buffer:

- `q:` — open command history window
- `q/` — open search history window
- `Ctrl-C` — close the command-line window without running anything
- `<Enter>` — execute the command under the cursor

Inside the window, you can use all normal-mode editing: `w`, `b`, `ci"`, etc.

---

### 2) Setup

For these drills, you need some command history. Paste this into a buffer first:

```txt
The quick brown fox jumps over the lazy dog.
The quick red fox jumps over the sleepy dog.
The slow brown cat crawls under the lazy dog.
```

Then run a few commands to build up history:
1. `/quick<Enter>`
2. `/brown<Enter>`
3. `:s/dog/cat/<Enter>`
4. `:s/fox/wolf/<Enter>`

---

### 3) Step-by-step drills

#### Drill A — Browse and re-run a command

1. Type `q:` — a window opens at the bottom showing your command history
2. Use `j`/`k` to navigate through past commands
3. Find the `:s/dog/cat/` line
4. Press `<Enter>` — Vim executes that substitution again on the current line

#### Drill B — Edit a command before re-running

1. Type `q:` to open the command window
2. Navigate to the `:s/fox/wolf/` line
3. Use `f/` to jump to the first `/`, then `ci/` or `cw` to change `fox` to `brown`
4. The line now reads `:s/brown/wolf/`
5. Press `<Enter>` to run the modified command

This is much faster than retyping a complex command from scratch.

#### Drill C — Browse search history with `q/`

1. Type `q/` — a window opens showing your search history
2. Navigate to `/quick`
3. Press `<Enter>` — Vim searches for `quick` again and highlights matches
4. Press `n` to step through matches

#### Drill D — Build a complex substitution iteratively

1. Run `:s/quick/slow/<Enter>` — replaces on current line
2. Realize you wanted it global: type `q:`
3. Find the `:s/quick/slow/` entry
4. Press `A` (append), type `g` to make it `:s/quick/slow/g`
5. Press `<Enter>` to run the improved version

#### Drill E — Close without executing

1. Type `q:` to open the command window
2. Navigate around, realize you don't want to run anything
3. Press `Ctrl-C` to close the window and return to your buffer

---

### Command reference

| Command | Effect |
|---|---|
| `q:` | Open command-line history window |
| `q/` | Open search history window |
| `<Enter>` | Execute the line under cursor |
| `Ctrl-C` | Close the command-line window |
| `Ctrl-F` | Switch from `:` prompt to command-line window |
