const part_1 = (input) => {};

const part_2 = (input) => {};

const main = () => {
  const file = Deno.readTextFileSync("./inputs/day_01.txt");
  const input = file.split("\n");

  console.log(part_1(input));
  console.log(part_2(input));
};

main();
