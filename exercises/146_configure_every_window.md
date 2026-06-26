# Kata: Configure Every Window with `:windo`

> **Environment:** Vim or Neovim; built-in commands only.
> **Dependencies:** None.
> **Portability:** Uses the built-in `:windo` command. `:windo` applies only to the current tab page, must not open or close windows, and leaves the last visited window current.

## Objective

By the end of this kata, you will be able to run one window-local configuration command across every window in the current tab page with `:windo`.

Success means: from a four-window layout with mixed local settings, you can normalize all windows with one `:windo setlocal ...` command and verify the result from the command line.

## Prerequisites

- Know: how to enter Ex commands and move between windows with `<C-w>w`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: open a separate throwaway Vim or Neovim session and confirm `:echo winnr('$')` prints `1`.

## Setup

1. In the fresh session, save the current split options with `:let g:kata_sr = &splitright | let g:kata_sb = &splitbelow`.
2. Create four throwaway scratch buffers in this exact order:
   - `:enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-top-left`
   - `:rightbelow vsplit | enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-top-right`
   - `:wincmd h | belowright split | enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-bottom-left`
   - `:wincmd l | belowright split | enew | setlocal buftype=nofile bufhidden=hide noswapfile | file kata-bottom-right`
3. Put the same three lines into each buffer:

```text
alpha
beta
gamma
```

4. Mark every scratch buffer unmodified with `:setlocal nomodified` before leaving it.
5. Return to the first window with `:wincmd t | wincmd h`.
6. Set mixed window-local state so the exercise has something to normalize:
   - In `kata-top-left`: `:setlocal nonumber norelativenumber nocursorline`
   - In `kata-bottom-left`: `:setlocal nonumber norelativenumber cursorline`
   - In `kata-top-right`: `:setlocal number relativenumber nocursorline`
   - In `kata-bottom-right`: `:setlocal number norelativenumber cursorline`
7. Return to `kata-top-left` and confirm all of the following:
   - `:echo string(map(range(1, winnr('$')), 'bufname(winbufnr(v:val))'))` prints `['kata-top-left', 'kata-bottom-left', 'kata-top-right', 'kata-bottom-right']`.
   - `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&number")'))` prints `[0, 0, 1, 1]`.
   - `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&relativenumber")'))` prints `[0, 0, 1, 0]`.
   - `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&cursorline")'))` prints `[0, 1, 0, 1]`.

## Initial Fixture

Use the four scratch buffers from Setup. Each buffer must contain exactly:

```text
alpha
beta
gamma
```

Start in Normal mode in `kata-top-left`. Do not change the buffer text during this kata.

## Constraints

- Use `:windo setlocal ...` for the final configuration step in every drill.
- Do not configure each window one at a time.
- Do not open, close, or reorder windows inside the `:windo` command.
- Reset to the documented setup before each drill unless the drill explicitly builds on the previous one.

## Tasks

### Drill A - Isolate the skill

**Goal:** turn on absolute line numbers in every window with one command.

1. Starting from the mixed setup, enable `number` in all four windows at once.

**Verify:** `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&number")'))` prints `[1, 1, 1, 1]`.

### Drill B - Add precision or repetition

**Goal:** normalize both absolute and relative numbering across all windows.

1. Reset to the setup state.
2. Use one `:windo` command to make every window show absolute numbers but no relative numbers.

**Verify:** both of the following are true:

- `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&number")'))` prints `[1, 1, 1, 1]`.
- `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&relativenumber")'))` prints `[0, 0, 0, 0]`.

### Drill C - Apply the workflow

**Goal:** normalize several window-local options with one batch command.

1. Reset to the setup state.
2. Use a single `:windo` command to enable `number`, disable `relativenumber`, and enable `cursorline` everywhere.

**Verify:** all of the following are true:

- `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&number")'))` prints `[1, 1, 1, 1]`.
- `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&relativenumber")'))` prints `[0, 0, 0, 0]`.
- `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&cursorline")'))` prints `[1, 1, 1, 1]`.
- `:echo bufname('%')` prints `kata-bottom-right`.

### Challenge - Recall without prompts

Reset to the setup state. Normalize all four windows so they show absolute line numbers, hide relative numbers, and highlight the cursor line, using one `:windo` command.

**Verify:** the three option checks from Drill C all pass, the current window ends in `kata-bottom-right`, and all four buffers still contain only `alpha`, `beta`, and `gamma`.

## Expected Final State

After the challenge, verify all of the following:

- `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&number")'))` prints `[1, 1, 1, 1]`.
- `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&relativenumber")'))` prints `[0, 0, 0, 0]`.
- `:echo string(map(range(1, winnr('$')), 'getwinvar(v:val, "&cursorline")'))` prints `[1, 1, 1, 1]`.
- `:echo string(map(range(1, winnr('$')), 'bufname(winbufnr(v:val))'))` still prints `['kata-top-left', 'kata-bottom-left', 'kata-top-right', 'kata-bottom-right']`.
- `:echo bufname('%')` prints `kata-bottom-right`.

## Hints

<details>
<summary>Hint 1</summary>

`setlocal` changes only the current window, so you need a command that visits every window for you.

</details>

<details>
<summary>Hint 2</summary>

You can put several local option changes after one `setlocal` inside `:windo`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:windo setlocal number` - enable absolute line numbers in every window in the current tab page.

### Drill B

1. `:windo setlocal number norelativenumber` - turn on `number` and turn off `relativenumber` everywhere.

### Drill C

1. `:windo setlocal number norelativenumber cursorline` - normalize all three window-local options across the layout.

### Challenge

`:windo setlocal number norelativenumber cursorline`

`setlocal` applies the option changes in each visited window. `:windo` stops at the last visited window, which is why the final current buffer is `kata-bottom-right` in this setup.

</details>

## Reset and Cleanup

- Between drills: rebuild the documented setup so the window-local option mix is restored exactly.
- After the kata: run `:only`, then `:silent! bwipeout! kata-top-left`, `:silent! bwipeout! kata-bottom-left`, `:silent! bwipeout! kata-top-right`, and `:silent! bwipeout! kata-bottom-right`.
- Restore options with `:let &splitright = g:kata_sr | let &splitbelow = g:kata_sb | unlet g:kata_sr g:kata_sb`.
- Preserve user data: use a separate throwaway session and only scratch buffers with `buftype=nofile` and `noswapfile`.

## Notes and Portability

- Built-in behavior: `:windo` works in both Vim and Neovim.
- Scope detail: `:windo` only visits windows in the current tab page.
- Command restriction: the help text explicitly forbids opening, closing, or reordering windows inside the `:windo` command.
- Focus detail: after a successful run, the last visited window becomes current.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:windo setlocal number` | Command-line | Run `setlocal number` in every window of the current tab page. |
| `:windo setlocal number norelativenumber` | Command-line | Normalize absolute and relative numbering everywhere. |
| `:windo setlocal number norelativenumber cursorline` | Command-line | Normalize three window-local display options everywhere. |
| `<C-w>w` | Normal | Move to the next window while checking or rebuilding setup. |

## References

- [`:help :windo`](https://vimhelp.org/windows.txt.html#%3Awindo) - execute a command in each window, current-tab-only scope, and last-window behavior.
- [`:help window-local`](https://vimhelp.org/options.txt.html#window-local) - window-local option model for settings like `number`, `relativenumber`, and `cursorline`.

