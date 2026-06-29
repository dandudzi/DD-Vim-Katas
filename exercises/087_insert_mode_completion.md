# Kata: Insert-Mode Completion Basics

## Task

Practice using built-in Insert-mode completion to complete a word from text already in the buffer.

## Start

Open a scratch buffer and insert:

```text
customerId
customerName
customerEmail
discountCode

cus
```

Start in Insert mode after the `s` in `cus`.

## End

The buffer should become:

```text
customerId
customerName
customerEmail
discountCode

customerName
```

## Commands

Run these command steps:

```text
1. <C-n>
2. <C-n>
3. <C-y>
4. <Esc>
```
