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
				<uni-icons customPrefix="iconfont" type="icon-bpr-wechatwrite" size="30" @click="toBpRecord"></uni-icons>
				<text>血压录入</text>
			</view>
			<view class="item">
				<uni-icons customPrefix="iconfont" type="icon-bpr-wechatziyuan" size="30" @click="toBpChart"></uni-icons>
				<text>我的血压情况</text>
			</view>
			<view class="item">
				<uni-icons customPrefix="iconfont" type="icon-bpr-wechatjiankangfangan" size="30" @click="toTreatmentPlan"></uni-icons>
				<text>我的治疗方案</text>
			</view>
			<view class="item">
				<uni-icons customPrefix="iconfont" type="icon-bpr-wechatbaogao-copy" size="30" @click="toTestPage"></uni-icons>
				<text>我的检查报告</text>
			</view>
			<view class="item">
				<uni-icons customPrefix="iconfont" type="icon-bpr-wechatpaizhao" size="30" @click="toTestPage"></uni-icons>
				<text>拍照上传</text>
			</view>
			<view class="item">
				<uni-icons customPrefix="iconfont" type="icon-bpr-wechattongue" size="30" @click="toTestPage"></uni-icons>
				<text>舌苔脉象</text>
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
				// 轮播图列表
				swiperList: [
					'../../static/swiper/swiper1.png',
					'../../static/swiper/swiper2.png',
				],
			}
		},
		methods: {
			toTestPage(){
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url: '/pages/functionTest/functionTest',
					animationType:"pop-in",
					animationDuration:200,
				});
			},
			toBpRecord(){
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url: '/pages/BpRecord/BpRecord',
					animationType:"pop-in",
					animationDuration:200,
				});
			},
			toBpChart(){
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url: '/pages/BpChart/BpChart',
					animationType:"pop-in",
					animationDuration:200,
				});
			},
			toTreatmentPlan(){
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url: '/pages/TreatmentPlanHistory/TreatmentPlanHistory',
					animationType: "pop-in",
					animationDuration: 200,
				});
			},
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
			
			box-shadow: 9px 10px 16px rgba(0, 0, 0, 0.5);
			box-sizing: border-box;		
		}
		.item{
			width: 33.3%;
			
			display: flex;
			box-sizing: border-box;

			margin: 2rpx 0;
			padding: 10rpx;
			
			align-items: center;
			text-align: center;
			
			line-height: 60rpx;
			flex-direction: column;
			font-weight: 550;	// 400 is normal 700 is bold
			font-size: 80%;
			
		}
		.slogan{
			font-size: 9pt;
		}
	}
</style>
