# Kata: Replace Search Matches with cgn

## Task

Practice changing search matches with `cgn` and repeating the change with `.`.

## Start

Open a scratch buffer and insert:

```text
old_value = get_old_value()
print(old_value)
return old_value
```

Start in Normal mode on the `o` in the first `old_value`.

## End

The buffer should become:

```text
new_result = get_new_result()
print(new_result)
return new_result
```

## Commands

Run these command steps:

```text
1. /old_value<CR>
2. cgnnew_result<Esc>
3. .
4. .
5. .
```
