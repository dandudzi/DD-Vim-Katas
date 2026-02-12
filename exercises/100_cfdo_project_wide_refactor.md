## Kata: `:cfdo` and `:cdo` — Project-wide refactoring via the quickfix list

### 1) What these commands do (short description)

After populating the quickfix list (see kata 084), you can run commands on every match:

- `:cdo {cmd}` — run `{cmd}` on **each quickfix entry** (each matching line)
- `:cfdo {cmd}` — run `{cmd}` on **each file** in the quickfix list (once per file)

The typical workflow:
1. Search across files with `:vimgrep` or `:grep`
2. Review matches in the quickfix list
3. Apply a change with `:cfdo` or `:cdo`
4. Save all files with `:cfdo update` or `:wa`

---

### 2) Setup

For these drills, use the exercises in this repository. You need multiple files with matching content.

---

### 3) Step-by-step drills

#### Drill A — The full pipeline: search → replace → save

Goal: rename a term across multiple files.

1. From the root of this repository, search for a common word:
   `:vimgrep /cursor/ exercises/*.md<Enter>`
2. Open the quickfix list to review: `:copen<Enter>`
3. Review the matches — these are all the places "cursor" appears
4. Run the replacement on every file:
   `:cfdo %s/cursor/caret/g | update<Enter>`
5. Every file containing "cursor" now has it replaced with "caret", and files are saved

Undo: revert with `git checkout -- exercises/` in your terminal.

#### Drill B — `:cdo` vs `:cfdo`

Understanding the difference:

- `:cdo s/old/new/` — runs the substitution once per **quickfix entry**. If a file has 3 matches, the substitution runs 3 times on that file (once per matching line).
- `:cfdo %s/old/new/g` — runs the substitution once per **file**. The `%s` ensures all matches in that file are replaced in one pass.

For substitutions, `:cfdo %s/...` is usually what you want — it's faster and cleaner.

1. Search: `:vimgrep /Vim/ exercises/*.md<Enter>`
2. Try `:cdo` approach: `:cdo s/Vim/NeoVim/<Enter>` — replaces one match per quickfix entry
3. Undo all: `:cfdo e!<Enter>` (reverts each file)
4. Try `:cfdo` approach: `:cfdo %s/Vim/NeoVim/g<Enter>` — replaces all matches in each file at once

#### Drill C — Delete lines matching a pattern

Goal: remove all lines containing a word across files.

1. Search: `:vimgrep /TODO/ exercises/*.md<Enter>`
2. Delete each matching line: `:cdo delete<Enter>`
3. Save: `:cfdo update<Enter>`

#### Drill D — Add text to matching lines

Goal: add a comment to every line that matches.

1. Search: `:vimgrep /function/ exercises/*.md<Enter>`
2. Append a comment: `:cdo s/$/ \/\/ reviewed/<Enter>`
3. Save: `:cfdo update<Enter>`

#### Drill E — Use `:grep` for faster searching

`:vimgrep` is pure Vimscript; `:grep` uses your system's grep (or ripgrep if configured):

1. Set up ripgrep (if available): `:set grepprg=rg\ --vimgrep<Enter>`
2. Search: `:grep "pattern" exercises/<Enter>`
3. Results populate the quickfix list, same as `:vimgrep`
4. Apply changes: `:cfdo %s/pattern/replacement/g | update<Enter>`

---

### Command reference

| Command | Effect |
|---|---|
| `:vimgrep /pat/ files` | Search files, populate quickfix list |
| `:grep "pat" dir/` | Search with external grep, populate quickfix |
| `:cdo {cmd}` | Run `{cmd}` on each quickfix entry (each line) |
| `:cfdo {cmd}` | Run `{cmd}` on each quickfix file (once per file) |
| `:cfdo %s/old/new/g \| update` | Replace in all files and save |
| `:cfdo e!` | Revert all quickfix files to last save |
| `:wa` | Save all modified buffers |
