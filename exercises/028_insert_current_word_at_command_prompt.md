# Kata: Insert the Current Word on the Command Line

## Task

Practice using `<C-r><C-w>` on the command line to reuse the word under the
cursor in a substitution.

## Start

Open a scratch buffer and insert:

```text
let country;
for (country = 1; country <= 10; country++) {
  console.log(country);
}
```

Start in Normal mode on the `c` of `country` on line 1.

## End

The buffer should become:

```text
let counter;
for (counter = 1; counter <= 10; counter++) {
  console.log(counter);
}
```

## Commands

Run these command steps:

```text
1. *
2. ciwcounter<Esc>
3. :%s//<C-r><C-w>/g<CR>
```
