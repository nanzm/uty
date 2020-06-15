import dj from "dayjs"
import qs from "query-string"

export function getDayFmt() {
	return dj().format('YYYY-MM-DD HH:mm:ss')
}


export function getQuery(str) {
	return qs.parse(str)
}
