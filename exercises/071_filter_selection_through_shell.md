## Kata: `:'<,'>!` (filter the visual selection through a shell command)

### 1) What `:'<,'>!` does (short description)

`:'<,'>!{cmd}` takes the **currently selected text** (from Visual mode), sends it to an **external shell command** (`{cmd}`) via stdin, and then **replaces the selection** with the command’s output.

It’s a fast way to “transform” text using tools like `sort`, `uniq`, `tr`, `awk`, `sed`, `python`, etc.

---

### 2) Practice text (paste into a new buffer)

```txt
# Orders (raw dump)
2026-02-01 | Item: Apple | Qty: 2
2026-02-01 | Item: banana | Qty: 1
2026-02-02 | Item: APPLE | Qty: 4
2026-02-02 | Item: pear | Qty: 1
2026-02-03 | Item: Banana | Qty: 2
2026-02-03 | Item: apple | Qty: 3
2026-02-04 | Item: orange | Qty: 1
2026-02-04 | Item: ORANGE | Qty: 2
2026-02-04 | Item: pear | Qty: 5

# Notes
Keep only item names for reporting.
Normalize to lowercase.
Then sort.
Then count duplicates.
```

---

### 3) Step-by-step: how to practice

#### Drill A — Extract only the item names (replace selection with transformed output)

Goal: Turn the order lines into a simple list of item names.

1. Move cursor to the first order line (`2026-02-01 | Item: Apple | Qty: 2`).
2. Enter Visual Line mode: `V`
3. Select all order lines down to the last one (`2026-02-04 | Item: pear | Qty: 5`) using `j` (or any motion).
4. Type `:`  
   Vim will automatically show the range as `:'<,'>`
5. Type `!awk -F'Item: | \\| Qty' '{print $2}'` and press `Enter`.

Your selected block should become something like:

```txt
Apple
banana
APPLE
pear
Banana
apple
orange
ORANGE
pear
```

Notes:

- If your shell doesn’t like the escaping, undo (`u`) and try:
  - `:'<,'>!sed -E 's/.*Item: ([^|]+).*/\1/'`

#### Drill B — Normalize case (lowercase everything)

Goal: Replace the selected list with a lowercase version.

1. Select the list (Visual Line mode `V`, then select the lines).
2. `:` to get `:'<,'>`
3. Run: `!tr '[:upper:]' '[:lower:]'` then `Enter`

Now you should have:

```txt
apple
banana
apple
pear
banana
apple
orange
orange
pear
```

#### Drill C — Sort the list

Goal: Sort alphabetically.

1. Select the list.
2. `:` then run: `!sort` and press `Enter`

#### Drill D — Count duplicates

Goal: Replace the list with counts per item.

1. Select the sorted list.
2. `:` then run: `!uniq -c` and press `Enter`

Expected shape:

```txt
      3 apple
      2 banana
      2 orange
      2 pear
```

---

## Optional combo drill (one-shot transformation)

Goal: From raw order lines → counts per item, in one command.

1. Select only the order lines (not the notes).
2. Type `:` and run this pipeline:

```vim
:'<,'>!awk -F'Item: | \\| Qty' '{print $2}' | tr '[:upper:]' '[:lower:]' | sort | uniq -c
```

---
