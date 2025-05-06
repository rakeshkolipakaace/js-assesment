// setInterval(() => {
//     console.log("Hello World");
// }, 1000);


// setTimeout(() => {
//     console.log("Hello World");
// }, 1000);


// const cl=setInterval(() => {  
//     console.log("Hello World 1");
// }, 1000);

// clearInterval(cl);






function print1() {
    setTimeout(() => {
        print2();
    }, 1000);
}

function print2() {
    let count = 0;
    const intervalId = setInterval(() => {
        console.log("Mohan");
        count++;
        if (count === 10) {
            clearInterval(intervalId);
        }
    }, 1000);
}

print1();








// const id = setInterval(() => {
//     console.log("Mohan");
//   }, 1000);
  
//   setTimeout(() => {
//     clearInterval(id);
//   }, 5000*2);
  
