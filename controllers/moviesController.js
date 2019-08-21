const conn = require('../database');

module.exports = {
    getListMovie: (req, res) => {
        var sql = 'SELECT * from movies;';
        conn.query(sql, (err, results) => {
            if(err) throw err;

            res.send(results);
        })
    },
    addMovie: (req, res) => {
        data = {
            nama: req.body.namamovie,
            tahun: req.body.tahun,
            description: req.body.deskripsi
        }
        var sql = `INSERT INTO movies SET ?`
        conn.query(sql, data, (err, results) => {
            if(err) throw err;
            console.log(results);
            res.send({status: "Tambah Movies Sukses", nama: req.body.namamovie, tahun: req.body.tahun, description: req.body.deskripsi})
                })
    
    },
    editMovie: (req, res) => {
        sql = `UPDATE movies SET ? WHERE id=${req.params.id}`
        conn.query(sql, req.body, (err, results) => {
            if(err) throw err;
            console.log(results)
            res.send({status: "Update movies sukses", id: req.params.id, updateRows: results.changeRows})
        })
    },
    deleteMovie: (req, res) => {
        sql = `DELETE FROM movies WHERE id=${req.params.id};`;
        sql1 = `DELETE FROM movcat WHERE idmovie=${req.params.id};`;
        conn.query(sql, (err, results) => {
            if(err) throw err;
            console.log(results);
            if(results.affectedRows == 0){
                res.send({error: "ID Movies tidak ada!"})
            }
            conn.query(sql1, (err1, results1) => {
                if(err1) throw err1;
                console.log(results1)
                res.send({status: "Hapus Movies Sukses", idmovie: req.params.id})
            })
        })
    }
}