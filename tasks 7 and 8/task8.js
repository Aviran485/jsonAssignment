/**
 * @file task8.js
 * 
 * @author Natalia Akulov
 * @author Aviran Amormin

 * @description Merges lines from multiple input text files 
 * into a single output file in an iterative pattern.
 * 
 * @details
 * - Reads lines from three input files: f1.txt, f2.txt, f3.txt.
 * - Merges lines iteratively:
 *   - 1 line from each file, then 2 lines, 3 lines, ...
 * - Stops when the smallest file runs out of lines.
 * - Writes the combined content to result.txt.
 */

// file system module for reading and writing files
const fs = require('fs');

// array of input files
const sourceFiles = ['f1.txt', 'f2.txt', 'f3.txt'];
const targetFile = 'result.txt';

//open the file for writing
const target = fs.createWriteStream(targetFile, { encoding: 'utf8' });

// read all files into arrays of lines
const sources = sourceFiles.map(file => fs.readFileSync(file, 'utf8').split('\n'));

// get the maximum possible iterations based on the smallest file
const maxIterations = Math.min(...sources.map(lines => lines.length));

// copy lines iteratively: 1 line, then 2 lines, then 3 lines, etc.
for (let i = 1; i <= maxIterations; i++) { // loop for i lines from each file
  for (let j = 0; j < sources.length; j++) { // loop through each file
    const linesToCopy = sources[j].slice(0, i); //copy i lines from the current file
    for (let line of linesToCopy) { // write each extracted line to the output file
      target.write(`${line}\n`);
    }
  }
}

// close the target file and notify the user
target.end(() => {
  console.log(`Content written to ${targetFile} successfully!`);
});
