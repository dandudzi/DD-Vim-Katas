# Kata: Tag Definition Jump

## Task

Practice following the tag under the cursor with `<C-]>` through a small call chain.

## Start

The command steps create the practice files shown here and generate a local tags file for them.

`/tmp/vim-kata-131/main.c`

```c
int build_report(void);

int main(void)
{
    return build_report();
}
```

`/tmp/vim-kata-131/report.c`

```c
int format_total(void);

int build_report(void)
{
    return format_total();
}
```

`/tmp/vim-kata-131/format.c`

```c
int format_total(void)
{
    return 7;
}
```

Start in Normal mode in `/tmp/vim-kata-131/main.c` on the `b` in `build_report()` at line 5, column 12.

## End

The three practice files should remain unchanged. The current buffer should be `/tmp/vim-kata-131/format.c`, with the cursor on the `i` in `int format_total(void)` at line 1, column 1.

## Commands

Run these command steps:

```text
1. :call delete('/tmp/vim-kata-131', 'rf')<CR>
2. :call mkdir('/tmp/vim-kata-131', 'p')<CR>
3. :call writefile(['int build_report(void);', '', 'int main(void)', '{', '    return build_report();', '}'], '/tmp/vim-kata-131/main.c')<CR>
4. :call writefile(['int format_total(void);', '', 'int build_report(void)', '{', '    return format_total();', '}'], '/tmp/vim-kata-131/report.c')<CR>
5. :call writefile(['int format_total(void)', '{', '    return 7;', '}'], '/tmp/vim-kata-131/format.c')<CR>
6. :silent !ctags -f /tmp/vim-kata-131/tags /tmp/vim-kata-131/main.c /tmp/vim-kata-131/report.c /tmp/vim-kata-131/format.c<CR>
7. :set tags=/tmp/vim-kata-131/tags<CR>
8. :edit /tmp/vim-kata-131/main.c<CR>
9. 5G12|
10. <C-]>
11. 5G12|
12. <C-]>
```
