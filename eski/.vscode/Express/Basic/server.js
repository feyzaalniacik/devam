// terminale "npm init -y" yazarak express altyapısı indirilir. arkaplanda json dosyası oluşuruldu
// "npm i express" yazılarak express indirilir.

const express = require("express");
const { getMaxListeners } = require("process");
// expres klasöründen express bileşeni çağırılır.
const app = express();

// app.get("/",(req, res) =>{
//     // req içinde değerleri tutar ve değerler buradan alınır. karşı taraftan geri dönmek istiyorsan res ile dönersin
//     res.send("Hello-Merhaba");
// })
// get fonksiyonu express içindedir ve kendine göre özelleşmektedir

app.listen(3000, () => console.log("Server running"))
// asıl son kısım. kaynağı (server) sürekli dinler. 

// terminale npm start denirse package.json içinden start olanı çalıştırır ve serverı dinler
// fakat div kendi yazdığımız bir şey old için direkt dinleme yapamaz. bu sebeple ek iş gerektirir npm i nodemon -D yazılarak çalıştırılır. indirmeden sonra div kullanılabilir
// nodemon tekrar run yapmaya gerek kalmadan yeni kayıtları dinleyebilir


// app.get('/',(req, res) =>{
//     res.sendFile('./views/index.html', {root:__dirname});
// })


// app.get('/users/:id',(req, res) =>{
//     res.status(200).send(`<h1>Users ID, ${req.params.id}<h1>`);
// })
// açılan sayfanın url kısmının yanına users yazınca sayfa gelir.  ve sonra users yanına /... (... yerine istenilen sayı yazılır) yazılınca ekranda id olarak o sayı basılır


app.use(express.json());
// datalarımızı json olarak olmamaızı sağlayan katman oluşturur
const lesson = [
    {id:1, name: 'Fizik'},
    {id:2, name: 'Kimya'},
    {id:3, name: 'Mat'}
]
app.get('/api/lessons',(req, res) =>{
    res.send(lessons);
})


app.post('/api/lessons',(req, res) =>{ // post data üzerinde değişiklik yapar
    const lesson = {
        id: lessons.length +1,
        name: req.body.name
    } // yukarıdaki fizik kimya gibi bileşen ekler, bileşen sayısına 1 ekler

    lessons.push(lesson);
    res.send(lesson);
})
app.listen(3000, () => console.log("Server running"))
