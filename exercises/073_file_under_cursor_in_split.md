# Kata: File Under Cursor in a Split

## Task

Practice creating a LazyVim vertical split and opening the filename under the cursor with `gf`.

## Start

Open a scratch buffer and insert:

```text
practice_136_split_target.txt
```

Start in Normal mode on the `p` in line 1.

## End

One window should remain showing the scratch buffer, and the target file should remain unchanged.

## Commands

Run these command steps:

```text
1. <leader>|
2. gf
3. <leader>wd
```

