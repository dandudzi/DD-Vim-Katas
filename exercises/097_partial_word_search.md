## Kata: `g*` and `g#` — Partial word search

### 1) What `g*` and `g#` do (short description)

- `*` — search for the exact word under the cursor (adds `\<...\>` word boundaries)
- `g*` — search for the text under the cursor without word boundaries (partial match)
- `#` — exact word search backward
- `g#` — partial word search backward

The difference: `*` on `count` matches only the word `count`. `g*` on `count` also matches `counter`, `countItems`, `recount`, `accounting`.

---

### 2) Practice text (paste into a buffer)

```ts
const count = 0;
const counter = new Counter();
const countItems = (list) => list.length;
const recount = () => counter.reset();
const accounting = getAccounting();

function updateCount() {
  count++;
  counter.increment();
  const itemCount = countItems(inventory);
  logEvent("count_updated", { count, itemCount });
}
```

---

### 3) Step-by-step drills

#### Drill A — `*` exact word search

1. Place cursor on `count` (line 1, the variable declaration)
2. Press `*` — Vim searches for `\<count\>` (exact word)
3. Press `n` to step through matches
4. Notice: it matches `count` on lines 1, 8, 11 — but skips `counter`, `countItems`, `recount`, `accounting`

#### Drill B — `g*` partial word search

1. Return to `count` on line 1
2. Press `g*` — Vim searches for `count` without boundaries
3. Press `n` to step through matches
4. Notice: it matches **every** occurrence — `count`, `counter`, `countItems`, `recount`, `accounting`, `itemCount`, `count_updated`

#### Drill C — Compare side by side

1. Place cursor on `count` on line 1
2. Press `*`, then run `:%s///gn<Enter>` — shows the number of exact matches
3. Go back to `count`, press `g*`, then `:%s///gn<Enter>` — shows the number of partial matches
4. The partial count is much higher

#### Drill D — `g#` backward partial search

1. Place cursor on `count` in `count_updated` (line 11)
2. Press `g#` — searches backward for `count`
3. Press `n` (or `N` to go backward) to step through partial matches above

#### Drill E — Practical use: find all variants

Goal: find everywhere a root word appears, including prefixed/suffixed forms.

1. You want to find all code related to "count" — place cursor on any `count`
2. Press `g*` to find all variations
3. Use `n`/`N` to review each one
4. This is useful when renaming a concept: find all related identifiers before refactoring

---

### Command reference

| Command | Effect |
|---|---|
| `*` | Search forward for exact word under cursor |
| `#` | Search backward for exact word under cursor |
| `g*` | Search forward for partial match (no word boundaries) |
| `g#` | Search backward for partial match (no word boundaries) |
| `n` | Next match |
| `N` | Previous match |
