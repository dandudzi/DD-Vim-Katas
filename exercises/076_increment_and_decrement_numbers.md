## Kata: `Ctrl-A` / `Ctrl-X` — Increment and decrement numbers

### 1) What they do (short description)

- `Ctrl-A` — increment the number at or after the cursor by 1
- `Ctrl-X` — decrement the number at or after the cursor by 1
- `5Ctrl-A` — increment by 5
- In visual mode, `g Ctrl-A` creates a sequential numbering sequence

The cursor doesn't need to be exactly on the number — Vim searches forward on the current line for the next number.

---

### 2) Practice text (paste into a buffer)

```css
.container {
  margin: 10px;
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
}
```

```md
1. First item
2. Second item
3. Third item
4. Fourth item
5. Fifth item
```

```html
<div class="col-6">
  <img width="100" height="100" />
</div>
```

---

### 3) Step-by-step drills

#### Drill A — Basic increment and decrement

Goal: change `margin: 10px` to `margin: 12px`.

1. Put your cursor on the line `margin: 10px;`
2. Press `Ctrl-A` — the `10` becomes `11`
3. Press `Ctrl-A` again — it becomes `12`

Now change `padding: 5px` to `padding: 3px`:

1. Move to the `padding` line
2. Press `Ctrl-X` twice — `5` becomes `3`

#### Drill B — Increment with a count

Goal: change `font-size: 14px` to `font-size: 18px`.

1. Put your cursor on the `font-size` line
2. Press `4Ctrl-A` — `14` jumps to `18` in one keystroke

Goal: change `border-radius: 3px` to `border-radius: 0px`:

1. Move to the `border-radius` line
2. Press `3Ctrl-X` — `3` becomes `0`

#### Drill C — Sequential numbering with `g Ctrl-A`

Goal: turn a list of `0.` items into `1. 2. 3. 4. 5.`

1. Start with this text:
```md
0. First item
0. Second item
0. Third item
0. Fourth item
0. Fifth item
```
2. Visually select all five lines with `V4j`
3. Press `g Ctrl-A`
4. The zeros become 1, 2, 3, 4, 5 sequentially

**After:**
```md
1. First item
2. Second item
3. Third item
4. Fourth item
5. Fifth item
```

#### Drill D — Adjust HTML attributes

Goal: double the image dimensions from `100` to `200`.

1. Put cursor on the `width="100"` part
2. Press `100Ctrl-A` — `100` becomes `200`
3. Move to `height="100"`
4. Press `100Ctrl-A` — `100` becomes `200`

---

### Constraints (optional)

- Never manually delete a number and retype it — always use `Ctrl-A`/`Ctrl-X`.
- Practice using counts to jump directly to the target value.
