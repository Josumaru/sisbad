import express from "express";
import mysql from "mysql";
import cors from "cors"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"

const server = express()
server.use(express.json())
server.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST, GET"],
        credentials: true
    }
))
server.use(cookieParser())
server.listen(3001, () => {
    console.log("Server Running")
})

const connection = mysql.createConnection({
    host: "localhost",
    database: "perpustakaan",
    user: "root"

})

connection.connect()

server.get("/", (req, res) => {
    connection.query("SELECT * FROM nasabah", (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})



server.post("/login", (req, res) => {
    const { email, password } = req.query;
    const query = "SELECT * FROM account WHERE email = ? AND password = ?"
    const values = [email, password];
    connection.query(query, values, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            const email = result[0].email
            const token = jwt.sign({ email }, "secret", { expiresIn: "1d" });
            res.cookie("token", token)
            return res.json({
                message: "success"
            })
        }
    })

})


server.post("/register", (req, res) => {
    const query = "INSERT INTO account(email, nama, password) values (24, 'Johan', 'Jl. Perang')"
    connection.query(query, (err, result) => {
        if (err) throw err;
        req.send(result);
    })
})


const userAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ message: "login first" })
    } else {
        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                return res.json({ message: "error authentication" })
            } else {
                req.email = decoded.email;
                next();
            }
        })
    }
}

server.post("/dashboard", userAuth, (req, res) => {
    return res.json({
        login: true,
        email: req.email
    })
})
