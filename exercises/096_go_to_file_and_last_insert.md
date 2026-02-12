## Kata: `gf`, `gi`, and `gD` — Go to file, last insert, and declaration

### 1) What these commands do (short description)

- `gf` — open the file whose path is under the cursor
- `gi` — jump to the last place you were in insert mode and re-enter insert mode
- `gD` — go to the first occurrence (global declaration) of the word under the cursor in the current file

These three `g`-prefixed commands make "edit, navigate, resume" workflows seamless.

---

### 2) Practice text (paste into a buffer)

```js
// File: utils/helpers.js
const { format } = require("./utils/format");
const config = require("../config/settings.json");

const MAX_RETRIES = 3;
const DEFAULT_TIMEOUT = 5000;

function fetchData(url) {
  const timeout = DEFAULT_TIMEOUT;
  for (let i = 0; i < MAX_RETRIES; i++) {
    const result = makeRequest(url, timeout);
    if (result.ok) return result.data;
  }
  return null;
}

function processData(raw) {
  const data = fetchData(raw.url);
  return format(data);
}
```

---

### 3) Step-by-step drills

#### Drill A — `gf` to open a file under cursor

Goal: navigate to a file referenced in code.

1. Place your cursor anywhere on `./utils/format` on line 2
2. Press `gf` — Vim tries to open that file path
3. If the file exists, you'll jump to it. Press `Ctrl-O` to jump back.

(For this drill, the file may not exist — that's fine. The point is learning the motion. In a real project, `gf` on import paths is a fast way to navigate.)

#### Drill B — `gf` with `suffixesadd`

If `gf` fails because the file extension is missing:

1. Run `:set suffixesadd+=.js,.ts,.json`
2. Now place cursor on `./utils/format` and press `gf`
3. Vim will try `./utils/format.js`, `./utils/format.ts`, etc.

#### Drill C — `gi` to resume editing

Goal: edit in one place, navigate away, then resume where you left off.

1. Go to line 8 (`function fetchData`), press `A` to append, type ` // needs retry logic`
2. Press `<Esc>` to return to normal mode
3. Navigate elsewhere: `gg` to go to the top, browse around
4. Press `gi` — cursor jumps back to the end of line 8 and enters insert mode
5. Continue typing right where you left off
6. Press `<Esc>`

#### Drill D — `gi` after multiple insert positions

1. Go to line 5, press `A`, type ` // max`, press `<Esc>`
2. Go to line 6, press `A`, type ` // ms`, press `<Esc>`
3. Navigate to the bottom of the file
4. Press `gi` — you return to line 6 (the last insert position)

`gi` always goes to the most recent insert location.

#### Drill E — `gD` to find a declaration

Goal: jump to where a variable is defined.

1. Place cursor on `DEFAULT_TIMEOUT` on line 9 (inside the function)
2. Press `gD` — cursor jumps to line 6 where `DEFAULT_TIMEOUT` is declared
3. Place cursor on `MAX_RETRIES` on line 10
4. Press `gD` — cursor jumps to line 5

Compare: `gd` searches for a local declaration (nearest enclosing block), `gD` searches from the top of the file.

---

### Command reference

| Command | Effect |
|---|---|
| `gf` | Open file under cursor |
| `gF` | Open file under cursor, jump to line number after filename |
| `gi` | Go to last insert position and enter insert mode |
| `gd` | Go to local declaration of word under cursor |
| `gD` | Go to global declaration of word under cursor |
| `Ctrl-O` | Jump back (after `gf` or `gD`) |
