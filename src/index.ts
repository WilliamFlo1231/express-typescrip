import express from 'express' // ESModules

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware que transforma el req.body a un json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('pinged here!')
  res.send('PONG')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ${new Date().toLocaleDateString()}`)
})
