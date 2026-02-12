## Kata: `Ctrl-W`, `Ctrl-U`, `Ctrl-T`, `Ctrl-D` — Edit without leaving insert mode

### 1) What these shortcuts do (short description)

While in insert mode, you can edit text without switching back to normal mode:

- `Ctrl-W` — delete the word before the cursor
- `Ctrl-U` — delete everything from the cursor back to the start of the line
- `Ctrl-T` — indent the current line (add one `shiftwidth`)
- `Ctrl-D` — dedent the current line (remove one `shiftwidth`)

These save you from the `<Esc>` → edit → `i` round-trip.

---

### 2) Practice text (paste into a buffer)

```js
function processOrder(order) {
if (order.status === "pending") {
const total = calculateTotal(order.items);
applyDiscount(total, order.coupon);
sendConfirmation(order.email);
}
}
```

---

### 3) Step-by-step drills

#### Drill A — `Ctrl-W` to fix typos while typing

Goal: write a line of code, fixing mistakes without leaving insert mode.

1. Position cursor on an empty line and press `i` to enter insert mode
2. Type: `const reuslt`
3. Oops, typo! Press `Ctrl-W` — deletes `reuslt`
4. Type `result` correctly
5. Continue typing: ` = getValue();`
6. Press `<Esc>`

Result: `const result = getValue();`

#### Drill B — `Ctrl-U` to restart a line

1. Press `o` to open a new line in insert mode
2. Start typing: `console.log("wrong message here`
3. Decide to start over — press `Ctrl-U` to delete everything on this line
4. Type the correct line: `console.log("order processed");`
5. Press `<Esc>`

#### Drill C — `Ctrl-T` to add indentation

Goal: fix the indentation of the unindented code block.

1. Place cursor on the `if` line (line 2)
2. Press `I` to enter insert mode at the start of the line
3. Press `Ctrl-T` — the line indents one level
4. Press `<Esc>`
5. Move to line 3 (`const total`), press `I`, then `Ctrl-T` `Ctrl-T` — indents two levels
6. Repeat for lines 4 and 5

#### Drill D — `Ctrl-D` to remove indentation

Goal: dedent lines that are too deeply indented.

1. On a line that's indented too much, press `I` (insert at start)
2. Press `Ctrl-D` — removes one level of indentation
3. Press `Ctrl-D` again if needed — removes another level
4. Press `<Esc>`

#### Drill E — Combined workflow: type a function from scratch

1. Press `o` to start a new line in insert mode
2. Type `function validate(input) {` and press `<Enter>`
3. Press `Ctrl-T` to indent, then type `if (!input) {` and press `<Enter>`
4. Press `Ctrl-T` to indent again, type `return false;` and press `<Enter>`
5. Press `Ctrl-D` to dedent, type `}` and press `<Enter>`
6. Press `Ctrl-D` to dedent again, type `return true;` and press `<Enter>`
7. Press `Ctrl-D`, type `}`
8. Press `<Esc>`

You wrote a properly indented function without leaving insert mode once.

---

### Command reference

| Shortcut | Mode | Effect |
|---|---|---|
| `Ctrl-W` | Insert | Delete word before cursor |
| `Ctrl-U` | Insert | Delete to start of line |
| `Ctrl-T` | Insert | Indent current line |
| `Ctrl-D` | Insert | Dedent current line |
| `Ctrl-H` | Insert | Delete character before cursor (like backspace) |
