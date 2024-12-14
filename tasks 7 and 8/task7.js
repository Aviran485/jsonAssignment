
/**
 *  @file task7.js
 * 
 * Authors:
 * @author Aviran Amormin
 * @author Natalia Akulov
 * 
 * Description:
 * A script to read user information from a JSON file, count the total number of users, 
 * and extract user names into separate text files. 
 * 
 * Two files will be created:
 *    - user_count.txt - Contains the total number of users.
 *    - user_names.txt - Contains a list of all user names.
 */

// File system module for reading/writing files
const fs = require('fs');

// read the JSON file
const usersFile = 'users.json';
const usersData = JSON.parse(fs.readFileSync(usersFile, 'utf8'));

// count num of users
const userCount = usersData.length;

// get all user names
const userNames = usersData.map(user => user.name); // get name fields from json

// write the user count to user_count.txt
fs.writeFileSync('user_count.txt', `User Count: ${userCount}`, 'utf8');

// write all user names to user_names.txt
fs.writeFileSync('user_names.txt', userNames.join('\n'), 'utf8');

console.log('Operation completed. Check user_count.txt and user_names.txt for results.');
