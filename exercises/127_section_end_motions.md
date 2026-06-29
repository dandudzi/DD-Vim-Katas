# Kata: Section End Motions

## Task

Practice jumping to C-style section ends with `][` and `[]`.

## Start

Open a scratch buffer and insert:

```c
int read_config(const char *path)
{
    if (path == NULL)
    {
        return -1;
    }

    return 0;
}

int parse_args(int argc, char **argv)
{
    if (argc < 2)
    {
        return 1;
    }

    return argc;
}

int start_server(int port)
{
    if (port < 1024)
    {
        return -1;
    }

    return port;
}
```

Start in Normal mode on the `i` in `int read_config` on line 1.

## End

The buffer should remain:

```c
int read_config(const char *path)
{
    if (path == NULL)
    {
        return -1;
    }

    return 0;
}

int parse_args(int argc, char **argv)
{
    if (argc < 2)
    {
        return 1;
    }

    return argc;
}

int start_server(int port)
{
    if (port < 1024)
    {
        return -1;
    }

    return port;
}
```

The final cursor position should be on the `}` that ends `start_server` at line 29, column 1.

## Commands

Run these command steps:

```text
1. :setfiletype c<CR>
2. ][
3. ][
4. []
5. ][
6. ][
```
