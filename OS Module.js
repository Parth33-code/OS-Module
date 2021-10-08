var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture : " + os.arch());
console.log("Total Momory : " + os.totalmem() / (1024 * 1024 * 1024) + " gb");
console.log("Total Free Momory : " + os.freemem() / (1024 * 1024 * 1024) + " gb");
console.log("Os Platform : " + os.platform());
console.log("User Information : " + os.userInfo());