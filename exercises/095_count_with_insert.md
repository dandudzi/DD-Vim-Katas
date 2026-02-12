## Kata: Count + insert — Repeat characters and text with a count prefix

### 1) What count-insert does (short description)

You can prefix insert commands with a count to repeat the inserted text:

- `80i-<Esc>` — inserts 80 dashes (a separator line)
- `5o<Esc>` — inserts 5 blank lines below
- `3O<Esc>` — inserts 3 blank lines above
- `3iha <Esc>` — inserts `ha ha ha `

The text is repeated when you leave insert mode with `<Esc>`.

---

### 2) Practice text (paste into a buffer)

```md
# Section One

Some content here.

# Section Two

More content here.

# Section Three

Final content here.
```

---

### 3) Step-by-step drills

#### Drill A — Create a separator line

Goal: add a line of 40 dashes between sections.

1. Place cursor on the blank line between Section One and its content
2. Type `40i-<Esc>`
3. Result: `----------------------------------------`

**Before:**
```
# Section One

Some content here.
```

**After:**
```
# Section One
----------------------------------------
Some content here.
```

#### Drill B — Create a longer separator

1. Undo with `u`
2. Try `80i=<Esc>` for a double-line separator
3. Result: 80 `=` characters on one line

#### Drill C — Insert blank lines

Goal: add spacing between sections.

1. Place cursor on `# Section Two`
2. Type `3O<Esc>` — inserts 3 blank lines above
3. Place cursor on `More content here.`
4. Type `2o<Esc>` — inserts 2 blank lines below

#### Drill D — Repeat a word

1. Go to a blank line
2. Type `5itest <Esc>` (note the space after `test`)
3. Result: `test test test test test `

#### Drill E — Repeat a pattern

Goal: create a visual border.

1. Go to a blank line
2. Type `20i-+<Esc>`
3. Result: `-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+`

The pattern `-+` is repeated 20 times.

---

### Command reference

| Command | Effect |
|---|---|
| `{count}i{text}<Esc>` | Insert `text` repeated `count` times |
| `{count}o<Esc>` | Insert `count` blank lines below |
| `{count}O<Esc>` | Insert `count` blank lines above |
| `80i-<Esc>` | Insert 80 dashes |
| `3iword <Esc>` | Insert "word " three times |
