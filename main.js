"use strict";
//make an array with 5 country name to visit
let countriesTovisits = ["Saudia", "Qatar", "dubai", "Uk", "newzealand"];
//print orginal order
console.log("orginal order:", countriesTovisits);
//print country name with alphabatical order without changing the orignal array
console.log("alphabatical Order:", [...countriesTovisits].sort());
//show that the array in its orignal order
console.log("Still in original order:", countriesTovisits);
