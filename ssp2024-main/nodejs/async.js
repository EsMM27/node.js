var fs = require('fs');
 
function printData(err, data) //callback function asynchronus function
{
   console.log(data);
}
 
fs.readdir('.', printData);
console.log("this comes after??");