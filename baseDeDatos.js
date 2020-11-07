const mongoose = require('mongoose')

// Conectarse
mongoose.connect('mongodb://localhost/bit_clientes', { useNewUrlParser: true, useUnifiedTopology: true })

// La propiedad connection me avisará si la conexión es posible o NO
const db = mongoose.connection

// Esta linea me dirá si hay un problema al conectarme
db.on('error', console.error.bind(console, 'connection error:'))

// Esta linea me dirá si he logrado conectarme
db.once('open', function() {
  console.log('Conectado a la base de datos.')
})
