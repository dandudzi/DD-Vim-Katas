## Kata: Location list — The per-window alternative to quickfix

### 1) What the location list is (short description)

The location list works like the quickfix list (kata 084), but it's **per-window** instead of global:

- Each window can have its own location list
- Opening a new window gets a fresh location list
- The quickfix list is shared across all windows

This is useful when you want to keep one set of results in the quickfix list while working with a different set in your current window.

Key commands (mirror the quickfix commands with `l` prefix):

- `:lopen` — open the location list window
- `:lclose` — close the location list window
- `:lnext` (`:ln`) — jump to the next entry
- `:lprev` (`:lp`) — jump to the previous entry
- `]l` / `[l` — next/prev location entry (common mapping)

---

### 2) Setup

Use the exercises in this repository for these drills.

---

### 3) Step-by-step drills

#### Drill A — Populate a location list with `:lvimgrep`

1. Open any exercise file
2. Run `:lvimgrep /the/ %<Enter>` — searches the current file, populates the location list
3. Run `:lopen<Enter>` — the location list window opens (looks like quickfix but says "Location List")
4. Press `<Enter>` on any entry to jump to that match

#### Drill B — Navigate with `:ln` and `:lp`

1. After populating the location list (Drill A), close it: `:lclose<Enter>`
2. Type `:ln<Enter>` — jumps to the next location entry
3. Type `:ln<Enter>` — next entry
4. Type `:lp<Enter>` — previous entry
5. Type `:lfirst<Enter>` — first entry
6. Type `:llast<Enter>` — last entry

#### Drill C — Location list vs quickfix: independence

Goal: show that each is independent.

1. Populate the quickfix list: `:vimgrep /cursor/ exercises/*.md<Enter>`
2. Populate the location list: `:lvimgrep /motion/ exercises/*.md<Enter>`
3. Open both:
   - `:copen<Enter>` — shows "cursor" matches (quickfix)
   - `:lopen<Enter>` — shows "motion" matches (location list)
4. Navigate with `:cn` for quickfix, `:ln` for location list — they're independent

#### Drill D — Per-window location lists

1. Open a split: `:vsplit<Enter>`
2. In the left window, run `:lvimgrep /search/ exercises/*.md<Enter>`
3. In the right window (switch with `Ctrl-W l`), run `:lvimgrep /visual/ exercises/*.md<Enter>`
4. Each window has its own location list:
   - In the left window: `:lopen<Enter>` shows "search" results
   - In the right window: `:lopen<Enter>` shows "visual" results

#### Drill E — LSP diagnostics and the location list

Many LSP integrations use the location list for diagnostics:

1. With an LSP server running, errors and warnings may populate the location list
2. Use `:lopen<Enter>` to see diagnostics for the current window
3. Use `:ln<Enter>` / `:lp<Enter>` to jump between diagnostic locations
4. Fix each issue, then `:ln<Enter>` to move to the next

This keeps your quickfix list free for search results while diagnostics stay in the location list.

---

### Command reference

| Location list | Quickfix equivalent | Effect |
|---|---|---|
| `:lopen` | `:copen` | Open the list window |
| `:lclose` | `:cclose` | Close the list window |
| `:ln` (`:lnext`) | `:cn` (`:cnext`) | Next entry |
| `:lp` (`:lprev`) | `:cp` (`:cprev`) | Previous entry |
| `:lfirst` | `:cfirst` | First entry |
| `:llast` | `:clast` | Last entry |
| `:lvimgrep /pat/ file` | `:vimgrep /pat/ file` | Search and populate |
| `:ldo {cmd}` | `:cdo {cmd}` | Run cmd on each entry |
| `]l` / `[l` | `]q` / `[q` | Next/prev (mapped) |
