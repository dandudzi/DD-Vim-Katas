# Kata: Count Matches Without Editing

## Task

Use the substitute `n` flag to count matches without changing the buffer.

## Start

Open a scratch buffer and insert:

```text
time TIME timeout
time after time
no match here
timekeeper time
```

Start in Normal mode on the `t` in the first `time`.

## End

The buffer should remain:

```text
time TIME timeout
time after time
no match here
timekeeper time
```

The count reports should be `6 matches on 3 lines`, then `4 matches on 3 lines`, then `3 matches on 2 lines`.

## Commands

Run these command steps:

```text
1. :%s/time//gn<CR>
2. :%s/\<time\>//gn<CR>
3. :1,2s/\<time\>//gn<CR>
```
