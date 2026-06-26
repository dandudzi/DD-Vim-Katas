# Kata: Gitsigns Hunk Workflow in a Temp Repo

> **Environment:** Neovim with LazyVim and Gitsigns.
> **Dependencies:** `git` executable and a working Gitsigns installation.
> **Portability:** Hunk mappings are configuration-dependent. Use `:Gitsigns` commands for the drills, and verify mappings with `:verbose nmap {keys}` before trying mapped shortcuts.

## Objective

By the end of this kata, you will be able to navigate, preview, stage, and
reset Git hunks with Gitsigns while keeping all mutations inside a generated
temporary repository.

Success means: one hunk is staged, another hunk is reset from the worktree, and
no file outside the temp repo is changed.

## Prerequisites

- Know: basic Normal-mode movement and `git diff --cached`.
- Required option/state: current buffer must be inside the generated Git repo.
- Required external tool/plugin: `git` and Gitsigns.
- Readiness check: run `:echo executable('git')` and confirm it prints `1`; run `:echo exists(':Gitsigns')` and confirm it prints `2`.

## Setup

1. Run this block exactly:

```vim
:let g:kata_179_dir = tempname()
:call mkdir(g:kata_179_dir, 'p')
:call writefile(['title = base', 'alpha = 1', 'bravo = 2', 'charlie = 3', 'delta = 4', 'echo = 5', 'foxtrot = 6', 'golf = 7', 'hotel = 8', 'theta = 9', 'trailer = base'], g:kata_179_dir.'/config.txt')
:call system(['git', '-C', g:kata_179_dir, 'init'])
:call system(['git', '-C', g:kata_179_dir, 'config', 'core.fsmonitor', 'false'])
:call system(['git', '-C', g:kata_179_dir, 'config', 'commit.gpgsign', 'false'])
:call system(['git', '-C', g:kata_179_dir, 'config', 'tag.gpgsign', 'false'])
:call system(['git', '-C', g:kata_179_dir, 'config', 'user.email', 'kata@example.invalid'])
:call system(['git', '-C', g:kata_179_dir, 'config', 'user.name', 'Kata'])
:call system(['git', '-C', g:kata_179_dir, 'add', 'config.txt'])
:call system(['git', '-C', g:kata_179_dir, 'commit', '--no-gpg-sign', '-m', 'base'])
:call writefile(['title = base', 'alpha = 10', 'bravo = 2', 'charlie = 3', 'delta = 4', 'echo = 5', 'foxtrot = 6', 'golf = 7', 'hotel = 8', 'theta = 90', 'trailer = base'], g:kata_179_dir.'/config.txt')
:execute 'edit '.fnameescape(g:kata_179_dir.'/config.txt')
```

2. Wait for Gitsigns to attach if your setup attaches asynchronously.
3. Confirm `:echo expand('%:p') =~# g:kata_179_dir` prints `1`.
4. Confirm `:echo system(['git', '-C', g:kata_179_dir, 'status', '--short'])` shows ` M config.txt`.

## Initial Fixture

`config.txt` has two changed hunks relative to the initial commit:

```text
line 2:  alpha = 1  -> alpha = 10
line 10: theta = 9  -> theta = 90
```

Start in Normal mode on line 1.

## Constraints

- Use only the generated repository in `g:kata_179_dir`.
- Do not stage, reset, or commit any file outside this repo.
- Prefer `:Gitsigns` commands for deterministic drills.
- If using mappings such as `]h`, `[h`, or hunk action mappings, inspect them first with `:verbose nmap {keys}`.

## Tasks

### Drill A - Verify mappings and attachment

**Goal:** confirm the Gitsigns surface before running hunk actions.

1. Run `:echo exists(':Gitsigns')`.
2. Run `:verbose nmap ]h` and `:verbose nmap [h`.
3. Optionally run `:Gitsigns debug_messages` if the plugin provides it.

**Verify:** the command exists, and any hunk mappings you plan to press are
reported by `:verbose` as coming from your Gitsigns/LazyVim configuration.

### Drill B - Navigate and preview hunks

**Goal:** inspect the two changed regions.

1. From line 1, run `:Gitsigns next_hunk`.
2. Run `:Gitsigns preview_hunk`.
3. Run `:Gitsigns next_hunk` again.

**Verify:** the cursor visits the hunk around line 2 and then the hunk around
line 10. `:echo getline('.')` shows either `alpha = 10` or `theta = 90`.

### Drill C - Stage only the first hunk

**Goal:** put the line-2 change in the index while leaving the line-10 change unstaged.

1. Move to line 2.
2. Run `:Gitsigns stage_hunk`.
3. Inspect staged and unstaged diffs:

```vim
:echo join(systemlist(['git', '-C', g:kata_179_dir, 'diff', '--cached', '--', 'config.txt']), "\n") =~# 'alpha = 10'
:echo join(systemlist(['git', '-C', g:kata_179_dir, 'diff', '--cached', '--', 'config.txt']), "\n") =~# 'theta = 90'
:echo join(systemlist(['git', '-C', g:kata_179_dir, 'diff', '--', 'config.txt']), "\n") =~# 'theta = 90'
```

**Verify:** the three checks print `1`, `0`, and `1`.

### Drill D - Reset only the remaining worktree hunk

**Goal:** discard the line-10 worktree change without unstaging line 2.

1. Move to line 10.
2. Run `:Gitsigns reset_hunk`.
3. Check the buffer and staged diff.

**Verify:** `:echo getline(10)` prints `theta = 9`, and the cached diff still
contains `alpha = 10`.

### Challenge - Stage one hunk and discard the other

Reset by rerunning setup. Stage the `alpha` hunk, reset the `theta` hunk, and
leave the repository with exactly one staged change.

**Verify:** `:echo system(['git', '-C', g:kata_179_dir, 'status', '--short'])`
prints a staged modification for `config.txt` and no unstaged modification.

## Hints

<details>
<summary>Hint 1</summary>

Gitsigns acts on the hunk under the cursor. Move to the target hunk before
staging or resetting.

</details>

<details>
<summary>Hint 2</summary>

Use `git diff --cached` to inspect what is staged, and plain `git diff` to
inspect what remains only in the worktree.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:echo exists(':Gitsigns')<CR>`
2. `:verbose nmap ]h<CR>`
3. `:verbose nmap [h<CR>`

### Drill B

1. `:Gitsigns next_hunk<CR>`
2. `:Gitsigns preview_hunk<CR>`
3. `:Gitsigns next_hunk<CR>`

### Drill C

1. `2G`
2. `:Gitsigns stage_hunk<CR>`
3. Run the three documented `git diff` checks.

### Drill D

1. `10G`
2. `:Gitsigns reset_hunk<CR>`
3. `:echo getline(10)<CR>`

### Challenge

`2G:Gitsigns stage_hunk<CR>10G:Gitsigns reset_hunk<CR>:echo system(['git', '-C', g:kata_179_dir, 'status', '--short'])<CR>`

</details>

## Reset and Cleanup

- Between drills: rerun the setup block to recreate the temp repo.
- After the kata:

```vim
:silent! bwipeout config.txt
:call delete(g:kata_179_dir, 'rf')
:unlet g:kata_179_dir
```

- Preserve user data: every Git command uses `-C g:kata_179_dir`.

## Notes and Portability

- Gitsigns commands are plugin commands; they are not Vim diff commands.
- LazyVim mappings for hunk navigation and actions can change by version or user config. Use `:verbose nmap {keys}` before pressing them.
- The setup disables commit signing and fsmonitor only in the generated repo so
  global Git hooks or signing settings do not break the baseline commit.
- This kata avoids commits after setup. The goal is index/worktree hunk control, not Git history practice.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:Gitsigns next_hunk` | Command-line | Move to the next Git hunk. |
| `:Gitsigns preview_hunk` | Command-line | Preview the hunk under the cursor. |
| `:Gitsigns stage_hunk` | Command-line | Stage the current hunk. |
| `:Gitsigns reset_hunk` | Command-line | Reset the current worktree hunk. |
| `git diff --cached -- config.txt` | Shell via Vim | Show staged changes for the temp file. |

## References

- [Gitsigns.nvim documentation](https://github.com/lewis6991/gitsigns.nvim) - hunk commands and mappings.
- [`git diff` documentation](https://git-scm.com/docs/git-diff) - staged and unstaged diff inspection.
