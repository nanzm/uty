export const isEmail = (s) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

export const isMobile = (s) => {
  return /^1[0-9]{10}$/.test(s)
}

export const isPhone = (s) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

export const isURL = (s) => {
  return /^http[s]?:\/\/.*/.test(s)
}

export const removeHtmlTag = (str) => {
  return str.replace(/<[^>]+>/g, '')
}

// 洗牌算法随机
export const shuffle = (arr) => {
  var result = []
  var random
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length)
    result.push(arr[random])
    arr.splice(random, 1)
  }
  return result
}

// 判断字符串类型
export const checkStr = (str, type) => {
  switch (type) {
    case 'phone':   // 手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
    case 'tel':     // 座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    case 'card':    // 身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'pwd':     // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal':  // 邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str)
    case 'QQ':      // QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
    case 'email':   // 邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
    case 'money':   // 金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str)
    case 'URL':     // 网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
    case 'IP':      // IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str)
    case 'date':    // 日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
    case 'number':  // 数字
      return /^[0-9]$/.test(str)
    case 'english': // 英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': // 中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str)
    case 'lower':   // 小写
      return /^[a-z]+$/.test(str)
    case 'upper':   // 大写
      return /^[A-Z]+$/.test(str)
    case 'HTML':    // HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
    default:
      return true
  }
}

// 数组排序，{type} 1：从小到大 2：从大到小 3：随机
export const sort = (arr, type = 1) => {
  return arr.sort((a, b) => {
    switch (type) {
      case 1:
        return a - b
      case 2:
        return b - a
      case 3:
        return Math.random() - 0.5
      default:
        return arr
    }
  })
}

export const unique = (arr) => {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr))
  } else {
    const n = {}
    const r = []
    for (let i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true
        r.push(arr[i])
      }
    }
    return r
  }
}

export const removeArrEl = (arr, ele) => {
  const index = arr.indexOf(ele)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}

export const formArray = (ary) => {
  let arr = []
  if (Array.isArray(ary)) {
    arr = ary
  } else {
    arr = Array.prototype.slice.call(ary)
  }
  return arr
}

// 去除空格, type: 1-所有空格 2-前后空格 3-前空格 4-后空格
export const trim = (str, type) => {
  type = type || 1
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '')
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '')
    case 3:
      return str.replace(/(^\s*)/g, '')
    case 4:
      return str.replace(/(\s*$)/g, '')
    default:
      return str
  }
}

// 字符转换, type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
export const changeCase = (str, type) => {
  type = type || 4
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
      })
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
      })
    case 3:
      return str.split('').map(function (word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase()
        } else {
          return word.toLowerCase()
        }
      }).join('')
    case 4:
      return str.toUpperCase()
    case 5:
      return str.toLowerCase()
    default:
      return str
  }
}

// 检测密码强度
export const checkPwd = (str) => {
  let Lv = 0
  if (str.length < 6) {
    return Lv
  }
  if (/[0-9]/.test(str)) {
    Lv++
  }
  if (/[a-z]/.test(str)) {
    Lv++
  }
  if (/[A-Z]/.test(str)) {
    Lv++
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++
  }
  return Lv
}
