const part_1 = (modules) => {
  return modules.reduce((fuel, module) => fuel + Math.floor(module / 3) - 2, 0);
};

const calculateRequiredFuel = (fuel, module) => {
  const requiredFuel = Math.floor(module / 3) - 2;

  if (requiredFuel <= 0) {
    return fuel;
  }

  return requiredFuel + calculateRequiredFuel(fuel, requiredFuel);
};

const part_2 = (modules) => {
  return modules.reduce(calculateRequiredFuel, 0);
};

const main = () => {
  const file = Deno.readTextFileSync("./inputs/day_01.txt");
  const input = file.split("\n");

  console.log(part_1(input));
  console.log(part_2(input));
};

main();
