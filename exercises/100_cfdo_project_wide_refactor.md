# Kata: Refactor Quickfix Files with cfdo

## Task

Practice using `:cfdo` to apply one substitution per file represented in the
quickfix list.

## Start

Open a scratch buffer and insert:

```text
oldName();
oldName();
```

Start in Normal mode on line 1, column 1.

## End

The disposable file `a.js` should contain:

```text
newName();
newName();
```

The disposable file `b.js` should contain:

```text
const x = newName();
```

The disposable file `keep.js` should contain:

```text
untouched();
```

## Commands

Run these command steps:

```text
1. :let g:kata_100_dir=tempname() | call mkdir(g:kata_100_dir, 'p')<CR>
2. :call writefile(['oldName();', 'oldName();'], g:kata_100_dir . '/a.js') | call writefile(['const x = oldName();'], g:kata_100_dir . '/b.js') | call writefile(['untouched();'], g:kata_100_dir . '/keep.js')<CR>
3. :execute 'vimgrep /oldName/gj ' . fnameescape(g:kata_100_dir) . '/*.js'<CR>
4. :copen<CR>
5. :cclose<CR>
6. :cfdo %s/oldName/newName/ge<CR>
7. :cfdo update<CR>
```
