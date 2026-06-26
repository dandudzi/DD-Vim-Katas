# Kata: Build and Navigate a Split Layout

> **Environment:** Vim or Neovim; built-in commands only

## Objective
Create, navigate, resize, and close split windows with `<C-w>` commands. Success means producing a three-window layout and returning safely to one window.

## Setup
Open an unnamed scratch buffer, insert `split practice`, and start in Normal mode. Save the layout options with `:let g:kata_sr=&splitright | let g:kata_sb=&splitbelow`, then run `:set splitright nosplitbelow`. Confirm `:echo winnr('$')` prints `1`.

## Tasks

### Drill A - Split by orientation
Create one vertical split. **Verify:** `:echo winnr('$')` prints `2`; the windows are side by side.

### Drill B - Add and navigate
In the right window, create a horizontal split. Move left, then right, then down. **Verify:** `:echo winnr('$')` prints `3` and the cursor ends in the lower-right window.

### Drill C - Resize
Equalize all windows, then make the active window 8 rows high. **Verify:** `:echo winheight(0)` prints `8` (unless the terminal is too short, in which case Vim uses the closest possible height).

### Challenge
From the three-window layout, keep only the active window. **Verify:** `:echo winnr('$')` prints `1` and the text remains.

## Hints
<details><summary>Hints</summary>
Window commands begin with `<C-w>`; `v` and `s` choose the split orientation, and `o` means “only.”
</details>

## Solution
<details><summary>Show exact keys</summary>

- A: `<C-w>v`
- B: `<C-w>s<C-w>h<C-w>l<C-w>j`
- C: `<C-w>=8<C-w>_`
- Challenge: `<C-w>o`

</details>

## Reset and Cleanup
`<C-w>o` closes extra windows without deleting the shared buffer. Restore options with `:let &splitright=g:kata_sr | let &splitbelow=g:kata_sb | unlet g:kata_sr g:kata_sb`, then use `:bwipeout!`.

## Command Reference
| Keys | Effect |
|---|---|
| `<C-w>v` / `<C-w>s` | Vertical / horizontal split |
| `<C-w>h/j/k/l` | Move between windows |
| `<C-w>=` | Equalize dimensions |
| `{N}<C-w>_` | Set active height to N |
| `<C-w>o` | Keep only active window |

The documented sequence assumes the exact `splitright`/`splitbelow` state established in Setup; restoring it prevents configuration leakage.

## Notes and Portability

- LazyVim note: window picker or resize mappings may exist in a local config, but `<C-w>` commands are the portable base. Verify any alternative with `:verbose nmap <leader>wm` or the exact keys from your config before using it in a drill.

## References
- [`:help CTRL-W`](https://vimhelp.org/windows.txt.html#CTRL-W)
