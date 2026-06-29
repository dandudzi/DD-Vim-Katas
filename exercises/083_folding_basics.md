# Kata: Folding Basics

## Task

Practice creating manual folds and opening, closing, toggling, and restoring them.

## Start

Open a scratch buffer and insert:

```text
class OrderProcessor:
    def validate_order(self, order):
        if not order.items:
            raise ValueError("Empty order")
        return True

    def calculate_total(self, order):
        subtotal = sum(item.price for item in order.items)
        tax = subtotal * 0.08
        return subtotal + tax

    def process(self, order):
        self.validate_order(order)
        return self.calculate_total(order)
```

Start in Normal mode on the `d` in `def validate_order`.

## End

The buffer text should be unchanged, and all manual folds should be open.

```text
class OrderProcessor:
    def validate_order(self, order):
        if not order.items:
            raise ValueError("Empty order")
        return True

    def calculate_total(self, order):
        subtotal = sum(item.price for item in order.items)
        tax = subtotal * 0.08
        return subtotal + tax

    def process(self, order):
        self.validate_order(order)
        return self.calculate_total(order)
```

## Commands

Run these command steps:

```text
1. :setlocal foldmethod=manual<CR>
2. zfap
3. /calculate_total<CR>
4. zfap
5. zo
6. zc
7. za
8. zM
9. zR
```
