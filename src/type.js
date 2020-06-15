export const isString = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

export const isNumber = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

export const isBoolean = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

export const isFunction = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

export const isNull = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

export const isUndefined = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}
export const isObj = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}
export const isArray = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

export const isDate = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

export const isRegExp = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}
export const isError = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}
export const isSymbol = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

export const isPromise = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

export const isSet = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

