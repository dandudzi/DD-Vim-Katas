# Kata: Run Global Commands on Matching Lines

## Task

Practice `:global` and `:vglobal` by deleting, copying, and editing lines selected by a pattern.

## Start

Open a scratch buffer and insert:

```text
// TODO: refactor this function
function fetchUsers() {
  console.log("fetching users...");
  const users = api.get("/users");
  console.log("result:", users);
  return users;
}

// TODO: add error handling
function fetchPosts(userId) {
  console.log("fetching posts...");
  const posts = api.get(`/users/${userId}/posts`);
  console.log("result:", posts);
  // TODO: cache the result
  return posts;
}
```

Start in Normal mode on the first `/` in the first line.

## End

The buffer should become:

```text
// TODO: refactor this function
function fetchUsers() {
  const users = api.get("/users");
  // return users;
}

// TODO: add error handling
function fetchPosts(userId) {
  const posts = api.get(`/users/${userId}/posts`);
  // TODO: cache the result
  // return posts;
}
// TODO: refactor this function
// TODO: add error handling
  // TODO: cache the result
```

## Commands

Run these command steps:

```text
1. :g/console\.log/d<CR>
2. :g/TODO/t$<CR>
3. :vglobal/TODO/s/^  \(return .*\)$/  \/\/ \1/<CR>
```
