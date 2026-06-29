# Kata: Snacks Workspace Picker

## Task

Practice verifying the LazyVim Snacks file picker mapping and using it inside an owned temporary workspace.

## Start

Open a scratch buffer and insert:

```text
notes/alpha.md
notes/beta.md
```

Start in Normal mode on the first line.

## End

The observable workspace state should be:

```text
The current local directory has been restored to its previous value.
The current buffer is the temporary workspace's notes/alpha.md buffer.
The temporary kata workspace has been deleted.
The g:kata_183_dir variable has been removed.
```

## Commands

Run these command steps:

```text
1. :let g:kata_183_dir=tempname()<CR>
2. :call mkdir(g:kata_183_dir.'/notes', 'p')<CR>
3. :call writefile(['workspace alpha', 'SNACKS_WORKSPACE_TOKEN'], g:kata_183_dir.'/notes/alpha.md')<CR>
4. :call writefile(['workspace beta'], g:kata_183_dir.'/notes/beta.md')<CR>
5. :execute 'lcd '.fnameescape(g:kata_183_dir)<CR>
6. :edit notes/alpha.md<CR>
7. :verbose nmap <leader><leader><CR>
8. Stop here if the mapping is absent or does not identify the expected Snacks-backed file picker.
9. <leader><leader>
10. beta
11. <CR>
12. :echo expand('%')<CR>
13. :echo getcwd() ==# g:kata_183_dir<CR>
14. :edit notes/alpha.md<CR>
15. :lcd -<CR>
16. :call delete(g:kata_183_dir, 'rf')<CR>
17. :unlet g:kata_183_dir<CR>
```
