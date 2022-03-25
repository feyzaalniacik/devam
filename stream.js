const fs = require("fs");
const path = require("path");
// data çok büyükse okumakta sıkı yaşanabilir. stream yöntemi akışkanlığa zarar vermeden datayı böler, buffer tampon bölgesine alır.
// buffer içinde her bir kutu chunks'lardan oluşur. hızlı bir şekilde datayı okumaya yarar.

fs.readFile(path.resolve(__dirname, "testdata.txt"), (err, data) => {
    if (err) {
        throw err
    }
    console.log(data);
})
// kodun bu haliyle çalıştırılınca bir yere kadar okur ve sonra yazmayı bırakıp ... more bytes diyerek çıktı verir



const stream = fs.createReadStream(path.resolve(__dirname, "testdata.txt"))
stream.on('data', (chunk) => {
    console.log(chunk);
})
// kodun bu haliyle çalıştırılınca texti bölerek her bir chunkı ayrı ayrı ekrana basar



const Stream = fs.createReadStream(path.resolve(__dirname, "testdata.txt"), "utf-8")
stream.on('data', (chunk) => {
    console.log(chunk);
})
// kodun bu haliyle çalıştırılınca texti akarken basar yani okudukça ekrana yazar 



stream.on('end', () => console.log("end"))
// kodun bu haliyle çalıştırılınca ne zaman başladığını ve bittiğini gösterir.



const writeStream = fs.createWriteStream(path.resolve(__dirname, "testdata.txt"))
for (let i = 0; i<10; i++) {
    writeStream.write(i + '\n');
}

writeStream.end();
writeStream.close();
writeStream.destroy();



const readStream = fs.createReadStream(path.resolve(__dirname, "testdata.txt"), "utf-8")
const WriteStream = fs.createWriteStream(path.resolve(__dirname, "testdata.txt"))

readStream.pipe(writeStream);
// pipe: okuma ile yazma arasına bir pipe line açılır. arkaplanda daha düzgün bir okuma yapar ve yazar