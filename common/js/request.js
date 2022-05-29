// 重定向页面，这里应该采用用于登录的页面
const redirectPages = '/pages/wechatLogin/wechatLogin'

//封装request请求
const sendRequest = (url, method = 'GET', data = {}, contentType = 'application/json') => {
	//判断header提交数据类型
	let types = '';
	// if (method == 'POST' && !contentType) {
	// 	types = 'application/x-www-form-urlencoded'
	// } else if (method == 'POST' && contentType) {
	// 	types = contentType
	// } else {
	// 	types = 'application/json';
	// }

	var token = "Bearer " + uni.getStorageSync('token') || '';
	console.log('get Token:' + token);

	return new Promise(function(resolve, reject) {
		uni.request({
			url: url,
			data: data,
			method: method,
			header: {
				'Content-Type': contentType,
				// 'Accept': 'application/json, text/javascript, */*; q=0.01',
				'Accept': '*/*',
				'Authorization': token
			},
			success(res) {
				if (res.header.authorization || res.header.Authorization) {
					uni.setStorageSync('token', res.header.authorization || res.header
						.Authorization);
				}
				var code = res.statusCode;
				switch (code) {
					case 401:
						uni.showModal({
							title: '登录提示',
							content: '身份已过期，请重新登录后再来操作！',
							success: ress => {
								if (ress.confirm) {
									uni.redirectTo({
										url: redirectPages,
									})
								}
							}
						})
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

// module.exports.sendRequest = sendRequest

export default {
	sendRequest: sendRequest
}
