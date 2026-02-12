## Kata: `]}`, `[{`, `])`, `[(` — Jump to enclosing block boundaries

### 1) What these commands do (short description)

- `]}` — jump forward to the next unmatched `}`
- `[{` — jump backward to the previous unmatched `{`
- `])` — jump forward to the next unmatched `)`
- `[(` — jump backward to the previous unmatched `(`

These differ from `%`: the `%` key requires your cursor to be **on** a bracket, while `]}` and `[{` work from **inside** a block, jumping to its boundaries.

You can use a count: `2]}` jumps to the closing `}` of the enclosing block two levels up.

---

### 2) Practice text (paste into a buffer)

```c
int main() {
    if (argc > 1) {
        for (int i = 0; i < argc; i++) {
            if (strcmp(argv[i], "--help") == 0) {
                printf("Usage: program [options]\n");
                printf("Options:\n");
                printf("  --help    Show this message\n");
                // cursor starts here
            }
        }
        printf("Done processing arguments.\n");
    }
    return 0;
}
```

---

### 3) Step-by-step drills

#### Drill A — `]}` to jump to closing brace

Goal: from deep inside nested code, jump to the end of the current block.

1. Place cursor on the `// cursor starts here` comment (line 8)
2. Press `]}` — cursor jumps to the `}` that closes the inner `if` block (line 9)
3. Press `]}` again — jumps to the `}` that closes the `for` loop (line 10)
4. Press `]}` again — jumps to the `}` that closes the outer `if` (line 12)
5. Press `]}` again — jumps to the `}` that closes `main()` (line 14)

#### Drill B — `[{` to jump to opening brace

1. Place cursor back on line 8 (`// cursor starts here`)
2. Press `[{` — cursor jumps to the `{` that opens the inner `if` block (line 4)
3. Press `[{` again — jumps to the `{` of the `for` loop (line 3)
4. Press `[{` again — jumps to the `{` of the outer `if` (line 2)
5. Press `[{` again — jumps to the `{` of `main()` (line 1)

#### Drill C — Using counts to skip levels

1. Place cursor on line 8
2. Type `2]}` — skips one level, jumps directly to the `for` loop's `}` (line 10)
3. Go back to line 8
4. Type `3[{` — skips two levels, jumps directly to the outer `if`'s `{` (line 2)

#### Drill D — `])` and `[(` for parentheses

```c
result = calculate(
    getValue(
        parseInput(
            raw_data
        )
    )
);
```

1. Place cursor on `raw_data`
2. Press `])` — jumps to the `)` closing `parseInput(`
3. Press `])` again — jumps to the `)` closing `getValue(`
4. Place cursor back on `raw_data`
5. Press `[(` — jumps to the `(` opening `parseInput(`

#### Drill E — Navigate to add code at block boundaries

Goal: add a statement at the end of a block.

1. You're editing deep inside the `for` loop on line 8
2. Press `]}` to jump to the inner `if`'s closing `}`
3. Press `O` to open a line above, type `return;` and press `<Esc>`
4. You added code right before the block closes, without manually counting lines

---

### Command reference

| Command | Effect |
|---|---|
| `]}` | Jump to next unmatched `}` |
| `[{` | Jump to previous unmatched `{` |
| `])` | Jump to next unmatched `)` |
| `[(` | Jump to previous unmatched `(` |
| `%` | Jump to matching bracket (cursor must be on one) |
| `2]}` | Jump out two nesting levels forward |
