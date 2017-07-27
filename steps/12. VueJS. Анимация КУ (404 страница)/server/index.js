import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import webpackDevServerConfig from './webpackDevServerConfig'

const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json())
app.use('/dist', express.static('dist'))

webpackDevServerConfig(app)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, () => console.log('Server listen on port =', port, 'ENV =', process.env.NODE_ENV))
