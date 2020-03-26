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
process.env.CADUCIDAD_TOKEN = '48h';

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
  urlDB = 'link mongo';
}

process.env.URLDB = urlDB


// ====================================
// Google client id
// ===================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '213759621928-ldr5bs1jijfhvu66k44lf2dmu3qga1ak.apps.googleusercontent.com';
