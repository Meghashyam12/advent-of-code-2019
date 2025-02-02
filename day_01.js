const part_1 = (modules) => {
  return modules.reduce((fuel, module) => fuel + Math.floor(module / 3) - 2, 0);
};

// const part_2 = (input) => {};

const main = () => {
  const file = Deno.readTextFileSync("./inputs/day_01.txt");
  const input = file.split("\n");
  console.log(part_1(input));
  // part_2(input);
};

main();
