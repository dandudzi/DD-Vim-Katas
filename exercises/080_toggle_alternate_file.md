# Kata: Toggle Between Alternate Files

## Task

Practice switching between the current and alternate file with `<C-^>` and `:edit #`.

## Start

Prepare `alpha.txt` with:

```text
alpha
```

Prepare `beta.txt` with:

```text
beta
```

Make `beta.txt` the current buffer with `alpha.txt` as the alternate buffer. Start in Normal mode on the `b` in `beta`.

## End

The current buffer should be `beta.txt`, the alternate buffer should be `alpha.txt`, and the visible buffer text should be:

```text
beta
```

## Commands

Run these command steps:

```text
1. <C-^>
2. <C-^>
3. :edit #<CR>
4. :edit #<CR>
```
