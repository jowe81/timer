const timers = process.argv.slice(2).filter(e => !(isNaN(e) || e < 0));
timers.forEach(dly => setTimeout(() => process.stdout.write('\x07'), dly * 1000));
