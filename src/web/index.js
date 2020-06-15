export const ua = navigator.userAgent.toLowerCase();

export const isWeiXin = () => {
	return ua.match(/microMessenger/i) === 'micromessenger'
}

export const isDeviceMobile = () => {
	return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

export const isQQBrowser = () => {
	return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}

export const isSpider = () => {
	return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua)
}

export const isPC = () => {
	const userAgentInfo = navigator.userAgent
	const Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"]
	let flag = true
	for (let v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

export const isIos = () => {
	const u = navigator.userAgent
	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {  //安卓手机
		return false
	} else if (u.indexOf('iPhone') > -1) {//苹果手机
		return true
	} else if (u.indexOf('iPad') > -1) {//iPad
		return false
	} else if (u.indexOf('Windows Phone') > -1) {//winphone手机
		return false
	} else {
		return false
	}
}

export const download = (url) => {
	const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1
	const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1
	if (isChrome || isSafari) {
		const link = document.createElement('a')
		link.href = url;
		if (link.download !== undefined) {
			const fileName = url.substring(url.lastIndexOf('/') + 1, url.length)
			link.download = fileName;
		}
		if (document.createEvent) {
			const e = document.createEvent('MouseEvents')
			e.initEvent('click', true, true);
			link.dispatchEvent(e);
			return true;
		}
	}
	if (url.indexOf('?') === -1) {
		url += '?download';
	}
	window.open(url, '_self');
	return true;
}

export const hasClass = (el, className) => {
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
	return reg.test(el.className)
}

export const injectScript = (src) => {
	const s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = true;
	s.src = src;
	const t = document.getElementsByTagName('script')[0];
	t.parentNode.insertBefore(s, t);
}

export const getQueryString = (name) => {
	const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	const search = window.location.search.split('?')[1] || '';
	const r = search.match(reg) || [];
	return r[2];
}

export const addClass = (el, className) => {
	if (hasClass(el, className)) {
		return
	}
	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}

export const removeClass = (el, className) => {
	if (!hasClass(el, className)) {
		return
	}
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
	el.className = el.className.replace(reg, ' ')
}

export const getScrollPosition = (el = window) => ({
	x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
	y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

export const scrollToTop = () => {
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 8);
	}
}

// el是否在视口范围内  partiallyVisible 部分可见
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
	const {top, left, bottom, right} = el.getBoundingClientRect();
	const {innerHeight, innerWidth} = window;
	return partiallyVisible
		? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
		((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
		: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

// 劫持粘贴板
export const copyTextToClipboard = (value) => {
	const textArea = document.createElement("textarea")
	textArea.style.background = 'transparent';
	textArea.value = value;
	document.body.appendChild(textArea);
	textArea.select();
	try {
		const successful = document.execCommand('copy')
	} catch (err) {
		console.log('Oops, unable to copy');
	}
	document.body.removeChild(textArea);
}
