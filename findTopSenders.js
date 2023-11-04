function findTopSenders() {
    // Get the current Gmail user's email address
    var currentUserEmail = Session.getActiveUser().getEmail();
  
    // Create an object to store sender counts
    var senderCounts = {};
  
    var startIndex = 0;
    var batchSize = 500;
    var totalEmails = 0;
  
    while (totalEmails < 2000) {
      // Get the Gmail threads in the inbox (up to 500 latest at a time)
      var threads = GmailApp.getInboxThreads(startIndex, batchSize);
  
      if (threads.length === 0) {
        break; // No more threads to process
      }
  
      // Loop through each thread
      for (var i = 0; i < threads.length; i++) {
        var thread = threads[i];
  
        // Get the first message in the thread
        var message = thread.getMessages()[0];
  
        // Get the sender's email address
        var senderEmail = message.getFrom();
  
        // Check if the sender is not the current user
        if (senderEmail !== currentUserEmail) {
          // If the sender is not in the senderCounts object, initialize their count to 1
          if (!senderCounts[senderEmail]) {
            senderCounts[senderEmail] = 1;
          } else {
            // If the sender is already in senderCounts, increment their count by 1
            senderCounts[senderEmail]++;
          }
        }
      }
  
      totalEmails += threads.length;
      startIndex += batchSize;
    }
  
    // Sort the senderCounts object by the number of emails sent
    var sortedSenders = Object.keys(senderCounts).sort(function(a, b) {
      return senderCounts[b] - senderCounts[a];
    });
  
    // Log or display the top senders and their email counts
    for (var j = 0; j < sortedSenders.length; j++) {
      var sender = sortedSenders[j];
      var count = senderCounts[sender];
      Logger.log(sender + " has sent " + count + " emails to you.");
    }
  
    // Log the total email count
    Logger.log("Total email count analyzed: " + totalEmails);
  }
  