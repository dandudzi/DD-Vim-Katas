# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A collection of 110 Vim/Neovim practice exercises ("katas") forked from `adomokos/Vim-Katas`. Each exercise is a standalone markdown file in `exercises/` that teaches a specific Vim skill through guided drills.

## Structure

- `exercises/` — Numbered markdown files (`001_` through `110_`), each covering one Vim concept (motions, text objects, macros, registers, visual mode, search, etc.)
- Some exercises reference companion practice files (e.g., `practice_076_practice_file.ts`)

## No Build/Test/Lint

This is a documentation-only repo. There are no dependencies, build steps, or test commands.

## Exercise Format

Each exercise markdown follows a pattern: title, description of the Vim command/technique, a "before" code block, expected keystrokes, and sometimes an "after" code block. When creating new exercises, follow the existing numbering convention (`NNN_snake_case_name.md`) and include concrete code examples with keystroke instructions.
