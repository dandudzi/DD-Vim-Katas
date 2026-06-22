# Kata: Run One Normal Command from Insert Mode

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Use Insert-mode `<C-o>` to execute one Normal command and automatically return to Insert mode.

## Fixture and Start
```javascript
let message = "draft trailing";

```

Create a new buffer and run `gg0`. Restore the fixture before each drill.

## Drills
1. Enter Insert mode at the start of line 1, type `// `, use one Normal command to reach line end, then type `!`. **Verify:** `// let message = "draft trailing";!` and you remained in Insert mode until final `<Esc>`.
2. Put the cursor on `d` in `draft`, enter Insert mode there, execute one Normal `D`, and type `;`. **Verify:** line becomes `let message = ";`.
3. Yank `message`, move to blank line, enter Insert mode, and insert the register with the Insert-mode register command. **Verify:** line 2 is `console.log(message);`.
4. Challenge: while typing on line 2, center the view with one Normal command and continue typing.

## Hints
<details><summary>Hints</summary>

`<C-o>` accepts one complete Normal command such as `$`, `D`, or `zz`. Register insertion is directly available in Insert mode as `<C-r>{register}`; using `<C-o>P` has cursor-sensitive placement and was the original kata's bug.
</details>

## Solution
<details><summary>Exact keys</summary>

1. `ggI// <C-o>$!<Esc>`
2. Reset, move onto `d` of `draft`, then `i<C-o>D;<Esc>`; result is `let message = ";`.
3. Reset, `/message<CR>yiwG0iconsole.log(<C-r>0);<Esc>`.
4. `A more<C-o>zz text<Esc>`
</details>

## Cleanup and Reference
Use `u` or restore fixture; `:bwipe!`. See `:help i_CTRL-O`, `:help i_CTRL-R`.

| Keys | Effect |
|---|---|
| `<C-o>{command}` | Run one Normal command, return to Insert mode |
| `<C-r>0` | Insert yank register 0 in Insert mode |
