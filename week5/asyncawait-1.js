function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}


async function run() {
    // logic
    console.log("Start!!");
    await promiseTimeout(2000);
    // try to take await out and see
    console.log("stop!!");

    
}
console.log('Before run');
run();
console.log("After run");