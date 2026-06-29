# Kata: LazyVim Picker Project Workflow

## Task

Practice using LazyVim picker mappings to find a file, grep for a token, switch buffers, and resume safely.

## Start

Create a disposable project containing:

```text
app/alpha.js
test/beta.test.js
```

Start in Normal mode in `test/beta.test.js` on line 1, column 1.

## End

The observable final state should be:

```text
current file: app/alpha.js
listed buffers: app/alpha.js and test/beta.test.js
latest resumed picker: cancelled without opening another item
```

## Commands

Run these command steps:

```text
1. :let g:kata_175_dir=tempname()<CR>
2. :call mkdir(g:kata_175_dir.'/app', 'p')<CR>
3. :call mkdir(g:kata_175_dir.'/test', 'p')<CR>
4. :call writefile(['export const marker = "ALPHA_PICKER";'], g:kata_175_dir.'/app/alpha.js')<CR>
5. :call writefile(['import { marker } from "../app/alpha";', 'console.log("BETA_PICKER", marker);'], g:kata_175_dir.'/test/beta.test.js')<CR>
6. :execute 'lcd '.fnameescape(g:kata_175_dir)<CR>
7. :edit app/alpha.js<CR>
8. :edit test/beta.test.js<CR>
9. :verbose nmap <leader><leader><CR>
10. :verbose nmap <leader>/<CR>
11. :verbose nmap <leader>,<CR>
12. :verbose nmap <leader>sR<CR>
13. <leader><leader>alpha{select app/alpha.js}
14. <leader>/BETA_PICKER{select the result in test/beta.test.js}
15. <leader>,alpha{select app/alpha.js}
16. <leader>sR{cancel the resumed picker}
```
