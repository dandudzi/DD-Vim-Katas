# Kata: List, Visit, and Delete Buffers

> **Environment:** Vim or Neovim; built-in commands only

## Objective
Manage disposable buffers with `:ls`, `:buffer`, `:bnext`, and `:bdelete`. Success means identifying buffers by name, visiting each, and deleting only the requested one.

## Setup
Save the option and enable hidden buffers before creating any modified buffer:

```vim
:let g:kata_hidden = &hidden | set hidden
```

Then run:

```vim
:enew | file kata-alpha
:put ='alpha'
:setlocal nomodified
:let g:kata_alpha_buf = bufnr()
:enew | file kata-beta
:put ='beta'
:setlocal nomodified
:let g:kata_beta_buf = bufnr()
:enew | file kata-gamma
:put ='gamma'
:setlocal nomodified
:let g:kata_gamma_buf = bufnr()
```

Start in `kata-gamma`, Normal mode. The saved buffer numbers let the challenge avoid modifying unrelated listed buffers.

## Tasks

### Drill A - Inspect and visit
List buffers, then visit `kata-alpha` by name. **Verify:** `:echo bufname('%')` prints `kata-alpha`.

### Drill B - Cycle
Move to the next listed buffer. **Verify:** `:echo bufname('%')` prints `kata-beta`.

### Drill C - Delete precisely
Delete `kata-beta` while it is current. **Verify:** `:echo bufnr('kata-beta')` prints `-1`, while both other names have positive buffer numbers.

### Challenge
From `kata-alpha`, use `:bufdo` with a buffer-number guard to append `!` only in the two remaining kata buffers. Verify their last lines with `:buffer kata-alpha` and `:buffer kata-gamma`; any unrelated listed buffer must remain unchanged.

## Hints
<details><summary>Hints</summary>
`:bufdo` visits every listed buffer, so compare `bufnr()` against the saved kata buffer numbers. `append('$', condition ? '!' : [])` appends only when the condition is true; an empty List is a no-op.
</details>

## Solution
<details><summary>Show exact commands</summary>

- A: `:ls<CR>` then `:buffer kata-alpha<CR>`
- B: `:bnext<CR>`
- C: `:bdelete<CR>`
- Challenge: `:bufdo call append('$', index([g:kata_alpha_buf, g:kata_gamma_buf], bufnr()) >= 0 ? '!' : [])<CR>`

</details>

## Reset and Cleanup
Run `:silent! bwipeout! kata-alpha`, `:silent! bwipeout! kata-beta`, and `:silent! bwipeout! kata-gamma` separately. Restore and remove kata state with `:let &hidden=g:kata_hidden | unlet g:kata_hidden g:kata_alpha_buf g:kata_beta_buf g:kata_gamma_buf`. All buffers are unnamed-on-disk and disposable.

## Command Reference
| Command | Effect |
|---|---|
| `:ls` | List buffers |
| `:buffer {name}` | Visit a buffer |
| `:bnext` | Visit next listed buffer |
| `:bdelete` | Remove a buffer from the list |
| `:bufdo {cmd}` | Run an Ex command in each listed buffer |

## References
- [`:help buffer-list`](https://vimhelp.org/windows.txt.html#buffer-list)
- [`:help :bufdo`](https://vimhelp.org/windows.txt.html#%3Abufdo)
