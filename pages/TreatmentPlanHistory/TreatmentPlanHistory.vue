<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">历史治疗方案</text>
		</view>

		<!-- 中部选择框 -->
		<view class="box">
			<!-- 中部选择框 -->
			<view class="item">
				<text>我的治疗方案</text>
				<text>2022/05/24</text>
			</view>
			<view class="item">
				<uni-section title="多行文本自动高度" subTitle="使用属性 autoHeight 使多行文本框自动增高" type="line" padding>
					<uni-easyinput disabled type="textarea" autoHeight v-model="value" placeholder="请输入内容"></uni-easyinput>
				</uni-section>
			</view>

			<view class="item">
				<button type="primary" @click="submit">新增治疗方案</button>
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
				value: '适合治疗高血压的方剂有很多，例如常用的有天麻钩藤饮，擅治肝阳上亢型高血压，还有镇肝熄风汤、羚角钩藤汤，擅治肝阳上亢、阳化风动型高血压。龙胆泻肝汤擅于治疗肝阳化火型高血压，半夏白术天麻汤擅于治疗痰浊中阻型高血压，血府逐瘀汤适合治疗瘀血阻滞导致的高血压。\r\n如果高血压是血虚火盛而导致，适合选用芎归芍药汤进行治疗，知柏地黄丸擅于治疗肾阴亏虚、虚火上扰所致的高血压，以上仅是临床个人常用的治疗高血压的方剂。',
			};
		},

		methods: {
			input(e) {
				console.log('输入内容：', e);
			},
			iconClick(type) {
				uni.showToast({
					title: `点击了${type==='prefix'?'左侧':'右侧'}的图标`,
					icon: 'none'
				})
			}
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

			box-sizing: border-box;

			margin: 2rpx 0;
			padding: 10rpx;

			align-items: center;
			text-align: left;

			flex-direction: row;

			font-weight: 550;
			font-size: 80%;

		}

		.slogan {
			font-size: 9pt;
		}
	}
</style>
