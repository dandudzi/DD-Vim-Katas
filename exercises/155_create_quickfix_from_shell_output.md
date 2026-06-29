# Kata: Create Quickfix from Shell Output

## Task

Practice turning deterministic shell output into a navigable quickfix list with `:cexpr systemlist(...)`.

## Start

Open a scratch buffer and insert:

```text
alpha.txt
TODO alpha first
plain alpha
TODO alpha second

beta.txt
plain beta
TODO beta only
```

Start in Normal mode on line 1, column 1 of the scratch buffer.

## End

The current buffer should be `beta.txt`, the cursor should be on `TODO beta only` at line 2, column 1, and the quickfix list should contain three imported shell results.

## Commands

Run these command steps:

```text
1. :let g:kata_155_dir = tempname() | call mkdir(g:kata_155_dir, 'p')<CR>
2. :call writefile(['TODO alpha first', 'plain alpha', 'TODO alpha second'], g:kata_155_dir . '/alpha.txt')<CR>
3. :call writefile(['plain beta', 'TODO beta only'], g:kata_155_dir . '/beta.txt')<CR>
4. :execute 'edit ' . fnameescape(g:kata_155_dir . '/alpha.txt')<CR>
5. :set errorformat=%f:%l:%m<CR>
6. :let g:kata_155_cmd = 'grep -Hn TODO ' . shellescape(g:kata_155_dir . '/alpha.txt') . ' ' . shellescape(g:kata_155_dir . '/beta.txt')<CR>
7. :cexpr systemlist(g:kata_155_cmd)<CR>
8. :cnext<CR>
9. :cnext<CR>
```
