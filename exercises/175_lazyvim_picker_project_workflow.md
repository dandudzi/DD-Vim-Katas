# Kata: LazyVim Find Files Picker

## Task

Practice opening one project file with the LazyVim file picker.

## Start

Open a scratch buffer, then create a tiny project with:

```text
app/alpha.js
test/beta.test.js
```

Start in Normal mode in the scratch buffer on line 1, column 1.

## End

The current buffer should be `app/alpha.js` and contain:

```text
export const marker = "ALPHA_PICKER";
```

## Commands

Run these command steps:

```text
1. :let g:kata_175_dir=tempname()<CR>
2. :call mkdir(g:kata_175_dir.'/app', 'p')<CR>
3. :call mkdir(g:kata_175_dir.'/test', 'p')<CR>
4. :call writefile(['export const marker = "ALPHA_PICKER";'], g:kata_175_dir.'/app/alpha.js')<CR>
5. :call writefile(['console.log("BETA_PICKER");'], g:kata_175_dir.'/test/beta.test.js')<CR>
6. :execute 'lcd '.fnameescape(g:kata_175_dir)<CR>
7. <leader><Space>alpha<CR>
```
