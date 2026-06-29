# Kata: Git Hunk Review

## Task

Practice reviewing two generated Git hunks with verified Gitsigns mappings without staging or resetting them.

## Start

In Neovim with Gitsigns available, run:

```text
:let g:kata_192_dir=tempname() | call mkdir(g:kata_192_dir, 'p')
:call writefile(['one', 'two', 'three', 'four'], g:kata_192_dir.'/demo.txt')
:call system(['git','-C',g:kata_192_dir,'init','-q'])
:call system(['git','-C',g:kata_192_dir,'add','demo.txt'])
:call system(['git','-C',g:kata_192_dir,'-c','user.name=Kata','-c','user.email=kata@example.invalid','commit','-qm','base'])
:call writefile(['ONE', 'two', 'three', 'FOUR'], g:kata_192_dir.'/demo.txt')
:execute 'lcd '.fnameescape(g:kata_192_dir) | edit demo.txt
```

Start in Normal mode on the `O` in `ONE`.

## End

The buffer should become:

```text
ONE
two
three
FOUR
```

## Commands

Run these command steps:

```text
1. :verbose nmap ]h<CR>
2. :verbose nmap [h<CR>
3. :verbose nmap <leader>ghp<CR>
4. ]h
5. :echo line('.')<CR>
6. <leader>ghp
7. [h
8. :echo line('.')<CR>
9. <leader>ghp
10. :echo system(['git','-C',g:kata_192_dir,'diff','--','demo.txt'])<CR>
```
