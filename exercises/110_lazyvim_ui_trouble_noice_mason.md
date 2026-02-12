## Kata: Trouble, Noice, Mason, and Neo-tree — LazyVim UI tools

> **Note**: This kata covers LazyVim-specific UI plugins. Keybindings may differ in other configurations.

---

### 1) Trouble — diagnostics and list navigation

Trouble provides a structured, persistent window for navigating diagnostics, quickfix entries, TODOs, and LSP references.

- `<Space>xx` — toggle Trouble (diagnostics for current buffer)
- `<Space>xX` — toggle Trouble (workspace diagnostics)
- `<Space>xL` — toggle Trouble (location list)
- `<Space>xQ` — toggle Trouble (quickfix list)
- `<Space>w<` / `<Space>w>` — resize the Trouble window (or any split)
- `]q` / `[q` — next/prev Trouble or quickfix entry (works from any buffer)

#### Drill A — View and navigate diagnostics

1. Open a file with LSP errors (e.g., a TypeScript file with type errors)
2. Press `<Space>xx` — Trouble opens at the bottom showing diagnostics
3. Use `j`/`k` to browse entries in the Trouble window
4. Press `<Enter>` on an entry to jump to that location
5. Press `<Space>w<` or `<Space>w>` to resize the Trouble window if it's too small or large

#### Drill B — Resize the Trouble window

1. With Trouble open, the window might be too small to read long messages
2. Press `<Space>w>` repeatedly to widen it (or increase height for bottom splits)
3. Press `<Space>w<` to shrink it back
4. Alternatively, use `Ctrl-W +` / `Ctrl-W -` for height, `Ctrl-W >` / `Ctrl-W <` for width

---

### 2) Noice — notification and message history

Noice replaces Vim's default messages, command line, and popups with modern floating UI. You can search through past notifications.

- `<Space>sn` — open Noice search menu
- `<Space>sna` — show all notifications
- `<Space>snl` — show last notification
- `<Space>snd` — dismiss all visible notifications

#### Drill C — Browse notification history

1. Run several commands that produce messages (e.g., `:w`, `:s/foo/bar/g`, `:!echo test`)
2. Press `<Space>sn` — the Noice menu opens
3. Press `a` to see all past notifications
4. Browse through the history — useful for finding error messages that flashed by too quickly
5. Press `<Esc>` to close

#### Drill D — Dismiss and review

1. If a notification popup is blocking your view, press `<Space>snd` to dismiss all
2. Later, use `<Space>snl` to review the last notification you dismissed

---

### 3) Mason — LSP/formatter/linter package manager

Mason manages external tools (language servers, formatters, linters, debuggers) from inside Neovim.

- `<Space>cm` — open Mason
- `i` — install the package under the cursor
- `X` — uninstall the package under the cursor
- `Shift-U` — update all installed packages
- `g?` — show help for Mason keybindings

#### Drill E — Install a new tool

1. Press `<Space>cm` — Mason opens, showing categories of tools
2. Browse the list — installed tools are marked with a checkmark
3. Navigate to a tool you want (e.g., `prettier`, `eslint`, `black`)
4. Press `i` to install it
5. Wait for the installation to complete (shown in the status line)
6. Press `q` to close Mason

#### Drill F — Update all tools

1. Press `<Space>cm` to open Mason
2. Press `Shift-U` — Mason checks for and installs updates for all tools
3. Press `q` to close when done

---

### 4) Neo-tree — File explorer and project navigation

Neo-tree is the file explorer sidebar, useful for browsing project structure.

- `<Space>e` — toggle Neo-tree (file explorer)
- `<Space>E` — toggle Neo-tree (cwd)
- Inside Neo-tree: `a` (add file), `d` (delete), `r` (rename), `c` (copy), `m` (move)

#### Drill G — Browse and open files

1. Press `<Space>e` — Neo-tree opens on the left side
2. Use `j`/`k` to navigate the file tree
3. Press `<Enter>` to open a file or expand a directory
4. Press `a` to create a new file — type the filename and press `<Enter>`
5. Press `<Space>e` again to close Neo-tree

---

### Command reference

| Command | Effect |
|---|---|
| `<Space>xx` | Toggle Trouble (buffer diagnostics) |
| `<Space>xX` | Toggle Trouble (workspace diagnostics) |
| `<Space>w<` / `<Space>w>` | Resize split window |
| `]q` / `[q` | Next / prev Trouble/quickfix entry |
| `<Space>sn` | Noice search menu |
| `<Space>sna` | All notifications |
| `<Space>snl` | Last notification |
| `<Space>snd` | Dismiss notifications |
| `<Space>cm` | Open Mason |
| `i` / `X` | Install / uninstall (in Mason) |
| `Shift-U` | Update all tools (in Mason) |
| `<Space>e` | Toggle Neo-tree file explorer |
