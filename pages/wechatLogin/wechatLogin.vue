<template>
	<view class="content">
		<text>微信登录</text>
		<view class="text-area">
			<button style="margin-top: 200rpx;" type="primary" @click="login">微信登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			login() {
				uni.getUserProfile({
					// 这个参数是必须的，desc属性,（声明获取用户信息后的用途）后续会展示在弹窗中
					desc: '微信快捷登录',
					success: (res) => {
						// step1. 用户点击了允许，拿到了用户信息
						console.log("用户信息: " + JSON.stringify(res.userInfo))
						let userInfo = res.userInfo

						// step2. 调用uni.login(). 获取code
						uni.login({
							provider: 'weixin', // 登陆服务提供商，注意是weixin，不是wechat
							success: (res2) => {
								uni.showLoading({
									title: '登陆中'
								})

								// 获取code
								var code = res2.code
								console.log("用户code获取成功:" + JSON.stringify(res2))

								// step3: 向后端服务器发送请求
								uni.request({
									url: 'http://1.117.222.119/wxlogin',
									method: 'POST',
									header: {
										"content-type": "application/json",
										// "source": "fromApp"
									},
									data: {
										"code": code
									},

									// 把数据发送给后端
									success: (res3) => {
										// 登录成果
										console.log('登陆成功:' + JSON.stringify(res3
											.data));

										// 登录成功
										if (res3.data.err_code == 0) {
											// 存储token
											var token = res3.data.data.token
											uni.setStorageSync('token', token);

											// 隐藏加载界面
											uni.hideLoading();

											// 重定向到主页面
											uni.switchTab({
												//保留当前页面，跳转到应用内的某个页面
												url: '/pages/index/index',
												animationType: "pop-in",
												animationDuration: 200,
											});
										} else if (res3.data.err_code == 40003) {
											// 登陆失败，没有该用户 - 执行自动注册程序
											uni.request({
												url: 'http://1.117.222.119/wxregister',
												method: 'POST',
												header: {
													"content-type": "application/json",
												},
												data: {
													"code": code
												},
											})
										} else {
											// 登陆失败
											uni.hideLoading();
											uni, uni.showToast({
												title: "登陆失败",
												icon: 'none'
											})
										}
									},
									fail: (err) => {
										uni.hideLoading()
										uni, uni.showToast({
											title: "登陆失败",
											icon: 'none'
										})
									},
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
	}
</style>
