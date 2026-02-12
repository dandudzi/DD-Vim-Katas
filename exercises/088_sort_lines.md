## Kata: `:sort` — Sort lines in Vim

### 1) What `:sort` does (short description)

- `:sort` — sort all lines in the file alphabetically (ascending)
- `:sort!` — sort in **reverse** (descending) order
- `:sort u` — sort and remove **duplicate** lines (unique)
- `:sort n` — sort **numerically** (by the first number on each line)
- `:'<,'>sort` — sort only the visually selected lines

This is Vim's built-in alternative to shelling out to `!sort`. It handles ranges, numeric sorting, uniqueness, and patterns natively.

---

### 2) Practice text (paste into a buffer)

```txt
banana
cherry
apple
date
elderberry
banana
cherry
fig
apple
```

```txt
item_10_widget
item_2_gadget
item_1_thing
item_20_gizmo
item_3_doohickey
item_100_contraption
```

```css
z-index: 50;
z-index: 5;
z-index: 100;
z-index: 1;
z-index: 10;
z-index: 500;
```

---

### 3) Step-by-step drills

#### Drill A — Basic alphabetical sort

Goal: sort the fruit list alphabetically.

1. Visually select the fruit list (first block): put cursor on `banana`, press `V`, select down to the last `apple`
2. Type `:sort<Enter>` (it will show `:'<,'>sort`)

**Before:**
```
banana
cherry
apple
date
elderberry
banana
cherry
fig
apple
```

**After:**
```
apple
apple
banana
banana
cherry
cherry
date
elderberry
fig
```

Press `u` to undo.

#### Drill B — Sort and remove duplicates

1. Select the same fruit list
2. Type `:sort u<Enter>`

**After:**
```
apple
banana
cherry
date
elderberry
fig
```

Press `u` to undo.

#### Drill C — Reverse sort

1. Select the fruit list
2. Type `:sort!<Enter>`

**After:**
```
fig
elderberry
date
cherry
cherry
banana
banana
apple
apple
```

Press `u` to undo.

#### Drill D — Numeric sort

Goal: sort the `item_` list by the embedded number.

1. Select the `item_` block
2. Type `:sort n<Enter>`

**Before:**
```
item_10_widget
item_2_gadget
item_1_thing
item_20_gizmo
item_3_doohickey
item_100_contraption
```

**After:**
```
item_1_thing
item_2_gadget
item_3_doohickey
item_10_widget
item_20_gizmo
item_100_contraption
```

Without `n`, alphabetical sort would put `item_100` before `item_2`.

#### Drill E — Sort CSS values numerically

1. Select the `z-index` block
2. Type `:sort n<Enter>`

**After:**
```
z-index: 1;
z-index: 5;
z-index: 10;
z-index: 50;
z-index: 100;
z-index: 500;
```

---

### Command reference

| Command | Effect |
|---|---|
| `:sort` | Alphabetical ascending |
| `:sort!` | Alphabetical descending |
| `:sort u` | Alphabetical + remove duplicates |
| `:sort n` | Numeric sort |
| `:sort! n` | Numeric descending |
| `:sort /pattern/` | Sort by text after pattern match |
| `:'<,'>sort` | Sort visual selection only |
