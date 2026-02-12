# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A collection of Vim/Neovim practice exercises (katas) based on the book *Practical Vim*. There is no build system, no tests, and no application code. The repo is purely educational — markdown files containing step-by-step Vim drills.

## Structure

- `exercises/` — Numbered markdown files (001–076), each a self-contained Vim kata with instructions and sample text to practice on. Some exercises reference files in `ruby_module/`.
- `ruby_module/` — Small Ruby sample files used as practice targets by certain exercises.

## Exercise Naming Convention

Files follow the pattern `NNN_short_description.md`. Numbers are zero-padded to three digits. When adding new exercises, use the next available number.

## Content Conventions

Each exercise markdown file typically contains:
- A heading describing the Vim technique
- The key sequence(s) to practice
- "Before" and "after" code blocks showing the expected transformation
- Some newer exercises (e.g., 076) use a drill-based format with multiple practice scenarios
