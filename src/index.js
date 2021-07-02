const express = require('express')

const app = express()

const routes = require('./routes/index')

const PORT = process.env.PORT || 3333

app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))