'use strict'

export default function loggerMiddleware(req, res, next) {
    console.debug(`${req.method} ${req.originalUrl}`)
    next()
}