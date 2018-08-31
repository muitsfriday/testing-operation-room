import fetch from 'node-fetch'

export default class DB {
  constructor() {
    this.baseURI = 'https://my-json-server.typicode.com/muitsfriday/jsondb-novel/'
  }

  async fetchGET(apiPath) {
    const uri = `${this.baseURI}${apiPath}`
    const res = await fetch(uri)
    const data = await res.json()
    return data
  }
}
