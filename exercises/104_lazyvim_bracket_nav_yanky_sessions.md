# Kata: Verify LazyVim Navigation, Yanky, Scratch, and Sessions

> **Environment:** Neovim with LazyVim. TODO navigation, Yanky, scratch buffers, and persistence are separate optional features.
> **Safety:** The required drills run in an owned temporary tab. Never clear all Yanky history or overwrite an existing session file.

## Objective
Verify the provider of each mapping before use, navigate deterministic TODOs, cycle two known yanks, and inspect scratch/session mappings without attributing them to built-in Vim.

## Setup
Run these interactive commands:

```vim
:let g:kata_104_dir=tempname() | call mkdir(g:kata_104_dir, 'p')
:call writefile(['-- TODO: first task','first yank','second yank','-- TODO: final task'], g:kata_104_dir.'/practice.lua')
:tabnew | let g:kata_104_tab=nvim_get_current_tabpage() | execute 'edit '.fnameescape(g:kata_104_dir.'/practice.lua') | let g:kata_104_buf=bufnr('%')
```

Start with `gg0`, Normal mode. Confirm `:echo expand('%:p')` begins with `g:kata_104_dir`.

## Part A - TODO Bracket Navigation

**Readiness:** `:verbose nmap ]t` and `:verbose nmap [t` must identify `todo-comments.nvim`. Built-in Vim does not define these TODO motions.

1. Move from the first TODO to the next and back. **Verify:** `:echo line('.')` reports `4`, then `1`.
2. Starting on line 2, jump forward and backward. **Verify:** forward lands line 4 and backward lands line 1.

<details><summary>Exact TODO solution</summary>

1. `gg]t[t`
2. `2G]t[t`
</details>

## Part B - Yanky History

**Readiness:** `:verbose nmap [y`, `:verbose nmap ]y`, and `:verbose nmap <leader>p` must identify `yanky.nvim`. Current LazyVim documents `[y` as cycle forward and `]y` as cycle backward; trust the inspected descriptions if customized.

1. Yank lines 2 and 3, paste below line 4, then cycle once in each direction. **Verify:** the paste begins as `second yank`, changes to `first yank`, then returns to `second yank`; source lines remain unchanged.
2. Open the verified yank-history picker and cancel without selecting. **Verify:** the practice buffer is still current and unchanged.

<details><summary>Exact Yanky solution</summary>

1. `2GyyjyyGp[y]y`
2. `<leader>p<Esc>` when `:verbose nmap` confirms that mapping.
</details>

## Part C - Scratch and Session Readiness

These checks are intentionally non-mutating because both plugins can persist state outside the temporary directory.

1. Run `:verbose nmap <leader>.` and `:verbose nmap <leader>S`. **Verify:** descriptions identify the configured scratch provider before opening any scratch. Do not type into an existing scratch buffer during this kata.
2. Run `:verbose nmap <leader>qs`, `<leader>ql`, and `<leader>qd`. **Verify:** mappings identify `persistence.nvim`. Do not restore or delete a session belonging to the current project.
3. Practice the built-in file format safely: `:execute 'mksession! '.fnameescape(g:kata_104_dir.'/owned-session.vim')`. **Verify:** `filereadable(g:kata_104_dir.'/owned-session.vim')` is `1`; do not source it in a session containing unowned tabs.

<details><summary>Exact readiness commands</summary>

Use the six `:verbose nmap` commands above. Create only `g:kata_104_dir.'/owned-session.vim'` with `:mksession!`.
</details>

## Hints
<details><summary>Hint</summary>

The source line printed by `:verbose nmap` is the evidence for plugin attribution. An absent mapping means that optional section is not ready, not that the keys should be guessed.
</details>

## Cleanup and References
Return to the owned tab and explicitly wipe its owned file buffer before deleting the directory: `:call nvim_set_current_tabpage(g:kata_104_tab) | execute 'bwipeout! '.g:kata_104_buf | if nvim_tabpage_is_valid(g:kata_104_tab) | call nvim_set_current_tabpage(g:kata_104_tab) | tabclose! | endif | call delete(g:kata_104_dir, 'rf') | unlet g:kata_104_buf g:kata_104_tab g:kata_104_dir`. Wiping the tab's last buffer may close that tab automatically, hence the validity check. No user buffer is touched. Yanky may retain the two harmless practice yanks by design; do not clear unrelated history.

References: https://lazyvim.github.io/keymaps, https://github.com/folke/todo-comments.nvim, https://github.com/gbprod/yanky.nvim, and `:help :mksession`.

Session safety: treat restore and delete mappings as project-mutating operations. In this kata, create only the owned session file in `g:kata_104_dir` and do not source it while unrelated user tabs or buffers are open.

| Feature | Readiness / action |
|---|---|
| TODO | Verify `[t` and `]t`, then navigate lines 1 and 4 |
| Yanky | Verify `[y` and `]y`, then cycle the owned paste |
| Scratch/session | Inspect mappings; write only the owned session file |
