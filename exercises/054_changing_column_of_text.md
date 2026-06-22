# Kata: Change a Text Column with Visual Block Mode

> **Environment:** Vim or Neovim; built-in Visual block mode

## Objective
Replace the same character columns on several lines with one block change. Success means changing every `images` path to `components` and nothing else.

## Initial Fixture
```css
li.one   a{ background-image: url('/images/sprite.png'); }
li.two   a{ background-image: url('/images/sprite.png'); }
li.three a{ background-image: url('/images/sprite.png'); }
```
Start in Normal mode on the `i` of the first `/images` (line 1, column 37). Confirm with `:echo line('.') col('.')` -> `1 37`.

## Tasks
### Drill A - Define the rectangle
Select the six letters of `images` on all three lines. **Verify before editing:** selection spans lines 1-3 and columns 37-42.

### Drill B - Change the block
Replace the selection with `components`, completing propagation with `<Esc>`. **Verify:** each line contains `/components/sprite.png` exactly once.

### Drill C - Repeat from navigation
Reset to line 1 column 1, locate the first `images` with search, then perform the block change. **Verify:** `:%s/components//gn` reports 3 matches on 3 lines.

### Challenge
Reset and complete the edit without search, using the known coordinate and one block change.

## Hints
<details><summary>Hints</summary>
From the first `i`, `<C-v>2j5l` selects a 3-by-6 rectangle. Block `c` applies inserted text to each row only after `<Esc>`.
</details>

## Solution
<details><summary>Show exact keys</summary>
- A: `<C-v>2j5l`
- B: `ccomponents<Esc>`
- C: `gg/images<CR><C-v>2j5lccomponents<Esc>`
- Challenge: `gg036l<C-v>2j5lccomponents<Esc>`
</details>

## Reset and Cleanup
Use one `u` immediately after the block change or restore fixture. Clear highlighting with `:nohlsearch`; close with `:bwipeout!`. Use `<Esc>`, not `<C-c>`, to trigger propagation.

## References
- [`:help v_b_c`](https://vimhelp.org/visual.txt.html#v_b_c)
