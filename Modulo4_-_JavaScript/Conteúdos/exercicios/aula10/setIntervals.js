/*setTimeout(() => {
    console.log("Passou 1 segundo");
}, 1000);
console.log("Começar contagem");*/

/*setInterval(() => {
    console.log("Intervalo completo");
}, 1000);*/

/*let interval = setInterval(()=>{
    console.log("intervalo")
    clearInterval(interval)
},1000)*/

/*let interval = 5
setTimeout(() => {
    let newInterval = setInterval(() => {
        console.log(interval)
        if (interval === 0) {
            clearInterval(newInterval)
        }
        interval -= 1
    }, 1000)

    clearTimeout(interval);
}, 1000)*/

let interval = 5
for (let i=5;i>=0;i--){
    setTimeout(()=>{
        console.log(i)
    },(interval-i)*1000)
}