# Kata: Set Match Boundaries with `\zs` and `\ze`

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Use `\zs` and `\ze` to keep context in a search pattern while making only a subsection the match. Success means each `gn` selection below contains the required text and excludes its delimiters.

## Fixture and Start
Create a new unsaved buffer containing exactly:

```text
Practical Vim is a practical book.
id="alpha-17" id="beta-204"
```

Run `gg0`, stay in Normal mode, and reset with `u` or restore this fixture before each drill.

## Drills
1. Search for `Practical Vim` while making only `Vim` the match. Press `gn`. **Verify:** only `Vim` is selected.
2. Match the value of the first `id`, excluding both quotes. Press `gn`, then `n`. **Verify:** selections are `alpha-17`, then `beta-204`.
3. Reset, select each ID value with `gn`, and uppercase it with `gU`. **Verify:** the second line is `id="ALPHA-17" id="BETA-204"`; line 1 is unchanged.

## Hints
<details><summary>Hints</summary>

`\zs` sets the match start; `\ze` sets its end. Context before or after them must still match.
</details>

## Solution
<details><summary>Exact keys</summary>

1. `/Practical \zsVim<CR>gn`
2. `/id="\zs[^"]\+\ze"<CR>gn`, then `<Esc>ngn`
3. `/id="\zs[^"]\+\ze"<CR>gUgn`, then `n.`
</details>

## Cleanup and Reference
Close the unsaved buffer with `:bwipe!`. Built-in help: `:help /\zs`, `:help /\ze`, `:help gn`.

| Item | Effect |
|---|---|
| `\zs` / `\ze` | Set the start/end of the reported match |
| `gn` | Select the next match |
