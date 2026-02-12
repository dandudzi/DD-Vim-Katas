## Kata: Grug-far `<Space>sr` and picker exports `Ctrl-q`/`Alt-t`

> **Note**: This kata requires LazyVim with the Grug-far plugin and Telescope/fzf-lua. Keybindings may differ in other configurations.

### 1) What these do (short description)

**Grug-far** (`<Space>sr`) is a search-and-replace UI that lets you:
- Search across your entire project with a visual interface
- Preview replacements before applying them
- Replace in specific files, directories, or file types

**Picker exports** (`Ctrl-q` / `Alt-t`) let you send results from any Telescope picker to a structured list:
- `Ctrl-q` — send picker results to the **quickfix list**
- `Alt-t` — send picker results to **Trouble**

This turns any search into an actionable list you can navigate and process.

---

### 2) Setup

Use this repository or any project with multiple files.

---

### 3) Step-by-step drills

#### Drill A — Open Grug-far

1. Press `<Space>sr` — the Grug-far split opens
2. You see input fields for: **Search**, **Replace**, **Files filter**, **Paths**
3. The cursor starts in the Search field

#### Drill B — Search and replace across project

1. In the Grug-far window, type your search term (e.g., `cursor`)
2. Results appear live below, showing every match with file and line
3. Move to the Replace field (Tab or click) and type the replacement (e.g., `caret`)
4. Review the preview — each match shows the before/after side by side
5. Press the keybinding to apply all replacements (shown in the Grug-far UI, typically `<Space>r` inside the window)

#### Drill C — Filter by file type

1. Open Grug-far with `<Space>sr`
2. Enter a search term
3. Move to the **Files filter** field
4. Type `*.md` — results are now limited to markdown files
5. Or type `*.ts,*.js` — limits to TypeScript and JavaScript files
6. This is equivalent to `--glob` in ripgrep

#### Drill D — Send Telescope results to quickfix with `Ctrl-q`

Goal: build a quickfix list from a fuzzy search.

1. Open live grep: `<Space>/`
2. Type a search term — results appear
3. Instead of selecting a single result, press `Ctrl-q`
4. All results are sent to the quickfix list
5. The quickfix window opens automatically
6. Navigate with `:cn`/`:cp` or `]q`/`[q`
7. Apply changes with `:cfdo %s/old/new/g | update` (see kata 100)

#### Drill E — Send filtered results to Trouble with `Alt-t`

1. Open symbol search: `<Space>ss`
2. Type to filter (e.g., `function`)
3. Press `Alt-t` — results are sent to the Trouble window
4. The Trouble window opens, showing your filtered results as a navigable list
5. Use `]q`/`[q` to jump between entries from any buffer

#### Drill F — Selective export from pickers

1. Open live grep: `<Space>/`
2. Type a search term
3. Use `Tab` to **select** specific results (not all of them)
4. Press `Ctrl-q` — only the selected results are sent to quickfix
5. This gives you a curated list of locations to work through

---

### Command reference

| Command | Effect |
|---|---|
| `<Space>sr` | Open Grug-far search and replace UI |
| `Ctrl-q` | Send picker results to quickfix list |
| `Alt-t` | Send picker results to Trouble |
| `Tab` | Toggle selection of current picker entry |
| `<Space>/` | Live grep (Telescope) |
| `<Space>ss` | Document symbols (Telescope) |
| `:cfdo %s/old/new/g \| update` | Apply substitution across quickfix files |
