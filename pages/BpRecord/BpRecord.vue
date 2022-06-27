<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">血压录入</text>
		</view>

		<!-- 中部选择框 -->
		<view class="box">
			<!-- 中部选择框 -->
			<view class="item">
				<text>录入时间</text>
				<uni-section :title="'日期时间：' + bpRecord.record_date_time" type="line"></uni-section>
				<view class="example-body">
					<uni-datetime-picker type="datetime" v-model="bpRecord.record_date_time" />
				</view>
			</view>
			<view class="item">
				<text>血压-低压</text>
				<uni-section :title="'低压记录: '+ bpRecord.low" type="line" padding>
					<uni-number-box :value="bpRecord.low" @change="lowChange" :min="0" :max="300" />
				</uni-section>
			</view>
			<view class="item">
				<text>血压-高压</text>
				<uni-section :title="'高压记录: '+ bpRecord.high" type="line" padding>
					<uni-number-box :value="bpRecord.high" @change="highChange" :min="0" :max="300" />
				</uni-section>
			</view>
			<view class="item">
				<text>心率</text>
				<uni-section :title="'心率记录 : '+ bpRecord.heart_rate" type="line" padding>
					<uni-number-box :value="bpRecord.heart_rate" @change="heartRateChange" :min="0" :max="300" />
				</uni-section>
			</view>
			<view class="item">
				<button type="primary" @click="submit">确认提交</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				bpRecord: {
					record_date_time: '',
					low: 80,
					high: 120,
					heart_rate: 75,
				}

			};
		},

		methods: {
			highChange(value) {
				this.bpRecord.high = value;
			},
			lowChange(value) {
				this.bpRecord.low = value;
			},
			heartRateChange(value) {
				this.bpRecord.heart_rate = value;
			},
			submit() {
				if (this.validation() == false) {
					uni,
					uni.showToast({
						title: "未填写时间 | 时间格式错误",
						icon: 'none'
					});
					return;
				}

				this.$http.sendRequest('v1/user/bprecord', 'POST', {
					"record_date_time": this.bpRecord.record_date_time,
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
			},

			validation() {
				// 用卫语句处理数据校验

				// 时间格式：日期+时间，长度为19
				if (this.bpRecord.record_date_time.length != 19) {
					return false;
				}

				// 血压记录，数据范围 (0,300] - 不可能有活人血压是0吧
				if (this.bpRecord.low <= 0 || this.bpRecord.low > 300) {
					return false;
				}
				if (this.bpRecord.high <= 0 || this.bpRecord.high > 300) {
					return false;
				}

				// 心率记录，数据范围 (0,500]
				if (this.bpRecord.heart_rate <= 0 || this.bpRecord.heart_rate > 500) {
					return false;
				}
				return true;
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
