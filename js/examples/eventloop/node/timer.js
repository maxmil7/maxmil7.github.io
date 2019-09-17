const fs = require('fs');

fs.readFile(__filename, () => {
   
  setTimeout(() => {
    console.log('timeout');
    //microtasks (promise, nextTick)
    Promise.resolve().then(() => console.log('promTime1'));
    Promise.resolve().then(() => console.log('promTime2'));
    Promise.resolve().then(() => console.log('promTime3'));
    process.nextTick(() => console.log('tick 1'));
    process.nextTick(() => console.log('tick 2'));
    process.nextTick(() => console.log('tick 3'));
  }, 0);
  setImmediate(() => {
    Promise.resolve().then(() => console.log('prom1'));
    Promise.resolve().then(() => console.log('prom2'));
    Promise.resolve().then(() => console.log('prom3'));
    console.log('immediate');
  });
  
  setImmediate(() => {
    console.log('immediate2');
  });
  setImmediate(() => {
    console.log('immediate3');
  });
  setTimeout(() => {
    console.log('timeout1');
  }, 0);
  setImmediate(() => {
    console.log('immediate4');
  });
});



