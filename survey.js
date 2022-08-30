const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)   ", (name) => {
  rl.question("What's an activity you like doing?   ", (activity) => {
    rl.question("What do you listen to while doing that?   ", (music) => {
      console.log(`${name} likes to ${activity} and listen to ${music} while they do it.`);
      rl.close();
    });
  });
});