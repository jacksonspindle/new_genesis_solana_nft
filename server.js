const express = require('express')
const app = express()
const { seed, Team, Nft, conn } = require('./db')
const path = require('path')

app.use('/dist', express.static('dist'))
app.use('/public', express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))

app.get('/api/team', async(req, res, next) => {
    try {
        res.send(await Team.findAll())
    } catch (ex) {
        next(ex)
    }
})

const setup = async() => {
    try {
        await conn.sync({force: true})
        await seed()
        const port = process.env.PORT || 3000
        app.listen(port, () => console.log(`listening on port ${port}`))
    } catch (ex) {
        console.log(ex)
    }
}

setup()