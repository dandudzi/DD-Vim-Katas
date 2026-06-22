# Kata: Swap Adjacent Characters with `xp`

> **Environment:** Vim or Neovim. **Dependencies:** None.

## Objective
Fix transposition typos with `xp` and repeat a search/fix workflow without Insert mode.

## Fixture and Start
```text
teh adn form thier
clean text stays clean
teh form has adn
```

Use a new buffer, insert the fixture, then give it an owned temporary name:

```vim
:let g:kata_067_file=tempname().'.txt'
:execute 'write! '.fnameescape(g:kata_067_file)
:let g:kata_067_qf=getqflist({'items':1,'title':1,'context':1,'idx':1,'quickfixtextfunc':1})
```

Start at `gg0` in Normal mode. Do not use `r`, `s`, `i`, or `c` for fixes.

## Drills
1. Put the cursor on `e` in the first `teh` and swap it with `h`. **Verify:** the first word is `the`.
2. Reset. Fix all four typos on line 1 using `xp`. **Verify:** line 1 is `the and from their`.
3. Reset. Search for each bad form and fix every occurrence. **Verify:**

```text
the and from their
clean text stays clean
the from has and
```

Write the corrected disposable buffer with `:update`. Then run `:call setqflist([], 'r')` followed by `:vimgrep /\v<(teh|adn|form|thier)>/ %`. **Verify:** Vim reports `E480: No match`; that error is the expected no-match result, and `:echo len(getqflist())` remains `0`.

## Hints
<details><summary>Hints</summary>

`x` deletes the character under the cursor; `p` puts it after the new cursor position. The cursor must begin on the left character of the reversed pair.
</details>

## Solution
<details><summary>Exact keys</summary>

1. `gg0lxp`
2. `/teh<CR>lxp`, `/adn<CR>lxp`, `/form<CR>lxp`, `/thier<CR>2lxp`
3. Use `/\v<(teh|adn|form|thier)><CR>`; on each match move to the reversed pair (`l`, `l`, `l`, or `2l` respectively), press `xp`, then repeat the search.
</details>

## Cleanup and Reference
Restore between early drills with `u` or by reinserting the fixture. Clean up only the owned file and restore the complete saved quickfix state with `:call setqflist([], 'r', g:kata_067_qf) | bwipe! | call delete(g:kata_067_file) | unlet g:kata_067_qf g:kata_067_file`. See `:help x`, `:help p`, `:help :vimgrep`.

| Keys | Effect |
|---|---|
| `xp` | Swap the character under cursor with the one to its right |
