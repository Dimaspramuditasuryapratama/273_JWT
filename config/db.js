const db = require('../models');

async function connectDatabase() {
  try {
    console.log("⏳ Sedang mencoba menghubungkan ke database...");
    
    // Proses ini yang biasanya bikin hang kalau gagal
    await db.sequelize.authenticate();
    console.log('✅ Database connected successfully');

    await db.sequelize.sync({ alter: true });
    console.log('✅ Database synchronized');
    
  } catch (err) {
    console.error('❌ Database connection failed!');
    console.error('Pesan Error:', err.message); // Ini akan memunculkan alasan aslinya
  }
}

module.exports = connectDatabase;