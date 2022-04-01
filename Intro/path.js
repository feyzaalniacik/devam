const path = require("path");

console.log(path.join('first', 'second'));
// her işletim sistemine uyumlu olması için join kullanılır


console.log(path.join(__dirname, '..'));
// terminalde gelen uzantıyı kısaltır


console.log(path.resolve('first'));
// terminalde gelen uzantıyı olduğun directory'ye kadar yazar


console.log(path.resolve('/first', 'second'));


const fullPath = path.resolve("first.jpeg");
console.log(path.basename(fullPath));
// sadece jpeg olan dosyaları getirir.
console.log(path.extname(fullPath));
// hangi tür dosyaları getirdiğini ekrana basar


const pageURL = "http://localhost:9001..........."

const url = new URL(pageURL);
console.log(url);
// terminale "node path" yazılırsa çalışır
