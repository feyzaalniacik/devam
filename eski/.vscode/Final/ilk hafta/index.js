const mongoose = require("mongo")
const mongoose = require("mongo")
const mongoose = require("mongo")





const { appendFile } = require("fs")

const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
}) //config ayarları

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs') //key value tutar
app.set('views', 'views')
//config ayarları

// app.get('/', ())
app.use(todoRoutes)

const conn = "mongodb+srv://" //cdn linki 

async function start(){
    try {
        await mongoose.connect(conn, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT,() => console.log("server has been started"))
    }catch (error){
        console.log(error)
    }
}
start()

// views, layouts, partials, routes(tados.js) dosyaları oluşturulur. ne nerede öğren

// her şeyin bir cdn'i vardır. veriyi indirmeden kullanmaya yarar.

