const os = require('os')

console.log("Platform: " + os.platform())
console.log("Total Memory (GB): " + os.totalmem()/(1024*1024*1024))
console.log("Hostname: " + os.hostname())
console.log("" + os.cpus())