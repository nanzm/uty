import uty, {getQuery} from '../src/index'

test('uty', () => {
	const {
		isArray,
		isBoolean,
		isDate,
		isError,
		isFunction,
		isNull,
		isObj,
		isRegExp,
		isPromise,
		isUndefined
	} = uty.type

	expect(isArray([])).toEqual(true)
	expect(isArray({})).toEqual(false)

	expect(isBoolean(true)).toEqual(true)
	expect(isBoolean(false)).toEqual(true)

	expect(isDate(new Date())).toEqual(true)

	expect(isError(new Error(""))).toEqual(true)

})

test('t1', () => {
})
