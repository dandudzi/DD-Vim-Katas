# Kata: Search Literal Text Safely

## Task

Practice searching literal strings that contain regex metacharacters and active search delimiters.

## Start

Open a scratch buffer and insert:

```text
Search: http://vimdoc.net/search?q=/\\
Other:  http://vimdoc.net/searchXq=/\\
Literal: price[0].value* + tax?
```

Start in Normal mode on the `S` in line 1, column 1.

## End

The buffer should remain:

```text
Search: http://vimdoc.net/search?q=/\\
Other:  http://vimdoc.net/searchXq=/\\
Literal: price[0].value* + tax?
```

The final Visual selection should cover `price[0].value* + tax?`.

## Commands

Run these command steps:

```text
1. /\Vhttp:\/\/vimdoc.net\/search?q=\/\\\\<CR>
2. G$?\Vhttp://vimdoc.net/search\?q=/\\\\<CR>
3. /\Vprice[0].value* + tax?<CR>gn
```
