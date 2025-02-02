const part_1 = (noun, verb, input) => {
  const opcode = [...input];
  opcode[1] = noun;
  opcode[2] = verb;
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

const part_2 = (input) => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      if (part_1(noun, verb, input) === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
};

const main = () => {
  const file = Deno.readTextFileSync("./inputs/day_02.txt");
  const input = file.split(",").map((num) => +num);

  console.log(part_1(12, 2, input));
  console.log(part_2(input));
};

main();
