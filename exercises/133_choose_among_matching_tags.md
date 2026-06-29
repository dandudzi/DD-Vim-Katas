# Kata: Choose Among Matching Tags

## Task

Practice using `g]` to list duplicate tag matches and choose the intended definition by number.

## Start

The command steps create one caller and two files that both define `normalize()` and `sanitize()`.

`/tmp/vim-kata-133/main.c`

```c
int normalize(void);
int sanitize(void);

int main(void)
{
    return normalize() + sanitize();
}
```

`/tmp/vim-kata-133/alpha.c`

```c
int normalize(void)
{
    return 1;
}

int sanitize(void)
{
    return 10;
}
```

`/tmp/vim-kata-133/beta.c`

```c
int normalize(void)
{
    return 2;
}

int sanitize(void)
{
    return 20;
}
```

Start in Normal mode in `/tmp/vim-kata-133/main.c` on the `n` in `normalize()` at line 6, column 12.

## End

The practice files should remain unchanged. The current buffer should be `/tmp/vim-kata-133/beta.c`, with the cursor on the `i` in `int sanitize(void)` at line 6, column 1.

## Commands

Run these command steps:

```text
1. :call delete('/tmp/vim-kata-133', 'rf')<CR>
2. :call mkdir('/tmp/vim-kata-133', 'p')<CR>
3. :call writefile(['int normalize(void);', 'int sanitize(void);', '', 'int main(void)', '{', '    return normalize() + sanitize();', '}'], '/tmp/vim-kata-133/main.c')<CR>
4. :call writefile(['int normalize(void)', '{', '    return 1;', '}', '', 'int sanitize(void)', '{', '    return 10;', '}'], '/tmp/vim-kata-133/alpha.c')<CR>
5. :call writefile(['int normalize(void)', '{', '    return 2;', '}', '', 'int sanitize(void)', '{', '    return 20;', '}'], '/tmp/vim-kata-133/beta.c')<CR>
6. :call writefile(["normalize\t/tmp/vim-kata-133/alpha.c\t/^int normalize(void)$/", "normalize\t/tmp/vim-kata-133/beta.c\t/^int normalize(void)$/", "sanitize\t/tmp/vim-kata-133/alpha.c\t/^int sanitize(void)$/", "sanitize\t/tmp/vim-kata-133/beta.c\t/^int sanitize(void)$/"], '/tmp/vim-kata-133/tags')<CR>
7. :set tags=/tmp/vim-kata-133/tags<CR>
8. :edit /tmp/vim-kata-133/main.c<CR>
9. 6G12|
10. g]2<CR>
11. <C-t>
12. 6G26|
13. g]2<CR>
```
