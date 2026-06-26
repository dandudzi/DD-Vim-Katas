# LazyVim Kata Coverage Report

Checked against current LazyVim docs on 2026-06-26. Sources: [Keymaps](https://www.lazyvim.org/keymaps), [Core Plugins](https://www.lazyvim.org/plugins), [Coding](https://www.lazyvim.org/plugins/coding), [Editor](https://www.lazyvim.org/plugins/editor), [LSP](https://www.lazyvim.org/plugins/lsp), [Formatting](https://www.lazyvim.org/plugins/formatting), [Blink extra](https://www.lazyvim.org/extras/coding/blink), [Neotest extra](https://www.lazyvim.org/extras/test/core), [DAP extra](https://www.lazyvim.org/extras/dap/core).

## 1. Core LazyVim Plugin/Feature Areas

- **Discovery and command groups:** `which-key.nvim`; default `<leader>` is `<space>`, `<localleader>` is `\`.
- **Fast movement/search:** `flash.nvim` with `s`, `S`, operator-pending `r`, `R`; improved `/`, `n`, `N`.
- **Text editing helpers:** `mini.ai` text objects, `mini.pairs`, `ts-comments.nvim`, built-in `gc` commenting.
- **Project navigation:** buffers, windows, tabs, terminal, sessions via `persistence.nvim`; Snacks provides scratch, terminal, notifier, words, picker/explorer when enabled.
- **Treesitter:** highlighting, indent, folds, syntax-aware selections/text objects.
- **LSP/coding:** `nvim-lspconfig`, `mason.nvim`, diagnostics, definitions/references, code actions, rename, inlay hints.
- **Formatting/linting:** `conform.nvim`, `nvim-lint`; LazyVim format command wraps these.
- **Git:** `gitsigns.nvim`, LazyGit/Snacks git pickers when available, hunk text object `ih`.
- **Diagnostics lists:** built-in diagnostic jumps plus `trouble.nvim`.
- **Completion/snippets:** current LazyVim docs expose **Blink** as a recommended extra and `nvim-cmp` as an alternative; exact completion keys are engine-dependent. Blink defaults include Enter-style completion, `<C-y>` accept, and `<Tab>` snippet/AI fallback behavior.
- **Testing/debugging:** opt-in extras: `neotest` and `nvim-dap`.

## 2. Key Flows and Shortcuts to Teach

| Area | Keys / Concepts |
|---|---|
| Core Vim editing | counts + operators: `d`, `c`, `y`, `>`, `<`, `=`, `gu`, `gU`; motions: `w`, `b`, `e`, `ge`, `0`, `^`, `$`, `%`, `gg`, `G`, `{`, `}`; repeat with `.`; undo/redo `u`, `<C-r>` |
| Text objects | built-ins: `iw/aw`, `iW/aW`, `ip/ap`, quote/bracket objects; LazyVim `mini.ai`: function `if/af`, class `ic/ac`, block `io/ao`, call `iu/au`, buffer `ig/ag`, digit `id/ad` |
| Line/block editing | visual selections, `gv`, `J`, `gq`, macros `q`, registers `"`, marks `m`, jumps `<C-o>/<C-i>` |
| Comments | `gc` operator, `gcc` line comment, `gco` add comment below, `gcO` add comment above |
| Flash navigation | `s` jump, `S` Treesitter jump, operator-pending `r` remote flash, `R` Treesitter search |
| Search | `/`, `?`, `n`, `N`, `*`, `#`; project grep commonly `<leader>/`, `<leader>sg`; search word/selection `<leader>sw` if Snacks picker enabled |
| Files/buffers | `<S-h>/<S-l>` or `[b`/`]b`; `<leader>,` buffers; `<leader><space>` or `<leader>ff` find files; `<leader>fr` recent; `<leader>bd` delete buffer |
| Windows/tabs | `<C-h/j/k/l>` window focus; `<leader>-` split below; `<leader>\|` split right; `<leader>wd` close; `<leader><tab><tab>` new tab; `<leader><tab>[`/`]` previous/next tab |
| Terminal/session | `<C-/>` terminal; `<leader>ft` root terminal; `<leader>qs` restore session; `<leader>ql` restore last |
| LSP navigation | `gd` definition, `gr` references, `gI` implementation, `gy` type definition, `gD` declaration, `K` hover, `gK` signature help |
| LSP actions | `<leader>ca` code action, `<leader>cr` rename, `<leader>cR` rename file, `<leader>co` organize imports, `<leader>cl` LSP info |
| Diagnostics | `<leader>cd` line diagnostic, `[d`/`]d`, `[e`/`]e`, `[w`/`]w`; Trouble: `<leader>xx`, `<leader>xX`, `<leader>xq`, `<leader>xl` |
| Formatting/linting | `<leader>cf` format, `<leader>cF` format injected languages, `<leader>uf` toggle autoformat global, `<leader>uF` buffer |
| Git | `[h`/`]h` hunks, `<leader>ghs` stage hunk, `<leader>ghr` reset hunk, `<leader>ghp` preview hunk, `<leader>ghb` blame line, `ih` hunk text object |
| Git/project | `<leader>gs` git status, `<leader>gl` git log, `<leader>gb` blame line, `<leader>gg` LazyGit if installed |
| Completion/snippets | Teach conceptual flow: trigger completion, select item, accept, expand snippet, jump fields. Exact keys vary by Blink vs nvim-cmp; Blink docs show `<C-y>` accept and `<Tab>` for snippet/AI fallback. |
| Tests | Neotest extra: `<leader>tr` nearest, `<leader>tt` file, `<leader>tl` last, `<leader>to` output, `<leader>ts` summary, `<leader>td` debug nearest |
| Debugging | DAP extra: `<leader>db` breakpoint, `<leader>dc` continue, `<leader>di` step into, `<leader>dO` step over, `<leader>do` step out, `<leader>du` DAP UI |

## 3. Highest-Priority Kata Flows

1. **Operator + motion fluency:** every kata should reinforce `operator + text object/motion`, counts, repeat `.`.
2. **Text-object editing in real code:** change function args, delete call contents, select blocks/classes/functions with `mini.ai`.
3. **Search-to-edit loops:** `/`, `n/N`, `*`, `s` Flash jumps, then `c/d/y` operations.
4. **Project navigation:** find file, grep, jump to buffer, use quickfix/location/Trouble lists.
5. **LSP workflow:** go to definition, inspect hover, rename symbol, apply code action, organize imports.
6. **Diagnostics workflow:** create/fix lint or type errors, jump diagnostics, open list, format.
7. **Git hunk workflow:** edit code, jump hunks, preview, stage/reset hunk, use `ih`.
8. **Completion/snippet workflow:** accept completions, expand snippets, move through fields.
9. **Test/debug loop:** run nearest/file tests, inspect output, debug nearest when extras exist.

## 4. Compatibility Principles for Generic Vim Katas

- Keep the **Vim grammar** central: operators, motions, text objects, counts, registers, marks, macros, and repeat should work in stock Vim and LazyVim.
- Add LazyVim variants as optional hints, for example "stock Vim: `/pattern`; LazyVim: `s` with Flash".
- Mark plugin-dependent tasks clearly: `mini.ai`, Snacks picker/explorer, Blink, Neotest, DAP, LazyGit.
- Avoid hard-coding one completion engine. Teach completion concepts, then provide Blink/nvim-cmp notes where needed.
- Prefer `<leader>` descriptions over assuming remaps, but state LazyVim's default leader is `<space>`.
- For code katas, include small projects with LSP-friendly files so `gd`, `gr`, rename, diagnostics, and formatting are meaningful.
- Design fallbacks: if Trouble/Snacks/Neotest are unavailable, use quickfix/location lists, built-in diagnostics, or CLI test commands.
- Keep exercises deterministic: avoid relying on user-specific language extras unless the kata declares the required LazyVim extra.
