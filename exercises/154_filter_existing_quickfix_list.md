# Kata: Filter an Existing Quickfix List

## Task

Practice narrowing an existing quickfix list with the standard `cfilter` plugin.

## Start

Open a scratch buffer and insert:

```text
src_main.txt
TODO core
plain src
TODO shared

app_test.txt
TODO test

vendor_blob.txt
TODO vendor

docs_notes.txt
TODO docs
```

Start in Normal mode on line 1, column 1 of the scratch buffer.

## End

The current quickfix list should be back to the unfiltered `All TODOs` list with five entries, including `vendor_blob.txt`.

## Commands

Run these command steps:

```text
1. :packadd cfilter<CR>
2. :let g:kata_154_dir = tempname() | call mkdir(g:kata_154_dir, 'p')<CR>
3. :call writefile(['TODO core', 'plain src', 'TODO shared'], g:kata_154_dir . '/src_main.txt')<CR>
4. :call writefile(['TODO test'], g:kata_154_dir . '/app_test.txt')<CR>
5. :call writefile(['TODO vendor'], g:kata_154_dir . '/vendor_blob.txt')<CR>
6. :call writefile(['TODO docs'], g:kata_154_dir . '/docs_notes.txt')<CR>
7. :execute 'vimgrep /TODO/gj ' . fnameescape(g:kata_154_dir . '/src_main.txt') . ' ' . fnameescape(g:kata_154_dir . '/app_test.txt') . ' ' . fnameescape(g:kata_154_dir . '/vendor_blob.txt') . ' ' . fnameescape(g:kata_154_dir . '/docs_notes.txt')<CR>
8. :call setqflist([], 'a', {'title': 'All TODOs'})<CR>
9. :Cfilter /test/<CR>
10. :colder<CR>
11. :Cfilter! /vendor/<CR>
12. :cnfile<CR>
13. :cnfile<CR>
14. :colder<CR>
```
