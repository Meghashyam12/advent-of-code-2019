const part_1 = (input) => {
  const opcode = [...input];
  let i = 0;

  while (i < opcode.length) {
    switch (opcode[i]) {
      case 1:
        opcode[opcode[i + 3]] = opcode[opcode[i + 1]] + opcode[opcode[i + 2]];

        i += 4;
        break;

      case 2:
        opcode[opcode[i + 3]] = opcode[opcode[i + 1]] * opcode[opcode[i + 2]];

        i += 4;
        break;

      case 99:
        return opcode[0];

      default:
        throw "Invalid Opcode";
    }
  }
};

const part_2 = (input) => {};

const main = () => {
  const file = Deno.readTextFileSync("./inputs/day_02.txt");
  const input = file.split(",").map((num) => +num);

  input[1] = 12;
  input[2] = 2;
  console.log(part_1(input));
  // console.log(part_2(input));
};

main();
