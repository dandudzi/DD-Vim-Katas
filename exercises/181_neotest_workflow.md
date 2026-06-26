# Kata: LazyVim Neotest Workflow

> **Environment:** Neovim with LazyVim and the optional Neotest extra enabled.
> **Dependencies:** `nvim-neotest/neotest` plus at least one configured language adapter for a disposable test project.
> **Portability:** Test mappings and adapters vary. Verify mappings with `:verbose nmap {keys}` and skip execution when no adapter supports the current file.

## Objective

By the end of this kata, you will be able to verify Neotest readiness, run a nearest test and a file test, inspect output, and stop a run without assuming a specific test framework.

Success means: every Neotest action is either run against a disposable supported test file or explicitly skipped with the missing readiness condition recorded.

## Prerequisites

- Know: how to open a known test file in a project that is safe to run.
- Required option/state: a disposable project or temporary copy of a project with tests.
- Required external tool/plugin: Neotest, a language adapter, and that adapter's normal test executable.
- Readiness check: run `:lua print(pcall(require, 'neotest'))` and confirm it prints `true`.

## Setup

1. Save the current tab and directory:

```vim
:let g:kata_181_tab=nvim_get_current_tabpage()
:let g:kata_181_cwd=getcwd()
```

2. Check mappings without pressing them:

```vim
:verbose nmap <Space>tt
:verbose nmap <Space>tT
:verbose nmap <Space>to
:verbose nmap <Space>ts
:verbose nmap <Space>tS
```

3. If Neotest or a required mapping is absent, create a scratch note with the missing item and mark the kata skipped.
4. If Neotest is present, open a disposable test file supported by your configured adapter. Put the cursor inside one small test case that is safe to run repeatedly.

## Initial Fixture

Use a test file from an owned temporary project or a disposable copy. The file must satisfy all of these conditions:

- It is recognized by a configured Neotest adapter.
- It has at least one small test case under the cursor.
- Running the test does not modify user data, contact production services, or require secret credentials.

Start in Normal mode with the cursor inside the chosen test case.

## Constraints

- Use the mappings only after `:verbose nmap` confirms their owner and purpose.
- Do not install adapters, packages, or test dependencies during this kata.
- Do not run tests in a project where side effects are unknown.
- Skip a drill when the adapter cannot discover the current file or nearest test.

## Tasks

### Drill A - Prove Neotest Readiness

**Goal:** Decide whether the optional workflow can run.

1. Confirm the Neotest module can load.
2. Inspect the mappings for nearest test, file test, output, summary, and stop.
3. Record whether the current file is a supported disposable test file.

**Verify:** the workflow is marked `Ready` only when Neotest loads, mappings are identified, and the current file is supported by an adapter.

### Drill B - Run the Nearest Test

**Goal:** Run only the test under the cursor.

1. Use the verified nearest-test action.
2. Open the summary or output view using a verified action.
3. Confirm the displayed result belongs to the current test case.

**Verify:** the result shown by Neotest references the current file and the selected test, not the whole project.

### Drill C - Run the Current File

**Goal:** Run the tests in the current file and inspect detailed output.

1. Use the verified file-test action.
2. Open the output for one result.
3. Close the output view without editing the test file.

**Verify:** Neotest reports results for the current file only, and `:echo &modified` prints `0`.

### Drill D - Stop or Clear a Run Safely

**Goal:** Practice the stop path without leaving jobs or windows behind.

1. Start a run that is safe to interrupt, or use the current run if it is still active.
2. Use the verified stop action.
3. Close Neotest views.

**Verify:** no Neotest run remains active, and the current window is back on the disposable test file.

### Challenge - Repeat Without Prompts

From the supported test file, run the nearest test, inspect its output, run the current file, and close all Neotest views without consulting the solution.

**Verify:** the final buffer is the test file, `:echo &modified` is `0`, and no Neotest output or summary window remains open.

## Expected Final State

For non-text workflows, verify all of the following:

- The current buffer is the same disposable test file.
- The file has not been modified.
- Neotest views are closed or intentionally left in a known window.
- If any readiness condition was absent, the kata was skipped before running tests.

## Hints

<details>
<summary>Hint 1</summary>

Adapter discovery is separate from Neotest itself. A loaded Neotest module does not prove that the current file has a matching adapter.

</details>

<details>
<summary>Hint 2</summary>

The Neotest Lua API is useful when local mappings differ. Use mappings for practice only after `:verbose nmap` confirms them.

</details>

## Solution

<details>
<summary>Show exact commands and API calls</summary>

### Drill A

```vim
:lua print(pcall(require, 'neotest'))
:verbose nmap <Space>tt
:verbose nmap <Space>tT
:verbose nmap <Space>to
:verbose nmap <Space>ts
:verbose nmap <Space>tS
```

Continue only when the module check prints `true`, the mapping sources match Neotest, and your current file is supported by an adapter.

### Drill B

Use the verified nearest-test mapping, or run:

```vim
:lua require('neotest').run.run()
:lua require('neotest').summary.toggle()
```

Open output for the selected result with the verified output mapping, or:

```vim
:lua require('neotest').output.open({ enter = true, auto_close = true })
```

### Drill C

Use the verified file-test mapping, or run:

```vim
:lua require('neotest').run.run(vim.fn.expand('%'))
```

Then inspect output with the verified output action.

### Drill D

Use the verified stop mapping, or run:

```vim
:lua require('neotest').run.stop()
```

Close Neotest windows with their documented close key, usually `q`, after checking local help if needed.

### Challenge

Run nearest, inspect output, run file, then stop or close views using only the mappings whose sources you verified at setup.

</details>

## Reset and Cleanup

- Between drills: keep the same disposable test file and reset any Neotest views with their documented close key.
- After the kata:

```vim
:lua pcall(function() require('neotest').run.stop() end)
:execute 'lcd '.fnameescape(g:kata_181_cwd)
:if exists('g:kata_181_tab') && nvim_tabpage_is_valid(g:kata_181_tab) | call nvim_set_current_tabpage(g:kata_181_tab) | endif
:unlet! g:kata_181_tab g:kata_181_cwd
```

- Preserve user data: run only tests from an owned disposable project or a temporary copy, and do not install dependencies during the kata.

## Notes and Portability

- Configuration-dependent behavior: LazyVim test mappings may change or may be disabled. Trust `:verbose nmap`, not a memorized key list.
- Adapter-dependent behavior: test discovery, output shape, and stop behavior come from the configured Neotest adapter and underlying test runner.
- Skip path: if Neotest loads but the current file is unsupported, this kata is complete when you record the missing adapter and do not run anything.
- Related readiness model: `171_lazyvim_discovery_readiness.md`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:verbose nmap <Space>tt` | Command-line | Inspects the nearest-test mapping |
| `:verbose nmap <Space>tT` | Command-line | Inspects the current-file test mapping |
| `:verbose nmap <Space>to` | Command-line | Inspects the output mapping |
| `:verbose nmap <Space>ts` | Command-line | Inspects the summary mapping |
| `:verbose nmap <Space>tS` | Command-line | Inspects the stop mapping |
| `:lua require('neotest').run.run()` | Command-line | Runs the nearest discovered test |
| `:lua require('neotest').run.run(vim.fn.expand('%'))` | Command-line | Runs tests in the current file |
| `:lua require('neotest').run.stop()` | Command-line | Stops a Neotest run |

## References

- [Neotest documentation](https://github.com/nvim-neotest/neotest) - core test runner API and adapter model.
- [LazyVim test extra](https://www.lazyvim.org/extras/test/core) - optional LazyVim Neotest integration.
- [`:help :verbose`](https://neovim.io/doc/user/various.html#:verbose) - mapping source inspection.
