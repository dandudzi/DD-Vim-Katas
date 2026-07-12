# Kata Review Tracker

## Ex Command Tables

- File-first current occurrences: [`KATA_EX_COMMAND_OCCURRENCES.md`](KATA_EX_COMMAND_OCCURRENCES.md)
- Function-first replacement index: [`KATA_EX_FUNCTION_INDEX.md`](KATA_EX_FUNCTION_INDEX.md)

## Agent Rule

- Typed Ex commands are accepted only for substitution or direct shell execution and filtering.
- Prefer native Vim keys or installed LazyVim mappings for all other command-line functionality.
- Keep setup and fixture preparation in `Start`, never in `Commands`.
- If a kata opens an existing practice file, put its filename in `Start`, use `<leader>|` and `gf`, then close the practice split with `<leader>wd`.

## Review Result

The Ex-command cleanup is complete.

- Rewritten: 42 non-accepted occurrences now use native Vim keys, installed LazyVim mappings, or prepared state.
- Deleted: 6 katas whose core function had no honest key-based workflow.
- Preserved: all substitution and direct shell-filter katas.
- Numbering: 123 numbered katas, continuous from `001` through `123`.

Deleted concepts:

- Quickfix history with `:colder` and `:cnewer`.
- Importing shell output into quickfix with `:cexpr`.
- Parsing the current buffer into quickfix with `:cgetbuffer`.
- Populating quickfix with `:make`.
- Running one Ex command across all buffers with `:bufdo`.
- Repeating the last Ex command with `@:`.

## To Delete

None.

## To Fix

None.

## To Analyze

None.

