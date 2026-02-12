## Kata: LazyVim extras — Bracket nav, Yanky, scratch buffers, sessions

> **Note**: This kata covers several LazyVim-specific features. Your mappings may differ with other Neovim configurations. Each section is a mini-drill for a different feature.

---

### 1) Bracket navigation — `[d`/`]d`, `[t`/`]t`

LazyVim provides bracket-based navigation for jumping between various items:

- `]d` / `[d` — next/previous diagnostic (error, warning, hint)
- `]t` / `[t` — next/previous TODO comment
- `]q` / `[q` — next/previous quickfix entry
- `]b` / `[b` — next/previous buffer
- `]w` / `[w` — next/previous warning

#### Drill A — Navigate diagnostics

1. Open a file with LSP errors or warnings (e.g., a TypeScript file with type errors)
2. Press `]d` — cursor jumps to the next diagnostic
3. Press `]d` again — jumps to the next one
4. Press `[d` — jumps back to the previous diagnostic
5. At any diagnostic, press `K` to see the error message, or `<Space>cd` to see the diagnostic in a floating window

#### Drill B — Jump between TODOs

1. Open a file containing `TODO` comments
2. Press `]t` — jumps to the next TODO
3. Press `]t` again — next TODO
4. Press `[t` — jumps back
5. This works with `TODO`, `FIXME`, `HACK`, `WARN`, `NOTE` (via todo-comments plugin)

---

### 2) Yanky — Clipboard history with `<Space>p`, `[y`/`]y`

Yanky keeps a history of everything you yank. Instead of losing previous yanks, you can cycle through them:

- `<Space>p` — open the yank history picker (Telescope)
- `]y` — after pasting, cycle forward through yank history (replace paste with next entry)
- `[y` — cycle backward through yank history

#### Drill C — Use yank history

Practice text:

```txt
first line of text
second line of text
third line of text
```

1. Yank each line: go to line 1, `yy`, go to line 2, `yy`, go to line 3, `yy`
2. Paste with `p` — pastes "third line of text" (most recent yank)
3. Press `[y` — the pasted text changes to "second line of text"
4. Press `[y` again — changes to "first line of text"
5. Press `]y` — cycles back to "second line of text"

This is like a clipboard manager built into Vim.

#### Drill D — Browse yank history with Telescope

1. Press `<Space>p` — Telescope opens showing your full yank history
2. Scroll through previous yanks
3. Select one and press `<Enter>` — it's pasted at the cursor position
4. This is useful when you need to paste something you yanked many operations ago

---

### 3) Scratch buffers — `<Space>.`

A scratch buffer is a temporary, throwaway buffer for notes, calculations, or testing snippets:

- `<Space>.` — open (or toggle) a scratch buffer
- The content persists across Neovim sessions (stored in a scratch directory)
- It won't interfere with your working files

#### Drill E — Use a scratch buffer

1. Press `<Space>.` — a scratch buffer opens (usually as a split)
2. Type some notes or paste code you want to test
3. Close it or switch to another buffer — the content is saved
4. Press `<Space>.` again — the scratch buffer reopens with your content still there

Use cases: jotting down a regex before using it, storing a snippet you'll need later, quick calculations.

---

### 4) Sessions — `<Space>qq`, `<Space>qs`

Sessions save your entire Neovim state (open files, window layout, cursor positions) so you can resume exactly where you left off:

- `<Space>qs` — restore the last session for the current directory
- `<Space>qq` — quit Neovim and save the session
- `<Space>ql` — restore the last session (any directory)

#### Drill F — Save and restore a session

1. Open several files, arrange your windows (splits, tabs)
2. Press `<Space>qq` — Neovim saves the session and quits
3. Reopen Neovim in the same directory
4. Press `<Space>qs` — all your files, windows, and cursor positions are restored

---

### Command reference

| Command | Effect |
|---|---|
| `]d` / `[d` | Next / previous diagnostic |
| `]t` / `[t` | Next / previous TODO comment |
| `]q` / `[q` | Next / previous quickfix entry |
| `]b` / `[b` | Next / previous buffer |
| `<Space>p` | Open yank history (Telescope) |
| `]y` / `[y` | Cycle paste through yank history |
| `<Space>.` | Toggle scratch buffer |
| `<Space>qs` | Restore session (current directory) |
| `<Space>qq` | Save session and quit |
| `<Space>ql` | Restore last session (any directory) |
