## Kata: `ZZ`, `ZQ`, and `:e!` — Quick save, quit, and revert

### 1) What these commands do (short description)

- `ZZ` — save the current file and close the window (same as `:wq`)
- `ZQ` — close the window without saving (same as `:q!`)
- `:e!` — revert the current file to its last saved state without closing

These are essential "escape hatches" for quickly saving work, discarding mistakes, or reverting to a known good state.

---

### 2) Practice text (paste into a buffer and save as a test file)

```py
def greet(name):
    return f"Hello, {name}!"

def farewell(name):
    return f"Goodbye, {name}!"

def introduce(name, age):
    return f"I'm {name}, {age} years old."
```

---

### 3) Step-by-step drills

#### Drill A — `ZZ` to save and quit

1. Open the test file
2. Make a change: go to line 2, `ciw` and change `Hello` to `Hi`
3. Press `<Esc>` to return to normal mode
4. Type `ZZ` — the file is saved with the change and the window closes
5. Reopen the file — confirm `Hi` is saved

#### Drill B — `ZQ` to quit without saving

1. Open the test file
2. Make a destructive change: `gg` `dG` (delete everything)
3. Panic! Type `ZQ` — the window closes without saving
4. Reopen the file — everything is intact, the deletion was discarded

#### Drill C — `:e!` to revert without leaving

1. Open the test file
2. Make several changes:
   - Delete the `farewell` function (`jjVjjd`)
   - Change `introduce` to `present` (`/introduce<Enter>` `ciwpresent<Esc>`)
3. Decide you want to start over, but stay in Vim
4. Type `:e!<Enter>` — the file reverts to its last saved state
5. All your changes are gone, but you're still in the buffer

#### Drill D — Workflow: experiment and revert

1. Open the test file
2. Try refactoring: rewrite the `greet` function to use a different style
3. Realize the refactor isn't working — type `:e!<Enter>` to revert
4. Try a different approach
5. When satisfied, type `:w<Enter>` to save (or `ZZ` to save and quit)

---

### Command reference

| Command | Effect |
|---|---|
| `ZZ` | Save and close window (`:wq`) |
| `ZQ` | Close window, discard changes (`:q!`) |
| `:e!` | Revert file to last save, stay in buffer |
| `:w` | Save without closing |
| `:q` | Close window (fails if unsaved changes) |
