# Kata: Traverse Quickfix History

> **Environment:** Vim or Neovim; built-in quickfix commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in quickfix history commands `:colder`, `:cnewer`, and `:chistory`. Quickfix history is session-global.

## Objective

By the end of this kata, you will be able to move backward and forward through previously created quickfix lists using `:colder` and `:cnewer`.

Success means: you can switch to an older quickfix result set, confirm that it became current, and navigate entries from that older list without rebuilding it.

## Prerequisites

- Know: basic quickfix navigation with `:cfirst` and `:cnext`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo exists(':colder') . '|' . exists(':cnewer')` and confirm it prints `2|2`.

## Setup

1. Start this kata in a fresh Vim or Neovim session if you need to preserve the full quickfix history stack. The setup saves the current list, but not the entire history.
2. Run `:let g:kata_151_dir = tempname() | call mkdir(g:kata_151_dir, 'p')`.
3. Run the setup block exactly:

```vim
:if !exists('g:kata_151_qf') | let g:kata_151_qf = getqflist({'items': 1, 'title': 1, 'context': 1, 'idx': 1, 'quickfixtextfunc': 1}) | endif
:let g:kata_151_alpha = g:kata_151_dir . '/alpha.txt'
:let g:kata_151_beta = g:kata_151_dir . '/beta.txt'
:call writefile(['TODO alpha', 'NOTE alpha', 'plain alpha', 'FIXME alpha'], g:kata_151_alpha)
:call writefile(['plain beta', 'TODO beta', 'NOTE beta', 'FIXME beta'], g:kata_151_beta)
:execute 'edit ' . fnameescape(g:kata_151_alpha)
:execute 'vimgrep /TODO/gj ' . fnameescape(g:kata_151_alpha) . ' ' . fnameescape(g:kata_151_beta)
:call setqflist([], 'a', {'title': 'TODO review'})
:execute 'vimgrep /NOTE/gj ' . fnameescape(g:kata_151_alpha) . ' ' . fnameescape(g:kata_151_beta)
:call setqflist([], 'a', {'title': 'NOTE review'})
:execute 'vimgrep /FIXME/gj ' . fnameescape(g:kata_151_alpha) . ' ' . fnameescape(g:kata_151_beta)
:call setqflist([], 'a', {'title': 'FIXME review'})
```

4. Put the cursor on the `T` in `TODO alpha` at line 1, column 1 of `alpha.txt`.
5. Confirm Normal mode is active and `:echo getqflist({'nr': 0, 'title': 1}).title` prints `FIXME review`.

## Initial Fixture

The setup creates these disposable files:

```text
alpha.txt
1  TODO alpha
2  NOTE alpha
3  plain alpha
4  FIXME alpha

beta.txt
1  plain beta
2  TODO beta
3  NOTE beta
4  FIXME beta
```

Start in Normal mode on the `T` in `TODO alpha` at line 1, column 1 of `alpha.txt`. Do not modify either file before beginning Drill A.

## Constraints

- Use `:colder` and `:cnewer` to change which quickfix list is current.
- Do not rerun `:vimgrep` during any drill.
- Do not use `:setqflist()` to replace the current list after setup.
- Reset by rerunning the documented setup before each drill unless the drill explicitly builds on the current quickfix history.

## Tasks

### Drill A - Isolate the skill

**Goal:** move from the newest quickfix list to the previous one.

1. Starting from the `FIXME review` list, switch to the next older quickfix list.
2. Confirm that the current quickfix title changed.

**Verify:** `:echo getqflist({'nr': 0, 'title': 1, 'size': 1}).title . '|' . getqflist({'nr': 0}).nr . '|' . getqflist({'size': 1}).size` prints `NOTE review|2|2`.

### Drill B - Add precision or repetition

**Goal:** jump directly to the oldest quickfix list with one counted command.

1. Reset to the documented setup.
2. Move from `FIXME review` to the oldest list in one step.

**Verify:** `:echo getqflist({'nr': 0, 'title': 1}).title . '|' . getqflist({'nr': 0}).nr` prints `TODO review|1`.

### Drill C - Apply the workflow

**Goal:** switch to an older list and navigate within it.

1. Reset to the documented setup.
2. Move to the oldest quickfix list.
3. Open the second entry from that older list.

**Verify:** the current buffer is `beta.txt`, the cursor is on line 2, column 1, and `:echo fnamemodify(bufname('%'), ':t') . '|' . line('.') . '|' . getqflist({'title': 1}).title` prints `beta.txt|2|TODO review`.

### Challenge - Recall without prompts

Reset the setup. Starting from `FIXME review`, open the `NOTE beta` entry from the middle quickfix list without rebuilding any list.

**Verify:** the current buffer is `beta.txt`, the cursor is on line 3, column 1, and `:echo fnamemodify(bufname('%'), ':t') . '|' . line('.') . '|' . getqflist({'title': 1}).title` prints `beta.txt|3|NOTE review`.

## Expected Final State

After the challenge, verify all of the following:

- The current quickfix list title is `NOTE review`.
- `:echo getqflist({'nr': 0}).nr` prints `2`.
- The current buffer is `beta.txt` on line 3.
- The file contents remain:

```text
alpha.txt
TODO alpha
NOTE alpha
plain alpha
FIXME alpha

beta.txt
plain beta
TODO beta
NOTE beta
FIXME beta
```

## Hints

<details>
<summary>Hint 1</summary>

Each new `:vimgrep` created a new quickfix list. `:colder` does not rebuild anything; it just makes an older list current again.

</details>

<details>
<summary>Hint 2</summary>

Use `:colder 2` to move back two history slots at once. Once the right list is current, normal quickfix navigation commands act on that list.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:colder<CR>` - make the previous quickfix list current.

### Drill B

1. `:colder 2<CR>` - move from quickfix list 3 to quickfix list 1 in one command.

### Drill C

1. `:colder 2<CR>` - switch to `TODO review`.
2. `:cnext<CR>` - jump to the second TODO entry, `beta.txt` line 2.

### Challenge

`:colder<CR>:cnext<CR>`

The first command switches from `FIXME review` to `NOTE review`. The second command opens the second NOTE match, which is `beta.txt` line 3.

</details>

## Reset and Cleanup

- Between drills: rerun the documented setup exactly to recreate the three-list quickfix history stack.
- After the kata: run `:silent! cclose | for g:kata_151_buf in getbufinfo() | if stridx(g:kata_151_buf.name, g:kata_151_dir) == 0 | execute 'bwipeout! ' . g:kata_151_buf.bufnr | endif | endfor | call setqflist([], 'f') | call setqflist([], 'r', g:kata_151_qf) | call delete(g:kata_151_dir, 'rf') | unlet g:kata_151_alpha g:kata_151_beta g:kata_151_buf g:kata_151_dir g:kata_151_qf`.
- Preserve user data: cleanup restores the pre-kata current quickfix list, but not the full pre-kata quickfix history stack.

## Notes and Portability

- Built-in behavior: `:colder`, `:cnewer`, and `:chistory` are built into Vim and Neovim.
- Session scope: quickfix history belongs to the whole editor session, not to one window.
- Practical check: `:chistory` shows which list number is current and how many lists exist.
- LazyVim/Trouble note: Trouble can display the current quickfix list, but quickfix history still changes through `:colder` and `:cnewer`. Check `:echo exists(':Trouble')`, inspect `:verbose nmap <Space>xq`, and use `g?` in Trouble for local actions.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:colder` | Command-line | Make the previous quickfix list current. |
| `:colder {count}` | Command-line | Move backward by `{count}` quickfix lists. |
| `:cnewer` | Command-line | Make the next newer quickfix list current. |
| `:cfirst` | Command-line | Jump to the first entry in the current quickfix list. |
| `:cnext` | Command-line | Jump to the next entry in the current quickfix list. |
| `:chistory` | Command-line | Show the quickfix history stack and current list number. |

## References

- [`:help :colder`](https://vimhelp.org/quickfix.txt.html#%3Acolder) - moving to an older quickfix list.
- [`:help :cnewer`](https://vimhelp.org/quickfix.txt.html#%3Acnewer) - moving to a newer quickfix list.
- [`:help :chistory`](https://vimhelp.org/quickfix.txt.html#%3Achistory) - inspecting the quickfix list stack.
- [Neovim help: `:colder`](https://neovim.io/doc/user/quickfix.html#:colder) - Neovim quickfix history behavior.
