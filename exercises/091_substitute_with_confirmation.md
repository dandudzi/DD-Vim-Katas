# Kata: Substitute with Confirmation

## Task

Practice using the `c` flag on `:substitute` to confirm or skip each replacement.

## Start

Open a scratch buffer and insert:

```text
const user = fetchUser(id);
logError("user not found");
return user;
```

Start in Normal mode on the `c` in `const`.

## End

The buffer should become:

```text
const account = fetchUser(id);
logError("user not found");
return account;
```

## Commands

Run these command steps:

```text
1. :%s/user/account/gc<CR>
2. y
3. n
4. y
```
