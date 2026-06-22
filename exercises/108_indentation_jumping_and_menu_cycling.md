# Kata: Verify Scope Mappings, Cycle Completion, and Restore Spell Options

> **Environment:** Neovim with LazyVim. Scope and `<Tab>` mappings depend on installed plugins; keyword completion and spell commands are built in.

## Objective
Distinguish plugin mappings from built-ins, cycle a deterministic completion list in both directions, and test buffer-local spelling without leaving files or options behind.

## Setup and Fixture
```vim
:let g:kata_108_dir=tempname() | call mkdir(g:kata_108_dir, 'p')
:call writefile(['process product profile','','def run(items):','    for item in items:','        if item.ready:','            print(item.name)','    return len(items)','','Teh final line.'], g:kata_108_dir.'/practice.py')
:tabnew | let g:kata_108_tab=nvim_get_current_tabpage() | execute 'edit '.fnameescape(g:kata_108_dir.'/practice.py') | let g:kata_108_buf=bufnr('%')
:let b:kata_108_spell=&l:spell | let b:kata_108_spelllang=&l:spelllang
```

Start on `print` at line 6, Normal mode.

## Drill A - Attribute Indentation Mappings
Run `:verbose nmap [i` and `:verbose nmap ]i`.

- **Verify:** if either is mapped, its source and description explicitly identify the installed scope provider.
- If unmapped, do not press it: built-in `[i`/`]i` have identifier-search meanings and are not generic indentation jumps.
- Optional provider drill: only when both inspected descriptions say previous/next indent scope, use them from line 6 and verify the cursor remains within lines 3-7.

<details><summary>Exact readiness solution</summary>

`:verbose nmap [i` and `:verbose nmap ]i`. Stop this drill when no scope mapping is reported.
</details>

## Drill B - Deterministic Completion Cycling
1. Go to blank line 2, enter Insert mode, type `pro`, and invoke built-in keyword completion. **Verify:** the menu contains `process`, `product`, and `profile`.
2. Use built-in next and previous completion keys. **Verify:** `<C-n>` and `<C-p>` move in opposite directions; cancel with `<C-e>` and leave line 2 unchanged.
3. Inspect `:verbose imap <Tab>` and `:verbose imap <S-Tab>`. Only if descriptions say next/previous completion item, repeat using those mappings. **Verify:** the selection moves in opposite directions.

<details><summary>Exact completion solution</summary>

`2Gipro<C-x><C-n><C-n><C-p><C-e><C-u><Esc>`. Then inspect the two Insert mappings before trying `<Tab>` or `<S-Tab>`.
</details>

## Drill C - Buffer-Local Spell State
1. Run `:setlocal spell spelllang=en`, place the cursor at the end of blank line 8, then use the next-misspelling command. **Verify:** the cursor reaches `Teh` on line 9 when an English spellfile is installed.
2. Check another language before adding it: `:echo !empty(globpath(&runtimepath,'spell/pl.*'))`. Only when it prints `1`, run `:setlocal spelllang=en,pl`. **Verify:** `:setlocal spell? spelllang?` reports the chosen local state.
3. Restore the saved options. **Verify:** `:echo &l:spell == b:kata_108_spell && &l:spelllang ==# b:kata_108_spelllang` prints `1`.

<details><summary>Exact spell solution</summary>

`:setlocal spell spelllang=en`, `8G$]s`, optionally `:setlocal spelllang=en,pl`, then `:let &l:spell=b:kata_108_spell | let &l:spelllang=b:kata_108_spelllang`.
</details>

## Cleanup and References
Restore options if needed, then explicitly wipe the owned file buffer before deleting its directory: `:call nvim_set_current_tabpage(g:kata_108_tab) | execute 'bwipeout! '.g:kata_108_buf | if nvim_tabpage_is_valid(g:kata_108_tab) | call nvim_set_current_tabpage(g:kata_108_tab) | tabclose! | endif | call delete(g:kata_108_dir, 'rf') | unlet g:kata_108_buf g:kata_108_tab g:kata_108_dir`. Wiping the last buffer may close the owned tab automatically, so cleanup checks the saved handle before closing it explicitly.

See `:help i_CTRL-X_CTRL-N`, `:help i_CTRL-N`, `:help spelllang`, https://lazyvim.github.io/keymaps, and the provider printed by `:verbose map`.

| Keys | Provenance | Effect |
|---|---|---|
| `<C-x><C-n>` | Built in | Start keyword completion |
| `<C-n>` / `<C-p>` | Built in | Next / previous candidate |
| `[i` / `]i`, `<Tab>` / `<S-Tab>` | Configuration-dependent | Use only after mapping verification |
