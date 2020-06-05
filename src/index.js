const qs = require('query-string')
import * as type from "./type"
import * as utils from "./utils"

export function getQuery(url) {
	return qs.parse(url)
}

export default {
	type,
	utils
}

