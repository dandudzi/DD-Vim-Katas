# Kata: Open Lines Above and Below

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Use `o`, `O`, and dot repeat to insert complete lines relative to existing lines.

## Fixture and Start
```javascript
function greet(name) {
  const greeting = "Hello, " + name;
  return greeting;
}

const users = [
  "Alice",
  "Bob",
  "Charlie",
];
```

Use a new buffer and start at `gg0`, Normal mode. Reset before each drill.

## Drills
1. Add `console.log(greeting);` below the `const greeting` line using the open-below command. **Verify:** it is line 3 with two-space indentation.
2. Add `// Greets a user by name` above the function using the open-above command. **Verify:** the function begins on line 2.
3. Add `// processed` below each separate user line, making the first change once and repeating it. **Verify:** three comment lines exist, each directly below its user.
4. Challenge: produce all changes together; the array syntax and user order must remain unchanged.

## Hints
<details><summary>Hints</summary>

`o`/`O` enter Insert mode on a newly opened line. Dot repeats the complete insertion, including opening a line.
</details>

## Solution
<details><summary>Exact keys</summary>

1. `/const greeting<CR>oconsole.log(greeting);<Esc>`
2. `ggO// Greets a user by name<Esc>`
3. `/"Alice"<CR>o// processed<Esc>j.j.`
4. Apply the three sequences above, accounting for inserted lines by searching for targets rather than using line numbers.
</details>

## Reset, Cleanup, and Reference
Use `u` per change or restore fixture; `:bwipe!`. See `:help o`, `:help O`, `:help .`.

| Keys | Effect |
|---|---|
| `o` / `O` | Open line below / above and enter Insert mode |
| `.` | Repeat last change |
