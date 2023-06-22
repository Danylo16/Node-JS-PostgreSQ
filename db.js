const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '4510203',
    port: 5433,
    database: 'node_psql'
})



module.exports = pool