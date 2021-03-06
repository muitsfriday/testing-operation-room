import { Router } from 'express'
import Writer from '@app/libs/writer'

const router = Router()

router.get('/novel/:id', async (req, res) => {
  const writer = new Writer()
  const novel = await writer.getNovel(req.params.id)
  res.json(novel)
})

router.get('/api/novels', async (req, res) => {
  const writer = new Writer()
  const novels = await writer.getNovels()
  const mappedNovels = novels.map(n => Writer.mapNovel(n))
  res.json(mappedNovels)
})

router.get('/api/meta', async (req, res) => {
  const writer = new Writer()
  const writerRequestCount = writer.getRequestCount()
  res.json({
    apiRequestMakes: {
      writer: writerRequestCount,
    },
  })
})

router.get('/', (_, res) => res.end('Hello, world'))

export default router
