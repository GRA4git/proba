const express = require('express')
const mongoose = require("mongoose")
const app = express()
const PORT = 5000
app.use(express.json())
app.use(require("./routes/students.route"))

async function start(){
    try{
        mongoose.connect("mongodb+srv://Den:Gizmor@cluster0.1o6fg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", )
        .then(() => console.log('Успешно соединились с сервером MongoDB'))
          .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))
          app.listen(PORT, () => {
            console.log('server started')
        })
    } catch(e){}
}

  


start()
