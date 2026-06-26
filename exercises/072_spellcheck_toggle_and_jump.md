# Kata: Toggle Spell Checking and Navigate Errors

> **Environment:** Vim or Neovim. Built-in commands are `:setlocal spell!`, `]s`, `[s`, `z=`, and `zg`.
> **Portability:** LazyVim may map `<Space>us` to toggle spelling; verify with `:verbose nmap <Space>us` and skip that mapping if it is absent or points elsewhere. The drills use the built-in command.

## Objective
Enable local spell checking, navigate errors, correct them, and safely practice a temporary accepted word.

## Setup and Fixture
Run `:let g:kata_072_old_spellfile=&spellfile | let g:kata_072_tmp=tempname() | execute 'set spellfile='.fnameescape(g:kata_072_tmp).'.add'`, then create:

```text
Teh deploymant is schedueld for Wednesday.
Please reivew the release notes.
Codexium is the internal project name.
```

Run `:setlocal spell spelllang=en`, then `G$`. Start in Normal mode at the end of line 3 so the next `]s` wraps deterministically to `Teh`.

## Drills
1. From the documented `G$` start, use only `]s` and `[s` to visit errors forward and backward. **Verify:** four successive `]s` commands land on `Teh`, `deploymant`, `schedueld`, and `reivew`; `[s` returns to `schedueld`.
2. **Independent start:** restore the exact fixture, run `:setlocal spell spelllang=en`, and return to `G$`. Correct those four words with `ciw`. **Verify:** lines 1-2 read `The deployment is scheduled for Wednesday.` and `Please review the release notes.`
3. On `Codexium`, run the add-good-word command. **Verify:** after `:setlocal spell! | setlocal spell!`, `Codexium` is no longer reached by `]s`.

## Hints
<details><summary>Hints</summary>

`zg` writes to the first file in `spellfile`; this setup redirects it to a temporary file.
</details>

## Solution
<details><summary>Exact keys</summary>

1. `G$]s]s]s]s[s`
2. After restoring the fixture: `G$]sciwThe<Esc>]sciwdeployment<Esc>]sciwscheduled<Esc>]sciwreview<Esc>`.
3. `/Codexium<CR>zg:setlocal spell!<CR>:setlocal spell!<CR>`
</details>

## Cleanup and Reference
Run `:setlocal nospell | let &spellfile=g:kata_072_old_spellfile | call delete(g:kata_072_tmp.'.add') | call delete(g:kata_072_tmp.'.add.spl') | bwipe! | unlet g:kata_072_old_spellfile g:kata_072_tmp`. See `:help spell`, `:help ]s`, `:help zg`.

| Command | Effect |
|---|---|
| `]s` / `[s` | Next / previous misspelling |
| `zg` | Add word to configured spellfile |
