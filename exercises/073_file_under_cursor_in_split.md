# Kata: File Under Cursor in Split

## Task

Practice opening the file under the cursor in a split with `<C-w>f`.

## Start

Open `practice_136_link.txt`. It contains:

```text
practice_136_split_target.txt
```

Start in Normal mode on the `p` in `practice_136_split_target.txt` at line 1, column 1.

## End

After opening and closing the split, one window should remain showing `practice_136_link.txt`.

`practice_136_split_target.txt` should remain unchanged:

```text
split target
opened with Ctrl-w f
```

## Commands

Run these command steps:

```text
1. :edit practice_136_link.txt<CR>
2. <C-w>f
3. :close<CR>
```
