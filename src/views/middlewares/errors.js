'use strict'

export default function errorsMiddleware(req, res) {
    console.debug(`${req.method} ${req.originalUrl} ha fallado`)
    res
        .status(404)
        .send(`${req.method} ${req.originalUrl} no encontrado`)
}