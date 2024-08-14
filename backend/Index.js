const express = require ('express');
const app = express();
require("./Db/DbConnection")


app.get('/',(req,res) =>
{
    res.send("Hai");
})

app.listen(5000,console.log("Application Running"));