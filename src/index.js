'use strict'

import config from 'config'
import api from './views/index.js'

console.log(`Bienvenido al servidor de CodeMasters`)
console.log(`   Examen UAX 23 de mayo de 2024`)

await api(config.server)
