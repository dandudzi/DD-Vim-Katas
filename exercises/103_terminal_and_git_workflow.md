# Kata: Terminal Mode and Git-Hunk Review

> **Environment:** Neovim; Git for the hunk section; Gitsigns/LazyVim mappings optional.
> **Readiness:** `:echo executable('git')` must be `1`. Check `:verbose nmap ]h`, `[h`, and `<Space>ghp`; skip the hunk section if they do not resolve to Gitsigns.

## Objective
Leave Terminal mode safely, then review known Git hunks in a disposable repository without staging or resetting user work.

## Setup
```vim
:let g:kata_103_dir=tempname() | call mkdir(g:kata_103_dir, 'p')
:call writefile(['one', 'two', 'three', 'four'], g:kata_103_dir.'/demo.txt')
:call system(['git','-C',g:kata_103_dir,'init','-q']) | call system(['git','-C',g:kata_103_dir,'add','demo.txt'])
:call system(['git','-C',g:kata_103_dir,'-c','user.name=Kata','-c','user.email=kata@example.invalid','commit','-qm','base'])
:call writefile(['ONE', 'two', 'three', 'FOUR'], g:kata_103_dir.'/demo.txt')
:execute 'lcd '.fnameescape(g:kata_103_dir) | edit demo.txt
```

## Mini-Kata A: Terminal
1. Run `:terminal`, then `printf 'terminal-ready\n'`. **Verify:** output contains `terminal-ready`.
2. Leave Terminal mode. **Verify:** `:echo mode()` is not `t`; use Normal-mode motions in the terminal buffer.
3. Return to Terminal mode, run `exit`, and return to `demo.txt`.

## Mini-Kata B: Gitsigns
1. Wait for Gitsigns to attach (`:Gitsigns debug_messages` if available). Navigate both hunks with `]h` and `[h`. **Verify:** they are at lines 1 and 4.
2. Preview each hunk with the verified preview mapping. **Verify:** previews show `one`→`ONE` and `four`→`FOUR`.
3. Do not stage or reset. **Verify:** `:echo system(['git','-C',g:kata_103_dir,'diff','--','demo.txt'])` still shows both hunks.

## Hints and Solution
<details><summary>Hints</summary>

The built-in escape from Terminal mode is `<C-\><C-n>`. Plugin mappings are configuration-dependent.
</details>
<details><summary>Exact workflow</summary>

Terminal: `:terminal<CR>printf 'terminal-ready\n'<CR><C-\><C-n>`, then `iexit<CR>`. Gitsigns defaults in LazyVim: `]h`, `[h`, and `<Space>ghp`, but only after readiness checks pass.
</details>

## Cleanup and References
`:for g:kata_103_buf in getbufinfo() | if stridx(g:kata_103_buf.name,g:kata_103_dir)==0 | execute 'bwipeout! '.g:kata_103_buf.bufnr | endif | endfor | lcd - | call delete(g:kata_103_dir, 'rf') | unlet g:kata_103_buf g:kata_103_dir`. This removes only the generated repo. See `:help terminal`, https://github.com/lewis6991/gitsigns.nvim, and https://lazyvim.github.io/keymaps.

| Keys | Effect |
|---|---|
| `<C-\><C-n>` | Terminal mode to Normal mode |
| `]h` / `[h` | Next / previous Gitsigns hunk when mapped |
