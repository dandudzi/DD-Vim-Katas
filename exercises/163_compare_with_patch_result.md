# Kata: Compare with a Patch Result

## Task

Practice previewing a patch result with `:diffpatch` without changing the original buffer.

## Start

Use a temporary directory containing `draft.txt`:

```text
Title: Draft
Status: open
Owner: Dana
```

and `change.patch`:

```text
--- draft.txt
+++ draft.txt
@@ -1,3 +1,3 @@
-Title: Draft
+Title: Final
 Status: open
 Owner: Dana
```

Start in Normal mode in `draft.txt` on the `T` in `Title: Draft`.

## End

The patched preview buffer should show `Title: Final`, while the original `draft.txt` buffer should still show `Title: Draft`.

## Commands

Run these command steps:

```text
1. :let g:kata_163_dir = tempname()<CR>
2. :call mkdir(g:kata_163_dir, 'p')<CR>
3. :call writefile(['Title: Draft', 'Status: open', 'Owner: Dana'], g:kata_163_dir.'/draft.txt')<CR>
4. :call writefile(['--- draft.txt', '+++ draft.txt', '@@ -1,3 +1,3 @@', '-Title: Draft', '+Title: Final', ' Status: open', ' Owner: Dana'], g:kata_163_dir.'/change.patch')<CR>
5. :execute 'cd '.fnameescape(g:kata_163_dir)<CR>
6. :edit draft.txt<CR>
7. :vert diffpatch change.patch<CR>
8. :buffer draft.txt.new<CR>
9. :echo getline(1)<CR>
10. :buffer draft.txt<CR>
11. :echo getline(1)<CR>
12. :bwipeout draft.txt.new<CR>
13. :echo getline(1)<CR>
```
