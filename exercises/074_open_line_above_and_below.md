## Kata: `o` / `O` — Open a new line below or above

### 1) What `o` and `O` do (short description)

- `o` — open a new blank line **below** the current line and enter insert mode
- `O` — open a new blank line **above** the current line and enter insert mode

These are among the most common ways to enter insert mode. They save you from having to press `A` then `<Enter>` (or `ko` for above).

---

### 2) Practice text (paste into a buffer)

```js
function greet(name) {
  const greeting = "Hello, " + name;
  return greeting;
}

const users = ["Alice", "Bob", "Charlie"];
```

---

### 3) Step-by-step drills

#### Drill A — Add a line below with `o`

Goal: add a `console.log` after the `const greeting` line.

1. Put your cursor on the line `const greeting = "Hello, " + name;`
2. Press `o`
3. Type `console.log(greeting);`
4. Press `<Esc>`

**Before:**
```js
function greet(name) {
  const greeting = "Hello, " + name;
  return greeting;
}
```

**After:**
```js
function greet(name) {
  const greeting = "Hello, " + name;
  console.log(greeting);
  return greeting;
}
```

#### Drill B — Add a line above with `O`

Goal: add a comment above the function.

1. Put your cursor on the line `function greet(name) {`
2. Press `O`
3. Type `// Greets a user by name`
4. Press `<Esc>`

**Before:**
```js
function greet(name) {
  const greeting = "Hello, " + name;
  return greeting;
}
```

**After:**
```js
// Greets a user by name
function greet(name) {
  const greeting = "Hello, " + name;
  return greeting;
}
```

#### Drill C — Combine `o` with dot repeat

Goal: add the same line after each user in a list.

1. Put your cursor on the `"Alice"` line
2. Press `o`
3. Type `// processed`
4. Press `<Esc>`
5. Move down to `"Bob"` and press `.` — the same `o` + text is repeated
6. Move down to `"Charlie"` and press `.` again

---

### Constraints (optional)

- Never use `A<Enter>` or `ko` — only `o` and `O`.
- Practice until you instinctively reach for `o`/`O` instead of navigating to end-of-line first.
