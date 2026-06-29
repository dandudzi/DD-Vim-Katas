# Kata: Jump to the File End and Join Lines

## Task

Practice using `G` and `gg` to jump between file edges, then use `J` to join a wrapped final entry.

## Start

Open a scratch buffer and insert:

```text
Release notes

Feature A is complete.
Feature B is pending.

Summary:
final review
scheduled tomorrow
```

Start in Normal mode on the `R` in `Release notes`.

## End

The buffer should become:

```text
Release notes

Feature A is complete.
Feature B is pending.

Summary:
final review scheduled tomorrow
```

## Commands

Run these command steps:

```text
1. G
2. gg
3. G
4. k
5. J
```
