# Kata: Tag in a Split

## Task

Practice opening tag definitions in new split windows with `<C-w>]` while keeping the caller visible.

## Start

The command steps create the practice files shown here and write a local tags file for them.

`/tmp/vim-kata-134/main.c`

```c
int build_report(void);

int main(void)
{
    return build_report();
}
```

`/tmp/vim-kata-134/report.c`

```c
int format_total(void);

int build_report(void)
{
    return format_total();
}
```

`/tmp/vim-kata-134/format.c`

```c
int format_total(void)
{
    return 7;
}
```

Start in Normal mode in `/tmp/vim-kata-134/main.c` on the `b` in `build_report()` at line 5, column 12, with one visible window.

## End

The three practice files should remain unchanged. There should be three windows: `main.c`, `report.c`, and `format.c`, with the active window showing `/tmp/vim-kata-134/format.c` at line 1, column 1.

## Commands

Run these command steps:

```text
1. :call delete('/tmp/vim-kata-134', 'rf')<CR>
2. :call mkdir('/tmp/vim-kata-134', 'p')<CR>
3. :call writefile(['int build_report(void);', '', 'int main(void)', '{', '    return build_report();', '}'], '/tmp/vim-kata-134/main.c')<CR>
4. :call writefile(['int format_total(void);', '', 'int build_report(void)', '{', '    return format_total();', '}'], '/tmp/vim-kata-134/report.c')<CR>
5. :call writefile(['int format_total(void)', '{', '    return 7;', '}'], '/tmp/vim-kata-134/format.c')<CR>
6. :call writefile(["build_report\t/tmp/vim-kata-134/report.c\t/^int build_report(void)$/", "format_total\t/tmp/vim-kata-134/format.c\t/^int format_total(void)$/"], '/tmp/vim-kata-134/tags')<CR>
7. :set tags=/tmp/vim-kata-134/tags<CR>
8. :set splitbelow<CR>
9. :edit /tmp/vim-kata-134/main.c<CR>
10. 5G12|
11. <C-w>]
12. 5G12|
13. <C-w>]
```
