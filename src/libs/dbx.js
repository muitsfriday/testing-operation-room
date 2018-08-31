import fetch from 'node-fetch'

export default class DB {
  constructor() {
    this.baseURI = 'https://my-json-server.typicode.com/muitsfriday/jsondb-novel/'
    this.requestCount = 0
  }

  async fetchGET(apiPath) {
    const uri = `${this.baseURI}${apiPath}`
    const res = await fetch(uri)
    const data = await res.json()
    this.requestCount += 1
    return data
  }

  getRequestCount() {
    return this.requestCount
  }
}
