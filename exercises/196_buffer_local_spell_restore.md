# Kata: Buffer-Local Spell Restore

## Task

Practice enabling buffer-local spelling, jumping to a misspelling, and restoring the previous local spell options.

## Start

Open a scratch buffer and insert:

```text
The final line is fine.
Teh final line is misspelled.
```

Start in Normal mode on the `T` in `The` on line 1.

## End

The buffer should become:

```text
The final line is fine.
Teh final line is misspelled.
```

## Commands

Run these command steps:

```text
1. :let b:kata_196_spell=&l:spell | let b:kata_196_spelllang=&l:spelllang<CR>
2. :setlocal spell spelllang=en<CR>
3. gg
4. ]s
5. :echo expand('<cword>')<CR>
6. :let &l:spell=b:kata_196_spell | let &l:spelllang=b:kata_196_spelllang<CR>
7. :echo &l:spell == b:kata_196_spell && &l:spelllang ==# b:kata_196_spelllang<CR>
```
