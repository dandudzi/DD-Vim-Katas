# Kata: Traverse the Jump List

## Task

Practice moving backward and forward through jump-list entries with `<C-o>` and `<C-i>`.

## Start

Open a scratch buffer and insert:

```text
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
```

Start in Normal mode on line 1, column 1.

## End

The buffer should become:

```text
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
```

The cursor should finish on line 10.

## Commands

Run these command steps:

```text
1. :10<CR>
2. :25<CR>
3. :40<CR>
4. <C-o>
5. <C-o>
6. <C-o>
7. <C-i>
8. <C-i>
9. <C-i>
10. 2<C-o>
```
