<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">舌苔脉象录入</text>
		</view>

		<!-- 中部选择框 -->
		<view class="box">
			<!-- 中部选择框 -->
			<view class="item">
				<text>录入日期</text>
				<uni-section :title="'日期时间：' + record.createAt" type="line"></uni-section>
				<view class="example-body">
					<uni-datetime-picker type="date" v-model="record.createAt" />
				</view>
			</view>
			<view class="item">
				<text>舌像</text>
				<uni-section title="创建新数据" type="line" padding>
					<uni-easyinput type="textarea" autoHeight v-model="record.tongue" placeholder="请输入内容"></uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>舌苔</text>
				<uni-section title="创建新数据" type="line" padding>
					<uni-easyinput type="textarea" autoHeight v-model="record.tongue_coating" placeholder="请输入内容"></uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>脉象</text>
				<uni-section title="创建新数据" type="line" padding>
					<uni-easyinput type="textarea" autoHeight v-model="record.pulse" placeholder="请输入内容"></uni-easyinput>
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
				record: {
					tongue: '',
					tongue_coating: '',
					pulse: '',
					createAt: '',
				}

			};
		},

		methods: {
			dataChange(value) {
				this.record.average = value;
			},

			submit() {
				console.log('数据' + this.record.data)
				this.$http.sendRequest('v1/user/tonguedetail', 'POST', {
					"tongue": this.record.tongue,
					"tongue_coating": this.record.tongue_coating,
					"pulse": this.record.pulse,
					"create_at": this.record.createAt,
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

			box-sizing: border-box;

			margin: 2rpx 0;
			padding: 10rpx;

			align-items: center;
			text-align: left;

			flex-direction: column;

			font-weight: 550;
			font-size: 80%;
		}

		.item_oneLine {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.slogan {
			font-size: 9pt;
		}
	}
</style>
