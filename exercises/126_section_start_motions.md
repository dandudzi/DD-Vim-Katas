# Kata: Section Start Motions

## Task

Practice jumping between C-style section starts with `]]` and `[[`.

## Start

Use the existing practice file `practice_126_section_starts.c`:

```c
int read_config(void)
{
    return 0;
}

int parse_args(void)
{
    return 1;
}

int start_server(void)
{
    return 2;
}
```

Start in Normal mode in any buffer at line 1, column 1.

## End

`practice_126_section_starts.c` should remain unchanged:

```c
int read_config(void)
{
    return 0;
}

int parse_args(void)
{
    return 1;
}

int start_server(void)
{
    return 2;
}
```

After step 8, the cursor should be on the `{` that starts `start_server` at line 12, column 1. After step 9, the split containing `practice_126_section_starts.c` should be closed.

## Commands

Run these command steps:

```text
1. :split practice_126_section_starts.c<CR>
2. :setlocal filetype=c<CR>
3. gg0
4. ]]
5. ]]
6. [[
7. ]]
8. ]]
9. :close<CR>
```
