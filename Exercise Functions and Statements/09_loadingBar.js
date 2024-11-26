function loadingBar(num){
    const n = Math.round(num/10);
if (num===100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
}
else{
    console.log(`${num}% [${"%".repeat(n)}${'.'.repeat(10-n)}]`);
    console.log("Still loading...");
}
}
loadingBar(30);	//30% [%%%.......]
                //Still loading...
loadingBar(50);	//50% [%%%%%.....]
                //Still loading...
loadingBar(100); //100% Complete!
                //[%%%%%%%%%%]
