<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">

		</view>
		
		<!-- 中部选择框 -->
		<view class="box">
			<text>this is function Test page</text>
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
				
			};
		}
	}
</script>


<style lang="scss">
	.home {
		.body{
			padding: 0 30rpx;
			background-color: #ECECEC;
		}
		
		.header{
			background-color: #6FAD8F;
			padding: 25rpx;
			padding-bottom: 60rpx;
			
			height: 250rpx;
			width: 700rpx;
		}
		.box{
			background-color: #fff;
			border-radius: 25rpx;
			
			margin: 0 30rpx;
			margin-top: -300rpx;
			
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			
			width: 700rpx;
			height: 90vh;
			padding:60rpx 25rpx ;
			
			box-shadow: 9px 10px 16px rgba(0, 0, 0, 0.5);
			box-sizing: border-box;		
		}
		.form-item{
			
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
			font-weight: 550;
			font-size: 80%;
			
		}
		.slogan{
			font-size: 9pt;
		}
	}
</style>
