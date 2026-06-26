## Kata: `di%`, `ci%`, `vi%` — Operators with the `%` match motion

### 1) What this does (short description)

You already know `%` jumps to the matching bracket (kata 037). But `%` also works as a **motion for operators**, letting you delete, change, or select everything between matched brackets:

- `d%` — delete from cursor to the matching bracket (inclusive)
- `di%` — delete **inside** the matched brackets (content only, brackets stay)
- `da%` — delete **around** the matched brackets (content + brackets)
- `ci%` — change inside matched brackets
- `vi%` — visually select inside matched brackets

This is like `di{` or `di(`, but `%` figures out which bracket type you're in automatically.

> **Readiness note**: `%` is built in as a motion. The `i%`/`a%` text objects are configuration-dependent; check `:verbose omap i%`, `:verbose xmap i%`, `:verbose omap a%`, and `:verbose xmap a%` before practicing `di%`, `ci%`, or `vi%`. LazyVim commonly supplies richer text objects through plugins such as `mini.ai`, but the provider can vary.

---

### 2) Practice text (paste into a buffer)

```js
function process(items) {
  const result = items.map((item) => {
    if (item.active) {
      return transform(item.value, { uppercase: true, trim: true });
    }
    return item;
  });
  return result;
}

const config = {
  database: {
    host: "localhost",
    port: 5432,
    options: { ssl: true, timeout: 30 }
  },
  cache: { enabled: true, ttl: 3600 }
};
```

---

### 3) Step-by-step drills

#### Drill A — `vi%` to select inside brackets

1. Place cursor on the `{` of the `if` block (line 3)
2. Press `vi%` — selects everything inside the braces (the `return transform(...)` line)
3. Press `<Esc>` to cancel
4. Place cursor on the `(` in `transform(item.value, { ... })`
5. Press `vi%` — selects `item.value, { uppercase: true, trim: true }`

#### Drill B — `di%` to delete inside brackets

1. Place cursor on the `{` of `{ ssl: true, timeout: 30 }` (line 15)
2. Press `di%` — deletes the content, leaving `{}`
3. Press `u` to undo

**Before:**
```
options: { ssl: true, timeout: 30 }
```

**After:**
```
options: {}
```

#### Drill C — `da%` to delete including brackets

1. Place cursor on the `{` of `{ ssl: true, timeout: 30 }`
2. Press `da%` — deletes the entire `{ ssl: true, timeout: 30 }` including braces
3. Press `u` to undo

#### Drill D — `ci%` to change inside brackets

1. Place cursor on the `(` of `process(items)` (line 1)
2. Press `ci%` — deletes `items` and enters insert mode between the parentheses
3. Type `data, options` and press `<Esc>`

**Before:**
```
function process(items) {
```

**After:**
```
function process(data, options) {
```

#### Drill E — `d%` from cursor to match

`d%` is different from `di%` — it deletes from the cursor **to** the matching bracket, inclusive.

1. Place cursor on the `{` opening the `if` block (line 3)
2. Press `d%` — deletes from `{` to the matching `}`, including both braces and everything between
3. Press `u` to undo
4. Compare: `di%` would leave the `{ }`, `d%` removes them too (like `da%` but only when cursor is on the bracket)

---

### Command reference

| Command | Effect |
|---|---|
| `%` | Jump to matching bracket |
| `d%` | Delete from cursor to matching bracket |
| `di%` | Delete inside matched brackets |
| `da%` | Delete around matched brackets (includes brackets) |
| `ci%` | Change inside matched brackets |
| `ca%` | Change around matched brackets |
| `vi%` | Select inside matched brackets |
| `va%` | Select around matched brackets |
