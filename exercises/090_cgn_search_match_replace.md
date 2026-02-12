## Kata: `cgn` — Search, match, and replace with dot-repeat

### 1) What `gn` and `cgn` do (short description)

- `gn` — a text object that selects the next search match (visually)
- `cgn` — change the next search match (delete it and enter insert mode)
- `dgn` — delete the next search match
- After `cgn`, press `n` to find the next match and `.` to repeat the change — or just `.` which implicitly finds and replaces the next match

This is the interactive alternative to `:%s`. You see each match before deciding to change it (`.`) or skip it (`n`).

---

### 2) Practice text (paste into a buffer)

```js
const getUserName = (user) => user.name;
const getUserAge = (user) => user.age;
const getUserEmail = (user) => user.email;
const getUserId = (user) => user.id;
const getUserRole = (user) => user.role;
```

---

### 3) Step-by-step drills

#### Drill A — Basic `cgn` rename

Goal: rename `user` parameter to `person` in each function.

1. Search for the target: `/user<Enter>`
2. Press `n` until the cursor is on the first `user` you want to change (inside the parentheses)
3. Type `cgn` — the match is deleted and you're in insert mode
4. Type `person` and press `<Esc>`
5. Press `.` — the next occurrence of `user` is automatically found, deleted, and replaced with `person`
6. Keep pressing `.` to replace more, or press `n` to skip one and then `.` to replace the next

#### Drill B — Contrast with `:%s`

1. Undo all changes: `u` until you're back to the original
2. Run `:%s/user/person/gc`
3. Respond `y` or `n` for each match
4. Notice: `cgn` + `.` gives you the same selective power but keeps you in the buffer, and you can undo each replacement individually

#### Drill C — `dgn` to delete matches

Use this text:

```txt
TODO: fix login
TODO: update tests
review the TODO list
TODO: deploy
check all TODO items
```

1. Search: `/TODO<Enter>`
2. Type `dgn` — deletes the first `TODO`
3. Press `.` to delete the next `TODO`
4. Press `n` to skip one, `.` to delete the one after

#### Drill D — Change a multi-word match

```py
old_value = get_old_value()
print(old_value)
return old_value
```

1. Search for the full phrase: `/old_value<Enter>`
2. `cgn` → type `new_result` → `<Esc>`
3. `.` `.` — replaces the next two occurrences

---

### Command reference

| Command | Effect |
|---|---|
| `/pattern<Enter>` | Search for pattern |
| `gn` | Select next match (visual) |
| `cgn` | Change next match |
| `dgn` | Delete next match |
| `.` | Repeat last `cgn`/`dgn` on next match |
| `n` | Skip to next match without changing |
| `:%s/old/new/gc` | Substitute with confirmation (alternative) |
