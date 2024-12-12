const fs = require('fs');

// arr of files
const sourceFiles = ['f1.txt', 'f2.txt', 'f3.txt'];
const targetFile = 'result.txt';

//open the file for writing
const target = fs.createWriteStream(targetFile, { encoding: 'utf8' });

//read all files into arrays of lines
const sources = sourceFiles.map(file => fs.readFileSync(file, 'utf8').split('\n'));

//get the maximum possible iterations based on the smallest file
const maxIterations = Math.min(...sources.map(lines => lines.length));

//copy lines iteratively: 1 line, then 2 lines, then 3 lines, etc.
for (let i = 1; i <= maxIterations; i++) {
  for (let j = 0; j < sources.length; j++) {
    const linesToCopy = sources[j].slice(0, i); //copy `i` lines from the current file
    for (let line of linesToCopy) {
      target.write(`${line}\n`);
    }
  }
}

// close the target file
target.end(() => {
  console.log(`Content written to ${targetFile} successfully!`);
});
