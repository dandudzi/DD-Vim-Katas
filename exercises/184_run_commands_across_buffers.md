# Kata: Run Commands Across Buffers

## Task

Practice using `:bufdo` to run one guarded Ex command across a small set of
listed buffers.

## Start

Open an empty scratch buffer.

Start in Normal mode on line 1, column 1.

## End

The `kata-alpha` buffer should contain:

```text
alpha
!
```

The `kata-gamma` buffer should contain:

```text
gamma
!
```

## Commands

Run these command steps:

```text
1. :enew<CR>:file kata-alpha<CR>ialpha<Esc>:setlocal nomodified<CR>
2. :enew<CR>:file kata-gamma<CR>igamma<Esc>:setlocal nomodified<CR>
3. :buffer kata-alpha<CR>
4. :set hidden<CR>
5. :bufdo call append('$', bufname() =~# '^kata-' ? '!' : [])<CR>
```
