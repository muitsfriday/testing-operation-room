export default class WriterX {
  constructor(db) {
    this.db = db
  }

  async getNovels() {
    const novels = await this.db.fetchGET('novels')
    return novels
  }

  async getNovel(id) {
    const novels = await this.db.fetchGET('novels')
    const matchedIdNovel = novels.filter(n => n.id === id)
    return matchedIdNovel.length ? matchedIdNovel[0] : {}
  }
}
