<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">24小时血压记录</text>
		</view>

		<view class="box">
			<!-- 中部选择框 -->
			<view class="item" v-for="(value,key,index) in this.Array" :key="key">
				<view class="item_detail">
					<text class="text_left">记录{{index+1}} </text>
					<text class="text_right">{{value.create_at}}</text>
				</view>
				<text>白天平均血压</text>
				<view class="item_detail">
					<text class="text_right">收缩压(上压):{{value.day_high}}</text>
				</view>
				<view class="item_detail">
					<text class="text_right">舒张压(下压):{{value.day_low}}</text>
				</view>
				<text>夜间平均血压</text>
				<view class="item_detail">
					<text class="text_right">收缩压(上压):{{value.night_high}}</text>
				</view>
				<view class="item_detail">
					<text class="text_right">舒张压(下压):{{value.night_low}}</text>
				</view>
				<text>最高血压</text>
				<view class="item_detail">
					<text class="text_right">收缩压(上压):{{value.max_high}}</text>
					<text>出现时间:{{value.max_high_time}}</text>
				</view>
				<view class="item_detail">
					<text class="text_right">舒张压(下压):{{value.max_low}}</text>
					<text>出现时间:{{value.max_low_time}}</text>
				</view>
			</view>

			<view class="item">
				<button type="primary" @click="submit">新增24小时血压记录</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				Array: []
			};
		},

		onLoad() {
			this.getData();
		},

		methods: {
			getData() {
				const url = 'http://1.117.222.119/v1/user/mr24hoursbpr?limit_count=0'
				this.$http.sendRequest(url, 'GET', {})
					.then(
						res => {
							//成功回调
							console.log(res);

							// 循环遍历拿数据并清洗
							var Array = res.data.data;
							Array.forEach((item, index, arr) => {
								item.create_at = item.create_at.slice(0, 10);
								item.max_high_time = item.max_high_time.slice(11,16);
								item.max_low_time = item.max_low_time.slice(11,16);
							});

							this.Array = Array;
							console.log(this.Array);
						}).catch(err => {
						//请求失败
						console.log(err);
					})
			},

			submit() {
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url: 'bpr24HoursRecord',
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

		.item {
			width: 98%;

			box-sizing: border-box;
			margin: 2rpx 0;
			padding: 10rpx;

			// align-items: center;
			// text-align: left;
			flex-direction: row;

			font-weight: 550;
			font-size: 110%;
		}

		.item_detail {
			width: 98%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.slogan {
			font-size: 9pt;
		}
	}
</style>
