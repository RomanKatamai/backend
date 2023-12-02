const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: '9524',
    host: 'localhost',
    port: 5432,
    database: 'RepairOrModernization'
})

module.exports = pool