<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">我的检查报告列表</text>
		</view>

		<!-- 中部选择框 -->
		<view class="box">
			<view class="item" @click="toBpr24Hours">
				<text>24小时动态血压报告</text>
			</view>
			<view class="item" @click="toEcg24Hours">
				<text>24小时动态心电图（ECG）</text>
			</view>
			<view class="item" @click="toEcg">
				<text>心电图（ECG）</text>
			</view>
			<view class="item" @click="toEchocardiography">
				<text>心超</text>
			</view>
		</view>

		<!-- 尾部空白框，计划留作公司信息展示框 -->
		<view class="box" style="margin-top: 30px;">
			<text class="slogan">龙医护心小程序 - 守护您的健康</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图列表
				swiperList: [
					'../../static/swiper/swiper1.png',
					'../../static/swiper/swiper2.png',
				],
			}
		},
		methods: {
			// 跳转到 患者信息 界面
			toBpr24Hours() {
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url: 'bpr24Hours/bpr24Hours',
					animationType: "pop-in",
					animationDuration: 200,
				});
			},

			// 跳转到我的检验指标
			toEcg24Hours() {
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url: 'ecg24Hours/ecg24Hours',
					animationType: "pop-in",
					animationDuration: 200,
				});
			},

			// 跳转到
			toEcg() {
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url: 'ecg/ecg',
					animationType: "pop-in",
					animationDuration: 200,
				});
			},

			// 跳转到
			toEchocardiography() {
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url: 'echocardiography/echocardiography',
					animationType: "pop-in",
					animationDuration: 200,
				});
			},
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
			height: 200rpx;
			background-color: #6FAD8F;
			padding: 25rpx;
			padding-bottom: 60rpx;
		}

		.header-text {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			font-size: 48rpx;
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
			width: 100%;

			border-style: solid;
			border-width: 1px;
			border-color: black;
			border-radius: 20rpx;
			box-shadow: 4px 5px 8px rgba(0, 0, 0, 0.3);

			display: flex;
			box-sizing: border-box;

			margin: 8rpx 0;
			padding: 16rpx;

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
