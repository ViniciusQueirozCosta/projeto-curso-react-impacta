const schemaContatos = require('./schemaContatos.js')

schemaContatos.methods(['get', 'post', 'delete'])
schemaContatos.updateOptions({ new: true, runValidators: true})

module.exports = schemaContatos