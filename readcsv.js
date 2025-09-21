const csv = require("csv-parser");
const fs = require("fs");

const result = [];

fs.createReadStream("./resources.csv")
  .pipe(csv())
  .on("data", (row) => result.push(row))
  .on("end", () => {
    console.log("finished assembling csv into object");
    console.log(result);
  });

// so like the craete read stream send chunks of stream and the "data" event get triggered when a row is complete and then pass the value to row
