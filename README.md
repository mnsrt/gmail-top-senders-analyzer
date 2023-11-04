# Gmail Top Senders Analyzer

**findTopSenders** is a Google Apps Script that helps you identify and log the top email senders in your Gmail inbox. It is particularly useful for discovering the most frequent senders, which can be handy for recognizing potential spam or simply tracking your most active contacts. This script can analyze up to 2000 of your latest emails.

## How It Works

The script uses the GmailApp API to retrieve threads in your Gmail inbox. It then iterates through each thread, extracting the first message within each thread and capturing the sender's email address.

If the sender's email address is different from your own, the script checks whether it has already been encountered. If it hasn't, it adds the sender's email to the senderCounts object and sets the count to 1. If the sender is already in the senderCounts, the script increments their email count by 1.

After processing all the threads, the senderCounts object is sorted in descending order based on the number of emails sent by each sender. The sorted list of senders and their respective email counts are then logged.

## Usage

To use this script, follow these simple steps:

1. Visit [Google Apps Script](https://script.google.com/) and create a new project.

2. Copy the code from `findTopSenders.js` into the script editor.

3. Save the project with a name of your choice.

4. Click the "Run" button to execute the script.

5. The output will be available in the Logger, typically within 2-3 minutes after execution.

## Output

The script generates a list of the top email senders in your Gmail inbox, sorted by the number of emails sent by each sender. The output in the Logger will look similar to this:


```
9:55:51 PM	Info	Sender <notspam@example.com> has sent 99 emails to you.
9:55:51 PM	Info	School <no-reply@school.com> has sent 92 emails to you.
```