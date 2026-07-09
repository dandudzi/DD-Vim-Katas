# Kata: Jump to Unmatched Brackets

## Task

Practice `]}`, `[{`, `])`, and `[(` to jump between enclosing block
boundaries from inside nested code.

## Start

Open a scratch buffer and insert:

```text
int main() {
    if (argc > 1) {
        for (int i = 0; i < argc; i++) {
            if (strcmp(argv[i], "--help") == 0) {
                result = calculate(
                    getValue(
                        parseInput(raw_data)
                    )
                );
            }
        }
    }
}
```

Start in Normal mode on line 7, column 36, on the `r` in `raw_data`.

## End

The buffer should become:

```text
int main() {
    if (argc > 1) {
        for (int i = 0; i < argc; i++) {
            if (strcmp(argv[i], "--help") == 0) {
                result = calculate(
                    getValue(
                        parseInput(raw_data)
                    )
                );
                return;
            }
        }
    }
}
```

## Commands

Run these command steps:

```text
1. ])
2. [(
3. /raw_data<CR>
4. ]}
5. [{
6. ]}
7. Oreturn;<Esc>
```
