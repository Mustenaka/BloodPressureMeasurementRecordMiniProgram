<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">我的微信账户信息</text>
		</view>

		<!-- 中部选择框 -->
		<view class="box">
			<!-- 中部选择框 -->
			<view class="item">
				<image class="logo" :src='Avatar_Url'></image>
			</view>

			<view class="item">
				<text>用户名</text>
				<uni-section title="默认" type="line" padding>
					<uni-easyinput errorMessage v-model="userName" focus placeholder="请输入内容" @input="input">
					</uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>真实姓名</text>
				<uni-section title="默认" type="line" padding>
					<uni-easyinput errorMessage v-model="RealName" focus placeholder="请输入内容" @input="input">
					</uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>电话</text>
				<uni-section title="默认" type="line" padding>
					<uni-easyinput errorMessage v-model="Tellphone" focus placeholder="请输入内容" @input="input">
					</uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>邮箱</text>
				<uni-section title="默认" type="line" padding>
					<uni-easyinput errorMessage v-model="Email" focus placeholder="请输入内容" @input="input">
					</uni-easyinput>
				</uni-section>
			</view>

			<view class="item">
				<button type="primary" @click="submit">修改</button>
			</view>
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
				RealName: '',
				userName: "龙医护心",
				Tellphone: "-",
				Email: "-",
				Avatar_Url: "/static/project-logo.png",
			};
		},

		onLoad() {
			this.getData();
		},

		methods: {
			getData() {
				const url = 'http://1.117.222.119/v1/user';
				this.$http.sendRequest(url, 'GET', {}).then(
					res => {
						//成功回调
						console.log(res);

						var data = res.data.data;
						this.userName = data.user_name;
						this.RealName = data.real_name;
						this.Tellphone = data.tel;
						this.Email = data.email;
						this.Avatar_Url = data.avatarUrl;
					}).catch(err => {
					//请求失败
					console.log(err);
				})
			},

			// 提交更新
			submit() {
				const url = 'http://1.117.222.119/v1/user/user';
				this.$http.sendRequest(url, 'PUT', {
					"username": this.userName,
					"realname": this.RealName,
					"telephone": this.Tellphone,
					"email": this.Email,
					"avatarUrl": this.Avatar_Url
				}).then(
					res => {
						//成功回调
						console.log(res);

						// 录入成功
						uni, uni.showToast({
							title: "修改成功",
							icon: 'none'
						})
					}).catch(err => {
					//请求失败
					console.log(err);
					uni, uni.showToast({
						title: "请求失败",
						icon: 'none'
					})
				})
			},
		}
	}
</script>


<style lang="scss">
	.home {
		.header {
			background-color: #6FAD8F;
			padding: 25rpx;
			padding-bottom: 60rpx;

			height: 250rpx;
			width: 700rpx;
		}

		.logo {
			height: 200rpx;
			width: 200rpx;
			margin-top: -20rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
		}

		.header-text {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			font-size: 48rpx;
		}

		.body {
			padding: 0 30rpx;
			background-color: #ECECEC;
		}

		.example-body {
			background-color: #fff;
			padding: 10px;
		}

		.box {
			background-color: #fff;
			border-radius: 25rpx;

			margin: 0 30rpx;
			margin-top: -200rpx;

			// display: flex;
			flex-wrap: wrap;
			justify-content: center;

			width: 700rpx;
			height: 85vh;
			padding: 60rpx 25rpx;

			box-shadow: 9px 10px 16px rgba(0, 0, 0, 0.5);
			box-sizing: border-box;
		}

		.form-item {}

		.item {
			width: 98%;

			display: flex;
			box-sizing: border-box;

			margin: 2rpx 0;
			padding: 10rpx;

			align-items: center;
			text-align: left;
			justify-content: space-between;

			flex-direction: row;

			font-weight: 550;
			font-size: 80%;

		}

		.slogan {
			font-size: 9pt;
		}
	}
</style>
