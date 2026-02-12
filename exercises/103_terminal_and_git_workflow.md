## Kata: Terminal mode and git workflow — `Ctrl-/`, `<Space>gs`, `[h`/`]h`

> **Note**: This kata uses LazyVim default keybindings. Your mappings may differ with other Neovim configurations.

### 1) What these features do (short description)

**Terminal mode:**
- `Ctrl-/` — toggle the floating terminal (LazyVim)
- `<C-\><C-n>` — switch from terminal mode to normal mode (works in any Neovim terminal)
- Inside terminal mode you can run any shell command, then return to editing

**Git integration (via plugins like lazygit, gitsigns):**
- `<Space>gs` — open lazygit (full git UI inside Neovim)
- `]h` — jump to next git hunk (changed block)
- `[h` — jump to previous git hunk
- `<Space>ghr` — reset (revert) the current hunk
- `<Space>ghs` — stage the current hunk
- `<Space>ghp` — preview the current hunk diff

---

### 2) Setup

These drills require:
- A git repository with uncommitted changes (this repo works if you've modified files)
- LazyVim with lazygit and gitsigns installed (default LazyVim extras)

---

### 3) Step-by-step drills

#### Drill A — Toggle the terminal

1. Press `Ctrl-/` — a floating terminal opens
2. Run a command: `ls -la` or `git status`
3. Press `Ctrl-/` again — the terminal hides (it's still running in the background)
4. Press `Ctrl-/` once more — it reappears with your previous session intact

#### Drill B — Terminal normal mode

1. Open the terminal with `Ctrl-/`
2. Run `git log --oneline -10`
3. Press `<C-\><C-n>` — you're now in normal mode inside the terminal buffer
4. Use `j`/`k` to scroll, `yy` to yank a line (e.g., a commit hash)
5. Press `i` or `a` to return to terminal insert mode
6. Press `Ctrl-/` to close

#### Drill C — Open lazygit with `<Space>gs`

1. Press `<Space>gs` — lazygit opens in a floating window
2. Navigate the lazygit UI:
   - `j`/`k` — move between files/changes
   - `<Enter>` — expand a file to see its diff
   - `<Space>` — stage/unstage a file
   - `c` — open the commit dialog
3. Press `q` to close lazygit and return to Neovim

#### Drill D — Navigate git hunks with `]h` and `[h`

Goal: review changes in a file you've modified.

1. Open a file that has uncommitted changes
2. Press `]h` — cursor jumps to the next changed hunk (block of modified lines)
3. Press `]h` again — jumps to the next hunk
4. Press `[h` — jumps back to the previous hunk
5. At any hunk, press `<Space>ghp` to preview the diff for that hunk

#### Drill E — Stage, reset, and review hunks

1. Navigate to a hunk with `]h`
2. Press `<Space>ghs` — stages just this hunk (not the whole file)
3. Navigate to another hunk with `]h`
4. Press `<Space>ghr` — reverts this hunk to the last committed version
5. Press `<Space>ghp` on another hunk to preview before deciding

This gives you `git add -p` style control directly in your editor.

---

### Command reference

| Command | Effect |
|---|---|
| `Ctrl-/` | Toggle floating terminal (LazyVim) |
| `<C-\><C-n>` | Terminal mode → Normal mode |
| `i` or `a` | Normal mode → Terminal mode (inside terminal buffer) |
| `<Space>gs` | Open lazygit |
| `]h` | Next git hunk |
| `[h` | Previous git hunk |
| `<Space>ghs` | Stage current hunk |
| `<Space>ghr` | Reset (revert) current hunk |
| `<Space>ghp` | Preview current hunk diff |
