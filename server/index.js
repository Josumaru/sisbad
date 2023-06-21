import express, { query } from "express";
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
            const role = result[0].role
            const nama = result[0].nama
            const token = jwt.sign({ email, role, nama }, "secret", { expiresIn: "1d" });
            res.cookie("token", token)
            return res.json({
                message: "success"
            })
        }
    })

})

server.post("/register", (req, res) => {
    const { name, id, email, password } = req.query;
    const query = `INSERT INTO account(id_account, email, nama, password) values (${id},'${email}', '${name}', '${password}')`
    const checker = `SELECT * FROM account WHERE id_account = ${id} OR email = '${email}'`
    try {
        connection.query(checker, (err, result) => {
            console.log(result)
            if (result.length === 0) {
                connection.query(query, (err, result) => {
                    if (err) res.send("error");
                    res.send({ message: "success" });
                })
            } else {
                res.send("error")
            }
        })
    } catch (error) {
        res.send("Internal Server Error");
    }
})



server.post("/addbook", (req, res) => {
    const { id_buku, judul, penulis, penerbit, tahun_terbit, sinopsis, cover } = req.query;
    const query = `INSERT INTO buku(id_buku, judul, penulis, penerbit, tahun_terbit, sinopsis, cover) values (${id_buku},'${judul}', '${penulis}', '${penerbit}', ${tahun_terbit}, '${sinopsis}','${cover}')`
    const checker = `SELECT * FROM buku WHERE id_buku = ${id_buku}`
    try {
        connection.query(checker, (err, result) => {
            console.log(result)
            if (result.length === 0) {
                console.log("Harus bisa")
                connection.query(query, (err, result) => {
                    console.log(result)
                    if (err) res.send("error");
                    res.send({ message: "success" });
                })
            } else {
                res.send("error")
            }
        })
    } catch (error) {
        res.send("Internal Server Error");
    }
})



server.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.json({
        message: "success"
    })
})


server.get("/showbook", (req, res) => {
    const query = `SELECT * FROM buku`
    connection.query(query, (err, result) => {
        res.json(result)
    })
})

server.post("/updatebook", (req, res) => {
    const { id_buku, judul, penulis, penerbit, tahun_terbit, sinopsis, cover } = req.query;
    const query = `UPDATE buku SET id_buku = ${id_buku}, judul = '${judul}', penulis = '${penulis}', penerbit = '${penerbit}', tahun_terbit = ${tahun_terbit}, sinopsis = '${sinopsis}', cover = '${cover}' WHERE id_buku = ${id_buku}`
    try {
        connection.query(query, (err, result) => {
            if (err) res.send("error");
            res.send({ message: "success" });
        })
    } catch (error) {
        res.send("Internal Server Error");
    }
})

server.post("/deletebook", (req, res) => {
    const { id_buku } = req.query;
    const query = `delete from buku where id_buku=${id_buku}`
    connection.query(query, (err, result) => {
        if (err) res.send("error");
        res.send({message: "success"})
    })
})



const userAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ login: false, message: "login first" })
    } else {
        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                return res.json({ login: false, message: "error authentication" })
            } else {
                req.email = decoded.email;
                req.role = decoded.role;
                req.nama = decoded.nama;
                next();
            }
        })
    }
}

server.post("/auth", userAuth, (req, res) => {
    console.log(req.nama)
    return res.json({
        login: true,
        email: req.email,
        role: req.role,
    })
})

server.get("/pageview", (req, res) => {
    const { id_buku } = req.query;
    const query = `SELECT * FROM buku WHERE id_buku like '${id_buku}%'`
    connection.query(query, (err, result) => {
        console.log(result)
        if (err) res.send("error");
        res.send(result)
        // res.send({message: "success"})
    })
})
