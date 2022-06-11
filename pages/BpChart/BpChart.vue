<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">血压记录表</text>
		</view>

		<!-- 中部选择框 -->
		<view class="box">
			<view class="item">
				<text>血压记录表</text>
			</view>
			<view class="item">
				<view class="charts-box">
					<qiun-data-charts type="line" :opts="opts" :chartData="chartData" :ontouch="true">
					</qiun-data-charts>
				</view>
			</view>
			<view class="item">
				<button type="primary" @click="submit7days">近7天</button>
				<button type="primary" @click="submit30days">近30天</button>
				<button type="primary" @click="submitCustomizedays">自定义</button>
			</view>
			<view class="item">
				<text>自定义天数</text>
				<uni-section :title="'自定义天数: '+ daysCount" type="line" padding>
					<uni-number-box v-model="daysCount" :min="0" :max="360" />
				</uni-section>
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
				chartData: {},
				opts: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 10, 0, 15],
					enableScroll: true,
					legend: {},
					xAxis: {
						axisLine: true,
						disableGrid: true,
						scrollShow: true,
						itemCount: 4,
						rotateLabel: true,
					},
					yAxis: {
						disabled: false,
						splitNumber: 1,
						gridType: "dash",
						dashLength: 2,
						padding: 20
					},
					extra: {
						markLine: {
							data: [{
								value: 130,
								showLabel: true,
								lineColor: "#E8FA43",
								labelText: '130'
							}, {
								value: 80,
								showLabel: true,
								lineColor: "#E8FA43",
								labelText: '80'
							}, {
								value: 140,
								showLabel: true,
								lineColor: "#FF1C6B",
								labelText: '140'
							}, {
								value: 90,
								showLabel: true,
								lineColor: "#FF1C6B",
								labelText: '90'
							}]
						},
						line: {
							type: "straight",
							width: 2
						}
					}
				},

				daysCount: 60,
				limit_days: 1,
			};
		},

		onReady() {
			this.submit();
		},

		methods: {
			submit7days() {
				this.limit_days = 7;
				this.submit();
			},
			submit30days() {
				this.limit_days = 30;
				this.submit();
			},
			submitCustomizedays() {
				this.limit_days = this.daysCount;
				this.submit();
			},

			submit() {
				const url = 'http://1.117.222.119/v1/user/bprecord?limit_days=' + this.limit_days
				console.log(this.limit_days)
				this.$http.sendRequest(url, 'GET', {})
					.then(
						res => {
							//成功回调
							console.log(res);

							var categories = [];
							var series = [{
									name: "低压",
									data: []
								},
								{
									name: "高压",
									data: []
								}
								// {
								// 	name: "心率",
								// 	data: []
								// }
							];

							// 循环遍历拿数据
							for (var item of res.data.data) {
								// x 轴下标数组
								var date = item.record_date.split('T')[0]
								var simpledate = date.split('-')[1] + '-' + date.split('-')[2]
								// var time = item.record_time.split(':')[0]
								var datetime = simpledate + ' ' + item.record_time
								categories.push(datetime)
								// y轴数组
								series[0].data.push(item.low_pressure)
								series[1].data.push(item.high_pressure)
								// series[2].data.push(item.heart_rate)
							}

							var res2 = {
								categories: categories,
								series: series
							}

							this.chartData = JSON.parse(JSON.stringify(res2));
						}).catch(err => {
						//请求失败
						console.log(err);
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

		.charts-box {
			width: 100%;
			height: 300px;
		}

		.slogan {
			font-size: 9pt;
		}
	}
</style>
