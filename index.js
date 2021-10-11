const express = require('express')
const mongoose = require("mongoose")
const app = express()
const PORT = process.env.PORT || 3000
async function start(){
    try{
        mongoose.connect("mongodb+srv://Den:Gizmor@cluster0.1o6fg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", )
        .then(() => console.log('Успешно соединились с сервером MongoDB'))
          .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))
    } catch(e){}
}

  

app.listen(PORT, () => {
    console.log('server started')
})
start()
