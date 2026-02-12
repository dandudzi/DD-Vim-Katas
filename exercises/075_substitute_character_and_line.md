## Kata: `s` / `S` — Substitute character or entire line

### 1) What `s` and `S` do (short description)

- `s` — delete the character under the cursor and enter insert mode (equivalent to `cl`)
- `S` — delete the contents of the current line (preserving indent) and enter insert mode (equivalent to `cc`)
- `3s` — delete 3 characters and enter insert mode

These are quick "replace in place" commands — faster than `xi` or `ddi` when you want to immediately type a replacement.

---

### 2) Practice text (paste into a buffer)

```py
def calculate(x, y):
    result = x + y
    print("Sum:", result)
    return result

names = ["alice", "bob", "charlie"]
status = "pending"
```

---

### 3) Step-by-step drills

#### Drill A — Replace a single character with `s`

Goal: change `x` to `a` in the function signature.

1. Put your cursor on the `x` in `def calculate(x, y):`
2. Press `s`
3. Type `a`
4. Press `<Esc>`

**Before:**
```py
def calculate(x, y):
```

**After:**
```py
def calculate(a, y):
```

#### Drill B — Replace multiple characters with a count

Goal: change `"alice"` to `"Ada"`.

1. Put your cursor on the `a` in `"alice"`
2. Press `5s` (deletes 5 characters: `alice`)
3. Type `Ada`
4. Press `<Esc>`

**Before:**
```py
names = ["alice", "bob", "charlie"]
```

**After:**
```py
names = ["Ada", "bob", "charlie"]
```

#### Drill C — Replace an entire line with `S`

Goal: replace the `print` line with a different statement.

1. Put your cursor anywhere on the line `print("Sum:", result)`
2. Press `S` — the line contents are deleted but indentation is preserved
3. Type `logger.info(f"Result: {result}")`
4. Press `<Esc>`

**Before:**
```py
def calculate(x, y):
    result = x + y
    print("Sum:", result)
    return result
```

**After:**
```py
def calculate(x, y):
    result = x + y
    logger.info(f"Result: {result}")
    return result
```

#### Drill D — Use `s` in visual mode

1. Visually select `"pending"` (without the quotes) using `vi"`
2. Press `s`
3. Type `complete`
4. Press `<Esc>`

---

### Constraints (optional)

- Avoid using `cl` or `cc` — use `s` and `S` exclusively.
- Practice noticing when `s` is faster than `r` (when you want to type more than one replacement character).
