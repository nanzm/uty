const qs = require('query-string')

export function hi () {
  return 'hello uty'
}

export function getQuery (url) {
  return qs.parse(url)
}

console.log(getQuery())
