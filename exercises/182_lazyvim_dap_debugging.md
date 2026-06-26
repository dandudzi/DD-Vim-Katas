# Kata: LazyVim DAP Debugging Workflow

> **Environment:** Neovim with LazyVim and the optional DAP extra enabled.
> **Dependencies:** `mfussenegger/nvim-dap`, a configured debug adapter, and a disposable program that can be debugged safely.
> **Portability:** Debug mappings, adapters, and launch configurations vary. Verify mappings with `:verbose nmap {keys}` and skip execution when no safe configuration exists.

## Objective

By the end of this kata, you will be able to verify DAP readiness, set a breakpoint, start a disposable debug session, step once, inspect the REPL or session UI, and terminate cleanly.

Success means: debugging either runs only against a disposable program with an identified adapter, or it is skipped before any process is launched.

## Prerequisites

- Know: how to open a source file that belongs to a safe debug configuration.
- Required option/state: a disposable script, test program, or temporary project that can be launched under a debugger.
- Required external tool/plugin: nvim-dap plus the relevant debug adapter for the chosen language.
- Readiness check: run `:lua print(pcall(require, 'dap'))` and confirm it prints `true`.

## Setup

1. Save the current tab and directory:

```vim
:let g:kata_182_tab=nvim_get_current_tabpage()
:let g:kata_182_cwd=getcwd()
```

2. Inspect mappings without pressing them:

```vim
:verbose nmap <Space>db
:verbose nmap <Space>dc
:verbose nmap <Space>dO
:verbose nmap <Space>di
:verbose nmap <Space>do
:verbose nmap <Space>dr
:verbose nmap <Space>dt
```

3. Inspect available debug configuration families:

```vim
:lua local ok, dap = pcall(require, 'dap'); if ok then print(vim.inspect(vim.tbl_keys(dap.configurations))) else print('dap unavailable') end
```

4. If DAP, a mapping, an adapter, or a safe program is missing, create a scratch note with the missing item and mark the kata skipped.
5. If ready, open the disposable source file and put the cursor on an executable line where a breakpoint can be hit.

## Initial Fixture

Use a source file from an owned temporary project or disposable copy. The file must satisfy all of these conditions:

- A configured DAP adapter can launch or attach to it safely.
- The chosen line is executable and can be reached quickly.
- The debug run does not mutate user data, contact production services, or require secret credentials.

Start in Normal mode on the intended breakpoint line.

## Constraints

- Use debug mappings only after `:verbose nmap` confirms their owner and purpose.
- Do not install debug adapters during this kata.
- Do not attach to an unknown or production process.
- Skip stepping drills when the adapter cannot launch the disposable program.

## Tasks

### Drill A - Prove DAP Readiness

**Goal:** Decide whether the optional workflow can run.

1. Confirm the DAP module can load.
2. Inspect breakpoint, continue, step, REPL, and terminate mappings.
3. Inspect configured language families and confirm one matches the disposable program.

**Verify:** the workflow is marked `Ready` only when DAP loads, mappings are identified, and the selected file has a safe adapter configuration.

### Drill B - Set and Verify a Breakpoint

**Goal:** Place one breakpoint without launching a process.

1. Use the verified breakpoint action on the executable line.
2. Inspect placed signs for the current buffer.
3. Toggle the breakpoint off and on once to prove you can clean it up.

**Verify:** `:sign place buffer={bufnr}` shows a DAP breakpoint sign only while the breakpoint is enabled.

### Drill C - Start and Step in a Disposable Session

**Goal:** Launch or continue to the breakpoint, then step once.

1. Use the verified continue action and choose only the disposable configuration.
2. When execution stops, use one verified step action.
3. Confirm a DAP session is active.

**Verify:** `:lua print(require('dap').session() ~= nil)` prints `true` while the session is stopped or running.

### Drill D - Inspect and Terminate

**Goal:** Open a debug inspection surface and end the session cleanly.

1. Open the verified REPL or session UI.
2. Inspect one variable, stack frame, or session status without changing program state.
3. Use the verified terminate action and clear breakpoints.

**Verify:** `:lua print(require('dap').session() == nil)` prints `true` after termination, and no DAP breakpoint signs remain in the buffer.

### Challenge - Debug Without Prompts

From the disposable source file, set one breakpoint, start the safe configuration, step once, inspect the session, terminate, and clear the breakpoint without consulting the solution.

**Verify:** the final buffer is the source file, no DAP session is active, and no DAP breakpoint sign remains.

## Expected Final State

For non-text workflows, verify all of the following:

- The current buffer is the same disposable source file.
- No DAP session is active.
- No DAP breakpoint signs remain in the current buffer.
- If any readiness condition was absent, the kata was skipped before launching or attaching to a process.

## Hints

<details>
<summary>Hint 1</summary>

Breakpoint placement is safe to practice before launching. Treat launch and attach as separate readiness gates.

</details>

<details>
<summary>Hint 2</summary>

The DAP Lua API is useful for verification even when local mappings differ. Use mappings for the workflow only after `:verbose nmap` confirms them.

</details>

## Solution

<details>
<summary>Show exact commands and API calls</summary>

### Drill A

```vim
:lua print(pcall(require, 'dap'))
:verbose nmap <Space>db
:verbose nmap <Space>dc
:verbose nmap <Space>dO
:verbose nmap <Space>di
:verbose nmap <Space>do
:verbose nmap <Space>dr
:verbose nmap <Space>dt
:lua local dap = require('dap'); print(vim.inspect(vim.tbl_keys(dap.configurations)))
```

Continue only when the module check prints `true`, the mapping sources match DAP, and one configuration family matches the disposable program.

### Drill B

Use the verified breakpoint mapping, or run:

```vim
:lua require('dap').toggle_breakpoint()
:execute 'sign place buffer='.bufnr('%')
:lua require('dap').toggle_breakpoint()
:lua require('dap').toggle_breakpoint()
```

The sign check should show the breakpoint after the first and third toggle, but not after the second.

### Drill C

Use the verified continue and step mappings, or run:

```vim
:lua require('dap').continue()
:lua require('dap').step_over()
:lua print(require('dap').session() ~= nil)
```

If your adapter prompts for a configuration, choose only the disposable configuration prepared for this kata.

### Drill D

Use the verified REPL and terminate mappings, or run:

```vim
:lua require('dap').repl.open()
:lua require('dap').terminate()
:lua require('dap').clear_breakpoints()
:lua print(require('dap').session() == nil)
:execute 'sign place buffer='.bufnr('%')
```

Close the REPL or UI window with its documented close key after confirming the session is gone.

### Challenge

Use only the verified DAP mappings: breakpoint, continue, one step action, REPL or session UI, terminate, and breakpoint clear.

</details>

## Reset and Cleanup

- Between drills: terminate any active session before changing files or configurations.
- After the kata:

```vim
:lua pcall(function() require('dap').terminate() end)
:lua pcall(function() require('dap').clear_breakpoints() end)
:execute 'lcd '.fnameescape(g:kata_182_cwd)
:if exists('g:kata_182_tab') && nvim_tabpage_is_valid(g:kata_182_tab) | call nvim_set_current_tabpage(g:kata_182_tab) | endif
:unlet! g:kata_182_tab g:kata_182_cwd
```

- Preserve user data: debug only disposable programs and never attach to an unknown process during this kata.

## Notes and Portability

- Configuration-dependent behavior: LazyVim DAP mappings may change or may be disabled. Trust `:verbose nmap`, not a memorized key list.
- Adapter-dependent behavior: launch prompts, step behavior, stack frames, and variable inspection come from the selected debug adapter.
- Skip path: if DAP loads but no safe adapter configuration exists, this kata is complete when you record the missing configuration and do not launch anything.
- Related readiness model: `171_lazyvim_discovery_readiness.md`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:verbose nmap <Space>db` | Command-line | Inspects the breakpoint mapping |
| `:verbose nmap <Space>dc` | Command-line | Inspects the continue mapping |
| `:verbose nmap <Space>dO` | Command-line | Inspects the step-over mapping |
| `:verbose nmap <Space>di` | Command-line | Inspects the step-into mapping |
| `:verbose nmap <Space>do` | Command-line | Inspects the step-out mapping |
| `:verbose nmap <Space>dr` | Command-line | Inspects the REPL mapping |
| `:verbose nmap <Space>dt` | Command-line | Inspects the terminate mapping |
| `:lua require('dap').toggle_breakpoint()` | Command-line | Toggles a breakpoint on the current line |
| `:lua require('dap').continue()` | Command-line | Starts or continues the selected debug configuration |
| `:lua require('dap').terminate()` | Command-line | Terminates the active debug session |

## References

- [nvim-dap documentation](https://github.com/mfussenegger/nvim-dap) - Debug Adapter Protocol client API.
- [LazyVim DAP extra](https://www.lazyvim.org/extras/dap/core) - optional LazyVim DAP integration.
- [`:help sign-commands`](https://neovim.io/doc/user/sign.html#sign-commands) - verifying breakpoint signs.
- [`:help :verbose`](https://neovim.io/doc/user/various.html#:verbose) - mapping source inspection.
