# Kata: Choose a Source in a Three-Way Diff

> **Environment:** Vim or Neovim; built-in diff mode.
> **Dependencies:** None.
> **Portability:** Uses built-in `:diffsplit` and `:diffget {bufspec}`.

## Objective

By the end of this kata, you will be able to pull a diff hunk from a specific
buffer in a three-way diff with `:diffget {bufspec}`.

Success means: you can stay in the target buffer and deliberately choose
whether a hunk should come from `base.txt` or `remote.txt`.

## Prerequisites

- Know: basic split navigation and two-way diff usage.
- Required option/state: none.
- Required external tool/plugin: none.
- Readiness check: run `:echo exists(':diffget')` and confirm it prints `2`.

## Setup

1. Run the setup block exactly:

```vim
:let g:kata_161_dir = tempname()
:call mkdir(g:kata_161_dir, 'p')
:call writefile(['status = base', 'shared = same', 'owner = base', 'note = keep'], g:kata_161_dir.'/base.txt')
:call writefile(['status = local', 'shared = same', 'owner = local', 'note = keep'], g:kata_161_dir.'/local.txt')
:call writefile(['status = remote', 'shared = same', 'owner = remote', 'note = keep'], g:kata_161_dir.'/remote.txt')
:execute 'edit '.fnameescape(g:kata_161_dir.'/local.txt')
:execute 'vert diffsplit '.fnameescape(g:kata_161_dir.'/base.txt')
:wincmd h
:execute 'vert diffsplit '.fnameescape(g:kata_161_dir.'/remote.txt')
:buffer local.txt
```

2. Confirm you are back in `local.txt`.
3. Put the cursor on the `s` in `status = local` at line 1, column 1.
4. Confirm `:echo expand('%:t') . ' ' . line('.') . ',' . col('.')` prints
   `local.txt 1,1`.

## Initial Fixture

The three files must contain exactly:

```text
base.txt
status = base
shared = same
owner = base
note = keep
```

```text
local.txt
status = local
shared = same
owner = local
note = keep
```

```text
remote.txt
status = remote
shared = same
owner = remote
note = keep
```

Start in Normal mode in `local.txt` at line 1, column 1.

## Constraints

- Run `:diffget {bufspec}` from `local.txt`.
- Do not move into `base.txt` or `remote.txt` to copy text manually.
- Reset `local.txt` with `:edit!` before each drill that changes it.

## Tasks

### Drill A - Take a hunk from the remote buffer

**Goal:** replace the local status line with the remote version.

1. Start from the documented cursor position in `local.txt`.
2. Run `:diffget remote.txt`.

**Verify:** line 1 in `local.txt` is now `status = remote`.

### Drill B - Take a different hunk from the base buffer

**Goal:** replace the local owner line with the base version.

1. Reset `local.txt` with `:edit!`.
2. Move to line 3 in `local.txt`.
3. Run `:diffget base.txt`.

**Verify:** line 3 in `local.txt` is now `owner = base`.

### Drill C - Use a buffer number as the source

**Goal:** pull from a specific diff buffer without naming the file.

1. Reset `local.txt` with `:edit!`.
2. Run `:echo bufnr('base.txt')` and note the number.
3. Move to line 3 in `local.txt`.
4. Run `:diffget {that-number}`.

**Verify:** line 3 becomes `owner = base`, and `:echo bufnr('base.txt') > 0`
prints `1`.

### Challenge - Mix sources deliberately

Reset `local.txt`. Without visiting the other diff windows, change line 1 to
the remote version and line 3 to the base version.

**Verify:** `local.txt` ends as:

```text
status = remote
shared = same
owner = base
note = keep
```

## Hints

<details>
<summary>Hint 1</summary>

`diffget` acts on the hunk under the cursor in the current buffer.

</details>

<details>
<summary>Hint 2</summary>

The source can be a buffer number or a filename pattern such as `remote.txt`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:diffget remote.txt<CR>` - replace the current hunk in `local.txt` with
   the remote buffer's version.

### Drill B

1. `:edit!<CR>`
2. `3G`
3. `:diffget base.txt<CR>`

### Drill C

1. `:edit!<CR>`
2. `:echo bufnr('base.txt')<CR>` - in this setup it should print `2`.
3. `3G`
4. `:diffget 2<CR>`

### Challenge

`:edit!<CR>:1diffget remote.txt<CR>:3diffget base.txt<CR>`

</details>

## Reset and Cleanup

- Between drills: run `:edit!` in `local.txt`.
- After the kata: run `:diffoff! | qa!` only if you opened a throwaway session
  for the exercise, or close just these buffers with:

```vim
:diffoff!
:for g:kata_161_buf in getbufinfo()
:  if stridx(g:kata_161_buf.name, g:kata_161_dir) == 0
:    execute 'bwipeout! ' . g:kata_161_buf.bufnr
:  endif
:endfor
:call delete(g:kata_161_dir, 'rf')
:unlet g:kata_161_buf g:kata_161_dir
```

- Preserve user data: all files live in a temporary directory created by the
  setup.

## Notes and Portability

- `:diffget` chooses the source for the current hunk explicitly.
- This kata uses three diff buffers at once, but Vim and Neovim support up to
  eight diff buffers in one tabpage.
- If your window order differs, `:buffer local.txt` returns you to the target
  buffer before running `:diffget`.
- Git-adjacent note: this teaches the editor primitive behind choosing a source
  in a multi-buffer diff. Git conflict tools may label sides differently
  (`ours`, `theirs`, `base`, or file names), so inspect the actual buffer names
  with `:ls` before running `:diffget {bufspec}`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:vert diffsplit {file}` | Command-line | Open another file in diff mode. |
| `:diffget {bufspec}` | Command-line | Replace the current hunk with text from the named diff buffer. |
| `:buffer local.txt` | Command-line | Return to the target buffer by name. |
| `:echo bufnr('base.txt')` | Command-line | Show the buffer number for an explicit numeric `diffget` source. |

## References

- [`:help :diffsplit`](https://vimhelp.org/diff.txt.html#%3Adiffsplit) - open additional diff buffers.
- [`:help :diffget`](https://vimhelp.org/diff.txt.html#%3Adiffget) - choose the source buffer for a diff hunk.
- [Neovim help: `diff-mode`](https://neovim.io/doc/user/diff.html#diff-mode) - diff behavior in Neovim.
