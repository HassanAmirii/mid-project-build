const csv = require("csv-parser");
const fs = require("fs");
// const { prisma } = require("/src/db");
const result = [];

// fs.createReadStream("./resources.csv")
//   .pipe(csv())
//   .on("data", (row) => result.push(row))
//   .on("end", () => {
//     console.log("finished assembling csv into object");
//     console.log(result);
//   });

// so like the craete read stream send chunks of stream and the "data" event get triggered when a row is complete and then pass the value to row

// this is more redeable for me
try {
  fs.createReadStream("./resources.csv")
    .pipe(csv())
    .on("data", function (row) {
      result.push(row);
    })
    .on("end", function () {
      console.log(result);
    });
} catch (error) {
  console.error(error);
}

//   results.push({
//     emotionCategory: row.emotionCategory,
//     title: row.title,
//     type: row.type,
//     url: row.url,
//     tags: row.tags,
//   });
// })
// .on("end", async () => {
//   for (const data of results) {
//     await prisma.resource.create({ data });
//   }
//   console.log("Import complete");
//   process.exit(0);
// });
