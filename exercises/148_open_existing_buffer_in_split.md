# Kata: Open an Existing Buffer in a Split

> **Environment:** Vim or Neovim; built-in commands only.
> **Dependencies:** None.
> **Portability:** Uses built-in `:sbuffer {number}`. The setup clears `'switchbuf'` so `:sbuffer` creates a new split instead of reusing an existing window.

## Objective

By the end of this kata, you will be able to show an already loaded buffer in a new split with `:sbuffer {number}` instead of reopening or renaming files.

Success means: from one current buffer and two already listed buffers, you can build a review layout with `:sbuffer` and verify the resulting window stack.

## Prerequisites

- Know: `:ls` and `:wincmd k`.
- Required option/state: `'switchbuf'` must not contain `useopen`, and `'splitbelow'` must be on for the documented layout.
- Required external tool/plugin: none.
- Readiness check: open a separate throwaway session and confirm `:echo winnr('$')` prints `1`.

## Setup

1. In the fresh session, save the current split behavior with `:let g:kata_sb = &splitbelow | let g:kata_swb = &switchbuf`.
2. Run `:set splitbelow | set switchbuf=` so `:sbuffer` creates predictable lower splits.
3. Create three scratch buffers in this exact order:
   - `:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-current.txt`
   - `:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-reference.txt`
   - `:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-notes.txt`
4. Put the matching text into each buffer and mark each one unmodified with `:setlocal nomodified`:

```text
line one
line two
```

5. Return to `kata-current.txt` with `:buffer 1`.
6. Confirm all of the following:
   - `:ls` shows buffer `1` as `kata-current.txt`, buffer `2` as `kata-reference.txt`, and buffer `3` as `kata-notes.txt`.
   - `:echo winnr('$')` prints `1`.
   - `:echo bufname('%')` prints `kata-current.txt`.

## Initial Fixture

Use the three scratch buffers from Setup. Each buffer must contain exactly:

```text
line one
line two
```

Start in Normal mode in `kata-current.txt`. Do not change the buffer text during this kata.

## Constraints

- Use `:sbuffer {number}` for every split-opening step.
- Do not use `:split` followed by `:buffer`, `:vsplit`, partial names, or the mouse.
- Keep the three scratch buffers listed; do not recreate them between split steps inside a drill.
- Reset to the documented setup before each drill unless the drill explicitly builds on the previous one.

## Tasks

### Drill A - Isolate the skill

**Goal:** open one listed buffer below the current window.

1. Starting in `kata-current.txt`, open buffer `2` in a split.

**Verify:** all of the following are true:

- `:echo winnr('$')` prints `2`.
- `:echo bufname('%')` prints `kata-reference.txt`.
- `:echo string(map(range(1, winnr('$')), 'bufname(winbufnr(v:val))'))` prints `['kata-current.txt', 'kata-reference.txt']`.

### Drill B - Add precision or repetition

**Goal:** open a different listed buffer in a split without visiting it first.

1. Reset to the setup state.
2. Starting in `kata-current.txt`, open buffer `3` in a split.

**Verify:** all of the following are true:

- `:echo winnr('$')` prints `2`.
- `:echo bufname('%')` prints `kata-notes.txt`.
- `:echo string(map(range(1, winnr('$')), 'bufname(winbufnr(v:val))'))` prints `['kata-current.txt', 'kata-notes.txt']`.

### Drill C - Apply the workflow

**Goal:** build a three-window comparison stack from already loaded buffers.

1. Reset to the setup state.
2. Open buffer `2` in a split.
3. Move back to the top window.
4. Open buffer `3` in another split.

**Verify:** all of the following are true:

- `:echo winnr('$')` prints `3`.
- `:echo bufname('%')` prints `kata-notes.txt`.
- `:echo string(map(range(1, winnr('$')), 'bufname(winbufnr(v:val))'))` prints `['kata-current.txt', 'kata-notes.txt', 'kata-reference.txt']`.

### Challenge - Recall without prompts

Reset to the setup state. Build a three-window layout that keeps `kata-current.txt` in the top window, shows `kata-notes.txt` in the middle window, and shows `kata-reference.txt` in the bottom window, using only `:sbuffer {number}` plus window movement.

**Verify:** `:echo string(map(range(1, winnr('$')), 'bufname(winbufnr(v:val))'))` prints `['kata-current.txt', 'kata-notes.txt', 'kata-reference.txt']`, and `:echo bufname('%')` prints `kata-notes.txt`.

## Expected Final State

After the challenge, verify all of the following:

- `:echo winnr('$')` prints `3`.
- `:echo string(map(range(1, winnr('$')), 'bufname(winbufnr(v:val))'))` prints `['kata-current.txt', 'kata-notes.txt', 'kata-reference.txt']`.
- `:echo bufname('%')` prints `kata-notes.txt`.
- `:ls` still shows only the three scratch buffers created in setup.

## Hints

<details>
<summary>Hint 1</summary>

`:sbuffer` takes the target buffer number directly from the buffer list; you do not need to visit the buffer first.

</details>

<details>
<summary>Hint 2</summary>

After the first split, the new lower window becomes current. Move back to the top window before creating the second split if you want to keep the original buffer at the top.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:sbuffer 2` - split the current window and show buffer `2` in the new lower window.

### Drill B

1. `:sbuffer 3` - split the current window and show buffer `3` without visiting it first.

### Drill C

1. `:sbuffer 2` - create the lower `kata-reference.txt` split.
2. `<C-w>k` - move back to the top `kata-current.txt` window.
3. `:sbuffer 3` - split the top window and place `kata-notes.txt` in the middle.

### Challenge

`:sbuffer 2`
`<C-w>k`
`:sbuffer 3`

The first `:sbuffer` creates the bottom review window. Returning to the top window before the second `:sbuffer` preserves `kata-current.txt` at the top of the stack.

</details>

## Reset and Cleanup

- Between drills: close extra windows with `:only` and return to the setup buffer list.
- After the kata: run `:only`, then `:silent! bwipeout! kata-current.txt`, `:silent! bwipeout! kata-reference.txt`, and `:silent! bwipeout! kata-notes.txt`.
- Restore options with `:let &splitbelow = g:kata_sb | let &switchbuf = g:kata_swb | unlet g:kata_sb g:kata_swb`.
- Preserve user data: use a separate throwaway session and only scratch buffers with `buftype=nofile` and `noswapfile`.

## Notes and Portability

- Built-in behavior: `:sbuffer` works in both Vim and Neovim.
- Determinism detail: if `'switchbuf'` contains `useopen`, `:sbuffer` may reuse an existing window instead of creating a new one, so setup clears it.
- Layout detail: this kata sets `'splitbelow'` so plain `:sbuffer` creates lower windows in a predictable order.
- Alternate form: `:sbuffer` also accepts a buffer name, but this kata focuses on the numbered form from `:ls`.
- LazyVim note: picker providers usually offer split-open actions for selected buffers, but the action keys are provider-specific. Inspect picker help and verify the buffer picker mapping with `:verbose nmap <leader>,` before using it as an alternative.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:ls` | Command-line | Show the numbered list of already loaded buffers. |
| `:sbuffer 2` | Command-line | Split the current window and show buffer `2`. |
| `:sbuffer 3` | Command-line | Split the current window and show buffer `3`. |
| `<C-w>k` | Normal | Move to the window above the current one. |

## References

- [`:help :sbuffer`](https://vimhelp.org/windows.txt.html#%3Asbuffer) - split and show a listed buffer, plus `'switchbuf'` interaction.
- [`:help :buffer`](https://vimhelp.org/windows.txt.html#%3Abuffer) - numbered buffer selection that `:sbuffer` builds on.
- [`:help 'switchbuf'`](https://vimhelp.org/options.txt.html#%27switchbuf%27) - why `useopen` changes `:sbuffer` behavior.
