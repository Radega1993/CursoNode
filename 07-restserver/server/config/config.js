// ====================================
// Puerto
// ===================================

process.env.PORT = process.env.PORT || 3000;

// ====================================
// Entorno
// ===================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ====================================
// Base de Datos
// ===================================

if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/cafe';
} else {
  urlDB = 'mongodb+srv://radega:pass@cluster0-zxfbn.mongodb.net/cafe';
}

process.env.URLDB = urlDB;
