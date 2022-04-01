// evet loop: işlemleri asenkron çalıştırmak için node.js bu mimariyi kullanır.

// const dotenv = require("dotenv");
// dotenv.config()

// console.log(process.pid);

// console.log(process.env.PORT);   

//dışarıya direkt göstermek istenmeyen string'leri (parola gibi) bu nesnenin içine koyarız.

// npm: node.js ile beraber gelen tool. Başka kişilerin yazmış oldukları tool'lara erişebilmek için npm kullanılır. 
// npm sitesinde farklı tool'lar bulunur ve indirillebilir. Güvenilir tool old anlamak için sağdan haftalık indirme sayısına bakılabilir.
// terminale "npm install dotenv" yazılarak dotenv tool'u indirilebilir.
// indirilen sayfa silinse bile terminale "npm install" yazılırsa geri gelir.


console.log(process.argv);
// argüment yakalamaya yarar.


process.on('exit', (code) => {
    console.log(code)
})

