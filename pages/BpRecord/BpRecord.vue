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
				<uni-section :title="'日期时间用法：' + datetimesingle" type="line"></uni-section>
				<view class="example-body">
					<uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
				</view>
			</view>
			<view class="item">
				<text>血压-低压</text>
				<uni-section :title="'使用v-model : '+ lowBP" subTitle="使用 v-model 显示默认值" type="line" padding>
					<uni-number-box v-model="lowBP" @blur="blur" @focus="focus" @change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>血压-高压</text>
				<uni-section :title="'使用v-model : '+ HighBP" subTitle="使用 v-model 显示默认值" type="line" padding>
					<uni-number-box v-model="HighBP" @blur="blur" @focus="focus" @change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>心率</text>
				<uni-section :title="'使用v-model : '+ heartRate" subTitle="使用 v-model 显示默认值" type="line" padding>
					<uni-number-box v-model="heartRate" @blur="blur" @focus="focus" @change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<button type="primary" @click="submit">确认提交</button>
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
				datetimesingle: '',
				lowBP: 60,
				HighBP: 110,
				heartRate: 70,
			};
		},

		methods: {
			changeLog(e) {
				console.log('change事件:', e);
			},
			submit(){
				console.log("target submit")
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
