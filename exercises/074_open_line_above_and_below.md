# Kata: Open Lines Above and Below

## Task

Practice `o`, `O`, and dot repeat to insert complete lines relative to existing lines.

## Start

Open a scratch buffer and insert:

```text
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

Start in Normal mode on the `f` in `function`.

## End

The buffer should become:

```text
// Greets a user by name
function greet(name) {
  const greeting = "Hello, " + name;
  console.log(greeting);
  return greeting;
}

const users = [
  "Alice",
  // processed
  "Bob",
  // processed
  "Charlie",
  // processed
];
```

## Commands

Run these command steps:

```text
1. O// Greets a user by name<Esc>
2. /const greeting<CR>oconsole.log(greeting);<Esc>
3. /"Alice"<CR>o// processed<Esc>
4. j.
5. j.
```
