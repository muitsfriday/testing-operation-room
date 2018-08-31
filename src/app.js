import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import routes from '@app/routes-r'

const app = express()
const PORT = 3000

app.set('trust proxy')
app.set('view engine', 'pug')
app.use(helmet())
app.use(compression())
app.use(routes)

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`) // eslint-disable-line no-console
})
