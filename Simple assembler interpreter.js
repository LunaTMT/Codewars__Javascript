  function simple_assembler(program) {
    let mem = {};
    let i = 0;

    while (i < program.length) {
      const cmd = program[i].split(' ');
      const operation = cmd[0];
      const reg = cmd[1];
      const val = isNaN(cmd[2]) ? mem[cmd[2]] : Number(cmd[2]);

      switch (operation) {
        case 'mov':
          mem[reg] = val;
          i++;
          break;
        case 'inc':
          mem[reg] = (mem[reg] || 0) + 1;
          i++;
          break;
        case 'dec':
          mem[reg] = (mem[reg] || 0) - 1;
          i++;
          break;
        case 'jnz':
          const jumpVal = isNaN(reg) ? mem[reg] : Number(reg);
          if (jumpVal !== 0) {
            i += val;
          } else {
            i++;
          }
          break;
        default:
          i++;
          break;
      }
    }
    return mem;
  }


  simple_assembler([ 'mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2' ]);