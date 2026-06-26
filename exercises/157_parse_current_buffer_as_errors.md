# Kata: Parse the Current Buffer as Errors

> **Environment:** Vim or Neovim; built-in quickfix commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in `:cgetbuffer`. The setup creates real disposable files so parsed filenames resolve consistently.

## Objective

By the end of this kata, you will be able to turn compiler-style lines in the current buffer into a navigable quickfix list using `:cgetbuffer`.

Success means: from a pasted log buffer, you can build quickfix entries and jump to the right file and line without retyping the filenames by hand.

## Prerequisites

- Know: basic buffer switching and how to open quickfix results.
- Required option/state: `errorformat=%f:%l:%c:%m`.
- Required external tool/plugin: none.
- Readiness check: run `:echo &errorformat` after setup and confirm it starts with `%f:%l:%c:%m`.

## Setup

1. Run the commands below exactly once:

```vim
:let g:kata_157_dir = tempname()
:call mkdir(g:kata_157_dir, 'p')
:call writefile(['alpha ok', 'missing semicolon', 'middle', 'wrong flag'], g:kata_157_dir.'/app.txt')
:call writefile(['mode=prod', 'unknown_key=true', 'extra_setting=true'], g:kata_157_dir.'/config.txt')
:call writefile([
\ 'app.txt:2:1: missing semicolon',
\ 'app.txt:4:1: wrong flag',
\ 'config.txt:2:1: unknown key'
\ ], g:kata_157_dir.'/ci.log')
:execute 'cd '.fnameescape(g:kata_157_dir)
:execute 'edit '.fnameescape(g:kata_157_dir.'/ci.log')
:set errorformat=%f:%l:%c:%m
:cclose
:call setqflist([], 'r')
```

2. Put the cursor on the `a` in `app.txt` at line 1, column 1 of `ci.log`.
3. Confirm Normal mode is active and `:echo expand('%:t') . ' ' . line('.')` prints `ci.log 1`.

## Initial Fixture

The current buffer is `ci.log` with exactly:

```text
app.txt:2:1: missing semicolon
app.txt:4:1: wrong flag
config.txt:2:1: unknown key
```

The setup also creates these target files:

`app.txt`

```text
alpha ok
missing semicolon
middle
wrong flag
```

`config.txt`

```text
mode=prod
unknown_key=true
extra_setting=true
```

Start in Normal mode in `ci.log` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `:cgetbuffer` to build the list from the current buffer.
- Keep `ci.log` as the source of truth for parsed entries.
- Do not use `:vimgrep`, `:grep`, `:make`, or manual `:setqflist()` item dictionaries.
- Reset to the documented start state before each drill unless the drill explicitly changes the log.

## Tasks

### Drill A - Isolate the parsing step

**Goal:** turn the current buffer into three quickfix entries.

1. Parse the current `ci.log` buffer as compiler output.
2. Inspect the resulting quickfix list.

**Verify:** `:echo len(getqflist()) . ' ' . getqflist()[1].lnum . ' ' . getqflist()[3].lnum` prints `3 2 2`.

### Drill B - Add navigation

**Goal:** jump from the parsed list to a specific reported error.

1. Reset to the documented start state.
2. Parse `ci.log` into quickfix again.
3. Inspect the parsed list and jump to the second entry.

**Verify:** the current buffer is `app.txt`, the cursor is on line 4, and `:echo getline('.')` prints `wrong flag`.

### Drill C - Apply the workflow

**Goal:** update the pasted log, rebuild quickfix, and navigate the replacement list.

1. Reset to the documented start state.
2. Add this fourth line to the end of `ci.log`: `config.txt:3:1: extra setting`.
3. Reparse the current buffer into quickfix.
4. Jump to the new final entry.

**Verify:** `:echo len(getqflist())` prints `4`, the current buffer is `config.txt`, and the cursor is on line 3.

### Challenge - Recall without prompts

Reset the fixture. Starting in `ci.log`, rebuild quickfix from the buffer and jump to the `config.txt` problem without searching for the filename manually.

**Verify:** the final cursor position is line 2 in `config.txt`, the quickfix list still has three entries, and the original `ci.log` text is unchanged.

## Expected Final State

After the challenge, `ci.log` must still be:

```text
app.txt:2:1: missing semicolon
app.txt:4:1: wrong flag
config.txt:2:1: unknown key
```

Verify all of the following:

- The current buffer is `config.txt`.
- `:echo line('.') . ',' . col('.')` prints `2,1`.
- `:echo len(getqflist())` prints `3`.
- No text in `ci.log` has changed.

## Hints

<details>
<summary>Hint 1</summary>

`:cgetbuffer` parses the current buffer through the active `'errorformat'`; it does not care that the buffer is just pasted text.

</details>

<details>
<summary>Hint 2</summary>

If the log uses relative filenames such as `app.txt`, your current working directory must match the directory that contains those files.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:cgetbuffer` - parse every line in `ci.log` through `'errorformat'`.
2. `:echo len(getqflist()) . ' ' . getqflist()[1].lnum . ' ' . getqflist()[3].lnum` - verify the list length and line numbers.

### Drill B

1. `:cgetbuffer` - rebuild the quickfix list from `ci.log`.
2. `:copen` - show the parsed entries.
3. `:cc 2` - jump to the second quickfix entry at `app.txt` line 4.

### Drill C

1. `Go config.txt:3:1: extra setting<Esc>` - append a fourth compiler-style line to `ci.log`.
2. `:cgetbuffer` - replace quickfix with the updated buffer contents.
3. `:copen` - inspect the four-entry list.
4. `:cc 4` - jump to the new final entry at `config.txt` line 3.

### Challenge

`:cgetbuffer<CR>:cc 3<CR>`

The third parsed entry resolves to `config.txt:2:1`, so selecting it jumps directly to the reported problem line.

</details>

## Reset and Cleanup

- Between drills: run `:cclose | call setqflist([], 'r') | execute 'edit '.fnameescape(g:kata_157_dir.'/ci.log') | normal! gg0`.
- After Drill C: restore the original log with `:call writefile(['app.txt:2:1: missing semicolon', 'app.txt:4:1: wrong flag', 'config.txt:2:1: unknown key'], g:kata_157_dir.'/ci.log') | edit!`.
- After the kata: run `:cclose | bwipeout! app.txt | bwipeout! config.txt | bwipeout! ci.log | call delete(g:kata_157_dir, 'rf') | unlet g:kata_157_dir`.
- Preserve user data: all files live under a temporary directory created for this kata.

## Notes and Portability

- Built-in behavior: `:cgetbuffer` works in both Vim and Neovim.
- Edge case: relative filenames in the log resolve from the current working directory, so keep the `:cd` from setup.
- Alternative: if your log already uses absolute paths, you can skip the temporary `:cd`.
- Scope boundary: this kata parses an existing buffer; producing the log text itself is a separate workflow.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:cgetbuffer` | Command-line | Parse the current buffer into quickfix entries. |
| `:copen` | Command-line | Open the quickfix window for inspection or selection. |
| `:cc {nr}` | Command-line | Jump to quickfix entry number `{nr}`. |
| `:echo len(getqflist())` | Command-line | Report the current quickfix list length. |

## References

- [`:help :cgetbuffer`](https://vimhelp.org/quickfix.txt.html#%3Acgetbuffer) - parse the current buffer into quickfix entries.
- [`:help errorformat`](https://vimhelp.org/quickfix.txt.html#errorformat) - compiler-style parsing rules.
- [`:help quickfix`](https://vimhelp.org/quickfix.txt.html#quickfix) - quickfix list behavior.
- [Neovim help: `:cgetbuffer`](https://neovim.io/doc/user/quickfix.html#%3Acgetbuffer) - Neovim quickfix parsing from a buffer.
