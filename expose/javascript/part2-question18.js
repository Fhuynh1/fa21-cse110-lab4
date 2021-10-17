let d = new Date();
let time = d.toLocaleTimeString();
//setInterval(() => {console.log(new Date().toLocaleTimeString())}, 1000);


function printNums(){
    console.log(1);
    setTimeout(function() {console.log(2);})
    setTimeout(function() {console.log(3);})
    console.log(4);
}

printNums();