# Kata: LazyVim Completion and Snippet Readiness

## Task

Practice built-in keyword completion first, then use LazyVim completion and snippets only after inspecting the active Insert-mode mappings.

## Start

From any buffer, open the shared JS/TS practice file in a vertical split and
jump to this kata:

```text
:vsplit practice_js_ts_filetypes.ts<CR>
:setlocal filetype=typescript<CR>
:/^cus$<CR>
A
```

Start in Insert mode after `cus`.

## End

The observable final state should be:

```text
cus line completed to a visible customer identifier
snippet expansion either performed with verified mappings or deliberately skipped
only the Kata 180 section was changed
```

## Commands

Run these command steps:

```text
1. <C-n>{repeat until customerEmail is selected}
2. <C-y>
3. <Esc>
4. :verbose imap <Tab><CR>
5. :verbose imap <S-Tab><CR>
6. :verbose imap <C-y><CR>
7. ccus<Esc>A
8. <C-Space>
9. <C-n>{repeat until a customerName, customerEmail, or customerStatus candidate is selected}
10. <C-y>
11. <Esc>/function kata180RenderCard<CR>o
12. for<C-Space>
13. If a snippet candidate is visible: <C-n>{repeat until the snippet candidate is selected}<C-y><Tab>; otherwise: <Esc>u
```
