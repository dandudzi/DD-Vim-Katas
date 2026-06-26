# Kata: Snacks Workspace Workflows

> **Environment:** Neovim with LazyVim using Snacks features.
> **Dependencies:** Snacks picker, scratch, terminal, and dashboard/session-adjacent mappings if enabled in the local LazyVim config.
> **Portability:** This kata is readiness-gated. Snacks features and mappings are configuration-dependent; verify each mapping with `:verbose nmap` before use.

## Objective

By the end of this kata, you will be able to verify Snacks-backed workspace mappings and practise only non-destructive picker, scratch, and terminal workflows in an owned temporary directory.

Success means: you can prove which mappings are Snacks-backed, use a picker in a temp project, open a scratch buffer without modifying existing scratch content, and exit a Snacks terminal safely.

## Prerequisites

- Know: LazyVim leader notation, `:verbose nmap`, and terminal-mode exit with `<C-\><C-n>`.
- Required option/state: none.
- Required external tool/plugin: Snacks features enabled by the local LazyVim config.
- Readiness check: run `:verbose nmap <leader><leader>`, `:verbose nmap <leader>.`, and `:verbose nmap <leader>ft`. Continue only with drills whose mapping output identifies the expected Snacks-backed feature.

## Setup

1. Create a disposable workspace:

```vim
:let g:kata_183_dir=tempname()
:call mkdir(g:kata_183_dir.'/notes', 'p')
:call writefile(['workspace alpha', 'SNACKS_WORKSPACE_TOKEN'], g:kata_183_dir.'/notes/alpha.md')
:call writefile(['workspace beta'], g:kata_183_dir.'/notes/beta.md')
:execute 'lcd '.fnameescape(g:kata_183_dir)
:edit notes/alpha.md
```

2. Start in `notes/alpha.md`, Normal mode.
3. Confirm `:echo getcwd() ==# g:kata_183_dir` prints `1`.

## Initial Fixture

The workspace contains:

```text
notes/alpha.md
notes/beta.md
```

Do not edit either file during this kata.

## Constraints

- Run the readiness check for each mapping immediately before its drill.
- Do not delete, restore, or overwrite sessions.
- Do not type into an existing persistent scratch buffer; use only a newly opened scratch if the provider makes that clear.
- Stop terminal jobs before closing their buffers.

## Tasks

### Drill A - Verify Snacks mappings

**Goal:** identify which workspace features are actually available.

1. Run `:verbose nmap <leader><leader>`.
2. Run `:verbose nmap <leader>.`.
3. Run `:verbose nmap <leader>ft`.

**Verify:** record which mappings are present and which provider each mapping names. Skip later drills for absent mappings.

### Drill B - Use the picker inside the temp workspace

**Goal:** open a file from the owned workspace with the verified file picker.

1. If `<leader><leader>` is ready, open the file picker.
2. Filter for `beta`.
3. Select `notes/beta.md`.

**Verify:** `:echo expand('%')` prints `notes/beta.md`.

### Drill C - Open scratch without touching existing scratch state

**Goal:** inspect scratch behavior safely.

1. If `<leader>.` is ready, open the scratch command.
2. If the provider shows an existing scratch with user content, cancel.
3. If a new empty scratch opens, type `kata scratch only`, then close it without saving.

**Verify:** `:echo getcwd() ==# g:kata_183_dir` still prints `1`, and neither workspace file changed.

### Challenge - Terminal safety check

If `<leader>ft` is ready, open the terminal, run `printf 'snacks-terminal-ready\n'`, exit the shell, and close the terminal buffer.

**Verify:** the terminal output included `snacks-terminal-ready`, the terminal job has exited, and `:echo expand('%')` returns to one of the workspace files.

## Hints

<details>
<summary>Hint 1</summary>

The `:verbose nmap` source tells you whether a key is LazyVim, Snacks, another plugin, or your own config.

</details>

<details>
<summary>Hint 2</summary>

Provider UI keys vary. Use visible help inside the picker, scratch, or terminal UI instead of assuming a cancel or split key.

</details>

## Solution

<details>
<summary>Show readiness-gated workflow</summary>

### Drill A

1. `:verbose nmap <leader><leader>`
2. `:verbose nmap <leader>.`
3. `:verbose nmap <leader>ft`

### Drill B

1. `<leader><leader>` when verified.
2. Type `beta`.
3. Select `notes/beta.md` with the provider's documented selection key.

### Drill C

1. `<leader>.` when verified.
2. Cancel if it would modify existing scratch content.
3. For a new empty scratch only: `ikata scratch only<Esc>:bd!<CR>`.

### Challenge

1. `<leader>ft` when verified.
2. `printf 'snacks-terminal-ready\n'<CR>`
3. `exit<CR>`
4. Close the terminal buffer after the job exits.

</details>

## Reset and Cleanup

- Between drills: return to `notes/alpha.md` with `:edit notes/alpha.md`.
- After the kata: close any owned terminal or scratch buffer first. Then wipe workspace buffers with `:for g:kata_183_buf in getbufinfo() | if stridx(g:kata_183_buf.name, g:kata_183_dir) == 0 | execute 'bwipeout! ' . g:kata_183_buf.bufnr | endif | endfor`, followed by `:lcd - | call delete(g:kata_183_dir, 'rf') | unlet g:kata_183_buf g:kata_183_dir`.
- Preserve user data: the kata never restores, deletes, or overwrites sessions and never intentionally edits existing scratch content.

## Notes and Portability

- Snacks is a plugin collection; LazyVim may enable only some features or map them differently.
- Verify mappings with `:verbose nmap <leader><leader>`, `:verbose nmap <leader>.`, and `:verbose nmap <leader>ft`.
- `<C-/>` can be terminal-dependent; if a provider documents `<C-_>` as the equivalent, use the spelling your terminal actually sends.
- Provider keys inside pickers vary; do not assume fixed keys for multi-select, quickfix export, split open, or cancel.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:verbose nmap {keys}` | Command-line | Show whether a Normal-mode mapping exists and where it was defined. |
| `<leader><leader>` | Normal | LazyVim file picker when mapped. |
| `<leader>.` | Normal | Scratch workflow when mapped. |
| `<leader>ft` | Normal | Terminal workflow when mapped. |
| `<C-\><C-n>` | Terminal | Leave Terminal mode for Normal mode. |

## References

- [LazyVim keymaps](https://lazyvim.github.io/keymaps) - documented LazyVim mappings.
- [Snacks.nvim documentation](https://github.com/folke/snacks.nvim) - Snacks feature collection and provider behavior.
- [Neovim terminal help](https://neovim.io/doc/user/terminal.html) - terminal buffers and Terminal mode.
