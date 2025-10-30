const waitForSomeTime = (ms) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Do Nothing
    }
}

const syncUsingTimer = ()=>{
    waitForSomeTime(4000);
    console.log("wait has been completed.");
}

const asyncUsingTimer = () => {
    setTimeout(() => {
        console.log("inside setTimeout");
    },4000)
}
console.log("start");
syncUsingTimer();
asyncUsingTimer();
console.log("end");