const process = require("process");
const { Z_ASCII } = require("zlib");
const commands = require("./commands/index.js");

function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
   
    let args = data.toString().trim().split(' ')
    let cmd = args.shift();
    args = args.join(" ")


    commands.hasOwnProperty(cmd)
      ? commands[cmd](print, args)
      : print(`command not found: ${cmd}`);
  });
}
bash();

function print(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

module.exports = {
  print,
  bash,
};
