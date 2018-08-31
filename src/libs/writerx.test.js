import Writer from '@app/libs/wrtierx'
// import DB from '@app/libs/dbx'

// jest.mock('@app/libs/dbx')

/*
test('success create instance', () => {
	const writer = new Writer()
	expect(() => {new Writer()}).not.toThrow()
})
*/

test('success list articles', () => {
  const getArticlesFn = jest.fn()
  getArticlesFn.mockResolvedValue([{ id: 1 }])

  const mockDB = {
    fetchGET: getArticlesFn,
  }
  const writer = new Writer(mockDB)
  expect(writer.getNovels()).resolves.toEqual([{ id: 1 }])
})

test('success get article id 2', () => {
  const getArticlesFn = jest.fn()
  getArticlesFn.mockResolvedValue([{ id: 1 }, { id: 2 }])

  const mockDB = {
    fetchGET: getArticlesFn,
  }
  const writer = new Writer(mockDB)
  expect(writer.getNovel(2)).resolves.toEqual({ id: 2 })
})
