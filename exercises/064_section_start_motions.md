# Kata: Section Start Motions

## Task

Practice jumping between C-style section starts with `]]` and `[[`.

## Start

Open a scratch buffer and insert:

```text
practice_126_section_starts.c
```

Start in Normal mode on the `p` in line 1.

## End

The practice file should remain unchanged, and its split should be closed.

## Commands

Run these command steps:

```text
1. <leader>|
2. gf
3. gg0
4. ]]
5. ]]
6. [[
7. ]]
8. ]]
9. <leader>wd
```

