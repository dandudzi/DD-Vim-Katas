# Kata: Filter Text Through a Shell Command

## Task

Practice sorting a Visual selection through a direct shell filter.

## Start

Open a scratch buffer and insert:

```text
first name, last name, email
john,smith,john@example.com
drew,neil,drew@vimcast.org
jane,doe,jane@example.com
```

Start in Normal mode on the `f` in line 1.

## End

The buffer should become:

```text
first name, last name, email
jane,doe,jane@example.com
drew,neil,drew@vimcast.org
john,smith,john@example.com
```

## Commands

Run these command steps:

```text
1. jV2j
2. !sort -t',' -k2<CR>
```

