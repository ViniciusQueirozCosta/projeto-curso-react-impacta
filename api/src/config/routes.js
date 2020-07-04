const {Router} = require('express')

module.exports = server => {
    const router = Router()

    server.use('/api', router)

    const serviceCursos = require('../cursos/serviceCursos.js')
    serviceCursos.register(router, '/cursos')

    const serviceContatos = require('../contatos/serviceContatos.js')
    serviceContatos.register(router, '/contatos')
}