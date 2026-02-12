## Kata: Diff mode — `]c`, `[c`, `do`, `dp`

### 1) What diff mode does (short description)

Vim can show a side-by-side diff of two files, highlighting additions, deletions, and changes. Key commands:

- `]c` — jump to the **next** change (hunk)
- `[c` — jump to the **previous** change
- `do` — **diff obtain** — pull the change from the other buffer into the current one
- `dp` — **diff put** — push the change from the current buffer to the other one
- `:diffoff` — turn off diff mode
- `:diffupdate` — recalculate the diff after manual edits

Ways to enter diff mode:

- `vim -d file1 file2` — open Vim in diff mode from the command line
- `:diffsplit file2` — open a diff against another file from within Vim
- `:diffthis` — mark the current buffer as part of a diff (use on two windows)

---

### 2) Setup

Create two temporary files for this drill:

**File A** (`/tmp/diff_a.txt`):
```txt
function greet(name) {
  console.log("Hello, " + name);
  return true;
}

function farewell(name) {
  console.log("Goodbye, " + name);
}

const defaultName = "World";
```

**File B** (`/tmp/diff_b.txt`):
```txt
function greet(name) {
  console.log("Hi, " + name + "!");
  return true;
}

function farewell(name) {
  console.log("Goodbye, " + name);
  return false;
}

const defaultName = "User";
const defaultLang = "en";
```

Open them in diff mode:
```
vim -d /tmp/diff_a.txt /tmp/diff_b.txt
```

---

### 3) Step-by-step drills

#### Drill A — Navigate between changes

1. Open the two files in diff mode as shown above
2. You'll see them side by side with changes highlighted
3. Press `]c` — cursor jumps to the first change (the `"Hello"` vs `"Hi"` line)
4. Press `]c` — jumps to the next change
5. Press `[c` — jumps back to the previous change
6. Keep pressing `]c` to walk through all differences

#### Drill B — Obtain a change from the other file (`do`)

Goal: take a change from file B and apply it to file A.

1. Navigate to the change where file A has `"Hello, "` and file B has `"Hi, "`
2. Make sure your cursor is in file A's window
3. Press `do` (diff obtain) — the line in file A is replaced with file B's version
4. File A now says `"Hi, " + name + "!"`

Press `u` to undo.

#### Drill C — Put a change to the other file (`dp`)

Goal: push a change from file A to file B.

1. Navigate to the `defaultName` line (file A has `"World"`, file B has `"User"`)
2. Make sure your cursor is in file A's window
3. Press `dp` (diff put) — file B's line is replaced with file A's version
4. File B now says `const defaultName = "World";`

Press `u` to undo.

#### Drill D — Handle added/deleted lines

1. Navigate to the line `const defaultLang = "en";` — this exists only in file B
2. With cursor in file A, press `do` — the line is added to file A
3. Press `u` to undo
4. Alternatively, with cursor in file B on that line, press `dp` — pushes it to file A

#### Drill E — Exit diff mode

1. Type `:diffoff` in one window — that window exits diff mode
2. Type `:diffoff!` — all windows exit diff mode
3. To re-enter: `:windo diffthis`

---

### Command reference

| Command | Effect |
|---|---|
| `]c` | Next change |
| `[c` | Previous change |
| `do` | Diff obtain (pull from other buffer) |
| `dp` | Diff put (push to other buffer) |
| `:diffsplit file` | Open file in diff split |
| `:diffoff` | Turn off diff mode |
| `:diffupdate` | Recalculate diff |
| `:windo diffthis` | Enable diff on all windows |
