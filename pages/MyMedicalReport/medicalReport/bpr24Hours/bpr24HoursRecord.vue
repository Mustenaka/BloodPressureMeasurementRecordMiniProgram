<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">24小时动态心电图（ECG）录入</text>
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
				<text>白天平均血压：</text>
				<view class="item_oneLine">
					<text>收缩压(上压)</text>
					<uni-section :title="'低压记录: '+ record.average" type="line" padding>
						<uni-number-box :value="record.day_high" @change="day_high_Change" :min="0" :max="50000">
						</uni-number-box>
					</uni-section>
					<text>mmHg </text>
				</view>
				<view class="item_oneLine">
					<text>舒张压(下压)</text>
					<uni-section :title="'低压记录: '+ record.average" type="line" padding>
						<uni-number-box :value="record.day_low" @change="day_low_Change" :min="0" :max="50000">
						</uni-number-box>
					</uni-section>
					<text>mmHg </text>
				</view>
			</view>

			<view class="item">
				<text>夜间平均血压：</text>
				<view class="item_oneLine">
					<text>收缩压(上压)</text>
					<uni-section :title="'低压记录: '+ record.night_high" type="line" padding>
						<uni-number-box :value="record.night_high" @change="night_high_Change" :min="0" :max="50000">
						</uni-number-box>
					</uni-section>
					<text>mmHg </text>
				</view>
				<view class="item_oneLine">
					<text>舒张压(下压)</text>
					<uni-section :title="'低压记录: '+ record.night_low" type="line" padding>
						<uni-number-box :value="record.night_low" @change="night_low_Change" :min="0" :max="50000">
						</uni-number-box>
					</uni-section>
					<text>mmHg </text>
				</view>
			</view>

			<view class="item">
				<text>最高血压：</text>
				<view class="item_oneLine">
					<text>收缩压(上压)</text>
					<uni-section :title="'低压记录: '+ record.max_high" type="line" padding>
						<uni-number-box :value="record.max_high" @change="max_high_Change" :min="0" :max="50000">
						</uni-number-box>
					</uni-section>
					<text>mmHg </text>
				</view>
				<view class="item_oneLine">
					<text>出现时间</text>
					<uni-section :title="'日期时间：' + record.max_high_time" type="line"></uni-section>
					<view class="example-body">
						<uni-datetime-picker type="datetime" v-model="record.max_high_time" />
					</view>
				</view>
				<view class="item_oneLine">
					<text>舒张压(下压)</text>
					<uni-section :title="'低压记录: '+ record.max_low" type="line" padding>
						<uni-number-box :value="record.max_low" @change="max_low_Change" :min="0" :max="50000">
						</uni-number-box>
					</uni-section>
					<text>mmHg </text>
				</view>
				<view class="item_oneLine">
					<text>出现时间</text>
					<uni-section :title="'日期时间：' + record.max_low_time" type="line"></uni-section>
					<view class="example-body">
						<uni-datetime-picker type="datetime" v-model="record.max_low_time" />
					</view>
				</view>
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
					day_high: 0,
					day_low: 0,
					night_high: 0,
					night_low: 0,

					max_high: 0,
					max_high_time: '',
					max_low: 0,
					max_low_time: '',

					createAt: '',
				}

			};
		},

		methods: {
			day_high_Change(value) {
				this.record.day_high = value;
			},
			day_low_Change(value) {
				this.record.day_low = value;
			},
			night_high_Change(value) {
				this.record.night_high = value;
			},
			night_low_Change(value) {
				this.record.night_low = value;
			},
			max_high_Change(value) {
				this.record.max_high = value;
			},
			max_low_Change(value) {
				this.record.max_low = value;
			},

			submit() {
				this.$http.sendRequest('http://1.117.222.119/v1/user/mr24hoursbpr', 'POST', {
					"day_high": this.record.day_high,
					"day_low": this.record.day_low,
					"night_high": this.record.night_high,
					"night_low": this.record.night_low,
					"max_high": this.record.max_high,
					"max_high_time": this.record.max_high_time,
					"max_low": this.record.max_low,
					"max_low_time": this.record.max_low_time,
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
