const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const SuperHero = require('./models/SuperHero')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/SUPERHEROES_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.post('/api/heroes', (req, res) => {
  const {name, superPower, img, universe, nemesis} = req.body
  const newHero = {name, superPower, img, universe, nemesis}
  SuperHero(newHero).save((err, savedHero) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', data: savedHero})
    }
  })
})

app.get('/api/heroes', (req, res) => {
  SuperHero.find((err, superHeroes) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', superHeroes })
    }
  })
})

app.get('/api/heroes/:heroId', (req, res) => {
  const heroId = req.params.heroId
  SuperHero.findById({_id: heroId}, (err, hero) => {
    if (err) {
      res.json({ error: err})
    } else {
      res.json({ msg: `Found: ${heroId}`, hero })
    }
  })
})

app.delete('/api/heroes/:heroId', (req, res) => {
  const heroId = req.params.heroId
  SuperHero.remove({_id: heroId}, (err, hero) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: `Deleted: ${hero}` })
    }
  })
})

const server = app.listen(port, () => console.log(`Running on port: ${port}🔥`))

module.exports = server
