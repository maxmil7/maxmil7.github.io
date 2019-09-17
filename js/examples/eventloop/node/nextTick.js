let foo, bar;

function someAsyncAPICall(callback) { callback() };
someAsyncAPICall(() => console.log('foo', foo));

foo = 1;
//foo undefined

function betterAsyncAPICall(callback) { process.nextTick(callback) };
betterAsyncAPICall(() => console.log('bar', bar));

bar = 1;
//bar 1