/* A Callback function in javascript is a function that is passed
   as an arguments to another function */

// without arguments

function sayHello() {
    console.log("Hello, World!");
}

function executeCallBack(callback){
    console.log("Before CallBack");
    callback();
    console.log("After CallBack")
}

executeCallBack(sayHello);

// with arguments

function greet(name){
    console.log(`Hello, ${name}`);
}

function executeCallBackWithArgs(callback, arg){
    callback(arg);
}

executeCallBackWithArgs(greet, 'Umang')
