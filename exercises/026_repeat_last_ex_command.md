# Kata: Repeat the Last Ex Command

## Task

Practice replaying the latest Ex command with `@:` and repeating that replay
with `@@`.

## Start

Open an empty scratch buffer.

Start in Normal mode on line 1, column 1.

## End

The current buffer should be `kata-one`.

## Commands

Run these command steps:

```text
1. :enew<CR>:file kata-one<CR>
2. :enew<CR>:file kata-two<CR>
3. :enew<CR>:file kata-three<CR>
4. :buffer kata-one<CR>
5. :bnext<CR>
6. @:
7. @@
```
