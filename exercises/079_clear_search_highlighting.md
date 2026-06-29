# Kata: Clear Search Highlighting

## Task

Practice clearing highlighted search matches with `:nohlsearch` while leaving search highlighting enabled for the next search.

## Start

Open a scratch buffer and insert:

```text
class UserService
  def find_user(id)
    user = User.find(id)
    log("Found user: #{user.name}")
    user
  end

  def update_user(id, attrs)
    user = find_user(id)
    user.update(attrs)
    log("Updated user: #{user.name}")
    user
  end

  def delete_user(id)
    user = find_user(id)
    user.destroy
    log("Deleted user: #{user.name}")
  end
end
```

Start in Normal mode on the `c` in `class`.

## End

The buffer should remain:

```text
class UserService
  def find_user(id)
    user = User.find(id)
    log("Found user: #{user.name}")
    user
  end

  def update_user(id, attrs)
    user = find_user(id)
    user.update(attrs)
    log("Updated user: #{user.name}")
    user
  end

  def delete_user(id)
    user = find_user(id)
    user.destroy
    log("Deleted user: #{user.name}")
  end
end
```

Search highlighting should be cleared after the final search.

## Commands

Run these command steps:

```text
1. :set hlsearch<CR>
2. /user<CR>
3. :nohlsearch<CR>
4. /find_user<CR>
5. n
6. :nohlsearch<CR>
7. /destroy<CR>
8. :nohlsearch<CR>
```
