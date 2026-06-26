# Kata: Return Through the Tag Stack

> **Environment:** Vim or Neovim with a local tags file.
> **Dependencies:** A `ctags` executable in `$PATH`.
> **Portability:** `<C-t>` is built in. This kata assumes the default `tagstack` option remains enabled.

## Objective

By the end of this kata, you will be able to return to older tag locations with `<C-t>`.

Success means: after following one or more tag jumps, you can pop back to the exact earlier call site instead of reopening files and relocating the cursor by hand.

## Prerequisites

- Know: how to jump to a tag definition with `<C-]>`.
- Required option/state: `tagstack`.
- Required external tool/plugin: `ctags`.
- Readiness check: run `:set tagstack?` and confirm it prints `tagstack`.

## Setup

1. Reset the practice directory with `:call delete('/tmp/vim-kata-132', 'rf')`.
2. Create it with `:call mkdir('/tmp/vim-kata-132', 'p')`.
3. Create `/tmp/vim-kata-132/main.c`:
   `:call writefile(['int build_report(void);', '', 'int main(void)', '{', '    return build_report();', '}'], '/tmp/vim-kata-132/main.c')`
4. Create `/tmp/vim-kata-132/report.c`:
   `:call writefile(['int format_total(void);', '', 'int build_report(void)', '{', '    return format_total();', '}'], '/tmp/vim-kata-132/report.c')`
5. Create `/tmp/vim-kata-132/format.c`:
   `:call writefile(['int format_total(void)', '{', '    return 7;', '}'], '/tmp/vim-kata-132/format.c')`
6. Generate tags with `:silent !ctags -f /tmp/vim-kata-132/tags /tmp/vim-kata-132/main.c /tmp/vim-kata-132/report.c /tmp/vim-kata-132/format.c`.
7. Point Vim at that tags file with `:set tags=/tmp/vim-kata-132/tags`.
8. Open the caller with `:edit /tmp/vim-kata-132/main.c`.
9. Put the cursor on the `b` in `build_report()` on line 5, column 12.
10. Confirm `:echo expand('%:t') line('.') col('.')` prints `main.c 5 12`.

## Initial Fixture

The setup creates the same three-file call chain used in the previous kata:

- `main.c` calls `build_report()`.
- `report.c` defines `build_report()` and calls `format_total()`.
- `format.c` defines `format_total()`.

Start in Normal mode in `main.c` on `build_report()` at line 5, column 12. Do not edit any file before beginning Drill A.

## Constraints

- Use `<C-t>` for the return step in every drill.
- Use `<C-]>` only to create the tag-stack entries that you will pop.
- Do not use `<C-o>`, `<C-i>`, `'`, `` ` ``, `:pop`, or the mouse.
- Reset to the documented start state before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** return from one tag jump to its exact origin.

1. Jump from `main.c` to the definition of `build_report`.
2. Return to the older tag-stack entry.

**Verify:** the current buffer is `main.c`, the cursor is back on line 5, column 12, and `:echo expand('%:t') line('.') col('.') getline('.')` prints `main.c 5 12     return build_report();`.

### Drill B - Add precision or repetition

**Goal:** pop back one level from a deeper tag jump.

1. Reset to the documented start state.
2. Jump to `build_report`.
3. In `report.c`, put the cursor on the `f` in `format_total()` on line 5, column 12.
4. Jump to `format_total`.
5. Return one older tag-stack entry.

**Verify:** the current buffer is `report.c`, the cursor is on line 5, column 12, and `:echo expand('%:t') line('.') col('.') getline('.')` prints `report.c 5 12     return format_total();`.

### Drill C - Apply the workflow

**Goal:** pop back multiple tag levels with one counted command.

1. Reset to the documented start state.
2. Jump to `build_report`.
3. In `report.c`, put the cursor on the `f` in `format_total()` on line 5, column 12.
4. Jump to `format_total`.
5. Return directly to `main.c` with one counted tag-stack pop.

**Verify:** the current buffer is `main.c`, the cursor is on line 5, column 12, and the practice files are unchanged.

### Challenge - Recall without prompts

Reset the fixture. Follow the call chain from `main.c` to `format.c`, then return all the way to the original call site with one counted pop.

**Verify:** you finish in `main.c` at line 5, column 12, and `:echo expand('%:t') line('.') col('.')` prints `main.c 5 12`.

## Expected Final State

After the challenge, verify all of the following:

- The current buffer is `/tmp/vim-kata-132/main.c`.
- The cursor is on the `b` in `build_report()` at line 5, column 12.
- `:echo expand('%:t') line('.') col('.')` prints `main.c 5 12`.
- None of the practice files were edited.

## Hints

<details>
<summary>Hint 1</summary>

Every `<C-]>` push gives `<C-t>` one more place to return to.

</details>

<details>
<summary>Hint 2</summary>

`<C-t>` accepts a count. If you followed two tag jumps, one counted pop can return straight to the original caller.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `<C-]>` - jump to `build_report`.
2. `<C-t>` - pop back to the exact origin in `main.c`.

### Drill B

1. `<C-]>` - jump from `main.c` to `report.c`.
2. `5G12|` - place the cursor on `format_total()`.
3. `<C-]>` - jump to `format.c`.
4. `<C-t>` - return one older entry to the `format_total()` call in `report.c`.

### Drill C

1. `<C-]>` - jump to `report.c`.
2. `5G12|` - place the cursor on `format_total()`.
3. `<C-]>` - jump to `format.c`.
4. `2<C-t>` - pop two older entries and return directly to `main.c`.

### Challenge

`<C-]>5G12|<C-]>2<C-t>`

The two tag jumps create two stack entries. The counted pop removes both and restores the original call site in one command.

</details>

## Reset and Cleanup

- Between drills: rerun the Setup steps so the files and tags file are rebuilt from scratch.
- After the kata: close practice buffers with `:bd!` and remove the temporary directory with `:call delete('/tmp/vim-kata-132', 'rf')`.
- Preserve user data: all files live under `/tmp/vim-kata-132`.

## Notes and Portability

- Built-in behavior: `<C-t>` is standard in Vim and Neovim.
- Option detail: when `notagstack` is set, tag jumps are not pushed for later return.
- Alternative: `:pop` is the Ex command form of the same older-entry jump, but this kata isolates the Normal-mode key.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `<C-]>` | Normal | Push the current location and jump to the tag definition. |
| `<C-t>` | Normal | Pop one older entry from the tag stack. |
| `{count}<C-t>` | Normal | Pop back by `count` older tag-stack entries. |

## References

- [`:help CTRL-T`](https://vimhelp.org/tagsrch.txt.html#CTRL-T) - return to an older tag-stack entry.
- [`:help tag-stack`](https://vimhelp.org/tagsrch.txt.html#tag-stack) - how Vim records tag jumps and returns.
- [Neovim help: `CTRL-T`](https://neovim.io/doc/user/tagsrch.html#CTRL-T) - Neovim's tag-stack pop documentation.
