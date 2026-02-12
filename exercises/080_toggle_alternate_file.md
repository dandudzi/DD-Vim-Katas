## Kata: `Ctrl-^` — Toggle between alternate (previous) file

### 1) What `Ctrl-^` does (short description)

- `Ctrl-^` (also written `<C-^>` or `<C-6>`) — switch to the **alternate file** (the last file you were editing)
- `:e#` — equivalent ex command to edit the alternate file
- The alternate file is shown when you run `:ls` — it's marked with `#`

This is the fastest way to bounce between two files — much quicker than using a file picker or `:bnext`/`:bprev`.

---

### 2) Setup

You need two files open for this drill. Use any two files from this repository, for example:

```
nvim exercises/074_open_line_above_and_below.md exercises/075_substitute_character_and_line.md
```

Or open one file, then open a second:

```
:e exercises/074_open_line_above_and_below.md
:e exercises/075_substitute_character_and_line.md
```

---

### 3) Step-by-step drills

#### Drill A — Basic toggle between two files

1. Open two files as described above
2. You should be viewing the second file
3. Press `Ctrl-^` — you jump to the first file
4. Press `Ctrl-^` again — you jump back to the second file
5. Repeat 10 times until it's instant

#### Drill B — Check which file is the alternate

1. Run `:ls` to see the buffer list
2. The current file has `%a` next to it
3. The alternate file has `#` next to it
4. Press `Ctrl-^` and run `:ls` again — notice the `%` and `#` markers swapped

#### Drill C — Alternate file after multiple buffers

Goal: understand that the alternate file is always the *last* file you were in.

1. Open a third file: `:e exercises/076_increment_and_decrement_numbers.md`
2. Now `Ctrl-^` takes you back to the file you were just in (the second file), not the first
3. Press `Ctrl-^` again — toggles between files 2 and 3
4. If you want file 1, use `:b1` or `:e#1` — then `Ctrl-^` will toggle between file 1 and file 3

#### Drill D — Use `:e#` as an alternative

1. Type `:e#<Enter>` — same as `Ctrl-^`, switches to the alternate file
2. Type `:e#<Enter>` again — switches back
3. `Ctrl-^` is faster for muscle memory, but `:e#` is useful in scripts or when `Ctrl-^` is mapped to something else

---

### Constraints (optional)

- When working on two related files (e.g., source + test, component + styles), use `Ctrl-^` exclusively to switch between them.
- Avoid using file pickers or `:bnext` when you only need to toggle between two files.
