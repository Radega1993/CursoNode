const express = require('express');

let {
  verificaToken,
  verificaAdminRole
} = require('../middlewares/autenticacion');

let app = express();

let Categoria = require('../models/categoria')

// ============================
// Mostrar todas las caregorias
// ============================
app.get('/categoria', verificaToken, (req, res) => {
  Categoria.find({})
    .sort('descripcion')
    .populate('usuario', 'nombre email')
    .exec((err, categorias) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        categorias
      });
    })
})

// ============================
// Mostrar caregoria por id
// ============================
app.get('/categoria/:id', verificaToken, (req, res) => {

  let id = req.params.id;

  Categoria.findById(id, (err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err: {
          message: 'El ID no es correcto'
        }
      });
    }

    res.json({
      ok: true,
      categoria: CategoriaDB
    });
  });
});

// ============================
// Nueva caregorias
// ============================
app.post('/categoria', verificaToken, (req, res) => {

  let body = req.body;

  let categoria = new Categoria({
    descripcion: body.descripcion,
    usuario: req.usuario._id
  });

  categoria.save((err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      categoria: categoriaDB
    });
  });
})


// ============================
// modifica caregorias
// ============================
app.put('/categoria/:id', verificaToken, (req, res) => {

  let id = req.params.id;
  let body = req.body;

  let descCategoria = {
    descripcion: body.descripcion
  }

  Categoria.findByIdAndUpdate(id, descCategoria, {
    new: true,
    runValidators: true
  }, (err, categoriaDB) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    };

    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      categoria: categoriaDB
    });
  });

})


// ============================
// Elimina caregorias
// ============================
app.delete('/categoria/:id', [verificaToken, verificaAdminRole], (req, res) => {

  let id = req.params.id;

  Categoria.findByIdAndRemove(id, {
    new: true,
    runValidators: true
  }, (err, categoriaBorrada) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    };

    if (!categoriaBorrada) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'El id no existe'
        }
      });
    }

    res.json({
      ok: true,
      categoria: categoriaBorrada
    });
  });
});


module.exports = app;
