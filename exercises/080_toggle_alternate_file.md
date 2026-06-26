# Kata: Toggle Between Alternate Files

> **Environment:** Vim or Neovim; built-in commands only.
> **Dependencies:** None.
> **Portability:** `<C-^>` is also commonly typed as `<C-6>`. Some terminals cannot send `<C-^>` reliably, so verify it in your terminal before relying on it.

## Objective

By the end of this kata, you will be able to switch between the current file and the alternate file with `<C-^>` or `:edit #`.

Success means: you can identify the `%` current marker and `#` alternate marker in `:ls`, toggle between two files, and predict which file becomes alternate after visiting a third file.

## Prerequisites

- Know: how to enter Ex commands and read `:ls`.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo mode()` and confirm it prints `n`.

## Setup

1. Create a disposable directory and three files:

```vim
:let g:kata_080_dir=tempname()
:call mkdir(g:kata_080_dir, 'p')
:call writefile(['alpha'], g:kata_080_dir.'/alpha.txt')
:call writefile(['beta'], g:kata_080_dir.'/beta.txt')
:call writefile(['gamma'], g:kata_080_dir.'/gamma.txt')
```

2. Open them in a deterministic order:

```vim
:execute 'edit '.fnameescape(g:kata_080_dir.'/alpha.txt')
:execute 'edit '.fnameescape(g:kata_080_dir.'/beta.txt')
```

3. Start in Normal mode in `beta.txt`.
4. Confirm `:echo expand('%:t') expand('#:t')` prints `beta.txt alpha.txt`.

## Tasks

### Drill A - Basic alternate-file toggle

**Goal:** toggle between the current file and the alternate file.

1. From `beta.txt`, switch to the alternate file.
2. Switch back again.

**Verify:** `:echo expand('%:t') expand('#:t')` first prints `alpha.txt beta.txt`, then `beta.txt alpha.txt`.

### Drill B - Inspect the buffer markers

**Goal:** connect the command to the `%` and `#` markers in `:ls`.

1. Run `:ls` before toggling.
2. Toggle once.
3. Run `:ls` again.

**Verify:** the `%` marker follows the current file and the `#` marker follows the alternate file.

### Drill C - Change the alternate file intentionally

**Goal:** prove the alternate file is the previous file, not a fixed partner.

1. From `beta.txt`, open `gamma.txt` from the setup directory.
2. Toggle once.
3. Toggle once more.

**Verify:** after opening `gamma.txt`, `:echo expand('%:t') expand('#:t')` prints `gamma.txt beta.txt`; toggling then alternates between `gamma.txt` and `beta.txt`.

### Challenge - Use the Ex form

Reset to `alpha.txt`, then `beta.txt`. Switch to `alpha.txt` and back to `beta.txt` using only the Ex form.

**Verify:** `:echo expand('%:t') expand('#:t')` prints `beta.txt alpha.txt`.

## Hints

<details>
<summary>Hint 1</summary>

The alternate file is shown by `#` in `:ls`.

</details>

<details>
<summary>Hint 2</summary>

`:edit #` is the Ex-command form of the same alternate-file jump.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `<C-^>` or `<C-6>` - switch from `beta.txt` to `alpha.txt`.
2. `<C-^>` or `<C-6>` - switch back to `beta.txt`.

### Drill B

1. `:ls<CR>`
2. `<C-^>`
3. `:ls<CR>`

### Drill C

1. `:execute 'edit '.fnameescape(g:kata_080_dir.'/gamma.txt')<CR>`
2. `<C-^>`
3. `<C-^>`

### Challenge

`:edit #<CR>:edit #<CR>`

</details>

## Reset and Cleanup

- Between drills: reopen `alpha.txt`, then `beta.txt`, using the two setup `:execute 'edit '...` commands.
- After the kata: wipe the three owned buffers with `:for g:kata_080_buf in getbufinfo() | if stridx(g:kata_080_buf.name, g:kata_080_dir) == 0 | execute 'bwipeout! ' . g:kata_080_buf.bufnr | endif | endfor`, then run `:call delete(g:kata_080_dir, 'rf') | unlet g:kata_080_buf g:kata_080_dir`.
- Preserve user data: all files live under the generated temp directory.

## Notes and Portability

- Built-in behavior: `<C-^>`, `<C-6>`, and `:edit #` are Vim/Neovim alternate-file commands.
- LazyVim note: file pickers are useful when choosing among many files, but this kata is about the built-in two-file toggle. If a custom config remaps related navigation, inspect it with `:verbose nmap <C-^>` and `:verbose nmap <C-6>`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-^>` / `<C-6>` | Normal | Edit the alternate file. |
| `:edit #` | Command-line | Edit the alternate file. |
| `:ls` | Command-line | Show buffers, including `%` current and `#` alternate markers. |

## References

- [`:help CTRL-^`](https://vimhelp.org/editing.txt.html#CTRL-%5E) - alternate-file Normal-mode command.
- [`:help alternate-file`](https://vimhelp.org/editing.txt.html#alternate-file) - alternate-file concept and `#` marker.
