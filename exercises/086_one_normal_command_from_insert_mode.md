## Kata: `Ctrl-O` — Execute one normal mode command from insert mode

### 1) What `Ctrl-O` does (short description)

While in insert mode, pressing `Ctrl-O` lets you execute **one** normal mode command, then automatically returns you to insert mode.

This avoids the `<Esc>` → command → `i` round trip when you just need to do one quick thing.

Common uses:

- `Ctrl-O zz` — center the screen without leaving insert mode
- `Ctrl-O b` — jump back one word
- `Ctrl-O D` — delete from cursor to end of line
- `Ctrl-O O` — open a line above (while staying in insert mode flow)
- `Ctrl-O $` — jump to end of line
- `Ctrl-O 0` — jump to beginning of line

---

### 2) Practice text (paste into a buffer)

```js
function buildMessage(user, items) {
  let message = "Hello " + user.name + ", you ordered: ";


  return message;
}
```

---

### 3) Step-by-step drills

#### Drill A — Center screen while typing

Goal: keep the cursor visible while typing a long block.

1. Open a long file (50+ lines)
2. Press `G` to go to the bottom, then `o` to open a new line (you're in insert mode)
3. Start typing some text
4. Press `Ctrl-O zz` — the screen re-centers around your cursor
5. Continue typing — you're still in insert mode

#### Drill B — Jump around while in insert mode

Goal: move the cursor without leaving insert mode.

1. Put cursor on the blank line inside `buildMessage` (line 3)
2. Press `i` to enter insert mode
3. Type `const total = items.`
4. Oops — you need to go back to fix something. Press `Ctrl-O b` to jump back one word
5. You're still in insert mode. Now press `Ctrl-O b` again to jump back another word
6. Continue typing or press `Ctrl-O e` to jump to end of the current word

#### Drill C — Delete to end of line from insert mode

1. Go to the `let message` line
2. Press `A` to append at end of line (insert mode)
3. Press `Ctrl-O 0` — cursor jumps to beginning of line (still in insert mode)
4. Press `Ctrl-O D` — deletes from cursor to end of line (still in insert mode)
5. Now type a replacement: `const msg = "Welcome!";`

#### Drill D — Access a register from insert mode

1. In normal mode, yank a word: put cursor on `message` and press `yiw`
2. Move to the blank line, press `i` to enter insert mode
3. Type `console.log(`
4. Press `Ctrl-O P` — pastes the yanked word before cursor
5. Type `);`
6. Result: `console.log(message);`

---

### Constraints (optional)

- During a typing session, never press `<Esc>` just to do one command and come back. Always use `Ctrl-O` instead.
- Practice until `Ctrl-O zz` is automatic whenever text scrolls off screen while typing.
