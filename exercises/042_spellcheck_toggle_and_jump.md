# Kata: Toggle Spell Checking and Jump Between Misspellings

## Task

Practice enabling spell checking, jumping between misspelled words, correcting them, and accepting one project word.

## Start

Open a scratch buffer and insert:

The deploymant is schedueld for Wednesday.
Please reivew the release notes.
Codexium is the internal project name.

Start in Normal mode at the end of line 3.

## End

The buffer should become:

```text
The deployment is scheduled for Wednesday.
Please review the release notes.
Codexium is the internal project name.
```

`Codexium` should be accepted as a good word in this buffer.

## Commands

Run these command steps:

```text
1. :setlocal spell spelllang=en<CR>
2. ]sz=
3. ]sciwdeployment<Esc>
4. ]sciwscheduled<Esc>
5. ]sciwreview<Esc>
6. /Codexium<CR>zG
```
