<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<image class="swiper-image" :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>

		<view class="box">
			<button class="button-style" type="primary" @click="login">微信登录</button>
			<button class="button-style" type="primary" @click="register">微信注册</button>
		</view>

		<!-- 尾部空白框，计划留作公司信息展示框 -->
		<view class="box" style="margin-top: 30px;">
			<text class="slogan">高血压健康记录小程序 - 守护您的健康</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图列表
				swiperList: [
					'../../static/swiper/swiper2.png',
				],
			}
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
											console.log('Token:' + token);
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
			tester() {
				console.log("target tester!");
			}
		}
	}
</script>

<style lang="scss">
	.home {
		.swiper-image {
			height: 250rpx;
			width: 700rpx;
			box-shadow: 1 1 10rpx rgba(0, 0, 0, 1);
			border-radius: 25rpx;
		}

		.body {
			padding: 0 30rpx;
			background-color: #ECECEC;
		}

		.header {
			background-color: #6FAD8F;
			padding: 25rpx;
			padding-bottom: 60rpx;
		}

		.box {
			background-color: #fff;
			border-radius: 25rpx;

			margin: 0 30rpx;
			margin-top: -50rpx;

			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			width: 700rpx;
			padding: 60rpx 25rpx;

			box-shadow: 9px 10px 16px rgba(0, 0, 0, 0.5);
			box-sizing: border-box;
		}

		.item {
			width: 33.3%;

			display: flex;
			box-sizing: border-box;

			margin: 2rpx 0;
			padding: 10rpx;

			align-items: center;
			text-align: center;

			line-height: 60rpx;
			flex-direction: column;
			font-weight: 550; // 400 is normal 700 is bold
			font-size: 80%;

		}

		.slogan {
			font-size: 9pt;
		}
	}
</style>
