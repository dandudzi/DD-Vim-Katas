# Kata: Compile and Navigate Errors

> **Environment:** Vim or Neovim.
> **Dependencies:** A POSIX-like shell command named `cat`.
> **Portability:** Uses built-in `:make`, `:cnext`, and `:cprevious`. The setup sets `makeprg=cat build.log` to simulate compiler output deterministically; replace that with a real compiler later if needed.

## Objective

By the end of this kata, you will be able to populate quickfix with `:make` and move through the reported errors with `:cnext` and `:cprevious`.

Success means: one `:make` jumps to the first reported problem, and you can fix the rest in the order reported by quickfix navigation.

## Prerequisites

- Know: basic Normal-mode editing and how to save a throwaway file with `:update`.
- Required option/state: `makeprg=cat build.log` and `errorformat=%f:%l:%c:%m`.
- Required external tool/plugin: the `cat` command must be available.
- Readiness check: run `:set makeprg? errorformat?` and confirm the values match the setup before Drill A.

## Setup

1. Run the commands below exactly once:

```vim
:let g:kata_158_dir = tempname()
:call mkdir(g:kata_158_dir, 'p')
:call writefile([
\ 'intro',
\ 'BROKEN first',
\ 'middle',
\ 'BROKEN second',
\ 'middle',
\ 'BROKEN third'
\ ], g:kata_158_dir.'/app.txt')
:call writefile([
\ 'app.txt:2:1: first error',
\ 'app.txt:4:1: second error',
\ 'app.txt:6:1: third error'
\ ], g:kata_158_dir.'/build.log')
:execute 'cd '.fnameescape(g:kata_158_dir)
:execute 'edit '.fnameescape(g:kata_158_dir.'/app.txt')
:set makeprg=cat\ build.log
:set errorformat=%f:%l:%c:%m
:cclose
:call setqflist([], 'r')
```

2. Put the cursor on the `i` in `intro` at line 1, column 1.
3. Confirm Normal mode is active and `:echo expand('%:t') . ' ' . line('.')` prints `app.txt 1`.

## Initial Fixture

`app.txt`

```text
intro
BROKEN first
middle
BROKEN second
middle
BROKEN third
```

`build.log`

```text
app.txt:2:1: first error
app.txt:4:1: second error
app.txt:6:1: third error
```

Start in Normal mode in `app.txt` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `:make` to populate quickfix.
- Use `:cnext` and `:cprevious` for navigation between reported errors.
- Do not use `/BROKEN`, `:vimgrep`, or manual `:setqflist()` item dictionaries.
- Reset to the documented start state before each drill unless the drill explicitly builds on a prior change.

## Tasks

### Drill A - Isolate the compile step

**Goal:** run the configured build command and land on the first reported error.

1. Populate quickfix with the configured `:make` workflow.
2. Observe where Vim or Neovim places the cursor immediately after the build output is parsed.

**Verify:** `:echo len(getqflist()) . ' ' . expand('%:t') . ' ' . line('.')` prints `3 app.txt 2`.

### Drill B - Add forward and backward navigation

**Goal:** move through the reported errors without searching the file manually.

1. Reset to the documented start state and rebuild quickfix with `:make`.
2. Move to the third reported error.
3. Move back once.

**Verify:** the cursor finishes on line 4 in `app.txt`, and `:echo getline('.')` prints `BROKEN second`.

### Drill C - Apply the workflow

**Goal:** fix all three reported lines in quickfix order.

1. Reset to the documented start state.
2. Run `:make`.
3. Change each `BROKEN` marker to `FIXED`, using quickfix navigation to reach the next reported line each time.

**Verify:** the buffer matches the expected final state below, and only lines 2, 4, and 6 changed.

### Challenge - Recall without prompts

Reset the fixture. Starting on line 1 of `app.txt`, run the configured build, visit the errors in quickfix order, and change all three `BROKEN` markers to `FIXED`.

**Verify:** the final buffer text matches the expected final state exactly, and the quickfix list still contains three entries.

## Expected Final State

After the challenge, `app.txt` must be:

```text
intro
FIXED first
middle
FIXED second
middle
FIXED third
```

Verify all of the following:

- `:echo len(getqflist())` prints `3`.
- The cursor is on line 6 after the last fix if you stop on the final reported error.
- Only the three reported lines changed.

## Hints

<details>
<summary>Hint 1</summary>

`:make` uses `'makeprg'` and `'errorformat'`, then jumps to the first quickfix entry automatically.

</details>

<details>
<summary>Hint 2</summary>

You do not need to reopen quickfix between edits. Once `:make` populates the list, `:cnext` and `:cprevious` keep moving through that snapshot.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:make` - run `cat build.log`, parse its output, and jump to the first entry at line 2.

### Drill B

1. `:make` - rebuild the quickfix list and jump to line 2.
2. `:cnext` - move to the second entry at line 4.
3. `:cnext` - move to the third entry at line 6.
4. `:cprevious` - move back to the second entry at line 4.

### Drill C

1. `:make` - jump to line 2.
2. `cwFIXED<Esc>` - change `BROKEN` to `FIXED` on line 2.
3. `:cnext` - move to line 4.
4. `cwFIXED<Esc>` - fix the second marker.
5. `:cnext` - move to line 6.
6. `cwFIXED<Esc>` - fix the third marker.

### Challenge

`:make<CR>cwFIXED<Esc>:cnext<CR>cwFIXED<Esc>:cnext<CR>cwFIXED<Esc>`

The build creates a three-entry quickfix snapshot. Each `:cnext` takes you to the next reported problem line, so you never need to search the file manually.

</details>

## Reset and Cleanup

- Between drills: run `:call writefile(['intro', 'BROKEN first', 'middle', 'BROKEN second', 'middle', 'BROKEN third'], g:kata_158_dir.'/app.txt') | edit! | cclose | call setqflist([], 'r')`.
- After the kata: run `:cclose | bwipeout! app.txt | call delete(g:kata_158_dir, 'rf') | unlet g:kata_158_dir`.
- Preserve user data: the build log and edited file live only in a temporary directory created for this kata.

## Notes and Portability

- Built-in behavior: `:make`, `:cnext`, and `:cprevious` work in both Vim and Neovim.
- Configuration-dependent behavior: this kata uses `cat build.log` as `'makeprg'` so the output is deterministic and local.
- Verify external dependency with `:!command -v cat` before starting if you are unsure whether `cat` exists in your shell.
- Edge case: quickfix keeps the parsed snapshot even after you fix the file, so rerun `:make` if you want a refreshed list.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:make` | Command-line | Run `'makeprg'`, parse output through `'errorformat'`, and jump to the first quickfix entry. |
| `:cnext` | Command-line | Jump to the next quickfix entry. |
| `:cprevious` | Command-line | Jump to the previous quickfix entry. |
| `cwFIXED<Esc>` | Normal | Replace `BROKEN` under the cursor with `FIXED`. |

## References

- [`:help :make`](https://vimhelp.org/quickfix.txt.html#%3Amake) - build command integration with quickfix.
- [`:help 'makeprg'`](https://vimhelp.org/options.txt.html#%27makeprg%27) - command run by `:make`.
- [`:help :cnext`](https://vimhelp.org/quickfix.txt.html#%3Acnext) - next quickfix entry.
- [`:help :cprevious`](https://vimhelp.org/quickfix.txt.html#%3Acprevious) - previous quickfix entry.
- [Neovim help: `:make`](https://neovim.io/doc/user/quickfix.html#%3Amake) - Neovim quickfix build workflow.
