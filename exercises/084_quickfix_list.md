## Kata: Quickfix list — `:copen`, `:cn`, `:cp`, and friends

### 1) What the quickfix list is (short description)

The quickfix list is a special Vim window that holds a list of locations (file + line number + text). It's used for:

- Search results from `:vimgrep`
- Compiler errors from `:make`
- LSP diagnostics
- Any tool that outputs file:line:message format

Key commands:

- `:copen` — open the quickfix window
- `:cclose` — close the quickfix window
- `:cn` (or `:cnext`) — jump to the next entry
- `:cp` (or `:cprev`) — jump to the previous entry
- `:cfirst` — jump to the first entry
- `:clast` — jump to the last entry
- `]q` / `[q` — next/prev quickfix entry (if mapped, default in many configs)

---

### 2) Setup

For this drill, use the exercises in this repository. You need multiple files with matching content.

---

### 3) Step-by-step drills

#### Drill A — Populate the quickfix list with `:vimgrep`

Goal: search across multiple files and navigate results.

1. From the root of this repository, open Vim
2. Run `:vimgrep /cursor/ exercises/*.md`
   - This searches for "cursor" in all exercise files
3. Run `:copen` — the quickfix window appears at the bottom, showing every match with filename, line number, and matching text
4. Press `<Enter>` on any entry to jump to that location

#### Drill B — Navigate with `:cn` and `:cp`

1. After running the vimgrep above, close the quickfix window with `:cclose`
2. Type `:cn<Enter>` — jumps to the next match
3. Type `:cn<Enter>` — jumps to the next one
4. Type `:cp<Enter>` — jumps back to the previous match
5. Type `:cfirst<Enter>` — jumps to the very first match
6. Type `:clast<Enter>` — jumps to the very last match

#### Drill C — Use the quickfix window interactively

1. Run `:copen` to open the quickfix window
2. Navigate the quickfix window like any buffer — use `j`/`k` to move between entries
3. Press `<Enter>` to jump to the file and line of the selected entry
4. The cursor moves to the target file; the quickfix window stays open
5. Switch back to the quickfix window and select a different entry

#### Drill D — Refine your search

1. Run a new search: `:vimgrep /pattern/ exercises/*.md`
2. Notice the quickfix list is replaced with new results
3. Run `:copen` to see the new list
4. Navigate with `:cn`/`:cp`

#### Drill E — Quickfix with a grep-style search

For more powerful searches, use `:grep` (uses external grep/ripgrep):

1. Run `:grep "visual mode" exercises/`
2. Run `:copen` to see results
3. Navigate with `:cn`/`:cp`

---

### Command reference

| Command | Effect |
|---|---|
| `:vimgrep /pat/ files` | Search files, populate quickfix |
| `:copen` | Open quickfix window |
| `:cclose` | Close quickfix window |
| `:cn` | Next quickfix entry |
| `:cp` | Previous quickfix entry |
| `:cfirst` | First entry |
| `:clast` | Last entry |
| `:cdo s/old/new/g` | Run substitution on every quickfix entry |
