# Kata: Set Match Boundaries

## Task

Practice using `\zs` and `\ze` to keep context in a search pattern while changing only the reported match.

## Start

Open a scratch buffer and insert:

```text
Practical Vim is a practical book.
id="alpha-17" id="beta-204"
```

Start in Normal mode on the `P` in line 1, column 1.

## End

The buffer should become:

```text
Practical Vim is a practical book.
id="ALPHA-17" id="BETA-204"
```

## Commands

Run these command steps:

```text
1. /Practical \zsVim<CR>gn<Esc>
2. gg/id="\zs[^"]\+\ze"<CR>gn<Esc>ngn<Esc>
3. gg/id="\zs[^"]\+\ze"<CR>gUgn
4. n.
```
