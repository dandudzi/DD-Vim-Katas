# Kata: Jump to Section Ends

> **Environment:** Vim or Neovim; built-in motions only.
> **Dependencies:** None.
> **Portability:** Uses built-in Normal-mode section-end motions `[]` and `][`.

## Objective

By the end of this kata, you will be able to jump to the previous or next section end in C-style code using `[]` and `][`.

Success means: you can land on the closing brace of the target top-level function body without searching line by line.

## Prerequisites

- Know: basic Normal-mode movement and how to enter a scratch buffer.
- Required option/state: `filetype=c`.
- Required external tool/plugin: none.
- Readiness check: run `:echo &filetype . ' ' . mode()` and confirm `c n`.

## Setup

1. Run `:enew` to open a scratch buffer.
2. Paste the fixture exactly as shown below.
3. Run `:setfiletype c`.
4. Put the cursor on the `i` in `int read_config` at line 1, column 1.
5. Confirm Normal mode is active and `:echo line('.') . ',' . col('.')` prints `1,1`.

## Initial Fixture

Create a new buffer and insert exactly:

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

Start in Normal mode on the `i` in `int read_config` on line 1. Do not modify the fixture before beginning Drill A.

## Constraints

- Use `[]` or `][` for the final landing in every drill.
- Do not use `/`, `?`, `%`, `[{`, `]}`, or the mouse.
- Reset to the documented start state before each drill unless the drill tells you to move to another exact token first.

## Tasks

### Drill A - Isolate the skill

**Goal:** jump forward to the section end for the current function.

1. From the start of the file, move to the closing brace that ends `read_config`.

**Verify:** the cursor is on the `}` at line 9, column 1, and `:echo line('.') . ',' . col('.')` prints `9,1`.

### Drill B - Add precision or repetition

**Goal:** move backward by two section ends with one counted motion.

1. Reset to the documented start state.
2. Put the cursor on the `r` in `return port;` on line 28.
3. Jump backward two section ends with a single command.

**Verify:** the cursor is on the `}` that ends `read_config` at line 9, column 1, and `:echo line('.') . ',' . col('.')` prints `9,1`.

### Drill C - Apply the workflow

**Goal:** skip to a later function end from inside an earlier one.

1. Reset to the documented start state.
2. Put the cursor on the `r` in `return 1;` on line 15.
3. Jump to the closing brace that ends `start_server` with one counted section-end motion.

**Verify:** the cursor is on the `}` at line 29, column 1, and `:echo line('.') . ',' . col('.')` prints `29,1`.

### Challenge - Recall without prompts

Reset the fixture. Starting on the `i` in `int read_config`, land on the closing brace for `start_server` without using search or line-by-line movement.

**Verify:** the final cursor position is line 29, column 1, and the buffer text is unchanged.

## Expected Final State

After the challenge, the buffer content must still be:

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

## Hints

<details>
<summary>Hint 1</summary>

For this built-in motion, a section end in C-style code is the `}` when it appears in the first column.

</details>

<details>
<summary>Hint 2</summary>

The first bracket in the command decides the direction: `][` moves forward, while `[]` moves backward.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `][` - jump forward to the next section end, which is the first-column `}` for `read_config`.

### Drill B

1. `28G0fr` - move to the `r` in `return port;`.
2. `2[]` - jump backward two section ends, landing on the `read_config` closing brace.

### Drill C

1. `15G0fr` - move to the `r` in `return 1;`.
2. `2][` - jump forward two section ends, landing on the `start_server` closing brace.

### Challenge

`3][`

The first `][` lands on line 9, the second on line 19, and the third on line 29.

</details>

## Reset and Cleanup

- Between drills: run `:enew`, paste the fixture again, set `filetype=c`, and return to line 1, column 1.
- After the kata: close the scratch buffer with `:bd!`.
- Preserve user data: perform the exercise only in a throwaway buffer.

## Notes and Portability

- Built-in behavior: `[]` and `][` are standard motions in Vim and Neovim.
- Edge case: this kata relies on closing braces in the first column. If your codebase indents top-level `}` or keeps braces on other lines, these motions will not stop there.
- Alternative: if these keys are remapped in your config, verify that with `:verbose nmap []` and `:verbose nmap ][`.
- LazyVim compatibility: Flash Treesitter jumps can target syntax nodes when available, but they do not teach first-column section ends; verify any `S` mapping with `:verbose nmap S` before treating it as a plugin drill.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `][` | Normal | Jump forward to the next section end or first-column `}`. |
| `[]` | Normal | Jump backward to the previous section end or first-column `}`. |
| `{count}][` | Normal | Jump forward by `count` section ends. |
| `{count}[]` | Normal | Jump backward by `count` section ends. |

## References

- [`:help ][`](https://vimhelp.org/motion.txt.html#%5D%5B) - forward section-end motion and first-column `}` behavior.
- [`:help []`](https://vimhelp.org/motion.txt.html#%5B%5D) - backward section-end motion.
- [`:help section`](https://vimhelp.org/motion.txt.html#section) - section definition and the C-style brace note.
- [Neovim help: `section`](https://neovim.io/doc/user/motion.html#section) - section definition in Neovim's user manual.
