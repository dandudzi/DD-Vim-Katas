## Kata: `#` — Search backward for word under cursor

### 1) What `#` does (short description)

- `*` — search **forward** for the exact word under the cursor (covered in earlier katas)
- `#` — search **backward** for the exact word under the cursor

Both use whole-word matching (like `\<word\>`). After searching:

- `n` — jump to the **next** match in the search direction
- `N` — jump to the **opposite** direction

Key insight: after `*`, `n` goes forward and `N` goes backward. After `#`, `n` goes **backward** and `N` goes **forward** (because the search direction is reversed).

---

### 2) Practice text (paste into a buffer)

```js
function validate(input) {
  if (!input) {
    return { valid: false, error: "missing input" };
  }

  const result = process(input);

  if (result.error) {
    log("validation failed for input:", input);
    return { valid: false, error: result.error };
  }

  log("validation passed for input:", input);
  return { valid: true, data: result.data };
}

function process(input) {
  // transform input
  return { data: input.trim(), error: null };
}
```

---

### 3) Step-by-step drills

#### Drill A — Search backward with `#`

Goal: find all occurrences of `input` going backward from the bottom.

1. Put your cursor on the word `input` in the last line (`return { data: input.trim()`)
2. Press `#` — cursor jumps backward to the previous `input`
3. Press `#` again (or `n`) — jumps to the next one backward
4. Keep pressing `n` to walk backward through every `input` occurrence
5. Press `N` to reverse direction and walk forward

#### Drill B — Compare `*` and `#` direction

Goal: understand how search direction affects `n`/`N`.

1. Put cursor on the word `error` on line 3
2. Press `*` — jumps **forward** to the next `error`
3. Press `n` — continues forward
4. Press `N` — reverses (goes backward)
5. Now press `#` from the current position — jumps **backward**
6. Press `n` — continues backward (because `#` set the direction)
7. Press `N` — reverses (goes forward)

#### Drill C — Practical use: find where a variable was defined

Goal: use `#` to jump backward from a usage to a definition.

1. Put cursor on `result` in the line `return { valid: true, data: result.data }`
2. Press `#` — jumps backward through each `result` usage
3. Keep pressing `n` until you reach `const result = process(input)` — the definition
4. Press `N` to go back to where you started reading

---

### Constraints (optional)

- Practice alternating between `*` and `#` on the same word to feel the directional difference.
- Use `#` whenever you see a variable and want to find where it was defined (earlier in the file).
