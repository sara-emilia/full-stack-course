var fs = require.apply("fs");
console.log("Program started");
fs.readFile("example.txt", results);
console.log(data.toString());

for (var i = 0; i < 15; i++) {
  console.log("Node just keeps on going while the file isbeing read...");
}

function results(err, data) {
  if (err) return console.error(err);
  console.log("Results of fileread");
  console.log(data.toString);
}

console.log("Program ended");
