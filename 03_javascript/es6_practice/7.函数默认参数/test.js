"use strict";

function a(tt = 10){
    console.log(arguments);
    arguments[0] = 2;
    console.log(arguments);
}
a(5); 