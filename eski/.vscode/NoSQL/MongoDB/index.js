// "npm i mongodb" yazılarak indirilir
const {MongoClient} = require("mongodb")

const client = new MongoClient('mongodb+srv://qwerty:qwerty123@c')

const start = async () => {
    try {
        await client.connect(); //asenkron bağlandık. yapıda promise old için asenkron olması lazım. promise görmek için bu satırdaki parantezin üstüne gelinmelidir.
        console.log("Databe connected")

        await client.db().createCollection("users"); //bağlandık ve collection oluşturduk.

        const users = client.db().collection('users'); //nesne oluşturur

        await users.insertoNE({name: "ronaldo", age: 37})

    } catch (error) {
        console.log(error)
    }
} //terminale "node index" yazınca çalışır.