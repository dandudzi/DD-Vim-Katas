# Kata: Create Quickfix from Shell Output

> **Environment:** Vim or Neovim.
> **Dependencies:** A local `grep` command that supports `-Hn`.
> **Portability:** Uses built-in `:cexpr` and a deterministic shell command. Parsing depends on `'errorformat'`.

## Objective

By the end of this kata, you will be able to turn deterministic shell output into a navigable quickfix list using `:cexpr systemlist(...)`.

Success means: you can import `file:line:text` output into quickfix, confirm the parsed entries, and navigate them without any project-wide search command.

## Prerequisites

- Know: basic quickfix navigation with `:cnext`.
- Required option/state: `'errorformat'` must parse `file:line:text`.
- Required external tool/plugin: a local `grep` executable.
- Readiness check: run `:echo executable('grep')` and confirm it prints `1`.

## Setup

1. The setup saves the current quickfix list before replacing it.
2. Run `:let g:kata_155_dir = tempname() | call mkdir(g:kata_155_dir, 'p')`.
3. Run the setup block exactly:

```vim
:if !exists('g:kata_155_qf') | let g:kata_155_qf = getqflist({'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1}) | endif
:let g:kata_155_save_efm = &errorformat
:let g:kata_155_alpha = g:kata_155_dir . '/alpha.txt'
:let g:kata_155_beta = g:kata_155_dir . '/beta.txt'
:call writefile(['TODO alpha first', 'plain alpha', 'TODO alpha second'], g:kata_155_alpha)
:call writefile(['plain beta', 'TODO beta only'], g:kata_155_beta)
:let g:kata_155_cmd_all = 'grep -Hn TODO ' . shellescape(g:kata_155_alpha) . ' ' . shellescape(g:kata_155_beta)
:let g:kata_155_cmd_beta = 'grep -Hn TODO ' . shellescape(g:kata_155_beta)
:set errorformat=%f:%l:%m
:execute 'edit ' . fnameescape(g:kata_155_alpha)
:2
```

4. Confirm the cursor is on line 2 of `alpha.txt` and `:echo &errorformat` prints `%f:%l:%m`.

## Initial Fixture

The setup creates these disposable files:

```text
alpha.txt
1  TODO alpha first
2  plain alpha
3  TODO alpha second

beta.txt
1  plain beta
2  TODO beta only
```

Start in Normal mode on line 2 of `alpha.txt`. Do not modify either file before beginning Drill A.

## Constraints

- Use `:cexpr systemlist(...)` to create the quickfix list in each drill.
- Keep `'errorformat'` set to `%f:%l:%m` for the main drills.
- Do not use `:vimgrep`, `:grep`, or `:make`.
- Reset by rerunning the documented setup before each drill unless the drill explicitly builds on the imported quickfix list.

## Tasks

### Drill A - Isolate the skill

**Goal:** import shell output into quickfix and jump to the first parsed entry.

1. Starting from line 2 of `alpha.txt`, create a quickfix list from the shell command stored in `g:kata_155_cmd_all`.
2. Confirm that the import jumped to the first parsed entry.

**Verify:** the current buffer is `alpha.txt`, the cursor is on line 1, column 1, and `:echo fnamemodify(bufname('%'), ':t') . '|' . line('.') . '|' . len(getqflist())` prints `alpha.txt|1|3`.

### Drill B - Add precision or repetition

**Goal:** navigate the imported shell results as a normal quickfix list.

1. Reset to the documented setup.
2. Import all TODO results from `g:kata_155_cmd_all`.
3. Move to the next imported quickfix entry.

**Verify:** the current buffer is `alpha.txt`, the cursor is on line 3, column 1, and `:echo fnamemodify(bufname('%'), ':t') . '|' . line('.')` prints `alpha.txt|3`.

### Drill C - Apply the workflow

**Goal:** replace the current quickfix list with a different shell result set.

1. Reset to the documented setup.
2. Create a quickfix list from the shell command stored in `g:kata_155_cmd_beta`.

**Verify:** the current buffer is `beta.txt`, the cursor is on line 2, column 1, and `:echo fnamemodify(bufname('%'), ':t') . '|' . line('.') . '|' . len(getqflist())` prints `beta.txt|2|1`.

### Challenge - Recall without prompts

Reset the setup. Import all TODO results from `g:kata_155_cmd_all`, then finish on `beta.txt` line 2 without using search.

**Verify:** the current buffer is `beta.txt`, the cursor is on line 2, column 1, and the quickfix list still contains three entries.

## Expected Final State

After the challenge, verify all of the following:

- The current buffer is `beta.txt`.
- The cursor is on line 2, column 1.
- `:echo len(getqflist())` prints `3`.
- The files remain:

```text
alpha.txt
TODO alpha first
plain alpha
TODO alpha second

beta.txt
plain beta
TODO beta only
```

## Hints

<details>
<summary>Hint 1</summary>

`systemlist()` returns a Vim List of output lines, and `:cexpr` parses those lines with the current `'errorformat'`.

</details>

<details>
<summary>Hint 2</summary>

After the import, the quickfix list behaves like any other quickfix list. You can use ordinary quickfix navigation to move through the imported entries.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:cexpr systemlist(g:kata_155_cmd_all)<CR>` - run the shell command, parse each `file:line:text` line with `'errorformat'`, and jump to the first result.

### Drill B

1. `:cexpr systemlist(g:kata_155_cmd_all)<CR>` - import all TODO matches.
2. `:cnext<CR>` - jump to the second imported match, `alpha.txt` line 3.

### Drill C

1. `:cexpr systemlist(g:kata_155_cmd_beta)<CR>` - replace the current quickfix list with only the beta-file match.

### Challenge

`:cexpr systemlist(g:kata_155_cmd_all)<CR>:cnext<CR>:cnext<CR>`

The import lands on `alpha.txt` line 1. The first `:cnext` moves to `alpha.txt` line 3, and the second moves to `beta.txt` line 2.

</details>

## Reset and Cleanup

- Between drills: rerun the documented setup to restore the files, command variables, and `'errorformat'`.
- After the kata: run `:let &errorformat = g:kata_155_save_efm | silent! cclose | for g:kata_155_buf in getbufinfo() | if stridx(g:kata_155_buf.name, g:kata_155_dir) == 0 | execute 'bwipeout! ' . g:kata_155_buf.bufnr | endif | endfor | call setqflist([], 'r', g:kata_155_qf) | call delete(g:kata_155_dir, 'rf') | unlet g:kata_155_alpha g:kata_155_beta g:kata_155_buf g:kata_155_cmd_all g:kata_155_cmd_beta g:kata_155_dir g:kata_155_qf g:kata_155_save_efm`.
- Preserve user data: cleanup restores the quickfix list that was current before the first setup run.

## Notes and Portability

- Built-in behavior: `:cexpr` is built into Vim and Neovim.
- Parsing detail: this kata sets `'errorformat'` to `%f:%l:%m` so `grep -Hn` output parses deterministically as `file:line:text`.
- Shell dependency: BSD and GNU `grep` both support `-Hn`, but if your system lacks `grep`, substitute another deterministic command that emits the same `file:line:text` format.
- Alternative: `:cgetexpr` uses the same parsing but does not jump to the first entry.
- LazyVim/Trouble note: after `:cexpr`, optional Trouble quickfix views should show the same parsed entries. Verify `:echo exists(':Trouble')` and use Trouble's `g?` help rather than assuming an export or close key.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:cexpr systemlist({cmd})` | Command-line | Run `{cmd}`, parse its output with `'errorformat'`, build a quickfix list, and jump to the first entry. |
| `systemlist({cmd})` | Expression | Return the shell command output as a List of lines. |
| `:cnext` | Command-line | Jump to the next entry in the current quickfix list. |
| `:set errorformat=%f:%l:%m` | Command-line | Parse each line as `file:line:text`. |

## References

- [`:help :cexpr`](https://vimhelp.org/quickfix.txt.html#%3Acexpr) - creating a quickfix list from an expression.
- [`:help systemlist()`](https://vimhelp.org/builtin.txt.html#systemlist%28%29) - capturing deterministic shell output as a List.
- [`:help errorformat`](https://vimhelp.org/quickfix.txt.html#errorformat) - how quickfix parsing uses `'errorformat'`.
- [Neovim help: `:cexpr`](https://neovim.io/doc/user/quickfix.html#:cexpr) - Neovim quickfix expression parsing.
