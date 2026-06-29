# Kata: Diff Mode Basics

## Task

Practice opening a two-way diff, jumping between hunks, pulling one hunk, and pushing one hunk.

## Start

Open a scratch buffer and insert:

```text
function greet(name) {
  console.log("Hello, " + name);
  return true;
}

const defaultName = "World";
```

Start in Normal mode on the `f` in `function`.

## End

The left buffer should become:

```text
function greet(name) {
  console.log("Hi, " + name + "!");
  return true;
}

const defaultName = "World";
```

The right buffer should become:

```text
function greet(name) {
  console.log("Hi, " + name + "!");
  return true;
}

const defaultName = "World";
```

## Commands

Run these command steps:

```text
1. :let g:kata_089_dir = tempname() | call mkdir(g:kata_089_dir, 'p')<CR>
2. :call writefile(['function greet(name) {', '  console.log("Hello, " + name);', '  return true;', '}', '', 'const defaultName = "World";'], g:kata_089_dir . '/left.txt')<CR>
3. :call writefile(['function greet(name) {', '  console.log("Hi, " + name + "!");', '  return true;', '}', '', 'const defaultName = "User";'], g:kata_089_dir . '/right.txt')<CR>
4. :execute 'edit ' . fnameescape(g:kata_089_dir . '/left.txt')<CR>
5. :execute 'vertical diffsplit ' . fnameescape(g:kata_089_dir . '/right.txt')<CR>
6. <C-w>h
7. ]c
8. do
9. ]c
10. dp
11. :diffoff!<CR>
```
