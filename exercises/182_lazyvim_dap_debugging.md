# Kata: LazyVim DAP Debugging

## Task

Practice a readiness-gated LazyVim DAP loop: verify mappings, place one breakpoint, start a disposable session, step once, inspect it, and terminate cleanly.

## Start

Open a disposable source file that has a safe configured DAP launch target. Put the cursor on an executable line that will be reached quickly.

Start in Normal mode on the intended breakpoint line.

## End

The observable debugger state should be:

```text
DAP loads successfully or the kata is skipped before launch.
One breakpoint was toggled on the intended line.
A disposable debug session reached the breakpoint.
One step action was run.
The REPL or session UI was opened for inspection.
No DAP session is active.
No DAP breakpoint signs remain in the current buffer.
```

## Commands

Run these command steps:

```text
1. :lua print(pcall(require, 'dap'))<CR>
2. :verbose nmap <Space>db<CR>
3. :verbose nmap <Space>dc<CR>
4. :verbose nmap <Space>dO<CR>
5. :verbose nmap <Space>dr<CR>
6. :verbose nmap <Space>dt<CR>
7. :lua local dap = require('dap'); print(vim.inspect(vim.tbl_keys(dap.configurations)))<CR>
8. Stop here if DAP is unavailable, any needed mapping is missing, or no safe disposable configuration exists.
9. <Space>db
10. :execute 'sign place buffer='.bufnr('%')<CR>
11. <Space>dc
12. <Space>dO
13. :lua print(require('dap').session() ~= nil)<CR>
14. <Space>dr
15. Inspect one variable, stack frame, or session status without changing program state.
16. <Space>dt
17. :lua require('dap').clear_breakpoints()<CR>
18. :lua print(require('dap').session() == nil)<CR>
19. :execute 'sign place buffer='.bufnr('%')<CR>
```
