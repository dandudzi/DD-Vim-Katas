# Kata: Command-Line Window

## Task

Practice reopening command and search history in the command-line window, editing
an old entry, and running it again.

## Start

Open a scratch buffer and insert:

```text
The quick brown fox jumps over the lazy dog.
The quick red fox jumps over the sleepy dog.
The slow brown cat crawls under the lazy dog.
```

Start in Normal mode on line 1, column 1.

## End

The buffer should become:

```text
The quick brown wolf jumps over the lazy cat.
The quick red fox jumps over the sleepy dog.
The slow brown cat crawls under the lazy dog.
```

## Commands

Run these command steps:

```text
1. /quick<CR>
2. /brown<CR>
3. :s/dog/cat/<CR>
4. :s/fox/bear/<CR>
5. u
6. q:
7. 2f/ci/wolf<Esc><CR>
8. q/
9. <CR>
```
