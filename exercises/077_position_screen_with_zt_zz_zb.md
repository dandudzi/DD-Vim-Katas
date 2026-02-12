## Kata: `zt` / `zz` / `zb` — Position the screen around the cursor

### 1) What they do (short description)

- `zt` — move the screen so the **cursor line is at the top**
- `zz` — move the screen so the **cursor line is centered** (introduced in kata 008)
- `zb` — move the screen so the **cursor line is at the bottom**

These commands reposition the viewport without moving the cursor. They're essential for controlling what you can see while reading or editing.

---

### 2) Practice setup

For this drill you need a file long enough to scroll. Use any real file with 50+ lines, or paste this into a buffer:

```txt
Line 01 — The quick brown fox jumps over the lazy dog.
Line 02 — Pack my box with five dozen liquor jugs.
Line 03 — How vexingly quick daft zebras jump.
Line 04 — The five boxing wizards jump quickly.
Line 05 — Jackdaws love my big sphinx of quartz.
Line 06 — The quick brown fox jumps over the lazy dog.
Line 07 — Pack my box with five dozen liquor jugs.
Line 08 — How vexingly quick daft zebras jump.
Line 09 — The five boxing wizards jump quickly.
Line 10 — Jackdaws love my big sphinx of quartz.
Line 11 — The quick brown fox jumps over the lazy dog.
Line 12 — Pack my box with five dozen liquor jugs.
Line 13 — How vexingly quick daft zebras jump.
Line 14 — The five boxing wizards jump quickly.
Line 15 — Jackdaws love my big sphinx of quartz.
Line 16 — The quick brown fox jumps over the lazy dog.
Line 17 — Pack my box with five dozen liquor jugs.
Line 18 — How vexingly quick daft zebras jump.
Line 19 — The five boxing wizards jump quickly.
Line 20 — Jackdaws love my big sphinx of quartz.
Line 21 — The quick brown fox jumps over the lazy dog.
Line 22 — Pack my box with five dozen liquor jugs.
Line 23 — How vexingly quick daft zebras jump.
Line 24 — The five boxing wizards jump quickly.
Line 25 — Jackdaws love my big sphinx of quartz.
Line 26 — The quick brown fox jumps over the lazy dog.
Line 27 — Pack my box with five dozen liquor jugs.
Line 28 — How vexingly quick daft zebras jump.
Line 29 — The five boxing wizards jump quickly.
Line 30 — Jackdaws love my big sphinx of quartz.
Line 31 — The quick brown fox jumps over the lazy dog.
Line 32 — Pack my box with five dozen liquor jugs.
Line 33 — How vexingly quick daft zebras jump.
Line 34 — The five boxing wizards jump quickly.
Line 35 — Jackdaws love my big sphinx of quartz.
Line 36 — The quick brown fox jumps over the lazy dog.
Line 37 — Pack my box with five dozen liquor jugs.
Line 38 — How vexingly quick daft zebras jump.
Line 39 — The five boxing wizards jump quickly.
Line 40 — Jackdaws love my big sphinx of quartz.
Line 41 — The quick brown fox jumps over the lazy dog.
Line 42 — Pack my box with five dozen liquor jugs.
Line 43 — How vexingly quick daft zebras jump.
Line 44 — The five boxing wizards jump quickly.
Line 45 — Jackdaws love my big sphinx of quartz.
Line 46 — The quick brown fox jumps over the lazy dog.
Line 47 — Pack my box with five dozen liquor jugs.
Line 48 — How vexingly quick daft zebras jump.
Line 49 — The five boxing wizards jump quickly.
Line 50 — Jackdaws love my big sphinx of quartz.
```

---

### 3) Step-by-step drills

#### Drill A — `zt` to push context above

Goal: read code below the current line with maximum screen space.

1. Jump to line 25 with `25G`
2. Press `zt` — line 25 is now at the very top of your screen
3. You can now see lines 25–50 (or however many fit)
4. This is useful when you're about to read a long function body

#### Drill B — `zb` to see context above

Goal: see what came before the current line.

1. Stay on line 25
2. Press `zb` — line 25 is now at the bottom of your screen
3. You can now see the lines leading up to line 25
4. This is useful when reviewing what was defined before the current point

#### Drill C — `zz` to center (review)

1. Jump to line 10 with `10G`
2. Press `zz` — line 10 is centered
3. Jump to line 40 with `40G`
4. Press `zz` — line 40 is centered

#### Drill D — Combine with navigation

Goal: practice a realistic workflow of "jump, reframe, read."

1. Press `gg` to go to the top
2. Press `/Line 30<Enter>` to search
3. Press `zt` — now line 30 is at top and you can read everything below it
4. Press `G` to go to the bottom
5. Press `?Line 20<Enter>` to search backward
6. Press `zb` — now line 20 is at bottom and you can see everything above it

---

### Constraints (optional)

- After every jump (`G`, `/`, `*`, `gd`, etc.), immediately use `zt`, `zz`, or `zb` to reframe.
- Practice choosing the right one: `zt` when you want to read down, `zb` when you want to see what's above, `zz` for general orientation.
