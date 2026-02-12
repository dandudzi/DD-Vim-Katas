## Kata: `:%s/old/new/gc` — Substitute with confirmation

### 1) What the `c` flag does (short description)

Adding the `c` flag to a `:substitute` command makes Vim ask for confirmation at every match. At each match, you choose:

- `y` — yes, substitute this match
- `n` — no, skip this match
- `a` — all, substitute this and all remaining matches
- `q` — quit, stop substituting
- `l` — last, substitute this match and stop
- `<Esc>` — cancel

This gives you `:%s` power with `cgn`-style selectivity.

---

### 2) Practice text (paste into a buffer)

```js
function getUser(id) {
  const user = fetchUser(id);
  if (!user) {
    logError("getUser: user not found");
    return null;
  }
  trackEvent("getUser:success");
  return user;
}

function deleteUser(id) {
  const user = fetchUser(id);
  if (!user) {
    logError("deleteUser: user not found");
    return false;
  }
  removeUser(user.id);
  trackEvent("deleteUser:success");
  return true;
}
```

---

### 3) Step-by-step drills

#### Drill A — Rename with confirmation across the file

Goal: rename `fetchUser` to `findUser` everywhere, confirming each one.

1. Type `:%s/fetchUser/findUser/gc<Enter>`
2. Vim highlights the first match and shows `replace with findUser (y/n/a/q/l/^E/^Y)?`
3. Press `y` to replace the first one
4. Press `y` again for the second one
5. Both occurrences are replaced

#### Drill B — Selectively skip matches

Goal: rename `user` to `account` only in the function bodies, not in string literals.

1. Type `:%s/user/account/gc<Enter>`
2. At each match:
   - Press `y` for variable assignments like `const user`
   - Press `n` for matches inside string literals like `"getUser: user not found"`
3. Review the result — only the intended matches were changed

Press `u` to undo.

#### Drill C — Use `a` to accept all remaining

1. Type `:%s/trackEvent/logEvent/gc<Enter>`
2. Verify the first match looks correct, press `y`
3. At the second match, you trust the rest — press `a` to replace all remaining
4. Done in two keystrokes instead of reviewing each one

#### Drill D — Range-limited substitution

Goal: only change function names in the second function (`deleteUser` block).

1. Visually select the `deleteUser` function: place cursor on its `function` line, press `V`, select to the closing `}`
2. Type `:s/User/Account/gc<Enter>` (the range `'<,'>` is auto-inserted)
3. Confirm each match — only matches within the selection are offered

#### Drill E — Quit and last

1. Type `:%s/return/yield/gc<Enter>`
2. Press `y` for the first match
3. Press `l` for the second — it replaces this one and stops (no more prompts)
4. Undo with `u`, try again, and press `q` at the second match — it keeps the first replacement but stops without changing the second

---

### Command reference

| Command | Effect |
|---|---|
| `:%s/old/new/g` | Replace all, no confirmation |
| `:%s/old/new/gc` | Replace all with confirmation |
| `:'<,'>s/old/new/gc` | Replace in visual selection with confirmation |
| `:5,20s/old/new/gc` | Replace in line range with confirmation |
| `y` | Yes, replace this match |
| `n` | No, skip this match |
| `a` | All remaining, no more prompts |
| `q` | Quit substitution |
| `l` | Replace this match and quit (last) |
