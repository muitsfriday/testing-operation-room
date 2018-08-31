import { Router } from 'express'
import DB from '@app/libs/dbx'
import Writer from '@app/libs/wrtierx'

const router = Router()

const db = new DB()

router.get('/novel/:id', async (req, res) => {
  const writer = new Writer(db)
  const novel = await writer.getNovel(req.params.id)
  res.json(novel)
})

router.get('/api/novels', async (req, res) => {
  const writer = new Writer(db)
  const novels = await writer.getNovels()
  // const mappedNovels = novels.map(n => Writer.mapNovel(n))
  res.json(novels)
})

router.get('/api/meta', async (req, res) => {
  const writerRequestCount = db.getRequestCount()
  res.json({
    apiRequestMakes: {
      writer: writerRequestCount,
    },
  })
})

router.get('/', (_, res) => res.end('Hello, world'))

export default router
