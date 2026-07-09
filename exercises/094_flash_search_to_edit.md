# Kata: Flash Search to Edit

## Task

Practice using Flash to jump to visible targets, then apply ordinary Vim edit commands at the landing point.

## Start

Open a scratch buffer and insert:

```text
const userName = "Ada";
const userEmail = "ada@example.com";
const retryCount = 3;

sendWelcomeEmail(userName, userEmail);
logMetric("welcome_email_sent", retryCount);
```

Start in Normal mode on the first `c` in `const`.

## End

The buffer should become:

```text
const userName = "Ada";
const userEmail = "ada@example.com";
const maxRetries = 5;

sendWelcomeEmail(userName, userEmail);
logMetric("welcome_email_delivered", retryCount);
```

## Commands

Run these command steps:

```text
1. :verbose nmap s<CR>
2. sretry{label for retryCount on line 3}
3. ciwmaxRetries<Esc>
4. swelcome{label for welcome_email_sent}
5. ci"welcome_email_delivered<Esc>
6. s3{label for 3 on line 3}
7. r5
```
