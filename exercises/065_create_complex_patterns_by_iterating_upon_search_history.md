# Kata: Refine a Pattern Through Search History

## Task

Refine a quoted-string search pattern through search history, then use the refined pattern to change double quotes to single quotes.

## Start

Open a scratch buffer and insert:

```text
This string contains a "quoted" word.
This string contains "two" quoted "words".
This "string doesn't make things easy".
```

Start in Normal mode on the `T` in the first `This`.

## End

The buffer should become:

```text
This string contains a 'quoted' word.
This string contains 'two' quoted 'words'.
This 'string doesn't make things easy'.
```

The current search pattern should be `\v"[^"]*"\C`.

## Commands

Run these command steps:

```text
1. /\v".*"<CR>
2. /<Up><C-u>\v"[^"]*"<CR>
3. q/kYpA\C<Esc><CR>
4. :%s/\v"([^"]*)"/'\1'/g<CR>
```
