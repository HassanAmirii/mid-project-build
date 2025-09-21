const fs = require("fs");

try {
  const data = fs.readFileSync("./test.txt", "utf8");
  const calculate = data.split(",");
  const content = `there are '${calculate.length}' space in test.txt file`;
  if (calculate) {
    fs.writeFileSync("./write.txt", content);
  }
  return;
} catch (error) {
  console.error("err", error);
}
