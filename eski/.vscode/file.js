// const { rejects } = require("assert");
// const { verify } = require("crypto");
// const fs = require("fs");
// const path = require("path");
// const { resolve } = require("path/posix");
// const { fileURLToPath } = require("url");


// fs.mkdirSync(path.resolve(__dirname, "dir"));
// // mkdir: dosya açar
// // mkdirSync: senkron şekilde dosya açar yani önceki işlemin bitmesini bekler

// // bunu terminale "node file.js" olarak yazıp çalıştırınca dir klasörü açar



// // fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
// //     if(err){
// //         console.log(err)
// //     }
// //     console.log("file")
// // }); //şeklinde de yazılabilir
// // bunu terminale "node file.js" olarak yazıp çalıştırınca dir klasörü açar


// // fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
// //     if(err){
// //         console.log(err)
// //     }
// // });
// // // bunu terminale "node file.js" olarak yazıp çalıştırınca dir klasörünü siler



// fs.write(path.resolve(__dirname, "text.txt"), 'Ali Veli 1 2 3', (err) => {
//     if(err){
//         confirm.log(err)
//     }
// });
// // file dosyası varsa içine veriyi ekler, yoksa oluşturur ve içine veri ekler


// fs.write(path.resolve(__dirname, "text.txt"), 'Add something', (err) => {
//     if(err){
//         confirm.log(err)
//     }
// });
// // ikisi birlikte çalıştırılırsa 'Ali Veli 1 2 3Add something' çıktısı olur. ama buna kesin diyemeyiz çünkü asenkron old için hangi işlemin önce bittiğini bilemeyiz bu sebeple çıktılar yer de değiştirebilir

// // dir ile iki kes klasör açmaya çalışılırsa hata verir ama üsttekinde hata vermez





// fs.write(path.resolve(__dirname, "text.txt"), 'Ali Veli 1 2 3', (err) => {
//     if(err){
//         confirm.log(err)
//     }

//     fs.write(path.resolve(__dirname, "text.txt"), 'Add something', (err) => {
//         if(err){
//             confirm.log(err)
//         }
//     })

// })
// // böyle iç içe yazılırsa sıra ile işleyeceği için sıralama sıkıntısı olmaz ama işleme süresi sıkıntısı doğar (callback ile çözüm yöntemi)





// //Promise
// // senkron çalışmaya yarar
// // resolve ve reject ile işler hata almazsa resolve ile, hata alırsa reject ile işler. resolve ile her şey doğru ise 
// // .then ile döner. .catch ile dönerse zaten resolve hata vermiş demektir

// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }




// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// writeFileAsync(path.resolve(__dirname, "text.txt"), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), "Merhaba"))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), "Merhaba"))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), "Merhaba"))
//     .catch(err => console.log(err))
//     // then'lerde hata oluşursa catch kısmına geçer

// // bu promise yapısıdır. önceki işlemin bitmesini bekler ve sonrasında diğer işleme geçer.






// const removeFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.rm(path, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

const text ="BIL 4 2 5"
// yazdır (.txt)
// okut
// okuttuğunun datasını al
// boşluklara böl
// uzunluğunu ver length
// length'i yazdır (.yeni)

// writeFileAsync(path.resolve(__dirname, "text.txt"), 'data')
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt'))
//     .then(data => data.split(' ').length)
//     .then(count => readFileAsync(path.resolve(__dirname, 'count.txt'), count)

const fsPromise = require('fs/promises');
const fsPromise = require('fs').promises;
// iki kullanım da aynı anlama gelir

const fileRead = async () => {
    try {
        await fsPromise.writeFile(path.resolve(__dirname, "text.txt"), 'data')

    } catch (error) {

    }
}