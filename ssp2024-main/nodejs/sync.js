var fs = require('fs');//module to read files
 
var data = fs.readdirSync('.');//read the contents of the directory the '.' means the current directory
console.log(data);
console.log("this comes after data");