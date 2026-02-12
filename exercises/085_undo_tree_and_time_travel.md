## Kata: Undo tree — `g-`, `g+`, `:earlier`, `:later`

### 1) What the undo tree is (short description)

Vim's undo is not a simple linear stack — it's a **tree**. When you undo and then make a new change, the old redo branch isn't lost. You can access it with:

- `u` — undo (move up the tree)
- `Ctrl-R` — redo (move down the current branch)
- `g-` — go to the **older** text state (walks every branch)
- `g+` — go to the **newer** text state (walks every branch)
- `:earlier 5m` — go to the text as it was **5 minutes ago**
- `:later 2m` — go to the text as it was **2 minutes** after the current state
- `:earlier 3f` — go back **3 file saves** ago

The key difference: `u`/`Ctrl-R` follow the current branch. `g-`/`g+` traverse **all** states chronologically, including branches that `Ctrl-R` can't reach.

---

### 2) Practice text (paste into a buffer)

```txt
Line 1: original text
Line 2: original text
Line 3: original text
```

---

### 3) Step-by-step drills

#### Drill A — Create a branching undo history

Goal: understand the difference between `u`/`Ctrl-R` and `g-`/`g+`.

1. Start with the practice text above
2. Change line 1: press `1G`, `A`, type ` — CHANGE A`, press `<Esc>`
3. Change line 2: press `2G`, `A`, type ` — CHANGE B`, press `<Esc>`
4. Now undo both changes: press `u` twice — you're back to the original
5. Make a **different** change to line 1: press `1G`, `A`, type ` — CHANGE C`, press `<Esc>`
6. Now try `Ctrl-R` — it redoes CHANGE C (not CHANGE A or B, because you're on a new branch)

The old changes A and B are on a **different branch**. `Ctrl-R` can't reach them.

7. Press `g-` repeatedly — this walks backward through **all** states chronologically:
   - You'll see CHANGE C disappear
   - Then CHANGE B appears (from the other branch!)
   - Then CHANGE A appears
   - Then back to original
8. Press `g+` to walk forward through all states

#### Drill B — Time-based undo with `:earlier` and `:later`

1. Start fresh with the practice text
2. Make a change, wait 30 seconds, make another change, wait 30 seconds, make a third
3. Type `:earlier 1m<Enter>` — the buffer reverts to how it looked 1 minute ago
4. Type `:later 30s<Enter>` — moves forward 30 seconds from current state
5. Type `:earlier 2m<Enter>` — goes back 2 minutes

This is invaluable when you've made a series of changes and want to go back to "how it was a few minutes ago" without counting undo steps.

#### Drill C — File-save-based undo

1. Make some changes and save with `:w`
2. Make more changes and save again with `:w`
3. Make more changes (don't save)
4. Type `:earlier 1f<Enter>` — goes back to the last save point
5. Type `:earlier 1f<Enter>` again — goes back to the save before that

---

### Tip

For a visual representation of the undo tree, consider the plugin **undotree** (available in LazyVim via extras). It shows the branching structure graphically and lets you click to jump to any state.

### Key distinction

| Command | Traversal |
|---|---|
| `u` / `Ctrl-R` | Current branch only |
| `g-` / `g+` | All branches, chronologically |
| `:earlier` / `:later` | Time-based or save-based |
