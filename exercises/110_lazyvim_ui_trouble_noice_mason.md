# Kata: Inspect LazyVim UI Tools Without Touching User Data

> **Environment:** Neovim with LazyVim. Trouble, Noice, Mason, and Neo-tree are independent plugins.
> **Safety:** Setup creates an owned temporary tab and file. Mason is read-only; Neo-tree does not rename, delete, or create project files.

## Objective
Verify each LazyVim mapping, open the corresponding UI against deterministic owned state, and leave the original tab, buffers, tools, and project unchanged.

## Setup
Run exactly:

```vim
:let g:kata_110_dir=tempname() | call mkdir(g:kata_110_dir, 'p')
:call writefile(['first owned line','second owned line'], g:kata_110_dir.'/only.txt')
:tabnew | let g:kata_110_tab=nvim_get_current_tabpage() | execute 'edit '.fnameescape(g:kata_110_dir.'/only.txt')
:let g:kata_110_buf=bufnr('%')
:let g:kata_110_qf=getqflist({'items':1,'title':1,'context':1,'idx':1,'quickfixtextfunc':1})
```

Start in `only.txt`, Normal mode. Verify `:echo expand('%:p') ==# g:kata_110_dir.'/only.txt'` prints `1`.

## Drill A - Trouble with Owned Quickfix Entries
1. Check `:verbose nmap <Space>xQ`; continue only when it identifies Trouble's quickfix view.
2. Populate quickfix:

```vim
:call setqflist([], 'r', {'title':'kata-110', 'items':[{'bufnr':g:kata_110_buf,'lnum':1,'col':1,'text':'first'},{'bufnr':g:kata_110_buf,'lnum':2,'col':1,'text':'second'}]})
```

3. Open Trouble, visit both entries, and close it. **Verify:** entries point only to `only.txt` lines 1 and 2; `:echo len(getqflist())` remains `2`.

<details><summary>Exact Trouble solution</summary>

After readiness and setup: `<Space>xQ`, use `j`/`k` and `<CR>`, then the same verified toggle to close. Mapping details can vary; use Trouble's `g?` help if the toggle differs.
</details>

## Drill B - Noice Message History
1. Check `<Space>sna`, `<Space>snl`, and `<Space>snd` with `:verbose nmap`; each must identify Noice.
2. Run `:echo 'kata-110-one'` and `:echo 'kata-110-two'`.
3. Open all messages, inspect the last, then dismiss notifications. **Verify:** history contains both markers, last is `kata-110-two`, and `getline(1,'$')` is unchanged.

<details><summary>Exact Noice solution</summary>

`:echo 'kata-110-one'`, `:echo 'kata-110-two'`, then verified mappings `<Space>sna`, `<Space>snl`, and `<Space>snd`.
</details>

## Drill C - Mason Readiness Without Package Changes
1. Check `:verbose nmap <Space>cm`; it must identify Mason.
2. Open Mason, press `g?`, inspect one installed/uninstalled status, and close with the UI's documented close key.
3. **Verify:** no install, uninstall, or update job appears in Mason's status/log. Do not press `i`, `X`, or update mappings.

<details><summary>Exact Mason solution</summary>

`<Space>cm`, `g?`, then `q`. This is deliberately inspection-only.
</details>

## Drill D - Neo-tree on the Owned Directory
1. Check `:verbose nmap <Space>e`; it must identify Neo-tree.
2. Run `:execute 'lcd '.fnameescape(g:kata_110_dir)`, open Neo-tree, and select `only.txt`.
3. **Verify:** `:echo expand('%:p') ==# g:kata_110_dir.'/only.txt'` prints `1` and the file still contains exactly two lines. Toggle Neo-tree closed.

<details><summary>Exact Neo-tree solution</summary>

After changing the local directory: `<Space>e`, move to `only.txt`, `<CR>`, then `<Space>e`. Do not use Neo-tree file-operation keys.
</details>

## Cleanup and References
Close plugin UIs, restore the complete pre-kata quickfix state, then explicitly wipe only the owned file buffer:

```vim
:call nvim_set_current_tabpage(g:kata_110_tab)
:call setqflist([], 'r', g:kata_110_qf)
:execute 'bwipeout! '.g:kata_110_buf
:if nvim_tabpage_is_valid(g:kata_110_tab) | call nvim_set_current_tabpage(g:kata_110_tab) | tabclose! | endif
:call delete(g:kata_110_dir, 'rf')
:unlet g:kata_110_qf g:kata_110_buf g:kata_110_tab g:kata_110_dir
```

The saved quickfix object restores its items, title, context, index, and display function. Wiping the tab's last buffer may close that tab automatically, so the validity check avoids closing a user tab afterward. The saved buffer number and tab handle ensure the original buffers and quickfix state are unchanged.

References: https://lazyvim.github.io/keymaps, https://github.com/folke/trouble.nvim, https://github.com/folke/noice.nvim, https://github.com/mason-org/mason.nvim, and https://github.com/nvim-neo-tree/neo-tree.nvim.

| Tool | Deterministic state | Forbidden side effect |
|---|---|---|
| Trouble | Two owned quickfix entries | No edits |
| Noice | Two marker messages | No buffer changes |
| Mason | Existing package list | No install/update/uninstall |
| Neo-tree | Owned temp directory | No create/delete/rename/move |
