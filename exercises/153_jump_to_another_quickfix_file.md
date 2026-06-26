# Kata: Jump to Another Quickfix File

> **Environment:** Vim or Neovim; built-in quickfix commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in quickfix file-jump commands `:cnfile` and `:cpfile`.

## Objective

By the end of this kata, you will be able to skip the remaining quickfix entries in the current file and jump straight to the next or previous file with `:cnfile` and `:cpfile`.

Success means: you can review one representative match per file without stepping through every entry in each file.

## Prerequisites

- Know: basic quickfix navigation with `:cfirst`, `:cnext`, and `:clast`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo exists(':cnfile') . '|' . exists(':cpfile')` and confirm it prints `2|2`.

## Setup

1. Start this kata in a fresh session or accept that it will replace the current quickfix list.
2. Run `:let g:kata_153_dir = tempname() | call mkdir(g:kata_153_dir, 'p')`.
3. Run the setup block exactly:

```vim
:let g:kata_153_alpha = g:kata_153_dir . '/alpha.txt'
:let g:kata_153_beta = g:kata_153_dir . '/beta.txt'
:let g:kata_153_gamma = g:kata_153_dir . '/gamma.txt'
:call writefile(['TODO alpha first', 'plain alpha', 'TODO alpha second'], g:kata_153_alpha)
:call writefile(['header beta', 'TODO beta first', 'plain beta', 'TODO beta second'], g:kata_153_beta)
:call writefile(['start gamma', 'plain gamma', 'TODO gamma first', 'middle gamma', 'TODO gamma second'], g:kata_153_gamma)
:execute 'edit ' . fnameescape(g:kata_153_alpha)
:execute 'vimgrep /TODO/gj ' . fnameescape(g:kata_153_alpha) . ' ' . fnameescape(g:kata_153_beta) . ' ' . fnameescape(g:kata_153_gamma)
:call setqflist([], 'a', {'title': 'TODO by file'})
:cfirst
```

4. Confirm the current buffer is `alpha.txt`, the cursor is on line 1, column 1, and `:echo getqflist({'size': 1}).size` prints `6`.

## Initial Fixture

The setup creates these disposable files:

```text
alpha.txt
1  TODO alpha first
2  plain alpha
3  TODO alpha second

beta.txt
1  header beta
2  TODO beta first
3  plain beta
4  TODO beta second

gamma.txt
1  start gamma
2  plain gamma
3  TODO gamma first
4  middle gamma
5  TODO gamma second
```

Start in Normal mode on the `T` in `TODO alpha first` at line 1, column 1 of `alpha.txt`. Do not modify any file before beginning Drill A.

## Constraints

- Use `:cnfile` or `:cpfile` for the final landing in each drill.
- Do not use `:cnext`, `:cprev`, `:cfirst`, or `:clast` for the final jump between files.
- Do not use search or the mouse.
- Reset by rerunning the documented setup before each drill unless the drill explicitly gives a new quickfix position.

## Tasks

### Drill A - Isolate the skill

**Goal:** skip the remaining quickfix entries in the current file and jump to the next file.

1. Start from `alpha.txt` line 1.
2. Jump directly to the first quickfix entry in the next file.

**Verify:** the current buffer is `beta.txt`, the cursor is on line 2, column 1, and `:echo fnamemodify(bufname('%'), ':t') . '|' . line('.')` prints `beta.txt|2`.

### Drill B - Add precision or repetition

**Goal:** jump backward to the previous file and land on its last quickfix entry.

1. Reset to the documented setup.
2. Move to the last quickfix entry in the list.
3. Jump to the previous file in the quickfix list.

**Verify:** the current buffer is `beta.txt`, the cursor is on line 4, column 1, and `:echo fnamemodify(bufname('%'), ':t') . '|' . line('.')` prints `beta.txt|4`.

### Drill C - Apply the workflow

**Goal:** skip two files forward with one counted file-jump command.

1. Reset to the documented setup.
2. Move to the second quickfix entry in `alpha.txt`.
3. Jump to the first quickfix entry in the second next file.

**Verify:** the current buffer is `gamma.txt`, the cursor is on line 3, column 1, and `:echo fnamemodify(bufname('%'), ':t') . '|' . line('.')` prints `gamma.txt|3`.

### Challenge - Recall without prompts

Reset the setup. Starting from the first entry in `alpha.txt`, review one quickfix match per file and finish on the first quickfix entry in `gamma.txt`.

**Verify:** the current buffer is `gamma.txt`, the cursor is on line 3, column 1, and the quickfix title remains `TODO by file`.

## Expected Final State

After the challenge, verify all of the following:

- The current buffer is `gamma.txt`.
- The cursor is on line 3, column 1.
- `:echo getqflist({'title': 1}).title` prints `TODO by file`.
- The files remain:

```text
alpha.txt
TODO alpha first
plain alpha
TODO alpha second

beta.txt
header beta
TODO beta first
plain beta
TODO beta second

gamma.txt
start gamma
plain gamma
TODO gamma first
middle gamma
TODO gamma second
```

## Hints

<details>
<summary>Hint 1</summary>

` :cnfile` ignores the remaining quickfix entries in the current file and lands on the first entry in the next file.

</details>

<details>
<summary>Hint 2</summary>

` :cpfile` lands on the last quickfix entry in the previous file. Counts let you skip more than one file at once.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:cnfile<CR>` - jump from `alpha.txt` to the first quickfix entry in `beta.txt`.

### Drill B

1. `:clast<CR>` - move to `gamma.txt` line 5.
2. `:cpfile<CR>` - jump to the last quickfix entry in `beta.txt`, line 4.

### Drill C

1. `:cnext<CR>` - move to `alpha.txt` line 3.
2. `:2cnfile<CR>` - skip `beta.txt` and land on the first quickfix entry in `gamma.txt`.

### Challenge

`:cnfile<CR>:cnfile<CR>`

The first command lands on `beta.txt` line 2. The second lands on `gamma.txt` line 3, letting you sample one match per file.

</details>

## Reset and Cleanup

- Between drills: rerun the documented setup to restore the files, quickfix list, and current entry.
- After the kata: run `:silent! cclose | for g:kata_153_buf in getbufinfo() | if stridx(g:kata_153_buf.name, g:kata_153_dir) == 0 | execute 'bwipeout! ' . g:kata_153_buf.bufnr | endif | endfor | call setqflist([], 'f') | call delete(g:kata_153_dir, 'rf') | unlet g:kata_153_alpha g:kata_153_beta g:kata_153_buf g:kata_153_dir g:kata_153_gamma`.
- Preserve user data: use a fresh session if you need to keep an existing quickfix list or quickfix history.

## Notes and Portability

- Built-in behavior: `:cnfile` and `:cpfile` are built into Vim and Neovim.
- Landing detail: `:cnfile` lands on the first quickfix entry in the next file; `:cpfile` lands on the last quickfix entry in the previous file.
- Edge case: if no next or previous file exists, these commands fall back to ordinary entry-wise quickfix movement.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:cnfile` | Command-line | Jump to the first quickfix entry in the next file. |
| `:cpfile` | Command-line | Jump to the last quickfix entry in the previous file. |
| `:2cnfile` | Command-line | Jump to the first quickfix entry in the second next file. |
| `:cfirst` | Command-line | Jump to the first entry in the current quickfix list. |
| `:clast` | Command-line | Jump to the last entry in the current quickfix list. |

## References

- [`:help :cnfile`](https://vimhelp.org/quickfix.txt.html#%3Acnfile) - jumping to the next file in a quickfix list.
- [`:help :cpfile`](https://vimhelp.org/quickfix.txt.html#%3Acpfile) - jumping to the previous file in a quickfix list.
- [Neovim help: `:cnfile`](https://neovim.io/doc/user/quickfix.html#:cnfile) - Neovim quickfix file-jump behavior.
