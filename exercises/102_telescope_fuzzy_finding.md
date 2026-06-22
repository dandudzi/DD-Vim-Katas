# Kata: Fuzzy-Find Files, Text, and Buffers

> **Environment:** Neovim with LazyVim and its configured picker (Snacks, Telescope, or fzf-lua).
> **Readiness:** Run `:verbose nmap <Space><Space>`, `:verbose nmap <Space>/`, and `:verbose nmap <Space>,`. Continue only when each mapping has a picker description. Provider keys inside the picker can vary.

## Objective
Use LazyVim's picker mappings to open a known file, grep a known token, switch buffers, and resume the previous picker.

## Setup
```vim
:let g:kata_102_dir=tempname() | call mkdir(g:kata_102_dir, 'p')
:call writefile(['ALPHA_TOKEN', 'shared'], g:kata_102_dir.'/alpha-note.txt')
:call writefile(['BETA_TOKEN', 'shared'], g:kata_102_dir.'/beta-code.txt')
:execute 'lcd '.fnameescape(g:kata_102_dir) | edit alpha-note.txt | edit beta-code.txt
```

Start in `beta-code.txt`, Normal mode.

## Drills
1. Open the root file picker, filter `alpha note`, and select the result. **Verify:** `:echo expand('%:t')` is `alpha-note.txt`.
2. Open root live grep, search `BETA_TOKEN`, and choose the only result. **Verify:** current file is `beta-code.txt`, line 1.
3. Open the buffer picker, filter `alpha`, and select it. **Verify:** `alpha-note.txt` is current and `:ls` still lists both files.
4. Resume the latest picker, close it without selection, and confirm the buffer did not change.

## Hints
<details><summary>Hints</summary>

Current LazyVim defaults commonly use `<Space><Space>` for root files, `<Space>/` for root grep, `<Space>,` for buffers, and `<Space>sR` for resume. Trust `:verbose nmap` over this document when customized.
</details>

## Solution
<details><summary>Default LazyVim keys</summary>

1. `<Space><Space>`, type `alpha note`, select with the provider's documented next/previous keys, `<CR>`.
2. `<Space>/`, type `BETA_TOKEN`, `<CR>`.
3. `<Space>,`, type `alpha`, `<CR>`.
4. Verify `:verbose nmap <Space>sR`, press `<Space>sR`, then `<Esc>`.
</details>

## Cleanup and References
`:for g:kata_102_buf in getbufinfo() | if stridx(g:kata_102_buf.name,g:kata_102_dir)==0 | execute 'bwipeout! '.g:kata_102_buf.bufnr | endif | endfor | lcd - | call delete(g:kata_102_dir, 'rf') | unlet g:kata_102_buf g:kata_102_dir`. No real project is searched or changed. References: https://lazyvim.github.io/keymaps and the picker provider shown by `:verbose nmap`.

| Mapping | LazyVim action |
|---|---|
| `<Space><Space>` / `<Space>/` | Find files / grep root |
| `<Space>,` / `<Space>sR` | Buffers / resume picker |
