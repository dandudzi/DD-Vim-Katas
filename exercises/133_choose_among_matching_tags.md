# Kata: Choose Among Matching Tags

> **Environment:** Vim or Neovim with a local tags file.
> **Dependencies:** A `ctags` executable in `$PATH`.
> **Portability:** `g]` is built in. BSD `ctags` keeps only one duplicate tag name, so this setup appends extra duplicate-tag lines to the generated tags file on purpose.

## Objective

By the end of this kata, you will be able to list matching tags with `g]` and choose the one you want by number.

Success means: when several tags share the same name, you can disambiguate them from the selection list instead of jumping blindly to the first match.

## Prerequisites

- Know: basic tag jumping with `<C-]>`.
- Required option/state: `'tags'` must point at the local practice tags file.
- Required external tool/plugin: `ctags`.
- Readiness check: run `:echo executable('ctags')` and confirm it prints `1`.

## Setup

1. Reset the practice directory with `:call delete('/tmp/vim-kata-133', 'rf')`.
2. Create it with `:call mkdir('/tmp/vim-kata-133', 'p')`.
3. Create `/tmp/vim-kata-133/main.c`:
   `:call writefile(['int normalize(void);', 'int sanitize(void);', '', 'int main(void)', '{', '    return normalize() + sanitize();', '}'], '/tmp/vim-kata-133/main.c')`
4. Create `/tmp/vim-kata-133/alpha.c`:
   `:call writefile(['int normalize(void)', '{', '    return 1;', '}', '', 'int sanitize(void)', '{', '    return 10;', '}'], '/tmp/vim-kata-133/alpha.c')`
5. Create `/tmp/vim-kata-133/beta.c`:
   `:call writefile(['int normalize(void)', '{', '    return 2;', '}', '', 'int sanitize(void)', '{', '    return 20;', '}'], '/tmp/vim-kata-133/beta.c')`
6. Generate the base tags file with `:silent !ctags -f /tmp/vim-kata-133/tags /tmp/vim-kata-133/main.c /tmp/vim-kata-133/alpha.c /tmp/vim-kata-133/beta.c >/dev/null 2>&1`.
7. Append the second duplicate entries that BSD `ctags` omits:
   `:call writefile(["normalize\t/tmp/vim-kata-133/beta.c\t/^int normalize(void)$/", "sanitize\t/tmp/vim-kata-133/beta.c\t/^int sanitize(void)$/"], '/tmp/vim-kata-133/tags', 'a')`
8. Point Vim at that tags file with `:set tags=/tmp/vim-kata-133/tags`.
9. Open the caller with `:edit /tmp/vim-kata-133/main.c`.
10. Put the cursor on the `n` in `normalize()` on line 6, column 12.
11. Confirm `:echo expand('%:t') line('.') col('.')` prints `main.c 6 12`.

## Initial Fixture

The setup creates one caller and two files that each contain `normalize()` and `sanitize()`:

`/tmp/vim-kata-133/main.c`

```c
int normalize(void);
int sanitize(void);

int main(void)
{
    return normalize() + sanitize();
}
```

Start in Normal mode in `main.c` on `normalize()` at line 6, column 12. Do not edit any file before beginning Drill A.

## Constraints

- Use `g]` to produce the selection list in every drill.
- Choose the target by typing its list number and pressing `<CR>`.
- Do not use `<C-]>`, `:tag {count}`, `:tselect`, search, or the mouse.
- Reset to the documented start state before each drill.

## Tasks

### Drill A - Isolate the skill

**Goal:** choose the first of two matching tags.

1. From `normalize()` in `main.c`, open the matching-tag list.
2. Choose entry `1`.

**Verify:** the current buffer is `alpha.c`, the cursor is on line 1, column 1, and `:echo expand('%:t') line('.') col('.') getline('.')` prints `alpha.c 1 1 int normalize(void)`.

### Drill B - Add precision or repetition

**Goal:** choose the other match for the same tag name.

1. Reset to the documented start state.
2. Open the matching-tag list for `normalize()`.
3. Choose entry `2`.

**Verify:** the current buffer is `beta.c`, the cursor is on line 1, column 1, and `:echo expand('%:t') line('.') col('.') getline('.')` prints `beta.c 1 1 int normalize(void)`.

### Drill C - Apply the workflow

**Goal:** disambiguate a second duplicated symbol in the same caller.

1. Reset to the documented start state.
2. Put the cursor on the `s` in `sanitize()` on line 6, column 26.
3. Open the matching-tag list.
4. Choose entry `2`.

**Verify:** the current buffer is `beta.c`, the cursor is on line 6, column 1, and `:echo expand('%:t') line('.') col('.') getline('.')` prints `beta.c 6 1 int sanitize(void)`.

### Challenge - Recall without prompts

Reset the fixture. Starting in `main.c`, choose the `beta.c` definition for `normalize()` without using the first-match jump.

**Verify:** you finish in `beta.c` on line 1, column 1, and `:echo expand('%:t') line('.') col('.')` prints `beta.c 1 1`.

## Expected Final State

After the challenge, verify all of the following:

- The current buffer is `/tmp/vim-kata-133/beta.c`.
- The cursor is on the `i` in `int normalize(void)` at line 1, column 1.
- `:echo expand('%:t') line('.') col('.')` prints `beta.c 1 1`.
- None of the practice files were edited.

## Hints

<details>
<summary>Hint 1</summary>

This command behaves like a tag jump, but it stops first and lets you choose from a numbered list.

</details>

<details>
<summary>Hint 2</summary>

After `g]` prints the list, type the entry number immediately and press `<CR>`.

</details>

## Solution

<details>
<summary>Show exact commands and keys</summary>

### Drill A

1. `g]1<CR>` - show matching `normalize` tags and choose `alpha.c`.

### Drill B

1. `g]2<CR>` - show matching `normalize` tags and choose `beta.c`.

### Drill C

1. `6G26|` - place the cursor on `sanitize()`.
2. `g]2<CR>` - show matching `sanitize` tags and choose `beta.c`.

### Challenge

`g]2<CR>`

`g]` opens the tag-choice list for the identifier under the cursor. Entry `2` lands on the second matching definition in `beta.c`.

</details>

## Reset and Cleanup

- Between drills: rerun the Setup steps so the files and tags file are rebuilt from scratch.
- After the kata: close practice buffers with `:bd!` and remove the temporary directory with `:call delete('/tmp/vim-kata-133', 'rf')`.
- Preserve user data: all files live under `/tmp/vim-kata-133`.

## Notes and Portability

- Built-in behavior: `g]` is standard in Vim and Neovim.
- Duplicate-tag detail: on BSD `ctags`, duplicate names are not all emitted automatically, so this kata appends the missing lines itself for deterministic results.
- Selection order: this kata relies on the appended tag lines making `alpha.c` entry `1` and `beta.c` entry `2`.
- LazyVim/LSP contrast: references, definitions, implementations, and type definitions can be offered by picker-style UI, quickfix, or Trouble depending on configuration. Use `:LspInfo` and capability checks before treating those lists as equivalent to tag selection.

## Command Reference

| Keys/command | Mode | Effect |
|---|---|---|
| `g]` | Normal | List matching tags for the identifier under the cursor and prompt for a choice. |
| `g]2<CR>` | Normal | Open the matching-tag list and choose entry `2`. |
| `:set tags=/tmp/vim-kata-133/tags` | Command-line | Use the local practice tags file for tag lookups. |

## References

- [`:help g]`](https://vimhelp.org/tagsrch.txt.html#g%5D) - select from matching tags with the current identifier.
- [`:help :tselect`](https://vimhelp.org/tagsrch.txt.html#%3Atselect) - underlying list-and-choose tag command.
- [Neovim help: `g]`](https://neovim.io/doc/user/tagsrch.html#g%5D) - Neovim's matching-tag selection documentation.
