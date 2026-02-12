## Kata: `:g` / `:v` — The global command

### 1) What `:g` and `:v` do (short description)

- `:g/pattern/command` — execute `command` on every line **matching** `pattern`
- `:v/pattern/command` — execute `command` on every line **not matching** `pattern` (inverse)

The global command is one of Vim's most powerful features. It lets you perform batch operations on lines matching a pattern — deleting, moving, copying, indenting, running normal mode commands, and more.

---

### 2) Practice text (paste into a buffer)

```js
// TODO: refactor this function
function fetchUsers() {
  console.log("fetching users...");
  const users = api.get("/users");
  console.log("result:", users);
  return users;
}

// TODO: add error handling
function fetchPosts(userId) {
  console.log("fetching posts...");
  const posts = api.get(`/users/${userId}/posts`);
  console.log("result:", posts);
  // TODO: cache the result
  return posts;
}

function formatUser(user) {
  return `${user.firstName} ${user.lastName}`;
}

function formatPost(post) {
  return `[${post.date}] ${post.title}`;
}
```

---

### 3) Step-by-step drills

#### Drill A — Delete all lines matching a pattern

Goal: remove every `console.log` line.

1. Type `:g/console\.log/d<Enter>`
2. All four `console.log` lines are deleted in one command

**Before:**
```js
function fetchUsers() {
  console.log("fetching users...");
  const users = api.get("/users");
  console.log("result:", users);
  return users;
}
```

**After:**
```js
function fetchUsers() {
  const users = api.get("/users");
  return users;
}
```

Press `u` to undo before the next drill.

#### Drill B — Delete all lines NOT matching a pattern (`:v`)

Goal: keep only lines containing `TODO`.

1. Type `:v/TODO/d<Enter>`
2. Every line that does **not** contain `TODO` is deleted — only the TODO comments remain

Press `u` to undo.

#### Drill C — Copy matching lines to end of file

Goal: collect all TODO comments at the bottom.

1. Type `:g/TODO/t$<Enter>`
   - `t$` means "copy (`:t`) to the end of the file (`$`)"
2. Scroll to the bottom — all TODO lines are copied there

Press `u` to undo.

#### Drill D — Run a normal mode command on matching lines

Goal: comment out every line containing `return`.

1. Type `:g/return/normal I// <Enter>`
   - `normal I// ` runs normal mode's `I` (insert at beginning) then types `// `
2. Every `return` line now has `// ` prepended

Press `u` to undo.

#### Drill E — Move matching lines to the top

Goal: move all TODO lines to the top of the file.

1. Type `:g/TODO/m0<Enter>`
   - `m0` means "move to after line 0" (i.e., the top)
2. All TODO comments are now at the top of the file

---

### Command reference

| Command | Effect |
|---|---|
| `:g/pat/d` | Delete matching lines |
| `:v/pat/d` | Delete non-matching lines |
| `:g/pat/t$` | Copy matching lines to end |
| `:g/pat/m0` | Move matching lines to top |
| `:g/pat/normal @q` | Run macro `q` on matching lines |
| `:g/pat/normal I// ` | Prepend `// ` to matching lines |
| `:g/^$/d` | Delete all blank lines |
