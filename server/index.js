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
            const id_account = result[0].id_account
            const token = jwt.sign({ email, role, nama, id_account }, "secret", { expiresIn: "1d" });
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
    const { sql } = req.query
    const query = `SELECT * FROM buku ${sql}`
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
                console.log(decoded)
                req.email = decoded.email;
                req.role = decoded.role;
                req.nama = decoded.nama;
                req.id_account = decoded.id_account;
                next();
            }
        })
    }
}

server.post("/auth", userAuth, (req, res) => {
    return res.json({
        login: true,
        email: req.email,
        role: req.role,
        id_account: req.id_account,
        nama:req.nama
    })
})

server.get("/pageview", (req, res) => {
    const { id_buku } = req.query;
    const query = `SELECT * FROM buku WHERE id_buku like '${id_buku}%'`
    connection.query(query, (err, result) => {
        console.log(result)
        if (err) res.send("error");
        res.send(result)
    })
})


server.get("/query", (req, res) => {
    const query = `SELECT * FROM buku WHERE judul like '%${req.query.find}%'`
    connection.query(query, (err, result) => {
        res.json(result)
    })
})



server.get("/sql", (req, res) => {
    const  {query} = req.query
    const sql = query
    try {
        connection.query(sql, (req, result) => {
            res.json(result)
        })
    } catch (error) {
        res.send("error")
    }
})

server.get("/category", (req, res) => {
    const { query } = req.query
    console.log(query)
    const sql = `SELECT* FROM buku WHERE id_buku like "${query}%"`
    try {
        connection.query(sql, (error, result) => {
            res.json(result)
        })
    } catch (error) {
        
    }

})

server.post("/peminjaman", (req, res) => {
    const { id_member, tanggal_pengembalian ,id_buku } = req.query;
    const sql = `INSERT INTO peminjaman(tanggal_pengembalian, id_buku, id_member) VALUES ('${tanggal_pengembalian}', ${id_buku}, ${id_member})`
    console.log(sql)
    try {
        connection.query(sql, (error, result) => {
            res.json(result)
        })
    } catch (error) {
        res.send(error)
    }
})

server.get("/return", (req, res) => {
    const { table, target } = req.query
    const sql = `SELECT * FROM buku WHERE id_buku IN (SELECT id_buku FROM ${table} WHERE id_member = "${target}")`
    console.log(sql)
    try {
        connection.query(sql, (error, result) => {
            res.json(result)
        })
    } catch (error) {
        
    }

})


server.post("/borrow", (req, res) => {
    const { id_buku } = req.query;
    const sql = `DELETE FROM peminjaman WHERE id_buku = ${id_buku}`
    console.log(sql)
    try {
        connection.query(sql, (err, result) => {
            res.send({message: "success"})
        })
    } catch (error) {
        res.send(error)
    }
})


server.post("/history", (req, res) => {
    const { id_buku, id_member } = req.query;
    const sql = `INSERT INTO pengembalian(id_buku, id_member) VALUES (${id_buku}, ${id_member})`
    console.log(sql)
    try {
        connection.query(sql, (err, result) => {
            res.send(result)
        })
    } catch (error) {
        res.send(err)
    }
})