# Kata: Run One Command Across Buffers

## Task

Practice using `:bufdo` to run one Ex command across listed buffers.

## Start

Open an empty scratch buffer.

Start in Normal mode on line 1, column 1.

## End

Both named buffers should have `!` appended:

```text
kata-alpha: alpha!
kata-beta: beta!
```

## Commands

Run these command steps:

```text
1. :enew<CR>:file kata-alpha<CR>ialpha<Esc>
2. :enew<CR>:file kata-beta<CR>ibeta<Esc>
3. :set hidden<CR>
4. :bufdo %s/$/!/<CR>
5. :buffer kata-alpha<CR>
```
