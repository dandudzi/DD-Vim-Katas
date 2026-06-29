# Kata: Tag Stack Return

## Task

Practice returning through tag jumps with `<C-t>`, including a counted return from a deeper tag stack.

## Start

The command steps create the practice files shown here and write a local tags file for them.

`/tmp/vim-kata-132/main.c`

```c
int build_report(void);

int main(void)
{
    return build_report();
}
```

`/tmp/vim-kata-132/report.c`

```c
int format_total(void);

int build_report(void)
{
    return format_total();
}
```

`/tmp/vim-kata-132/format.c`

```c
int format_total(void)
{
    return 7;
}
```

Start in Normal mode in `/tmp/vim-kata-132/main.c` on the `b` in `build_report()` at line 5, column 12.

## End

The three practice files should remain unchanged. The current buffer should be `/tmp/vim-kata-132/main.c`, with the cursor back on the `b` in `build_report()` at line 5, column 12.

## Commands

Run these command steps:

```text
1. :call delete('/tmp/vim-kata-132', 'rf')<CR>
2. :call mkdir('/tmp/vim-kata-132', 'p')<CR>
3. :call writefile(['int build_report(void);', '', 'int main(void)', '{', '    return build_report();', '}'], '/tmp/vim-kata-132/main.c')<CR>
4. :call writefile(['int format_total(void);', '', 'int build_report(void)', '{', '    return format_total();', '}'], '/tmp/vim-kata-132/report.c')<CR>
5. :call writefile(['int format_total(void)', '{', '    return 7;', '}'], '/tmp/vim-kata-132/format.c')<CR>
6. :call writefile(["build_report\t/tmp/vim-kata-132/report.c\t/^int build_report(void)$/", "format_total\t/tmp/vim-kata-132/format.c\t/^int format_total(void)$/"], '/tmp/vim-kata-132/tags')<CR>
7. :set tags=/tmp/vim-kata-132/tags<CR>
8. :edit /tmp/vim-kata-132/main.c<CR>
9. 5G12|
10. <C-]>
11. 5G12|
12. <C-]>
13. 2<C-t>
```
