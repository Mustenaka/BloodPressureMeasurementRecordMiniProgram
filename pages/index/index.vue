<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<image  class="swiper-image" :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 中部选择框 -->
		<view class="box">
			<view class="item">
				
				<uni-icons customPrefix="compose" type="icon-youxi" size="15" @click=""></uni-icons>
				<text>11111</text>
			</view>
		</view>
		<!-- 尾部空白框，计划留作公司信息展示框 -->
		<view class="box" style="margin-top: 30px;">
			
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [
					'../../static/swiper/swiper1.png',
				],
			}
		},
		onLoad() {

		},
		methods: {
			gonavigate(){
			        uni.navigateTo({
			            //保留当前页面，跳转到应用内的某个页面
			            url: '/pages/myself/myself'
			        })
			    }
		}
	}
</script>

<style lang="scss">
	.home {
		.swiper-image {
			height: 250rpx;
			width: 700rpx;
			box-shadow: 1 1 10rpx rgba(0,0,0,1);
			border-radius: 25rpx;
		}
		.body{
			padding: 0 30rpx;
			background-color: #ECECEC;
		}
		.header{
			background-color: #6FAD8F;
			padding: 25rpx;
			padding-bottom: 60rpx;
		}
		.box{
			background-color: #fff;
			border-radius: 25rpx;
			
			margin: 0 30rpx;
			margin-top: -50rpx;
			
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			
			width: 700rpx;
			padding:60rpx 25rpx ;
			
			box-shadow:
			  9px 10px 16px rgba(0, 0, 0, 0.5)
			;
			box-sizing: border-box;		}
		.item{
			width: 33.3%;
			text-align: center;
			margin: 30rpx 0;
		}	
	}
</style>
