<template>
	<view class="home">
		<!-- 首部轮播图 -->
		<view class="header">
			<text class="header-text">照片上传</text>
		</view>

		<!-- 中部选择框 -->
		<view class="box">
			<uni-card :is-shadow="false" is-full>
				<text class="uni-h6">文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间。</text>
			</uni-card>
			<uni-section title="只选择图片" type="line">
				<view class="example-body">
					<uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
				</view>
			</uni-section>

			<view class="item">
				<button type="primary" @click="submit" disabled="true">提交照片</button>
			</view>
		</view>

		<!-- 尾部空白框，计划留作公司信息展示框 -->
		<view class="box" style="margin-top: 30px;">
			<text class="slogan">龙医护心 - 守护您的健康</text>
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
		.body {
			padding: 0 30rpx;
			background-color: #ECECEC;
		}

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

			flex-wrap: wrap;
			justify-content: center;

			width: 700rpx;
			padding: 60rpx 25rpx;

			box-shadow: 9px 10px 16px rgba(0, 0, 0, 0.5);
			box-sizing: border-box;
		}

		.example-body {
			padding: 10px;
			padding-top: 0;
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
