# Kata: Open the File Under the Cursor

## Task

Practice using `gf` to open a referenced file, with `suffixesadd` helping Vim
complete the filename.

## Start

Open a scratch buffer and insert:

```text
import { format } from "./utils/format";

const output = format(42);
```

Start in Normal mode on line 1, column 25, on the `.` in `./utils/format`.

## End

The current buffer should be `format.js` and should contain:

```text
export const format = (x) => String(x);
```

## Commands

Run these command steps:

```text
1. :let g:kata_096_dir=tempname() | call mkdir(g:kata_096_dir . '/utils', 'p') | call writefile(['export const format = (x) => String(x);'], g:kata_096_dir . '/utils/format.js')<CR>
2. :execute 'lcd ' . fnameescape(g:kata_096_dir)<CR>
3. :setlocal suffixesadd+=.js<CR>
4. gf
```
