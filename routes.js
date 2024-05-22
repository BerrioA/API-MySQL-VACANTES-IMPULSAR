const express = require('express')
const routes = express.Router()


// Mostrar todos los usuarios
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM vacantes', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

// Agregar un usuario
routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO vacantes set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Vacante publicada con exito!')
        })
    })
})

// Eliminar un usuario
routes.delete('/:idvacante', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query('DELETE FROM vacantes WHERE idvacante = ?', [req.params.idvacante], (err, rows) => {
            if (err) return res.send(err);
            res.send('Vacante eliminada con exito!');
        });
    });
});


routes.put('/:idvacante', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query('UPDATE vacantes SET ? WHERE idvacante = ?', [req.body, req.params.idvacante], (err, rows) => {
            if (err) return res.send(err);
            res.send('Vacante actualizada con exito!');
        });
    });
});


module.exports = routes