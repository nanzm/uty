import uty from '../src/index'

test('type judge', () => {
  const type = uty.type

  expect(type.isArray([])).toEqual(true)
  expect(type.isArray({})).toEqual(false)

  expect(type.isBoolean(true)).toEqual(true)
  expect(type.isBoolean(false)).toEqual(true)

  expect(type.isDate(new Date())).toEqual(true)

  expect(type.isError(new Error(''))).toEqual(true)

  const f = (i) => i
  expect(type.isFunction(f)).toEqual(true)

  expect(type.isNull(null)).toEqual(true)
  expect(type.isNull(undefined)).toEqual(false)
})

test('uty.common.utils', () => {
  const { isEmail, isURL } = uty.common.utils

  expect(isEmail('test@email.com')).toEqual(true)
  expect(isURL('https://fanyi.baidu.com/')).toEqual(true)
})

test('uty.common.npm', () => {
  const { getDayFmt } = uty.common.npm

  expect(getDayFmt()).toHaveLength(19)
})

test('uty.node', () => {
  const { isWin } = uty.node

  expect(isWin()).toBeFalsy()
})

test('uty.web', () => {
  const { ua } = uty.web

  expect(typeof ua).toEqual('string')
})
