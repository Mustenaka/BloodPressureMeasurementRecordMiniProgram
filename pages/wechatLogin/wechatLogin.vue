<template>
	<view class="content">
		<h1>微信登录</h1>
		<view class="text-area">
			<button class="button-style" type="primary" @click="login">微信登录</button>
			<button class="button-style" type="primary" @click="register">微信注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return { }
		},
		created() {
			console.log("create触发")
			this.tester()
		},
		methods: {
			// 登录方法
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
								console.log("用户code获取:" + JSON.stringify(res2))
								console.log("UserInfo:", JSON.stringify(userInfo))

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
										console.log('登陆:' + JSON.stringify(res3
											.data));

										// 登录成功 code = 0
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
											
											// 隐藏加载界面
											uni.hideLoading();
											
											uni, uni.showToast({
												title: "登陆失败-请先注册",
												icon: 'none'
											})
										} else {
											// 登陆失败
											uni.hideLoading();
											uni, uni.showToast({
												title: "登陆失败-可能是网络问题",
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
			},

			// 注册方法
			register() {
				uni.getUserProfile({
					desc: '第一次使用自动注册',
					success: (res) => {
						// step1. 用户点击了允许，拿到了用户信息
						console.log("用户信息: " + JSON.stringify(res.userInfo))
						let userInfo = res.userInfo

						// step2. 调用uni.login(). 获取code
						uni.login({
							provider: 'weixin',
							success: (res2) => {
								uni.showLoading({
									title: '注册中'
								})

								// 获取code
								var code = res2.code
								console.log("用户code获取成功:" + JSON.stringify(res2))
								console.log("UserInfo:", JSON.stringify(userInfo))

								// 登陆失败，没有该用户 - 执行自动注册程序
								uni.request({
									url: 'http://1.117.222.119/wxregister',
									method: 'POST',
									header: {
										"content-type": "application/json",
									},

									data: {
										"code": code,
										"username": userInfo.nickName,
										"sex": (userInfo.gender == 0) ? "男" : "女",
										"avatarUrl": userInfo.avatarUrl
									},

									success: (res3) => {
										console.log("注册:" +
											JSON.stringify(
												res3.data));
										
										// 隐藏加载界面
										uni.hideLoading();
										
										uni, uni.showToast({
											title: "注册成功",
											icon: 'none'
										})
									},
									fail: (err) => {
										uni.hideLoading()
										uni, uni.showToast({
											title: "注册失败",
											icon: 'none'
										})
									},
								})
							}
						})
					}
				})
			},
		
			// 测试方法
			tester(){
				console.log("target tester!");
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	
	.text-area {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.button-style {
/* 		height: 300rpx;
		width: 200rpx; */
		margin-top: 200rpx;
	}
</style>
