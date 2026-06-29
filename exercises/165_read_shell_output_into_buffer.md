# Kata: Read Shell Output into the Buffer

## Task

Practice inserting shell command output below chosen lines with `:read !{cmd}`.

## Start

Open a scratch buffer and insert:

```text
Title: Release Notes

Highlights:
- item one
```

Start in Normal mode on the blank line 2, column 1.

## End

The buffer should become:

```text
Title: Release Notes
generated-by: read-bang

build: 2026-06-24
status: draft
Highlights:
- item one
owner: kata
```

## Commands

Run these command steps:

```text
1. :1read !printf 'generated-by: read-bang\n'<CR>
2. :3read !printf 'build: 2026-06-24\nstatus: draft\n'<CR>
3. :$read !printf 'owner: kata\n'<CR>
```
