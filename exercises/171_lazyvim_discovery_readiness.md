# Kata: LazyVim Discovery and Readiness Checks

> **Environment:** Neovim with LazyVim or another Lazy.nvim-based configuration.
> **Dependencies:** None for discovery. Individual rows may identify optional plugins that are absent.
> **Portability:** Mappings are configuration-dependent. Always verify them with `:verbose nmap {keys}` before pressing them.

## Objective

By the end of this kata, you will be able to decide whether a LazyVim-oriented kata is ready, custom, or skippable by inspecting mappings, commands, and plugin modules before using them.

Success means: you can fill a readiness table with evidence from `:verbose` checks and avoid guessing plugin keys.

## Prerequisites

- Know: Normal-mode mappings use `nmap`, Visual-mode mappings use `xmap`, and Insert-mode mappings use `imap`.
- Required option/state: a Neovim session where pressing plugin mappings will not be needed until after inspection.
- Required external tool/plugin: none.
- Readiness check: run `:echo has('nvim')` and confirm it prints `1`.

## Setup

1. Open a disposable tab and scratch buffer:

```vim
:tabnew | let g:kata_171_tab=nvim_get_current_tabpage()
:setlocal buftype=nofile bufhidden=wipe noswapfile
:file kata-171-readiness.md
```

2. Insert this table:

```markdown
| Feature | Check | Provider/source evidence | Status | Next action |
|---|---|---|---|---|
| Leader key | `g:mapleader` |  |  |  |
| Plugin manager | `:Lazy` |  |  |  |
| Explorer | `<Space>e` |  |  |  |
| Project search | `<Space>/` |  |  |  |
| Quickfix UI | `<Space>xQ` |  |  |  |
| Tests | `<Space>tt` |  |  |  |
| Debug continue | `<Space>dc` |  |  |  |
```

3. Start on the first table row in Normal mode.

## Initial Fixture

The scratch table is the fixture. Do not open plugin UIs during readiness inspection unless a drill explicitly asks for it.

## Constraints

- Use `:verbose nmap {keys}` for Normal-mode mapping checks.
- Do not press a mapping until the source line proves what will handle it.
- Treat an absent optional mapping or plugin as `Skip`, not as a failure.
- Use `Custom` when a mapping exists but does not come from the expected plugin or LazyVim layer.

## Tasks

### Drill A - Identify the Session Baseline

**Goal:** Record whether the session looks like a LazyVim-compatible session.

1. Inspect the configured leader and local leader.
2. Check whether `:Lazy` and `:LazyExtras` exist as commands.
3. Fill the first two rows with `Ready`, `Custom`, or `Skip`.

**Verify:** the table records the leader value and whether each command exists. No plugin UI has been opened.

### Drill B - Inspect Mappings Without Running Them

**Goal:** Classify feature mappings by source before use.

1. Inspect the mappings for explorer, project search, and quickfix UI.
2. Record the source file or plugin name reported by `:verbose`.
3. Mark each row `Ready` only when the mapping exists and its source matches the feature you intend to practice.

**Verify:** every inspected mapping row contains evidence such as a plugin name, Lua module, config file, or `No mapping found`.

### Drill C - Gate Optional Plugin Katas

**Goal:** Decide whether optional test and debug workflows can run.

1. Inspect the test and debug mappings.
2. Check whether the related modules can be loaded without assuming they are installed.
3. Mark each optional workflow `Ready` only when both the mapping and module check support it.

**Verify:** `Tests` and `Debug continue` are either `Ready` with evidence or `Skip` with a clear missing dependency.

### Drill D - Apply the Readiness Rule

**Goal:** Convert readiness evidence into a safe next action.

1. For each `Ready` row, write the next action as "Open only against owned/disposable state".
2. For each `Custom` row, write "Read local mapping source first".
3. For each `Skip` row, write "Skip this optional drill".

**Verify:** no row tells you to press unknown keys, install packages, mutate real project files, or attach a debugger to a production process.

### Challenge - Prepare for a Plugin Kata

Reset the table. Choose one LazyVim/plugin kata from `104`, `109`, `110`, `181`, or `182`, then fill only the rows needed to decide whether that kata is safe to run.

**Verify:** the table gives a clear `Ready`, `Custom`, or `Skip` decision before any feature mapping is pressed.

## Expected Final State

The scratch buffer must contain a completed readiness table. For non-text state, verify all of the following:

- The current buffer is still `kata-171-readiness.md`.
- No plugin UI remains open unless you intentionally opened `:Lazy` and closed it.
- Optional rows that are not available are marked `Skip`.

## Hints

<details>
<summary>Hint 1</summary>

The useful part of `:verbose nmap` is the "Last set from" line. It tells you whether a key belongs to LazyVim, a plugin, or local configuration.

</details>

<details>
<summary>Hint 2</summary>

Module checks are safer than invoking feature commands. `pcall(require, "module")` returns `true` or `false` without forcing you to use the plugin workflow.

</details>

## Solution

<details>
<summary>Show exact commands</summary>

### Drill A

```vim
:echo get(g:, 'mapleader', '\')
:echo get(g:, 'maplocalleader', '\')
:echo exists(':Lazy')
:echo exists(':LazyExtras')
```

Record `Ready` for commands that return `2`, because that means a user command exists. Record `Skip` when the command does not exist.

### Drill B

```vim
:verbose nmap <Space>e
:verbose nmap <Space>/
:verbose nmap <Space>xQ
```

Record the mapping source exactly enough to identify the owner. If Neovim reports no mapping, write `Skip`.

### Drill C

```vim
:verbose nmap <Space>tt
:verbose nmap <Space>dc
:lua print(pcall(require, 'neotest'))
:lua print(pcall(require, 'dap'))
```

Tests are ready only when the test mapping and `neotest` module are both present. Debugging is ready only when the debug mapping and `dap` module are both present.

### Drill D

Fill the `Next action` column from the recorded status:

- `Ready`: open the feature only against an owned buffer, temporary directory, or disposable test/debug project.
- `Custom`: read the local mapping source and plugin help before using the feature.
- `Skip`: skip the optional drill and continue with built-in Vim/Neovim practice.

</details>

## Reset and Cleanup

- Between drills: edit the scratch table in place or run `u` to undo a mistaken entry.
- After the kata: `:if exists('g:kata_171_tab') && nvim_tabpage_is_valid(g:kata_171_tab) | call nvim_set_current_tabpage(g:kata_171_tab) | tabclose! | endif | unlet! g:kata_171_tab`.
- Preserve user data: this kata uses only a nofile scratch buffer and read-only inspection commands.

## Notes and Portability

- Built-in behavior: `:verbose map` reports where a mapping was last set.
- Configuration-dependent behavior: `<Space>` is a common LazyVim leader notation, but the real leader is `g:mapleader`.
- Verify mappings with `:verbose nmap {KEYS}` before Normal-mode drills, `:verbose xmap {KEYS}` before Visual-mode drills, and `:verbose imap {KEYS}` before Insert-mode drills.
- Optional extras such as Neotest and DAP are valid to skip when their module, adapter, or mapping is absent.
- Model katas: `104_lazyvim_bracket_nav_yanky_sessions.md`, `109_grugfar_and_picker_exports.md`, and `110_lazyvim_ui_trouble_noice_mason.md` show readiness-gated plugin workflows.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:verbose nmap {keys}` | Command-line | Shows the Normal-mode mapping and where it was last set |
| `:echo exists(':Lazy')` | Command-line | Reports whether the `:Lazy` command exists |
| `:lua print(pcall(require, 'neotest'))` | Command-line | Checks whether the Neotest module can be loaded |
| `:lua print(pcall(require, 'dap'))` | Command-line | Checks whether the nvim-dap module can be loaded |

## References

- [`:help :verbose`](https://neovim.io/doc/user/various.html#:verbose) - mapping source inspection.
- [`:help :map-verbose`](https://neovim.io/doc/user/map.html#:map-verbose) - verbose mapping output.
- [LazyVim keymaps](https://lazyvim.github.io/keymaps) - common LazyVim mapping conventions.
- [Lazy.nvim documentation](https://github.com/folke/lazy.nvim) - plugin manager commands and plugin loading.
