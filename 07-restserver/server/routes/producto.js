const express = require('express');

let {
  verificaToken,
} = require('../middlewares/autenticacion');

let app = express();

let Producto = require('../models/producto');

// ============================
// Mostrar todos los Productos
// ============================
app.get('/producto', verificaToken, (req, res) => {

  let desde = req.query.desde || 0;
  desde = Number(desde);

  Producto.find({
      disponible: true
    })
    .sort('descripcion')
    .skip(desde)
  limit(5)
    .populate('usuario', 'nombre email')
    .populate('categoria', 'descripcion')
    .exec((err, productos) => {
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
});

// ============================
// Mostrar producto por id
// ============================
app.get('/producto/:id', verificaToken, (req, res) => {

  let id = req.params.id;

  Producto.findById(id)
    .populate('usuario', 'nombre email')
    .populate('categoria', 'descripcion')
    .exec((err, productos) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err: {
            message: 'El ID no es correcto'
          }
        });
      }

      if (!productoDB) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        producto: productoDB
      });
    })
});

// ============================
// Buscar producto regex
// ============================
app.get('/producto/buscar/:termino', verificaToken, (req, res) => {

  let termino = req.params.termino;

  let regex = new RegExp(termino, 'i')

  Producto.find({
      nombre: regex
    })
    .populate('usuario', 'nombre email')
    .populate('categoria', 'descripcion')
    .exec((err, productos) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        producto: productoDB
      });
    })
});

// ============================
// Nuevo producto
// ============================
app.post('/producto', verificaToken, (req, res) => {

  let body = req.body;

  let producto = new Producto({
    nombre: req.usuario._id,
    precioUni: body.precioUni,
    descripcion: body.descripcion,
    disponible: body.disponible,
    categoria: body.categoria,
    usuario: body.usuario
  });

  producto.save((err, productoDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!productoDB) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.status(201).json({
      ok: true,
      producto: productoDB
    });
  });
})


// ============================
// modifica producto
// ============================
app.put('/producto/:id', verificaToken, (req, res) => {

  let id = req.params.id;
  let body = req.body;


  Producto.findById(id, productoDB, (err, categoriaDB) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    };

    if (!productoDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'El producto no exuste'
        }
      });
    }

    productoDB.nombre = body.nombre;
    productoDB.precioUni = body.precioUni;
    productoDB.descripcion = body.descripcion;
    productoDB.disponible = body.disponible;
    productoDB.categoria = body.categori;

    productoDB.save((err, productoGuardado) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      };

      res.json({
        ok: true,
        producto: productoGuardado
      });
    });
  })
})


// ============================
// Elimina producto
// ============================
app.delete('/producto/:id', [verificaToken], (req, res) => {

  let id = req.params.id;

  let cambiaEstado = {
    disponible: false
  }

  // o quitar 'cambiaEstado' y poner funcion 'findByIdAndRemove'
  Producto.findByIdAndUpdate(id, cambiaEstado, {
    new: true
  }, (err, productoBorrado) => {

    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    };

    if (!productoBorrado) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'usuario no encontrado'
        }
      });
    }

    res.json({
      ok: true,
      usuario: productoBorrado
    });
  });
});



module.exports = app;
