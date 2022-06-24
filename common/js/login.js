import {
	error
} from "console";
import {
	json
} from "node:stream/consumers";

/**
 * 登录逻辑:
 * 1. 拿到用户信息上传微信login接口并生成code
 * 2. 拿到code上传后端接口，返回token
 * 3. 拿到token成功 - 跳转到index界面（返回原始界面） 失败 - 被则重定向注册接口
 */
function login() {
	var code = '';
	var token = '';

	// 获取用户信息
	uni.getUserProfile({
		// 这个参数是必须的，desc属性,（声明获取用户信息后的用途）后续会展示在弹窗中
		desc: '微信快捷登录',
		success: (info) => {
			console.log('用户info' + JSON.stringify(info.userInfo));
			// 获取用户code
			uni.login({
				provider: 'weixin', // 登陆服务提供商，注意是weixin，不是wechat
				success: (res) => {
					// 设置登录状态
					uni.showLoading({
						title: '登陆中'
					})
					// 获取code
					code = res.code;
					console.log('用户code:' + code);
				},
				fail: (err) => {
					uni.hideLoading();
					uni.showToast({
						title: "登陆失败 - 无法获取用户code",
						icon: 'none',
						duration: 2000,
					})
					return;
				}
			});
		},
		fail: (err) => {
			uni.hideLoading();
			uni.showToast({
				title: "登陆失败 - 无法获取用户信息",
				icon: 'none',
				duration: 2000,
			})
			return;
		}
	});

	// 通过code获取token
	uni.request({
		url: 'https://www.lyhxxcx.cn/wxlogin',
		method: 'POST',
		header: {
			"content-type": "application/json",
		},
		data: {
			"code": code
		},
		success: (res) => {
			// 获取用户错误码 - 为0则表示获取成功
			let err_code = res.data.err_code
			console.log('用户token:' + token);

			switch (err_code) {
				case 0:
					// 登陆成功
					token = res.data.data.token
					break;
				case 40003:
					// 登陆失败，没有注册
					throw "登陆失败，用户没有注册"
					break;
				default:
					// 登陆失败，网络问题
					throw "登陆失败，网络问题"
			}
		},
		fail: (err) => {
			uni.hideLoading();
			uni.showToast({
				title: "登陆失败 - 无法通过code生成token;Detail: " + err.errMsg,
				icon: 'none',
				duration: 2000,
			})
			return;
		}
	});

	// 前端记录token
	uni.setStorageSync('token', token);

	// 隐藏加载界面
	uni.hideLoading();

	// 重定向到主界面
	uni.switchTab({
		//保留当前页面，跳转到应用内的某个页面
		url: '/pages/index/index',
		animationType: "pop-in",
		animationDuration: 200,
	});
}
