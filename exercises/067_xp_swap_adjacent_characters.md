## Command: `xp`

**What it does:** deletes the character under the cursor (`x`) and puts it back **after** the cursor (`p`) — effectively **swapping the current character with the one to its right**.

## Practice text

Fix all typos by swapping adjacent letters with `xp` (don’t use insert mode fixes like `cw`, `r`, etc.):

```text
I typed teh command too fast and now the sentence looks odd.

Please check form A and form B before submitting.

It should be and, not adn, in the API docs.

I keep writing thier instead of their when I’m tired.

One more: teh form has adn duplicated in teh footer.
```

## Steps (how to practice)

1. Search for any of the typo words:
   - `/\v<(teh|adn|form|thier)>`
2. On the match, move the cursor onto the **left** character of the swapped pair:
   - `teh` → put cursor on `e` (so `t[e]h`)
   - `adn` → put cursor on `d` (so `a[d]n`)
   - `form` (should be `from`) → put cursor on `o` (so `f[o]rm`)
   - `thier` (should be `their`) → put cursor on `i` (so `th[i]er`)
3. Press `xp` to swap the two characters.
4. Jump to the next typo with `n`.
5. Repeat steps 2–4 until there are no matches left (`n` stops finding anything).

Optional self-check: rerun the search (`/...`) after you think you’re done and confirm it finds nothing.
