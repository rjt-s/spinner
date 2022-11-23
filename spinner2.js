// refacotred spinner code
let chars = ['|', '/', '-', '\\', '|'];
timer = 100;

for (let char of chars) {
  setTimeout(() => {
    process.stdout.write(`\r${char} `);
  }, timer);
  timer += 200;
}