const fs = require('fs');

// read the JSON file
const usersFile = 'users.json';
const usersData = JSON.parse(fs.readFileSync(usersFile, 'utf8'));

// count numof users
const userCount = usersData.length;

// get all user names
const userNames = usersData.map(user => user.name); // get name fields from json

// write the user count to user_count.txt
fs.writeFileSync('user_count.txt', `User Count: ${userCount}`, 'utf8');

// write all user names to user_names.txt
fs.writeFileSync('user_names.txt', userNames.join('\n'), 'utf8');

console.log('Operation completed. Check user_count.txt and user_names.txt for results.');
