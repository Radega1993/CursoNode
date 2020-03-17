// ====================================
// Puerto
// ===================================

process.env.PORT = process.env.PORT || 3000;

// ====================================
// Entorno
// ===================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ====================================
// Vencimiento del token
// ===================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

// ====================================
// Seed de Autenticacion
// ===================================
process.env.SEED = process.env.SEED || 'secret';

// ====================================
// Base de Datos
// ===================================
if (process.env.NODE_ENV !== 'dev') {
  urlDB = 'mongodb://localhost:27017/cafe';
} else {
  urlDB = '';
}

process.env.URLDB = urlDB
