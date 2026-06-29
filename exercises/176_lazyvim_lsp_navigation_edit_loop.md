# Kata: LazyVim LSP Navigation and Edit Loop

## Task

Practice one LazyVim LSP loop: verify the attached client, navigate from a symbol use, inspect information, rename temporarily, and restore the symbol.

## Start

Open a disposable file in a project with an attached LSP client and choose one symbol use with at least one definition and two references:

```text
symbol use selected in a disposable LSP buffer
original symbol name recorded before editing
```

Start in Normal mode on the first character of the chosen symbol use, and record that line and column before running the commands.

## End

The observable final state should be:

```text
cursor returned to the original symbol use
original symbol name restored
hover or references inspected
no unrelated file changed
```

## Commands

Run these command steps:

```text
1. :LspInfo<CR>
2. :lua for _, c in ipairs(vim.lsp.get_clients({bufnr=0})) do print(c.name, 'def', c:supports_method('textDocument/definition', 0), 'refs', c:supports_method('textDocument/references', 0), 'hover', c:supports_method('textDocument/hover', 0), 'rename', c:supports_method('textDocument/rename', 0), 'codeAction', c:supports_method('textDocument/codeAction', 0)) end<CR>
3. :verbose nmap gd<CR>
4. :verbose nmap gr<CR>
5. :verbose nmap K<CR>
6. :verbose nmap <Space>cr<CR>
7. :verbose nmap <Space>ca<CR>
8. gd
9. <C-o>
10. K
11. gr{select one reference, then return with <C-o>}
12. <Space>cr{temporary name}<CR>
13. gr{confirm semantic references changed, then return}
14. <Space>cr{original symbol name}<CR>
15. <Space>ca{inspect actions and cancel unless one safe disposable-buffer action is intended}
```
