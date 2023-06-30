/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


async function main() {
    function sleep(n) {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Finish"), n * 1000);
      });
    }
  
    console.log("start");
    const res = await sleep(3);
    console.log("End did not get printed", res);
    console.log("end");
  }
  
  main();

