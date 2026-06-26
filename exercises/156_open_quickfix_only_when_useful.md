# Kata: Open Quickfix Only When Useful

> **Environment:** Vim or Neovim; built-in quickfix commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in `:cwindow`. The setup uses `:cgetexpr readfile()` only to simulate clean and failing build logs without a real compiler.

## Objective

By the end of this kata, you will be able to open or close the quickfix window only when parsed entries exist using `:cwindow`.

Success means: a failing log opens the quickfix window, and a clean log leaves it closed without any manual `:copen` or `:cclose`.

## Prerequisites

- Know: basic Ex commands and how to run `:echo`.
- Required option/state: `errorformat=%f:%l:%c:%m`.
- Required external tool/plugin: none.
- Readiness check: run `:echo getqflist({'winid': 1}).winid` and confirm it prints `0` before Drill A.

## Setup

1. Run the commands below exactly once:

```vim
:let g:kata_156_qf = getqflist({'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1})
:let g:kata_156_dir = tempname()
:call mkdir(g:kata_156_dir, 'p')
:call writefile(['header', 'broken line', 'footer'], g:kata_156_dir.'/app.txt')
:call writefile(['app.txt:2:1: build failed'], g:kata_156_dir.'/fail.log')
:call writefile([], g:kata_156_dir.'/clean.log')
:execute 'cd '.fnameescape(g:kata_156_dir)
:execute 'edit '.fnameescape(g:kata_156_dir.'/app.txt')
:set errorformat=%f:%l:%c:%m
:cclose
:call setqflist([], 'r')
```

2. Put the cursor on the `h` in `header` at line 1, column 1.
3. Confirm Normal mode is active and `:echo expand('%:t') . ' ' . line('.')` prints `app.txt 1`.

## Initial Fixture

The setup creates these disposable files:

`app.txt`

```text
header
broken line
footer
```

`fail.log`

```text
app.txt:2:1: build failed
```

`clean.log`

```text

```

Start in Normal mode in `app.txt` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `:cwindow` as the final open-or-close action in every drill.
- Use `:cgetexpr readfile(...)` only to replace the current quickfix contents.
- Do not use `:copen`, `:cclose`, or the mouse during the drills.
- Reset to the documented start state before each drill unless the drill says otherwise.

## Tasks

### Drill A - Isolate the useful open

**Goal:** open quickfix only when the parsed log contains an entry.

1. Load `fail.log` into quickfix from the current session.
2. Open quickfix only if that list is useful.

**Verify:** `:echo len(getqflist()) . ' ' . (getqflist({'winid': 1}).winid > 0)` prints `1 1`.

### Drill B - Isolate the clean close

**Goal:** close quickfix when the replacement list has no entries.

1. Reset to the documented start state, then repeat Drill A so quickfix is open.
2. Replace the current quickfix list with `clean.log`.
3. Run the conditional open command again.

**Verify:** `:echo len(getqflist()) . ' ' . getqflist({'winid': 1}).winid` prints `0 0`.

### Drill C - Apply the workflow

**Goal:** compare a clean run and a failing run without manually managing the window.

1. Reset to the documented start state.
2. Load `clean.log`, then run the conditional open command.
3. Replace that with `fail.log`, run the same command again, and jump to the single quickfix entry.

**Verify:** the current buffer is `app.txt`, the cursor is on line 2, and `:echo getqflist({'winid': 1}).winid > 0` prints `1`.

### Challenge - Recall without prompts

Reset the fixture. Starting in `app.txt`, prove that the clean log does not open quickfix, then switch to the failing log and land on its only entry without using `:copen` or `:cclose`.

**Verify:** the final cursor position is line 2 in `app.txt`, the quickfix window is open, and the buffer text is unchanged.

## Expected Final State

After the challenge, `app.txt` must still be:

```text
header
broken line
footer
```

Verify all of the following:

- The current buffer is `app.txt`.
- `:echo line('.') . ',' . col('.')` prints `2,1`.
- `:echo len(getqflist()) . ' ' . (getqflist({'winid': 1}).winid > 0)` prints `1 1`.
- No text in `app.txt` has changed.

## Hints

<details>
<summary>Hint 1</summary>

`readfile()` can return a list of compiler-style lines, including an empty list from an empty file.

</details>

<details>
<summary>Hint 2</summary>

`:cwindow` is conditional. It opens when the current quickfix list has valid entries and closes when it does not.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:cgetexpr readfile('fail.log')` - replace quickfix with the failing log entry.
2. `:cwindow` - open quickfix because one valid entry exists.

### Drill B

1. `:cgetexpr readfile('fail.log')` - restore the one-entry quickfix list.
2. `:cwindow` - open quickfix.
3. `:cgetexpr readfile('clean.log')` - replace the list with zero entries.
4. `:cwindow` - close the quickfix window because the list is empty.

### Drill C

1. `:cgetexpr readfile('clean.log')` - load the clean result.
2. `:cwindow` - leave quickfix closed.
3. `:cgetexpr readfile('fail.log')` - replace the list with the failing result.
4. `:cwindow` - open quickfix.
5. `:cfirst` - jump to the only quickfix entry at `app.txt` line 2.

### Challenge

`:cgetexpr readfile('clean.log')<CR>:cwindow<CR>:cgetexpr readfile('fail.log')<CR>:cwindow<CR>:cfirst<CR>`

The same command handles both cases: it does nothing visible for the empty list and opens quickfix for the failing list.

</details>

## Reset and Cleanup

- Between drills: run `:cclose | call setqflist([], 'r') | execute 'edit '.fnameescape(g:kata_156_dir.'/app.txt') | normal! gg0`.
- After the kata: run `:cclose | call setqflist([], 'r', g:kata_156_qf) | bwipeout! | call delete(g:kata_156_dir, 'rf') | unlet g:kata_156_dir g:kata_156_qf`.
- Preserve user data: every file lives in a temporary directory created by the setup, and the pre-kata quickfix list is restored.

## Notes and Portability

- Built-in behavior: `:cwindow` works in both Vim and Neovim.
- Built-in behavior: `:cgetexpr` parses a Vim list of strings through the current `'errorformat'`.
- Edge case: `:cwindow` depends on the current quickfix list, so if another command replaces that list, the window may open or close differently than expected.
- Alternative: a real compiler or test runner can replace `readfile('fail.log')` later; the `:cwindow` behavior stays the same.
- LazyVim/Trouble note: Trouble can be opened explicitly for richer review, but `:cwindow` remains the built-in conditional open/close command. Use Trouble only after verifying `:echo exists(':Trouble')` and the active mapping with `:verbose nmap <Space>xq`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:cgetexpr readfile('fail.log')` | Command-line | Replace quickfix with parsed lines from `fail.log`. |
| `:cgetexpr readfile('clean.log')` | Command-line | Replace quickfix with an empty parsed list. |
| `:cwindow` | Command-line | Open quickfix only when it has valid entries; close it when it does not. |
| `:cfirst` | Command-line | Jump to the first quickfix entry. |

## References

- [`:help :cwindow`](https://vimhelp.org/quickfix.txt.html#%3Acwindow) - conditional quickfix window behavior.
- [`:help :cgetexpr`](https://vimhelp.org/quickfix.txt.html#%3Acgetexpr) - parse a Vim expression into quickfix entries.
- [`:help errorformat`](https://vimhelp.org/quickfix.txt.html#errorformat) - quickfix parsing format.
- [Neovim help: `:cwindow`](https://neovim.io/doc/user/quickfix.html#%3Acwindow) - Neovim quickfix window behavior.
