# Kata: Compare with a Patch Result

> **Environment:** Vim or Neovim.
> **Dependencies:** external `patch` executable available in `$PATH`.
> **Portability:** Uses built-in `:diffpatch`, which shells out to `patch` or
> `'patchexpr'`.

## Objective

By the end of this kata, you will be able to preview a patch result in diff
mode with `:diffpatch` before changing the original file.

Success means: you can inspect the patched `.new` buffer and confirm the
original file buffer is still unchanged.

## Prerequisites

- Know: basic diff-window navigation.
- Required option/state: none.
- Required external tool/plugin: `patch`.
- Readiness check: run `:echo executable('patch')` and confirm it prints `1`.

## Setup

1. Run the setup block exactly:

```vim
:let g:kata_163_dir = tempname()
:call mkdir(g:kata_163_dir, 'p')
:call writefile(['Title: Draft', 'Status: open', 'Owner: Dana'], g:kata_163_dir.'/draft.txt')
:call writefile(['--- draft.txt', '+++ draft.txt', '@@ -1,3 +1,3 @@', '-Title: Draft', '+Title: Final', ' Status: open', ' Owner: Dana'], g:kata_163_dir.'/change.patch')
:execute 'cd '.fnameescape(g:kata_163_dir)
:edit draft.txt
```

2. Put the cursor on the `T` in `Title: Draft` at line 1, column 1.
3. Confirm `:echo expand('%:t') . ' ' . getline(1)` prints
   `draft.txt Title: Draft`.

## Initial Fixture

The source file must be:

```text
Title: Draft
Status: open
Owner: Dana
```

The patch file must be:

```diff
--- draft.txt
+++ draft.txt
@@ -1,3 +1,3 @@
-Title: Draft
+Title: Final
 Status: open
 Owner: Dana
```

## Constraints

- Use `:diffpatch change.patch`.
- Do not edit `draft.txt` by hand to simulate the patch.
- Keep the work inside the generated temporary directory.

## Tasks

### Drill A - Preview the patched result

**Goal:** open the patch result side by side with the original.

1. From `draft.txt`, run `:vert diffpatch change.patch`.

**Verify:** `:echo bufexists('draft.txt') && bufexists('draft.txt.new')`
prints `1`.

### Drill B - Inspect the patched buffer

**Goal:** confirm only the preview buffer changed.

1. Switch to `draft.txt.new`.
2. Check line 1.
3. Switch back to `draft.txt`.
4. Check line 1 again.

**Verify:** `draft.txt.new` has `Title: Final`, while `draft.txt` still has
`Title: Draft`.

### Drill C - Confirm the comparison is disposable

**Goal:** close the preview without modifying the original file.

1. Wipe out `draft.txt.new`.
2. Stay in `draft.txt`.
3. Confirm the original text is unchanged.

**Verify:** `:echo getline(1)` prints `Title: Draft`.

### Challenge - Use the patch as a safe preview

Re-run `:vert diffpatch change.patch`, inspect `draft.txt.new`, then close the
preview buffer and leave only the original file open.

**Verify:** the only remaining buffer in the temp directory is `draft.txt`,
and its line 1 is still `Title: Draft`.

## Hints

<details>
<summary>Hint 1</summary>

`diffpatch` does not overwrite the current file buffer. It opens a second
buffer containing the patched result.

</details>

<details>
<summary>Hint 2</summary>

The preview buffer is typically named with a `.new` suffix.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `:vert diffpatch change.patch<CR>`

### Drill B

1. `:buffer draft.txt.new<CR>`
2. `:echo getline(1)<CR>`
3. `:buffer draft.txt<CR>`
4. `:echo getline(1)<CR>`

### Drill C

1. `:bwipeout draft.txt.new<CR>`
2. `:echo getline(1)<CR>`

### Challenge

`:vert diffpatch change.patch<CR>:buffer draft.txt.new<CR>:echo getline(1)<CR>:bwipeout draft.txt.new<CR>:buffer draft.txt<CR>:echo getline(1)<CR>`

</details>

## Reset and Cleanup

- Between drills: if the preview buffer already exists, close it with
  `:bwipeout draft.txt.new`.
- After the kata:

```vim
:silent! bwipeout draft.txt.new
:silent! bwipeout draft.txt
:call delete(g:kata_163_dir, 'rf')
:unlet g:kata_163_dir
```

- Preserve user data: the exercise uses only generated files in a temporary
  directory.

## Notes and Portability

- `:diffpatch` relies on the system `patch` program unless `'patchexpr'` is
  configured.
- The patched buffer is for inspection. This kata intentionally avoids writing
  it back over the original file.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `:vert diffpatch change.patch` | Command-line | Open a patched preview buffer and compare it with the current buffer in diff mode. |
| `:buffer draft.txt.new` | Command-line | Jump to the patched preview buffer. |
| `:bwipeout draft.txt.new` | Command-line | Discard the preview buffer. |

## References

- [`:help :diffpatch`](https://vimhelp.org/diff.txt.html#%3Adiffpatch) - create a patched preview buffer and diff it.
- [`:help diff-mode`](https://vimhelp.org/diff.txt.html#diff-mode) - diff-window behavior.
- [Neovim help: `:diffpatch`](https://neovim.io/doc/user/diff.html#%3Adiffpatch) - Neovim documentation for patch previews.
