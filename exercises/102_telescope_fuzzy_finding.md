## Kata: Telescope fuzzy finding — `<Space>ss`, `<Space>/`, `<Space>,`

> **Note**: This kata uses LazyVim default keybindings. If you use a different Neovim config, your mappings may differ. The concepts (fuzzy-find symbols, live grep, buffer picker) apply to any Telescope setup.

### 1) What Telescope does (short description)

Telescope is a fuzzy finder plugin for Neovim. In LazyVim, the key pickers are:

- `<Space>sf` — find files by name
- `<Space>ss` — search document symbols (functions, classes, variables in current file)
- `<Space>sS` — search workspace symbols (across the entire project)
- `<Space>/` — live grep (search file contents across the project)
- `<Space>,` — open buffer picker (switch between open files)
- `<Space>sr` — resume the last Telescope picker

Inside any picker:
- Type to filter results
- `Ctrl-N` / `Ctrl-P` (or arrow keys) — move up/down
- `<Enter>` — select and open
- `<Esc>` — close the picker

---

### 2) Setup

These drills work best in a project with multiple files. Use this repository or any codebase.

---

### 3) Step-by-step drills

#### Drill A — Find files with `<Space>sf`

Goal: quickly open a file without knowing its exact path.

1. Press `<Space>sf` — the file finder opens
2. Type `quick` — the list filters to files containing "quick" in their path
3. Use `Ctrl-N`/`Ctrl-P` to select the right file
4. Press `<Enter>` to open it

Tip: you can type fragments out of order. `084 quick` and `quick 084` both match `084_quickfix_list.md`.

#### Drill B — Search symbols with `<Space>ss`

Goal: jump to a function or heading in the current file.

1. Open a file with multiple functions or headings
2. Press `<Space>ss` — lists all symbols (functions, classes, headings)
3. Type a few characters of the function name
4. Press `<Enter>` to jump to it

This is faster than scrolling or searching with `/`.

#### Drill C — Search project symbols with `<Space>sS`

Goal: find a function anywhere in the project.

1. Press `<Space>sS` — searches symbols across all project files
2. Type the function or class name
3. Select and press `<Enter>` to jump to its definition
4. Press `Ctrl-O` to jump back

#### Drill D — Live grep with `<Space>/`

Goal: search for a string across all files.

1. Press `<Space>/` — the live grep picker opens
2. Type `quickfix` — results update as you type, showing every file and line containing "quickfix"
3. Use `Ctrl-N`/`Ctrl-P` to browse results
4. Press `<Enter>` to jump to a result

Tip: after the search term, type a space then a filename fragment to narrow by file. For example: `quickfix exercises` limits results to the exercises directory.

#### Drill E — Switch buffers with `<Space>,`

Goal: quickly switch between open files.

1. Open several files (use `<Space>sf` to open 3-4 files)
2. Press `<Space>,` — shows all open buffers
3. Type a few characters of the filename you want
4. Press `<Enter>` to switch to it

This is much faster than `:bnext`/`:bprev` cycling.

---

### Command reference (LazyVim defaults)

| Keybinding | Picker | Effect |
|---|---|---|
| `<Space>sf` | Find files | Fuzzy-find files by name |
| `<Space>ss` | Document symbols | Symbols in current file |
| `<Space>sS` | Workspace symbols | Symbols across project |
| `<Space>/` | Live grep | Search contents across files |
| `<Space>,` | Buffers | Switch open buffers |
| `<Space>sr` | Resume | Reopen last picker |
| `<Space>s"` | Registers | Browse registers |
| `Ctrl-N`/`Ctrl-P` | — | Navigate picker results |
| `<Enter>` | — | Open selected item |
| `<Esc>` | — | Close picker |
