# Kata: Apply One Change Across an Argument List

> **Environment:** Vim or Neovim
> **Dependencies:** None; uses three files in a unique disposable directory.

## Objective
Build and traverse an argument list, then apply one Ex transformation with `:argdo`. Success means changing all three files and only those files.

## Setup
Create fixtures from inside Vim:
```vim
:let g:kata_args_dir = tempname()
:call mkdir(g:kata_args_dir, 'p')
:let g:kata_alpha = g:kata_args_dir . '/alpha.rb'
:let g:kata_beta = g:kata_args_dir . '/beta.rb'
:let g:kata_gamma = g:kata_args_dir . '/gamma.rb'
:call writefile(['class Alpha', 'end'], g:kata_alpha)
:call writefile(['class Beta', 'end'], g:kata_beta)
:call writefile(['class Gamma', 'end'], g:kata_gamma)
:execute 'args ' . fnameescape(g:kata_alpha) . ' ' . fnameescape(g:kata_beta) . ' ' . fnameescape(g:kata_gamma)
```
Start in the first argument, Normal mode. Verify `:args` shows three names and brackets the first.

## Tasks
### Drill A - Traverse
Visit the last argument, then the first. **Verify:** `:echo expand('%:t')` reports `gamma.rb`, then `alpha.rb`.

### Drill B - Apply without writing
Append ` # kata` to line 1 in every argument. **Verify:** visiting each argument shows the suffix, but `:echo &modified` is `1`.

### Drill C - Persist all arguments
Write every argument buffer. **Verify:** `:echo readfile(g:kata_beta)[0]` prints `class Beta # kata`.

### Challenge
Reset the files, rebuild the argument list, and combine the edit and write in one `:argdo` command. Verify all three first lines with argument traversal.

## Hints
<details><summary>Hints</summary>
`:argdo` executes an Ex command in every argument. A separate `:argdo update` writes only modified buffers.
</details>

## Solution
<details><summary>Show exact commands</summary>
- A: `:last<CR>:first<CR>`
- B: `:argdo 1s/$/ # kata/<CR>`
- C: `:argdo update<CR>`
- Challenge: run the Drill B command followed by `:argdo update<CR>`.
</details>

## Reset and Cleanup
Use `:argdo edit!` to discard unwritten edits, then `:argdelete *`. Wipe each owned buffer by number, for example `:execute 'silent! bwipeout! ' . bufnr(g:kata_alpha)`, and repeat for beta and gamma. Remove only the owned directory with `:call delete(g:kata_args_dir, 'rf')`, then `:unlet g:kata_alpha g:kata_beta g:kata_gamma g:kata_args_dir`.

## Command Reference
| Command | Effect |
|---|---|
| `:args {files}` | Define argument list |
| `:first` / `:last` | Visit endpoints |
| `:argdo {cmd}` | Execute in every argument |

## References
- [`:help argument-list`](https://vimhelp.org/editing.txt.html#argument-list)
- [`:help :argdo`](https://vimhelp.org/editing.txt.html#%3Aargdo)
