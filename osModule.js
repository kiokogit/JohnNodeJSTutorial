const os = require ('os');
//os module
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}\nFree Memory: ${freeMemory}`);