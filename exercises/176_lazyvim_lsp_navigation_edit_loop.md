# Kata: LazyVim LSP Navigation and Edit Loop

## Task

Practice one LazyVim LSP loop: verify the attached client, navigate from a symbol use, inspect information, rename temporarily, and restore the symbol.

## Start

From any buffer with a TypeScript LSP client available, open the shared JS/TS
practice file in a vertical split and jump to this kata:

```text
:vsplit practice_js_ts_filetypes.ts<CR>
:/kata176ComputeTotal(kata176Subtotal, kata176Tax)<CR>
```

Start in Normal mode on the `k` in `kata176ComputeTotal`, and record that
line and column before running the commands.

## End

The observable final state should be:

```text
cursor returned to the original symbol use
original symbol name restored
hover or references inspected
only the Kata 176 section was temporarily changed
```

## Commands

Run these command steps:

```text
1. :setlocal filetype=typescript<CR>
2. :LspInfo<CR>
3. :lua for _, c in ipairs(vim.lsp.get_clients({bufnr=0})) do print(c.name, 'def', c:supports_method('textDocument/definition', 0), 'refs', c:supports_method('textDocument/references', 0), 'hover', c:supports_method('textDocument/hover', 0), 'rename', c:supports_method('textDocument/rename', 0), 'codeAction', c:supports_method('textDocument/codeAction', 0)) end<CR>
4. :verbose nmap gd<CR>
5. :verbose nmap gr<CR>
6. :verbose nmap K<CR>
7. :verbose nmap <Space>cr<CR>
8. :verbose nmap <Space>ca<CR>
9. gd
10. <C-o>
11. K
12. gr{select one reference, then return with <C-o>}
13. <Space>cr{temporary name}<CR>
14. gr{confirm semantic references changed, then return}
15. <Space>crkata176ComputeTotal<CR>
16. <Space>ca{inspect actions and cancel unless one safe Kata 176 action is intended}
```
