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
				<text>患者姓名</text>
				<uni-section title="默认" subTitle="使用 focus 属性自动获取输入框焦点" type="line" padding>
					<uni-easyinput errorMessage v-model="patientInfo.RealName" focus placeholder="请输入内容" @input="input">
					</uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>性别</text>
				<uni-section title="单选" type="line">
					<view>
						<uni-data-checkbox v-model="patientInfo.Sex" :localdata="sex"></uni-data-checkbox>
					</view>
				</uni-section>
			</view>
			<view class="item">
				<text>出生日期</text>
				<view class="example-body">
					<uni-datetime-picker type="date" v-model="patientInfo.Birthday" @change="changeLog" />
				</view>
			</view>
			<view class="item">
				<text>电话号码</text>
				<uni-section title="默认" subTitle="使用 focus 属性自动获取输入框焦点" type="line" padding>
					<uni-easyinput errorMessage v-model="patientInfo.Tel" focus placeholder="请输入内容" @input="input">
					</uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>婚否</text>
				<uni-section title="单选" type="line">
					<view>
						<uni-data-checkbox v-model="patientInfo.IsMarried" :localdata="marriage"></uni-data-checkbox>
					</view>
				</uni-section>
			</view>
			<view class="item">
				<text>高血压年份</text>
				<uni-section :title="'使用v-model : '+ patientInfo.HbpYears" subTitle="使用 v-model 显示默认值" type="line"
					padding>
					<uni-number-box v-model="patientInfo.HbpYears" @blur="blur" @focus="focus" @change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>既往病史</text>
				<uni-section title="默认" subTitle="使用 focus 属性自动获取输入框焦点" type="line" padding>
					<uni-easyinput errorMessage v-model="patientInfo.Anamnesis" focus placeholder="请输入内容"
						@input="input">
					</uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>是否吸烟</text>
				<uni-section title="单选" type="line">
					<view>
						<uni-data-checkbox v-model="patientInfo.IsSmoking" :localdata="isSmoke"></uni-data-checkbox>
					</view>
				</uni-section>
			</view>
			<view class="item">
				<text>吸烟史（年份）</text>
				<uni-section :title="'使用v-model : '+ patientInfo.SmokingHistory" subTitle="使用 v-model 显示默认值" type="line"
					padding>
					<uni-number-box v-model="patientInfo.SmokingHistory" @blur="blur" @focus="focus"
						@change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>日吸烟数</text>
				<uni-section :title="'使用v-model : '+ patientInfo.SmokingDaily" subTitle="使用 v-model 显示默认值" type="line"
					padding>
					<uni-number-box v-model="patientInfo.SmokingDaily" @blur="blur" @focus="focus"
						@change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>是否饮酒</text>
				<uni-section title="单选" type="line">
					<view>
						<uni-data-checkbox v-model="patientInfo.IsDrink" :localdata="isDrink"></uni-data-checkbox>
					</view>
				</uni-section>
			</view>
			<view class="item">
				<text>饮酒史（年份）</text>
				<uni-section :title="'使用v-model : '+ patientInfo.DrinkHistory" subTitle="使用 v-model 显示默认值" type="line"
					padding>
					<uni-number-box v-model="patientInfo.DrinkHistory" @blur="blur" @focus="focus"
						@change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>每日饮酒量</text>
				<uni-section :title="'使用v-model : '+ patientInfo.DrinkDaily" subTitle="使用 v-model 显示默认值" type="line"
					padding>
					<uni-number-box v-model="patientInfo.DrinkDaily" @blur="blur" @focus="focus"
						@change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>身高</text>
				<uni-section :title="'使用v-model : '+ patientInfo.PatientHeight" subTitle="使用 v-model 显示默认值" type="line"
					padding>
					<uni-number-box v-model="patientInfo.PatientHeight" @blur="blur" @focus="focus"
						@change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>体重</text>
				<uni-section :title="'使用v-model : '+ patientInfo.PatientWeight" subTitle="使用 v-model 显示默认值" type="line"
					padding>
					<uni-number-box v-model="patientInfo.PatientWeight" @blur="blur" @focus="focus"
						@change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>腰围</text>
				<uni-section :title="'使用v-model : '+ patientInfo.PatientWaistCircumference" subTitle="使用 v-model 显示默认值"
					type="line" padding>
					<uni-number-box v-model="patientInfo.PatientWaistCircumference" @blur="blur" @focus="focus"
						@change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>胸围</text>
				<uni-section :title="'使用v-model : '+ patientInfo.PatientChestCircumference" subTitle="使用 v-model 显示默认值"
					type="line" padding>
					<uni-number-box v-model="patientInfo.PatientChestCircumference" @blur="blur" @focus="focus"
						@change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>臀围</text>
				<uni-section :title="'使用v-model : '+ patientInfo.PatientHipCircumference" subTitle="使用 v-model 显示默认值"
					type="line" padding>
					<uni-number-box v-model="patientInfo.PatientHipCircumference" @blur="blur" @focus="focus"
						@change="changeValue" />
				</uni-section>
			</view>
			<view class="item">
				<text>是否服用中药</text>
				<uni-section title="单选" type="line">
					<view>
						<uni-data-checkbox v-model="patientInfo.IsTakeChineseMedicine" :localdata="isUseChineseMedical">
						</uni-data-checkbox>
					</view>
				</uni-section>
			</view>
			<view class="item">
				<text>降压方案</text>
				<uni-section title="默认" subTitle="使用 focus 属性自动获取输入框焦点" type="line" padding>
					<uni-easyinput errorMessage v-model="patientInfo.AntihypertensivePlan" focus placeholder="请输入内容"
						@input="input">
					</uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>是否非药物控制手段</text>
				<uni-section title="单选" type="line">
					<view>
						<uni-data-checkbox v-model="patientInfo.IsNondrugControlPlan"
							:localdata="isUseNondrugTreatments">
						</uni-data-checkbox>
					</view>
				</uni-section>
			</view>
			<view class="item">
				<text>非药物控制手段</text>
				<uni-section title="默认" subTitle="使用 focus 属性自动获取输入框焦点" type="line" padding>
					<uni-easyinput errorMessage v-model="patientInfo.NondrugControlPlan" focus placeholder="请输入内容"
						@input="input">
					</uni-easyinput>
				</uni-section>
			</view>

			<view class="item">
				<button type="primary" @click="submit">提交修改</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				patientInfo: {
					RealName: '', // 患者姓名
					Sex: '', // 性别
					Birthday: '', // 生日
					Tel: '', // 电话号码
					IsMarried: '', // 0-未婚、1-已婚
					HbpYears: '', // 高血压患病时间（年）
					Anamnesis: '', // 既往病史(对应表格1~12)
					IsSmoking: '', // 是否吸烟
					SmokingHistory: '', // 吸烟史（年）
					SmokingDaily: '', // 日吸烟数
					IsDrink: '', // 是否饮酒
					DrinkHistory: '', // 饮酒史（年）
					DrinkDaily: '', // 每日饮酒量
					PatientHeight: '', // 身高
					PatientWeight: '', // 体重
					PatientWaistCircumference: '', // 腰围
					PatientChestCircumference: '', // 胸围
					PatientHipCircumference: '', // 臀围
					IsTakeChineseMedicine: '', // 是否服用中药
					AntihypertensivePlan: '', // 降压方案
					IsNondrugControlPlan: '', // 是否非药物控制手段
					NondrugControlPlan: '', // 非药物控制手段内容
				},

				// 性别选择
				sex: [{
					text: '男',
					value: '男'
				}, {
					text: '女',
					value: '女'
				}, {
					text: '其他',
					value: '其他'
				}],

				// 婚姻选择
				marriage: [{
					text: '已婚',
					value: true,
				}, {
					text: '未婚',
					value: false,
				}],

				// 是否吸烟
				isSmoke: [{
					text: '吸烟',
					value: true,
				}, {
					text: '不吸烟',
					value: false,
				}],

				// 是否饮酒
				isDrink: [{
					text: '饮酒',
					value: true,
				}, {
					text: '不饮酒',
					value: false,
				}],

				// 是否服用中药
				isUseChineseMedical: [{
					text: '服用',
					value: true,
				}, {
					text: '不服用',
					value: false,
				}],

				// 是否采用非药物手段治疗
				isUseNondrugTreatments: [{
					text: '采用',
					value: true,
				}, {
					text: '不采用',
					value: false,
				}],
			};
		},

		onLoad() {
			console.log('加载页面前触发');
		},

		methods: {
			changeLog(e) {
				console.log('change事件:', e);
			},
			submit() {
				console.log("target submit")
			}
		}
	}
</script>


<style lang="scss">
	.home {
		height: 2200rpx;

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
			background-color: #fff
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
			height: 2000rpx;
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
