import express, { query } from "express";
import mysql from "mysql";

const server = express()

server.listen(3001, () => {
    console.log("Server Running")
})




const connection = mysql.createConnection({
    host: "localhost",
    database: "perbankan",
    user: "root"

})

connection.connect()

server.get("/", (req, res) => {
    connection.query("SELECT * FROM nasabah", (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})


server.put("/login", (req, res) => {
    res.send("Sucess")
})


server.put("/register", (req, res) => {
    const query = "INSERT INTO nasabah(id_nasabah, nama_nasabah, alamat_nasabah) values (24, 'Johan', 'Jl. Perang')"
    connection.query(query, (err, result) => {
        if (err) throw err;
        req.send(result);
        // res.send(result)
    })
})


server.get("/profile",(req, res) => {
    res
})