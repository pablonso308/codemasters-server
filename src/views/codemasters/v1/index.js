'use strict'

import { Router } from 'express'
let router = Router()

router.get('/', (req, res, next) => {
    res.send(`CodeMasters server V1 API`)
})

import alumnos from './alumnos/index.js'
router.use('/alumnos', alumnos)

import alumnos from './profesores/index.js'
router.use('/profesores', profesores)

import alumnos from './asignaturas/index.js'
router.use('/asignaturas', asignaturas)

export default router