## Kata: `:bd` — Close and manage buffers

### 1) What these commands do (short description)

Buffers are Vim's in-memory copies of files. When you open a file, it becomes a buffer. Closing a window doesn't close the buffer — it stays in memory. These commands manage buffer lifecycle:

- `:bd` (`:bdelete`) — delete/close a buffer (removes it from the buffer list)
- `:bd!` — force-close a buffer, discarding unsaved changes
- `:bw` (`:bwipeout`) — completely wipe a buffer (stronger than `:bd`, also clears marks and options)
- `:{n}bd` — close buffer number `{n}`
- `:bd file.txt` — close the buffer for `file.txt`
- `:%bd` — close all buffers

---

### 2) Setup

Open several files for these drills. From this repository:

```
nvim exercises/001_*.md exercises/002_*.md exercises/003_*.md exercises/004_*.md
```

---

### 3) Step-by-step drills

#### Drill A — List open buffers

1. Run `:ls<Enter>` — shows all open buffers with their numbers
2. Note the buffer numbers and which one is active (marked with `%a`)
3. Run `:buffers<Enter>` — same as `:ls`, just an alias

#### Drill B — Close the current buffer with `:bd`

1. You're viewing one of the exercise files
2. Type `:bd<Enter>` — the current buffer is closed
3. Vim switches to the next buffer automatically
4. Run `:ls<Enter>` — the closed buffer is gone from the list

#### Drill C — Close a specific buffer by number

1. Run `:ls<Enter>` to see buffer numbers
2. Note a buffer number you want to close (e.g., buffer 3)
3. Type `:3bd<Enter>` — closes buffer 3 without switching to it first
4. Run `:ls<Enter>` — buffer 3 is gone

#### Drill D — Close a buffer with unsaved changes

1. Open a buffer and make a change (e.g., type `itest<Esc>`)
2. Type `:bd<Enter>` — Vim refuses: `E89: No write since last change`
3. Type `:bd!<Enter>` — force-closes the buffer, discarding changes

#### Drill E — Close all buffers except current

1. Open several files
2. Type `:%bd<Enter>` — closes all buffers (you'll end up in an empty buffer)
3. To close all **except** the current one, use: `:%bd | e#<Enter>`
   - `%bd` closes everything, `e#` reopens the alternate (last) file

#### Drill F — Close buffers by name

1. Run `:ls<Enter>` to see buffer names
2. Type `:bd 001<Tab>` — Tab-completes to the full filename
3. Press `<Enter>` — closes that specific buffer

---

### Command reference

| Command | Effect |
|---|---|
| `:ls` / `:buffers` | List all buffers |
| `:bd` | Close current buffer |
| `:bd!` | Force-close current buffer (discard changes) |
| `:bd {name}` | Close buffer by filename |
| `:{n}bd` | Close buffer by number |
| `:bw` | Wipeout buffer (stronger than `:bd`) |
| `:%bd` | Close all buffers |
| `:%bd \| e#` | Close all buffers except the current one |
| `:bn` / `:bp` | Next / previous buffer |
