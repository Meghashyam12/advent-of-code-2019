const part_1 = (input) => {
  console.log(input);
};

// const part_2 = (input) => {};

const main = () => {
  const file = Deno.readTextFileSync("./inputs/day_01.txt");
  const input = file.split("\n");
  part_1(input);
  // part_2(input);
};

main();
