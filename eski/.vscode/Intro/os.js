const os = require("os");

console.log(os.platform());

console.log(os.arch());

console.log(os.cpus());
// kaç çekirdekli çalıştığını gösterir
console.log(os.cpus().length);


console.log(os.hostname());
