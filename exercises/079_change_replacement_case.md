# Kata: Change Replacement Case

## Task

Practice changing replacement text case during substitution. Uppercase log
levels without typing the uppercase words manually.

## Start

Open a scratch buffer and insert:

```text
warn: disk low
info: cache warm
summary: warn info debug
debug: retry queued
```

Start in Normal mode on the `w` in `warn` on line 1, column 1.

## End

The buffer should become:

```text
WARN: disk low
INFO: cache warm
summary: WARN INFO DEBUG
DEBUG: retry queued
```

## Commands

Run these command steps:

```text
1. :s/\<warn\>/\U&/<CR>
2. u
3. 3G:s/\<warn\|info\|debug\>/\U&/g<CR>
4. u
5. :%s/\<warn\|info\|debug\>/\U&/g<CR>
```
