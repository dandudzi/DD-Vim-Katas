# Kata: Open a Tag Definition in a Split

> **Environment:** Vim or Neovim with a local tags file.
> **Dependencies:** A `ctags` executable in `$PATH`.
> **Portability:** `<C-w>]` is built in. This kata forces `splitbelow` during setup so the new tag window appears beneath the caller predictably.

## Objective

By the end of this kata, you will be able to open the tag under the cursor in a split with `<C-w>]`.

Success means: you can inspect a definition in another window while keeping the caller visible in the original window.

## Prerequisites

- Know: `<C-]>` tag jumps and basic `<C-w>` window navigation.
- Required option/state: `'tags'` points at the local tags file; `splitbelow` is enabled for deterministic window placement.
- Required external tool/plugin: `ctags`.
- Readiness check: run `:echo executable('ctags')` and confirm it prints `1`.

## Setup

1. Reset the practice directory with `:call delete('/tmp/vim-kata-134', 'rf')`.
2. Create it with `:call mkdir('/tmp/vim-kata-134', 'p')`.
3. Create `/tmp/vim-kata-134/main.c`:
   `:call writefile(['int build_report(void);', '', 'int main(void)', '{', '    return build_report();', '}'], '/tmp/vim-kata-134/main.c')`
4. Create `/tmp/vim-kata-134/report.c`:
   `:call writefile(['int format_total(void);', '', 'int build_report(void)', '{', '    return format_total();', '}'], '/tmp/vim-kata-134/report.c')`
5. Create `/tmp/vim-kata-134/format.c`:
   `:call writefile(['int format_total(void)', '{', '    return 7;', '}'], '/tmp/vim-kata-134/format.c')`
6. Generate tags with `:silent !ctags -f /tmp/vim-kata-134/tags /tmp/vim-kata-134/main.c /tmp/vim-kata-134/report.c /tmp/vim-kata-134/format.c`.
7. Point Vim at that tags file with `:set tags=/tmp/vim-kata-134/tags`.
8. Save and override the split placement with `:let g:kata_134_splitbelow=&splitbelow | set splitbelow`.
9. Open the caller with `:edit /tmp/vim-kata-134/main.c`.
10. Put the cursor on the `b` in `build_report()` on line 5, column 12.
11. Confirm `:echo expand('%:t') line('.') col('.')` prints `main.c 5 12`.

## Initial Fixture

The setup creates a three-file call chain and opens `main.c` as the only window.

Start in Normal mode in `main.c` on `build_report()` at line 5, column 12. Do not edit any file before beginning Drill A.

## Constraints

- Use `<C-w>]` for the split-and-jump step in every drill.
- Do not use `:stag`, `:stjump`, `:split | tag`, `/`, or the mouse.
- Reset to the documented start state before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** open one definition beneath the caller.

1. From `main.c`, open the definition of `build_report()` in a split.

**Verify:** there are two windows, the active window shows `report.c`, and `:echo winnr('$') expand('%:t') line('.') col('.')` prints `2 report.c 3 1`.

### Drill B - Add precision or repetition

**Goal:** stack another tag split from inside the first definition.

1. Reset to the documented start state.
2. Open `build_report()` in a split.
3. In `report.c`, put the cursor on the `f` in `format_total()` on line 5, column 12.
4. Open that definition in another split.

**Verify:** there are three windows, the active window shows `format.c`, and `:echo winnr('$') expand('%:t') line('.') col('.')` prints `3 format.c 1 1`.

### Drill C - Apply the workflow

**Goal:** keep the caller visible while inspecting a definition.

1. Reset to the documented start state.
2. Open `build_report()` in a split.
3. Move back to the caller window.
4. Move down again to the definition window.

**Verify:** `main.c` remains visible in one window, `report.c` remains visible in the other, and the cursor finishes in `report.c` on line 3, column 1.

### Challenge - Recall without prompts

Reset the fixture. Open `build_report()` in a split, confirm the caller is still available above it, and finish back on the definition.

**Verify:** there are exactly two windows, `main.c` is in window 1, `report.c` is in window 2, and `:echo fnamemodify(bufname(winbufnr(1)), ':t') fnamemodify(bufname(winbufnr(2)), ':t')` prints `main.c report.c`.

## Expected Final State

After the challenge, verify all of the following:

- `winnr('$')` is `2`.
- Window 1 shows `/tmp/vim-kata-134/main.c`.
- Window 2 shows `/tmp/vim-kata-134/report.c`.
- The active window is `report.c` at line 3, column 1.
- None of the practice files were edited.

## Hints

<details>
<summary>Hint 1</summary>

This command is the windowed version of a normal tag jump.

</details>

<details>
<summary>Hint 2</summary>

With `splitbelow` enabled, the new tag window opens below the caller. Use `<C-w>k` and `<C-w>j` to prove both windows stay available.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `<C-w>]` - split the window and jump to the definition under the cursor in the new lower window.

### Drill B

1. `<C-w>]` - open `build_report()` in a split.
2. `5G12|` - place the cursor on `format_total()`.
3. `<C-w>]` - open `format_total()` in another split.

### Drill C

1. `<C-w>]` - open `report.c` beneath `main.c`.
2. `<C-w>k` - move back to the caller window.
3. `<C-w>j` - return to the definition window.

### Challenge

`<C-w>]<C-w>k<C-w>j`

The split-tag jump opens the definition without replacing the caller. The window moves confirm both contexts remain visible.

</details>

## Reset and Cleanup

- Between drills: rerun the Setup steps so the files, tags file, and window state are rebuilt from scratch.
- After the kata: close practice windows with `:only`, restore the option with `:let &splitbelow=g:kata_134_splitbelow | unlet g:kata_134_splitbelow`, and remove the temporary directory with `:call delete('/tmp/vim-kata-134', 'rf')`.
- Preserve user data: all files live under `/tmp/vim-kata-134`.

## Notes and Portability

- Built-in behavior: `<C-w>]` is standard in Vim and Neovim.
- Window-placement detail: help describes the new tag window as the upper window, but `splitbelow` changes placement. This kata sets `splitbelow` explicitly so the layout is deterministic.
- Alternative: `:stag {name}` is the Ex form of the same split-and-tag workflow.
- LazyVim note: LSP definition mappings such as `gd` may use a picker or split action depending on configuration. Verify with `:verbose nmap gd` before comparing them to the built-in tag command.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-w>]` | Normal | Split the current window and jump to the tag under the cursor in the new window. |
| `<C-w>k` | Normal | Move to the window above. |
| `<C-w>j` | Normal | Move to the window below. |

## References

- [`:help CTRL-W_]`](https://vimhelp.org/windows.txt.html#CTRL-W_%5D) - split current window and jump to the tag under the cursor.
- [`:help :stag`](https://vimhelp.org/windows.txt.html#%3Astag) - Ex form of split-and-tag.
- [Neovim help: `CTRL-W_]`](https://neovim.io/doc/user/windows.html#CTRL-W_%5D) - Neovim's split-tag documentation.
