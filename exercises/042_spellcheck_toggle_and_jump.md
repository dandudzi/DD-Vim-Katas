# Kata: Toggle Spell Checking and Jump Between Misspellings

## Task

Practice LazyVim's spelling toggle, native misspelling jumps, corrections, and a buffer-local accepted word.

## Start

Open a scratch buffer and insert:

```text
The deploymant is schedueld for Wednesday.
Please reivew the release notes.
Codexium is the internal project name.
```

Start in Normal mode at the end of line 3.

## End

The buffer should become:

```text
The deployment is scheduled for Wednesday.
Please review the release notes.
Codexium is the internal project name.
```

## Commands

Run these command steps:

```text
1. <leader>us
2. ]sciwdeployment<Esc>
3. ]sciwscheduled<Esc>
4. ]sciwreview<Esc>
5. /Codexium<CR>zG
```

