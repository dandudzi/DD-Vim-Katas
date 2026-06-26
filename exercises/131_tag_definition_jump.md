# Kata: Jump to a Tag Definition

> **Environment:** Vim or Neovim with a local tags file.
> **Dependencies:** A `ctags` executable in `$PATH`.
> **Portability:** `<C-]>` is built in. The setup command uses `ctags -f {tagsfile} {files...}`, which works with BSD, Exuberant, and Universal Ctags.

## Objective

By the end of this kata, you will be able to follow the tag under the cursor with `<C-]>`.

Success means: from a caller, you can land on the matching function definition in another file without searching for its name manually.

## Prerequisites

- Know: basic Normal-mode movement and how to run Ex commands.
- Required option/state: `'tags'` must point at the generated local tags file.
- Required external tool/plugin: `ctags`.
- Readiness check: run `:echo executable('ctags')` and confirm it prints `1`.

## Setup

1. Reset the practice directory with `:call delete('/tmp/vim-kata-131', 'rf')`.
2. Create it with `:call mkdir('/tmp/vim-kata-131', 'p')`.
3. Create `/tmp/vim-kata-131/main.c`:
   `:call writefile(['int build_report(void);', '', 'int main(void)', '{', '    return build_report();', '}'], '/tmp/vim-kata-131/main.c')`
4. Create `/tmp/vim-kata-131/report.c`:
   `:call writefile(['int format_total(void);', '', 'int build_report(void)', '{', '    return format_total();', '}'], '/tmp/vim-kata-131/report.c')`
5. Create `/tmp/vim-kata-131/format.c`:
   `:call writefile(['int format_total(void)', '{', '    return 7;', '}'], '/tmp/vim-kata-131/format.c')`
6. Generate tags with `:silent !ctags -f /tmp/vim-kata-131/tags /tmp/vim-kata-131/main.c /tmp/vim-kata-131/report.c /tmp/vim-kata-131/format.c`.
7. Point Vim at that tags file with `:set tags=/tmp/vim-kata-131/tags`.
8. Open the caller with `:edit /tmp/vim-kata-131/main.c`.
9. Put the cursor on the `b` in `build_report()` on line 5, column 12.
10. Confirm `:echo expand('%:t') line('.') col('.')` prints `main.c 5 12`.

## Initial Fixture

The setup creates exactly these files:

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

Start in Normal mode in `main.c` on the `b` in `build_report()` at line 5, column 12. Do not edit any file before beginning Drill A.

## Constraints

- Use `<C-]>` for the final landing in every drill.
- Do not use `/`, `?`, `gf`, `gF`, `:tag`, or the mouse.
- Reset to the documented start state before each drill unless the drill explicitly tells you to open another file first.

## Tasks

### Drill A - Isolate the skill

**Goal:** jump from a caller to its definition.

1. From `main.c`, jump to the definition of `build_report`.

**Verify:** the current buffer is `report.c`, the cursor is on line 3, column 1, and `:echo expand('%:t') line('.') col('.') getline('.')` prints `report.c 3 1 int build_report(void)`.

### Drill B - Add precision or repetition

**Goal:** use the same jump on a second call site.

1. Reset the setup state.
2. Open `/tmp/vim-kata-131/report.c`.
3. Put the cursor on the `f` in `format_total()` on line 5, column 12.
4. Jump to that definition.

**Verify:** the current buffer is `format.c`, the cursor is on line 1, column 1, and `:echo expand('%:t') line('.') col('.') getline('.')` prints `format.c 1 1 int format_total(void)`.

### Drill C - Apply the workflow

**Goal:** follow a call chain across multiple files.

1. Reset to the documented start state in `main.c`.
2. Jump to `build_report`.
3. In `report.c`, put the cursor on the `f` in `format_total()` on line 5, column 12.
4. Jump again.

**Verify:** the current buffer is `format.c`, the cursor is on line 1, column 1, and the file text is unchanged.

### Challenge - Recall without prompts

Reset the fixture. Starting in `main.c`, follow the call chain from `build_report()` to `format_total()` using only tag-definition jumps.

**Verify:** you finish in `format.c` on line 1, column 1, and `:echo expand('%:t') line('.') col('.')` prints `format.c 1 1`.

## Expected Final State

After the challenge, verify all of the following:

- The current buffer is `/tmp/vim-kata-131/format.c`.
- The cursor is on the `i` in `int format_total(void)` at line 1, column 1.
- `:echo expand('%:t') line('.') col('.')` prints `format.c 1 1`.
- None of the three practice files were edited.

## Hints

<details>
<summary>Hint 1</summary>

This command uses the identifier under the cursor and looks it up in `'tags'`.

</details>

<details>
<summary>Hint 2</summary>

If the cursor is on the function name itself, one press of `<C-]>` is enough. Repeat the same command from the next call site to follow the chain further.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `<C-]>` - jump from `build_report()` in `main.c` to its definition in `report.c`.

### Drill B

1. `:edit /tmp/vim-kata-131/report.c<CR>` - open the second caller file.
2. `5G12|` - land on the `f` in `format_total()`.
3. `<C-]>` - jump to the `format_total` definition in `format.c`.

### Drill C

1. `<C-]>` - jump from `main.c` to `report.c`.
2. `5G12|` - place the cursor on `format_total()`.
3. `<C-]>` - jump to `format.c`.

### Challenge

`<C-]>5G12|<C-]>`

The first tag jump follows `build_report()`. After placing the cursor on the next call, the second tag jump follows `format_total()`.

</details>

## Reset and Cleanup

- Between drills: rerun the Setup steps so the files and tags file are rebuilt from scratch.
- After the kata: close practice buffers with `:bd!` and remove the temporary directory with `:call delete('/tmp/vim-kata-131', 'rf')`.
- Preserve user data: all files live under `/tmp/vim-kata-131`.

## Notes and Portability

- Built-in behavior: `<C-]>` is standard in Vim and Neovim.
- External dependency: the jump only works after `'tags'` points at a readable tags file.
- This kata uses explicit file arguments instead of recursive `ctags -R` so the setup stays reproducible across machines and avoids project-specific assumptions.
- LazyVim/LSP contrast: LSP definition uses the attached server, not the tags file. Check `:LspInfo`, `:verbose nmap gd`, and `textDocument/definition` support before comparing `gd` with `<C-]>`.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-]>` | Normal | Jump to the definition of the identifier under the cursor. |
| `:set tags=/tmp/vim-kata-131/tags` | Command-line | Use the local practice tags file for tag lookups. |
| `ctags -f /tmp/vim-kata-131/tags ...` | Shell via `:!` | Generate the tags file for the practice sources. |

## References

- [`:help CTRL-]`](https://vimhelp.org/tagsrch.txt.html#CTRL-%5D) - tag jump for the identifier under the cursor.
- [`:help :tag`](https://vimhelp.org/tagsrch.txt.html#%3Atag) - underlying tag-jump command behavior.
- [Neovim help: `CTRL-]`](https://neovim.io/doc/user/tagsrch.html#CTRL-%5D) - Neovim's tag jump documentation.
