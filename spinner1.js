// // practice \r with process.std.output

// process.stdout.write("hello from spinner1.js....\rheyy\n");

setTimeout(() => {
  process.stdout.write('\r| ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\ ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r| ');
}, 900);

console.log('');

