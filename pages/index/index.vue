<template>
	<view class="banner-wrap">
		<swiper class="banner-swiper" 
		         :current="current"
		         :indicator-dots="indicatorDots" 
				 :autoplay="autoplay" 
				 :duration="duration" 
				 :interval="interval" 
				 :circular="circular" 
				 :previous-margin="previousMargin"
				 :next-margin="nextMargin"
				 @change="swiperChange">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<view class="banner-swiper-item">
					<image :src="item.image" mode="aspectFill" class="banner-swiper-img" :class="current == index?'':'active'"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"index-swiper",
		props:{
			bannerList:{
				type:Array,
				default:()=>{
					return ['static/swiper/swiper1.png']
				}
			}
		},
		data() {
			return {
				current:1,//当前图片
				indicatorDots: false,//是否显示面板指示点
				autoplay: true,//是否自动切换
				interval: 4000,//自动切换时间间隔
				duration: 500,//滑动动画时长
				circular:true,//是否采用衔接滑动，即播放到末尾后重新回到开头
				previousMargin:"17px",//前边距
				nextMargin:"17px",//后边距
			};
		},
		methods:{
			swiperChange(e){
				let {current, source} = e.detail
				//只有页面自动切换，手动切换时才轮播，其他不允许
				if(source === 'autoplay' || source === 'touch'){
					 this.current = current;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
.banner-wrap{
		width: 100%;
		margin: auto;
		.banner-swiper{
			height: 175px;
			.banner-swiper-item{
				border-radius: 8px;
				width: 100%;
				height: 175px;
				overflow: hidden;
			}
			
			.banner-swiper-img{
				display: block;
				margin: auto;
				width: 98%;
				height: 100%;
				border-radius: 8px;
			}
			.active{
				height:88.57%;
				margin-top:20px;
				transition: all .1s ease-in 0s;
				transform: translateY(0);
			}
		}
	}
</style>