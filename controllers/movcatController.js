const conn = require('../database');

module.exports = {
        getListMoviCategory: (req, res) => {
        var sql = `select 
        mv.nama as nama_film, 
        ctr.nama as nama_category
        from movcat mc join movies mv on mc.idmovie = mv.id 
        join categories ctr on mc.idcategory = ctr.id`
        conn.query(sql ,(err,result)=>{
        res.send(result)
        console.log(result)
      })
    },
        addMoviCategory: (req, res) => {
        var { idmovie, idcategory } = req.body;
        var sql =   `INSERT INTO movcat VALUES (${idmovie}, ${idcategory});`;
        conn.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
        })
    },

        deleteMoviCategory: (req, res) => {
        var {idmovie, idcategory} = req.body;
        var sql = `DELETE FROM movcat WHERE idmovie = ${idmovie} AND idcategory = ${idcategory};`;

        conn.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        })
    },

}