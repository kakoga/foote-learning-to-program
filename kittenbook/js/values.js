var projectName = 'kittenbook';
var versionNumber = '0.0.1';
// creates date object
var currentDate = new Date();

// current time/date format YYYY-MM-DD at HH:MM:SS
var currentTime = currentDate.getFullYear() + '-' +    // sets year
                  (currentDate.getMonth() + 1) + '-' + // sets month
                  currentDate.getDate() + ' at ' +     // sets day of the month
                  currentDate.getHours() + ':' +       // sets hour - military time
                  currentDate.getMinutes() + ':' +     // sets minutes
                  currentDate.getSeconds();            // sets seconds
