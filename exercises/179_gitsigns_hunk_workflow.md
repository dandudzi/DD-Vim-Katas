# Kata: Gitsigns Hunk Workflow

## Task

Practice navigating, previewing, staging, and resetting hunks with Gitsigns inside a temporary repository.

## Start

Open generated `config.txt` in a temporary Git repository with two changed hunks:

```text
line 2: alpha = 1 becomes alpha = 10
line 10: theta = 9 becomes theta = 90
```

Start in Normal mode on line 1, column 1.

## End

The observable final state should be:

```text
line 2 alpha hunk staged
line 10 theta hunk reset to theta = 9
no unstaged change remains in config.txt
```

## Commands

Run these command steps:

```text
1. :let g:kata_179_dir = tempname()<CR>
2. :call mkdir(g:kata_179_dir, 'p')<CR>
3. :call writefile(['title = base', 'alpha = 1', 'bravo = 2', 'charlie = 3', 'delta = 4', 'echo = 5', 'foxtrot = 6', 'golf = 7', 'hotel = 8', 'theta = 9', 'trailer = base'], g:kata_179_dir.'/config.txt')<CR>
4. :call system(['git', '-C', g:kata_179_dir, 'init'])<CR>
5. :call system(['git', '-C', g:kata_179_dir, 'config', 'core.fsmonitor', 'false'])<CR>
6. :call system(['git', '-C', g:kata_179_dir, 'config', 'commit.gpgsign', 'false'])<CR>
7. :call system(['git', '-C', g:kata_179_dir, 'config', 'tag.gpgsign', 'false'])<CR>
8. :call system(['git', '-C', g:kata_179_dir, 'config', 'user.email', 'kata@example.invalid'])<CR>
9. :call system(['git', '-C', g:kata_179_dir, 'config', 'user.name', 'Kata'])<CR>
10. :call system(['git', '-C', g:kata_179_dir, 'add', 'config.txt'])<CR>
11. :call system(['git', '-C', g:kata_179_dir, 'commit', '--no-gpg-sign', '-m', 'base'])<CR>
12. :call writefile(['title = base', 'alpha = 10', 'bravo = 2', 'charlie = 3', 'delta = 4', 'echo = 5', 'foxtrot = 6', 'golf = 7', 'hotel = 8', 'theta = 90', 'trailer = base'], g:kata_179_dir.'/config.txt')<CR>
13. :execute 'edit '.fnameescape(g:kata_179_dir.'/config.txt')<CR>
14. :echo exists(':Gitsigns')<CR>
15. :verbose nmap ]h<CR>
16. :verbose nmap [h<CR>
17. :Gitsigns next_hunk<CR>
18. :Gitsigns preview_hunk<CR>
19. 2G
20. :Gitsigns stage_hunk<CR>
21. 10G
22. :Gitsigns reset_hunk<CR>
23. :echo getline(10)<CR>
24. :echo system(['git', '-C', g:kata_179_dir, 'status', '--short'])<CR>
```
