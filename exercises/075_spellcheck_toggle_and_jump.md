## Kata: Spell check toggle + jump between spelling errors (`<Space>us`, `[s`, `]s`)

### 1) What these commands do (short description)

- `<Space>us` toggles **spell checking** in the current buffer (on/off).
- When spell check is on, misspelled words get a **curly underline**.
- Use:
  - `]s` to jump to the **next** spelling error
  - `[s` to jump to the **previous** spelling error  
    (These are separate from diagnostics jumps like `]d` / `[d`.)

---

### 2) Practice text (paste into a new buffer)

Team update:

Teh deploymant is schedueld for Wednsday afternoon.
Please reivew the releese notes and the cheklist.

We need to confirm the follwoing:

- databse migrations are applied
- cach is cleared after deploy
- monitering alerts are enabled
- rollback procedre is documented

If you spot any improvments, add them to the documantation.
Thanks for youre help and patince!

---

### 3) Step-by-step: how to practice

#### Drill A — Enable spell check and visit every error

1. Toggle spell check on: `<Space>us`
2. Jump to the first misspelling (from anywhere):
   - Use `]s` repeatedly until you land on an underlined word.
3. Keep pressing `]s` to visit **each** misspelling in order.
4. When you reach the end, use `[s` to go back through a few errors.

#### Drill B — Fix errors efficiently while jumping

Goal: correct at least 8 misspellings using only `[s` / `]s` for navigation.

For each misspelled word you land on:

1. (Optional) See suggestions: `z=`
2. Fix it with one of these:
   - `ciw{correct}<Esc>` (change inner word)
   - or pick a suggestion from `z=` (if you use that workflow)
3. Jump to the next error: `]s`
4. Repeat until the paragraph has no underlines.

#### Drill C — Practice “ignore vs add”

1. Jump to a word you _want to keep_ (e.g., a proper noun you add yourself).
2. Try:
   - `zg` to **add** the word to your spellfile (accept as correct)
   - `zw` to **mark** a word as wrong (the opposite)
3. Continue with `]s` and clean up remaining issues.

#### Finish

- Toggle spell check off when done: `<Space>us`
- Undo/redo to repeat the kata: `u` / `<C-r>`

---

**Constraint (optional):** Do not use search (`/`) or diagnostic jumps (`]d`, `[d`). Only `[s` / `]s` for movement between errors.
