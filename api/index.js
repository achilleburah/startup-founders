import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/index.js'

const USERNAME = 'startup-founder-admin'
const PASSWORD = '&F3pUeyzmdJbzk23ZF*Eh!VM0*dq0*RHrtvjMx5h'

const PASSWORD_CONNECTION_URL = `mongodb+srv://startup-founder-admin:&F3pUeyzmdJbzk23ZF*Eh!VM0*dq0*RHrtvjMx5h@cluster0.od4uw.mongodb.net/StartupFoundersDatabase?retryWrites=true&w=majority`

const CONNECTION_URL =
  'mongodb+srv://cluster0.od4uw.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority'

const command =
  '"mongodb+srv://cluster0.od4uw.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509" --tls --tlsCertificateKeyFile'

const PORT = process.env.port || 3000

const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/', router)

mongoose
  .connect(PASSWORD_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server is listening on port', PORT)
    })
  })
  .catch(error => {
    console.error('Error: ', error.message)
  })
