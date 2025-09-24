import inquirer from "inquirer";
import figlet from "figlet";
import gradient from "gradient-string";

async function greet() {
  figlet("Hassan", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { name } = await inquirer.prompt([
    { type: "input", message: "what is your name", name: "name" },
  ]);

  console.log(
    gradient(["red", "orange", "yellow", "green", "blue", "purple"])(name)
  );
}

greet();
