const express = require('express')
const orderRouter = require('./routes/order.routes')
const PORT = process.env.PORT || 8080
const cors = require('cors')
const app = express()

app.use(cors({credentials: true}))
app.use(express.json())
app.use('/api', orderRouter)
app.post('/',  (req, res) => {
    const requestData = req.body;
    res.json({message: 'Дані надходять', data: requestData});
})

app.listen(PORT, () => console.log(`server started on post ${PORT}`)
)