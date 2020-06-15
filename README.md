# uty

![Actions Release](https://github.com/nanzm/uty/workflows/Actions%20Release/badge.svg)

### 类型判断


```javascript
import uty from "uty"

// uty.type 类型判断


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
```


<a name="web"></a>
### web


```javascript
import uty from "uty"

// uty.web web环境下的一些工具函数

const { ua } = uty.web
 
expect(typeof ua).toEqual('string')
```


<a name="node"></a>
### node


```javascript
import uty from "uty"

// uty.node  node环境下的一些工具函数

const { isWin } = uty.node

expect(isWin()).toBeFalsy()
```


<a name="common"></a>
### common


```javascript
import uty from "uty"

// uty.common.npm  npm库的一些常用方法扩展 
 const { getDayFmt } = uty.common.npm

  expect(getDayFmt()).toHaveLength(19)



// uty.common.utils  通用工具库

const { isEmail, isURL } = uty.common.utils

expect(isEmail('test@email.com')).toEqual(true)
expect(isURL('https://fanyi.baidu.com/')).toEqual(true)
```
