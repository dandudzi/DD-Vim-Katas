# Kata: Control Search Case Sensitivity

## Task

Practice controlling search case sensitivity with `ignorecase`, `smartcase`, `\c`, and `\C`.

## Start

Open a scratch buffer and insert:

```text
foo
foo & foo
foo & Foo
FOO & foo
```

Start in Normal mode on the `f` in line 1, column 1.

## End

The buffer should remain:

```text
foo
foo & foo
foo & Foo
FOO & foo
```

The final count should report 5 matches.

## Commands

Run these command steps:

```text
1. :let g:kata_ic=&ignorecase | let g:kata_sc=&smartcase<CR>
2. :set noignorecase nosmartcase<CR>
3. :%s/foo\C//gn<CR>
4. :%s/foo\c//gn<CR>
5. :set ignorecase<CR>
6. :%s/foo//gn<CR>
7. :set ignorecase smartcase<CR>
8. :%s/foo//gn<CR>
9. :%s/Foo//gn<CR>
10. :let &ignorecase=g:kata_ic | let &smartcase=g:kata_sc | unlet g:kata_ic g:kata_sc<CR>
11. :%s/foo\C//gn<CR>
```
