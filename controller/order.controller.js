const db = require('../db')
const {values} = require("pg/lib/native/query");
class OrderController {
    async createOrder(req, res) {
        const {date, delivery , orderReadiness ,
            paymentOfTransport , place ,
            repairOfModernization ,
            urgentRepair
        } = req.body
        const newOrders = await db.query('INSERT INTO orders(date, delivery , orderReadiness,paymentOfTransport , place ,repairOfModernization ,urgentRepair) values ' +
            '($1, $2, $3, $4, $5, $6, $7) RETURNING *', [date, delivery , orderReadiness , paymentOfTransport , place , repairOfModernization , urgentRepair])
        res.json(newOrders.rows[0])
    }
}
module.exports = new OrderController()