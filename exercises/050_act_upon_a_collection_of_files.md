# Kata: Act Upon a Collection of Files

## Task

Practice building an argument list and applying one Ex change across every argument with `:argdo`.

## Start

Open a scratch buffer and insert:

```text
alpha.rb
beta.rb
gamma.rb
```

Start in Normal mode on the `a` in `alpha.rb` on line 1.

## End

The first line of each argument file should become:

```text
class Alpha # kata
class Beta # kata
class Gamma # kata
```

## Commands

Run these command steps:

```text
1. :let g:kata_args_dir = tempname()<CR>
2. :call mkdir(g:kata_args_dir, 'p')<CR>
3. :let g:kata_alpha = g:kata_args_dir . '/alpha.rb'<CR>
4. :let g:kata_beta = g:kata_args_dir . '/beta.rb'<CR>
5. :let g:kata_gamma = g:kata_args_dir . '/gamma.rb'<CR>
6. :call writefile(['class Alpha', 'end'], g:kata_alpha)<CR>
7. :call writefile(['class Beta', 'end'], g:kata_beta)<CR>
8. :call writefile(['class Gamma', 'end'], g:kata_gamma)<CR>
9. :execute 'args ' . fnameescape(g:kata_alpha) . ' ' . fnameescape(g:kata_beta) . ' ' . fnameescape(g:kata_gamma)<CR>
10. :argdo 1s/$/ # kata/ | update<CR>
11. :first<CR>
12. :echo getline(1)<CR>
13. :next<CR>
14. :echo getline(1)<CR>
15. :next<CR>
16. :echo getline(1)<CR>
```
