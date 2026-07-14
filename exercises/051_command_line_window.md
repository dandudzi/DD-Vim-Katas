# Kata: Command-Line Window

## Task

Practice running `:substitute` on the current line and an explicit line range,
then editing and rerunning history in the command-line window.

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
The quick red wolf jumps over the sleepy hound.
The slow brown cat crawls under the lazy hound.
```

## Commands

Run these command steps:

```text
1. :s/dog/cat/<CR>
2. :2,3s/dog/hound/<CR>
3. /quick<CR>
4. /brown<CR>
5. j
6. :s/fox/bear/<CR>
7. u
8. q:
9. k02f/lct/wolf<Esc><CR>
10. q/
11. <CR>
```
