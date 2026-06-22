# Kata: Organize Windows with Tab Pages

> **Environment:** Vim or Neovim; built-in commands only
> **Portability:** `<S-h>`/`<S-l>` are not built-in tab navigation and are intentionally excluded.

## Objective
Create tab pages, move a window into a tab, navigate tabs, and close them using built-in commands. Success means ending with exactly two tab pages and known contents.

## Setup
Save `hidden` and enable it before modifying scratch buffers: `:let g:kata_hidden=&hidden | set hidden`. Run `:enew | file layout-one`, insert `one`, and start in Normal mode in the only window and tab. Verify `:echo tabpagenr('$') winnr('$')` prints `1 1`.

## Tasks

### Drill A - New tab
Open a new tab with a buffer named `layout-two`, then insert `two`. **Verify:** `:echo tabpagenr('$')` prints `2`.

### Drill B - Navigate
Go to the previous tab and then the next tab. **Verify:** names observed are `layout-one`, then `layout-two`.

### Drill C - Promote a window
In tab 2, split horizontally, name the new buffer `layout-three`, and move that window to its own tab. **Verify:** there are 3 tabs and tab 3 contains `layout-three`.

### Challenge
Close the current tab without discarding its modified scratch buffer, return to tab 1, and verify exactly two tabs remain and the active buffer is `layout-one`. `:echo bufexists('layout-three')` must still print `1` after the tab closes.

## Hints
<details><summary>Hints</summary>
`<C-w>T` moves the current window to a new tab page. `gt` and `gT` navigate tabs.
</details>

## Solution
<details><summary>Show exact commands and keys</summary>

- A: `:tabnew<CR>:file layout-two<CR>itwo<Esc>`
- B: `gT` then `gt`
- C: `<C-w>s:enew<CR>:file layout-three<CR>ithree<Esc><C-w>T`
- Challenge: `:tabclose<CR>1gt`

</details>

## Reset and Cleanup
Close only the kata-created tabs with ordinary `:tabclose` while visiting the tabs that show `layout-two` and `layout-three`; never use `:tabonly`, because it can close unrelated user tabs. Then run `:silent! bwipeout! layout-one`, `:silent! bwipeout! layout-two`, and `:silent! bwipeout! layout-three` separately. Restore `hidden` with `:let &hidden=g:kata_hidden | unlet g:kata_hidden`. The modified buffers remain hidden until this explicit cleanup; `:tabclose!` is unnecessary and could discard scratch changes.

## Command Reference
| Command/keys | Effect |
|---|---|
| `:tabnew` | Open new tab with a new buffer |
| `gt` / `gT` | Next / previous tab |
| `<C-w>T` | Move window to a new tab |
| `:tabclose` | Close the current tab page |

## References
- [`:help tab-page`](https://vimhelp.org/tabpage.txt.html#tab-page)
- [`:help CTRL-W_T`](https://vimhelp.org/windows.txt.html#CTRL-W_T)
