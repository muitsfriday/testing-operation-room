import DB from '@app/libs/db'
import cate from '@app/configs/category'

let requestCount = 0

export default class Writer {
  constructor() {
    this.db = new DB()
  }

  async getNovels() {
    const novels = await this.db.fetchGET('novels')
    requestCount += 1
    return novels
  }

  async getNovel(id) {
    const novels = await this.getNovels()
    const matchedIdNovel = novels.filter(n => n.id === id)
    return matchedIdNovel.length ? matchedIdNovel[0] : {}
  }

  getRequestCount() {
    return requestCount
  }

  static mapNovel(novel) {
    return {
      id: novel.id,
      title: novel.title,
      description: novel.description,
      categoryText: cate[novel.category],
    }
  }
}
