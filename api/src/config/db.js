const mongoose = require('mongoose')

mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost:27017/projeto-curso-react-impacta', { useNewUrlParser: true, useUnifiedTopology: true })
