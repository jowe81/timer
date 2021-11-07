const { stdin:stdin, stdout:stdout} = require('process');
stdin.setRawMode(true);
stdin.setEncoding('utf-8');

const beep = () => stdout.write('\x07');

stdin.on('data', key => {
  let dly = key.match(/[\d]/);
  if (dly) {
    console.log(`Setting timer for ${dly} seconds...`);
    setTimeout(() => beep(), dly * 1000);
  }
  if (key === 'b') beep();
  if (key === ('\u0003')) {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});