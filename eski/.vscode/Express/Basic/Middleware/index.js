const express = require("express")
const errorHandler = require("./middle/errorHandler")

app = express()

// const auth = require("./middle/auth");
// const auth = require("./middle/logger");

// app.use(auth);

// app.use((req, res) => {
//     console.log("middleware")
//     // res.send("middleware"); //bu yorum satırı olursa terminalden çalıştırılınca ekran yüklenemez. yalnızca terminalde middleware yazar (alttaki next yoksa!)
//     next() // terminalde middleware gösterip durmaz işleme devam eder
// }) // bunun faydası kimlik doğrulama, yetkilendirme için kullanılabilmesidir

// app.use(express.static("public"))

// app.use(express.urlencoded({extended:false})) //form data içinden gelen şeyleri almak için kullanılır
// app.use(express.json()) //json olrk gelen şeyleri almak için kullanılır

// app.use((req, res, next) => {
//     logger(`${req.method}\t${req.url}`, 'log.txt');
//     next()
// })

// app.get('/', auth, (req, res) => {
//     res.send("page is rendering")
// })

// app.get('/users', (req, res) => {
//     res.send("users page is rendering")
// })


//CORS
// terminale npm i cors yazılarak indirilir

const cors = require("cors");

app.use(cors());

app.get('/', (req, res) => {
    res.send("CORS samples")
})

// farklısı

app.get('/test/:id', (req, res, next) => {
    if (req.params.id == 1) {
        next({
            errorMesage : "Hata"
        })
    }
}) //bu daima listendan hemen önce yazılır

// google ekranından konsola girilir ve fetch('http://localhost:3000/') yazılır. hata olarak döner. uygulama çalışırken başka bir sayfadan girmeye çalışmaktır burada yapılmaya çalışılan. izin vermemesinin sebebi güvenliktir.


app.use(errorHandler);

app.listen(3000, () => console.log("Running..."))

// authorization = yetkilendirme
// authentication = kimlik doğrulama