<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">推送设置</text>
		</view>

		<!-- 中部选择框 -->
		<view class="box">
			<!-- 中部选择框 -->
			<view class="item">
				<text>小程序记录到您为在规定的时间内上传血压记录，会自动进行推送提醒（未实装），可以在此处填写推送的方式</text>
			</view>
			<view class="item">
				<text>具体测量方案</text>
				<uni-section title="默认" subTitle="使用 focus 属性自动获取输入框焦点" type="line" padding>
					<uni-easyinput errorMessage v-model="userName" focus placeholder="请输入内容" @input="input">
					</uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>推送</text>
				<uni-section title="单选" type="line">
					<view>
						<uni-data-checkbox v-model="settingPush" :localdata="sex"></uni-data-checkbox>
					</view>
				</uni-section>
			</view>

			<view class="item">
				<button type="primary" @click="submit">确认提交</button>
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
				userName: "每周一次",
				settingPush: "",

				// 性别选择
				sex: [{
					text: '每周一次',
					value: '1'
				}, {
					text: '每周3次',
					value: '2'
				}, {
					text: '每天一次',
					value: '3'
				}, {
					text: '每天3次',
					value: '4'
				}],
			};
		},

		methods: {
			submit() {
				console.log(this.$data.bpRecord.record_date_time);

				this.$http.sendRequest('v1/user/bprecord', 'POST', {
					"RecordDateTime": this.bpRecord.record_date_time,
					"low": this.bpRecord.low,
					"high": this.bpRecord.high,
					"heart_rate": this.bpRecord.heart_rate,
				}).then(res => {
					//成功回调
					console.log(res);
					uni, uni.showToast({
						title: "录入成功",
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
