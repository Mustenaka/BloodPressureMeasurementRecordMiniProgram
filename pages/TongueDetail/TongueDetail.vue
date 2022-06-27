<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">舌苔脉象</text>
		</view>

		<view class="box">
			<!-- 中部选择框 -->
			<view class="item" v-for="(value,key,index) in this.Array" :key="key">
				<view class="item_detail">
					<text>记录{{index+1}} </text>
					<text>{{value.create_at}}</text>
				</view>
				<text>舌像</text>
				<view class="detail_text">
					<text>{{value.tongue}}</text>
				</view>
				<text>舌苔</text>
				<view class="detail_text">
					<text>{{value.tongue_coating}}</text>
				</view>
				<text>脉象</text>
				<view class="detail_text">
					<text>{{value.pulse}}</text>
				</view>
			</view>

			<view class="item">
				<button type="primary" @click="submit">新增舌苔脉象</button>
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
				const url = 'v1/user/tonguedetail?limit_count=0'
				this.$http.sendRequest(url, 'GET', {})
					.then(
						res => {
							//成功回调
							console.log(res);

							// 循环遍历拿数据并清洗
							var Array = res.data.data;
							Array.forEach((item, index, arr) => {
								item.create_at = item.create_at.slice(0, 10);
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
					url: 'TongueDetailRecord',
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

			flex-direction: row;

			font-weight: 550;
			font-size: 110%;
		}

		.item_detail {
			width: 98%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.detail_text {
				font-size: 90%;
				font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			}
		}

		.slogan {
			font-size: 9pt;
		}
	}
</style>
