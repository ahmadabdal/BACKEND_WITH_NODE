const fs = require("fs");
// console.log(helllo);
// Synchronus

// const textInput = fs.readFileSync('./read.txt', 'utf8');

// console.log(textInput);
// const textoutput = `New Text Update ${textInput} - written by Node.js \n - ${Date.now()}`;
// fs.writeFileSync('./write.txt', textoutput);
// console.log('File written successfully!');

// Asynchronus way

fs.readFile("./read.txt", "utf8", (err, data1) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data1);
  fs.readFile("./write.txt", "utf8", (err, data2) => {
    if (err) {
      console.error("Error reading write.txt:", err);
      return;
    }
    console.log(data2);
    fs.writeFile(
      "./Asynchronus.txt",
      ` New Text ${data1} - ${data2} `,
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing to Asynchronus.txt:", err);
          return;
        }
        console.log("File written successfully!");
      }
    );
  });
});

console.log("This is the end of the file reading process.");
