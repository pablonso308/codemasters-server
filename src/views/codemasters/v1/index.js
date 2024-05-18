'use strict'

import { Router } from 'express'
let router = Router()

router.get('/', (req, res, next) => {
    res.send(`CodeMasters server V1 API`)
})

export default router