// 重定向页面，这里应该采用用于登录的页面
const redirectPages = '/pages/wechatLogin/wechatLogin';
const baseUrl = 'https://www.lyhxxcx.cn/';

// 封装的统一 request 请求 
const sendRequest = (url, method = 'GET', data = {}, contentType = 'application/json') => {
	// 如果用户没有token信息（则表示）未登录状态，做一个跳转
	var baseToken = uni.getStorageSync('token');
	if (baseToken == null || baseToken == "") {
		redirectToLogin();
		throw new Error('无法操作 - 因为没有登录'); //传入message
	}

	// 发送reqest请求，并包含token信息
	var token = "Bearer " + baseToken || '';
	console.log('Get Token Information: ' + token);

	// 构建请求的 request 信息
	return new Promise(function(resolve, reject) {
		uni.request({
			url: baseUrl + url,
			data: data,
			method: method,
			header: {
				'Content-Type': contentType,
				// 'Accept': 'application/json, text/javascript, */*; q=0.01',
				'Accept': '*/*',
				'Authorization': token
			},

			success(res) {
				// 认证返回的token信息不为空，则更新token
				var authorization = res.header.authorization || res.header.Authorization;
				if (authorization) {
					uni.setStorageSync('token', authorization);
				}

				// 获取状态码并解析
				var code = res.statusCode;
				switch (code) {
					case 401:
						redirectToLogin();
						break;
					case 404:
						error404page();
						break;
					default:
						resolve(res);
						break;
				}
			},
			fail(err) {
				reject(err);
			}
		})
	})
}



/**
 * 跳转到登陆页面
 */
function redirectToLogin() {
	// 跳转到登录页面
	uni.showModal({
		title: '登录提示',
		content: '身份已过期，请重新登录后再来操作！',
		success: ress => {
			if (ress.confirm) {
				uni.redirectTo({
					url: redirectPages,
				})
			}
		},
		fail(err) {
			uni,
			uni.showToast({
				title: "未登录",
				icon: 'none'
			})
		}
	})
}

/**
 * 404 未找到页面错误
 */
function error404page() {
	uni.showToast({
		title: "服务器资源错误 - 404",
		icon: 'none',
		duration: 2000,
	})
}


export default {
	sendRequest: sendRequest
}
