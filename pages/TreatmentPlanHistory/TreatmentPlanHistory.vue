<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">历史治疗方案</text>
		</view>

		<view class="box">
			<!-- 中部选择框 -->
			<view class="item" v-for="(item,index) in TreatmentArray">
				<text>我的治疗方案 {{index+1}} - </text>
				<text>{{item.date}}</text>
				<uni-section title="我的历史治疗方案" type="line" padding>
					<uni-easyinput disabled type="textarea" autoHeight v-model="item.value" placeholder="请输入内容">
					</uni-easyinput>
				</uni-section>
			</view>

			<view class="item">
				<button type="primary" @click="submit">新增治疗方案</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TreatmentArray: []
			};
		},

		onLoad() {
			this.getData();
		},

		methods: {
			getData() {
				const url = 'http://1.117.222.119/v1/user/treatmentplan?limit_count=0'
				this.$http.sendRequest(url, 'GET', {})
					.then(
						res => {
							//成功回调
							console.log(res);

							// 循环遍历拿数据
							for (var item of res.data.data) {
								var create_time = item.create_datetime.slice(0, 10) + " " +
									item.create_datetime.slice(11, 16);
								var detail = {
									date: create_time,
									value: item.plan,
								}

								this.TreatmentArray.push(detail);
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

			submit() {
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url: '/pages/TreatmentPlan/TreatmentPlan',
					animationType: "pop-in",
					animationDuration: 200,
				});
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
			// height: 85vh;
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
