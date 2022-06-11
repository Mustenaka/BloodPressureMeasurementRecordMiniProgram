<template>
	<!-->
		2022.6.11留，经过整理，证明这个模块是当初通宵的时候写的臭代码，为了快速实现功能，耦合性过大，而且信息超级多也没有注意表单的使用，真的很难受。
		以后要更新的话，这个部分不要尝试修改，直接抛弃，反正后端的接口都是OK的。
	<-->
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
				<uni-section title="患者姓名" type="line" padding>
					<uni-easyinput errorMessage v-model="patientInfo.RealName" focus placeholder="请输入内容">
					</uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>性别</text>
				<uni-section title="性别" type="line">
					<view>
						<uni-data-checkbox v-model="patientInfo.Sex" :localdata="sex"></uni-data-checkbox>
					</view>
				</uni-section>
			</view>
			<view class="item">
				<text>出生日期</text>
				<view class="example-body">
					<uni-datetime-picker type="date" v-model="patientInfo.Birthday" />
				</view>
			</view>
			<view class="item">
				<text>电话号码</text>
				<uni-section title="电话号码" type="line" padding>
					<uni-easyinput errorMessage v-model="patientInfo.Tel" focus placeholder="请输入内容">
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
				<uni-section :title='高血压年份' type="line" padding>
					<uni-number-box :value="patientInfo.HbpYears" @change="changeValue_HbpYears" />
				</uni-section>
			</view>
			<view class="item">
				<text>既往病史</text>
				<uni-section title="既往病史" type="line" padding>
					<uni-easyinput errorMessage v-model="patientInfo.Anamnesis" focus placeholder="请输入内容">
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
				<uni-section title="吸烟史（年份）" type="line" padding>
					<uni-number-box :value="patientInfo.SmokingHistory" @change="changeValue_SmokingHistory" />
				</uni-section>
			</view>
			<view class="item">
				<text>日吸烟数</text>
				<uni-section title="日吸烟数" type="line" padding>
					<uni-number-box :value="patientInfo.SmokingDaily" @change="changeValue_SmokingDaily" />
				</uni-section>
			</view>
			<view class="item">
				<text>是否饮酒</text>
				<uni-section title="是否饮酒" type="line">
					<view>
						<uni-data-checkbox v-model="patientInfo.IsDrink" :localdata="isDrink"></uni-data-checkbox>
					</view>
				</uni-section>
			</view>
			<view class="item">
				<text>饮酒史（年份）</text>
				<uni-section title='饮酒史（年份）' type="line" padding>
					<uni-number-box :value="patientInfo.DrinkHistory" @change="changeValue_DrinkHistory" />
				</uni-section>
			</view>
			<view class="item">
				<text>每日饮酒量</text>
				<uni-section title="每日饮酒量" type="line" padding>
					<uni-number-box :value="patientInfo.DrinkDaily" @change="changeValue_DrinkDaily" />
				</uni-section>
			</view>
			<view class="item">
				<text>身高（厘米）</text>
				<uni-section title="身高" type="line" padding>
					<uni-number-box :value="patientInfo.PatientHeight" @change="changeValue_PatientHeight" :min="0"
						:max="1000" />
				</uni-section>
			</view>
			<view class="item">
				<text>体重（斤）</text>
				<uni-section title="体重" type="line" padding>
					<uni-number-box :value="patientInfo.PatientWeight" @change="changeValue_PatientWeight" :min="0"
						:max="1000" />
				</uni-section>
			</view>
			<view class="item">
				<text>腰围</text>
				<uni-section title="腰围" type="line" padding>
					<uni-number-box :value="patientInfo.PatientWaistCircumference"
						@change="changeValue_PatientWaistCircumference" :min="0" :max="1000" />
				</uni-section>
			</view>
			<view class="item">
				<text>胸围</text>
				<uni-section title="胸围" type="line" padding>
					<uni-number-box :value="patientInfo.PatientChestCircumference"
						@change="changeValue_PatientChestCircumference" :min="0" :max="1000" />
				</uni-section>
			</view>
			<view class="item">
				<text>臀围</text>
				<uni-section title="臀围" type="line" padding>
					<uni-number-box :value="patientInfo.PatientHipCircumference"
						@change="changeValue_PatientHipCircumference" :min="0" :max="1000" />
				</uni-section>
			</view>
			<view class="item">
				<text>是否服用中药</text>
				<uni-section title="是否服用中药" type="line">
					<view>
						<uni-data-checkbox v-model="patientInfo.IsTakeChineseMedicine" :localdata="isUseChineseMedical">
						</uni-data-checkbox>
					</view>
				</uni-section>
			</view>
			<view class="item">
				<text>降压方案</text>
				<uni-section title="降压方案" type="line" padding>
					<uni-easyinput errorMessage v-model="patientInfo.AntihypertensivePlan" focus placeholder="请输入内容">
					</uni-easyinput>
				</uni-section>
			</view>
			<view class="item">
				<text>是否非药物控制手段</text>
				<uni-section title="是否非药物控制手段" type="line">
					<view>
						<uni-data-checkbox v-model="patientInfo.IsNondrugControlPlan"
							:localdata="isUseNondrugTreatments">
						</uni-data-checkbox>
					</view>
				</uni-section>
			</view>
			<view class="item">
				<text>非药物控制手段</text>
				<uni-section title="非药物控制手段" padding>
					<uni-easyinput errorMessage v-model="patientInfo.NondrugControlPlan" focus placeholder="请输入内容">
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
				// 患者详细信息
				patientInfo: {
					RealName: '', // 患者姓名
					Sex: '', // 性别
					Birthday: '', // 生日
					Tel: '', // 电话号码
					IsMarried: '', // 0-未婚、1-已婚
					HbpYears: 0, // 高血压患病时间（年）
					Anamnesis: '暂无', // 既往病史(对应表格1~12)
					IsSmoking: '', // 是否吸烟
					SmokingHistory: 0, // 吸烟史（年）
					SmokingDaily: 0, // 日吸烟数
					IsDrink: '', // 是否饮酒
					DrinkHistory: 0, // 饮酒史（年）
					DrinkDaily: 0, // 每日饮酒量
					PatientHeight: 0, // 身高
					PatientWeight: 0, // 体重
					PatientWaistCircumference: 0, // 腰围
					PatientChestCircumference: 0, // 胸围
					PatientHipCircumference: 0, // 臀围
					IsTakeChineseMedicine: '', // 是否服用中药
					AntihypertensivePlan: '无方案', // 降压方案
					IsNondrugControlPlan: '', // 是否非药物控制手段
					NondrugControlPlan: '无方案', // 非药物控制手段内容
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
			this.getData();
		},

		methods: {
			// 输入框数字改变时
			changeValue_HbpYears(value) {
				this.patientInfo.HbpYears = value;
			},
			changeValue_SmokingHistory(value) {
				this.patientInfo.SmokingHistory = value;
			},
			changeValue_SmokingDaily(value) {
				this.patientInfo.SmokingDaily = value;
			},
			changeValue_DrinkHistory(value) {
				this.patientInfo.DrinkHistory = value;
			},
			changeValue_DrinkDaily(value) {
				this.patientInfo.DrinkDaily = value;
			},

			// 身高体重, 三维数据
			changeValue_PatientHeight(value) {
				this.patientInfo.PatientHeight = value;
			},
			changeValue_PatientWeight(value) {
				this.patientInfo.PatientWeight = value;
			},
			changeValue_PatientWaistCircumference(value) {
				this.patientInfo.PatientWaistCircumference = value;
			},
			changeValue_PatientChestCircumference(value) {
				this.patientInfo.PatientChestCircumference = value;
			},
			changeValue_PatientHipCircumference(value) {
				this.patientInfo.DrinkDaily = value;
			},

			// 测试按钮
			submitTest() {
				console.log('Test button:' + this.patientInfo.SmokingHistory);
			},

			// 获取数据
			getData() {
				const url = 'http://1.117.222.119/v1/user/patientinfo';
				this.$http.sendRequest(url, 'GET', {})
					.then(
						res => {
							// 请求成功
							console.log(res);

							// 获取信息展示
							var data = res.data.data;
							this.patientInfo.RealName = data.real_name;
							this.patientInfo.Sex = data.sex;
							this.patientInfo.Birthday = data.birthday.slice(0, 10);
							this.patientInfo.Tel = data.tel;
							this.patientInfo.IsMarried = data.is_married;
							this.patientInfo.HbpYears = data.hbp_years;
							this.patientInfo.Anamnesis = data.anamnesis;
							this.patientInfo.IsSmoking = data.is_smoking;
							this.patientInfo.SmokingHistory = data.smoking_history;
							this.patientInfo.SmokingDaily = data.smoking_daily;
							this.patientInfo.IsDrink = data.is_drink;
							this.patientInfo.DrinkHistory = data.drink_history;
							this.patientInfo.DrinkDaily = data.drink_daily;
							this.patientInfo.PatientHeight = data.patient_height;
							this.patientInfo.PatientWeight = data.patient_weight;
							this.patientInfo.PatientWaistCircumference = data.patient_waist_circumference;
							this.patientInfo.PatientChestCircumference = data.patient_chest_circumference;
							this.patientInfo.PatientHipCircumference = data.patient_hip_circumference;
							this.patientInfo.IsTakeChineseMedicine = data.is_take_chinese_medicine;
							this.patientInfo.AntihypertensivePlan = data.antihypertensive_plan;
							this.patientInfo.IsNondrugControlPlan = data.is_nondrug_control_plan;
							this.patientInfo.NondrugControlPlan = data.nondrug_control_plan;

						}).catch(err => {
						//请求失败
						console.log(err);
						console.log('请求失败，本页面将认为是第一次获取')
					})
			},

			submit() {
				// 请求地址
				const url = 'http://1.117.222.119/v1/user/wxpatientinfo';
				// 上传数据
				var submitData = {
					"real_name": this.patientInfo.RealName,
					"sex": this.patientInfo.Sex,
					"birthday": this.patientInfo.Birthday,
					"tel": this.patientInfo.Tel,
					"is_married": this.patientInfo.IsMarried,
					"hbp_years": this.patientInfo.HbpYears,
					"anamnesis": this.patientInfo.Anamnesis,
					"is_smoking": this.patientInfo.IsSmoking,
					"smoking_history": this.patientInfo.SmokingHistory,
					"smoking_daily": this.patientInfo.SmokingDaily,
					"is_drink": this.patientInfo.IsDrink,
					"drink_history": this.patientInfo.DrinkHistory,
					"drink_daily": this.patientInfo.DrinkDaily,
					"patient_height": this.patientInfo.PatientHeight,
					"patient_weight": this.patientInfo.PatientWeight,
					"patient_waist_circumference": this.patientInfo.PatientWaistCircumference,
					"patient_chest_circumference": this.patientInfo.PatientChestCircumference,
					"patient_hip_circumference": this.patientInfo.PatientHipCircumference,
					"is_take_chinese_medicine": this.patientInfo.IsTakeChineseMedicine,
					"antihypertensive_plan": this.patientInfo.AntihypertensivePlan,
					"is_nondrug_control_plan": this.patientInfo.IsNondrugControlPlan,
					"nondrug_control_plan": this.patientInfo.NondrugControlPlan,
				};

				this.$http.sendRequest(url, 'POST', submitData).then(res => {
					//成功回调
					console.log(res);

					// 返回错误特判
					if (res.statusCode == 400) {
						uni.showToast({
							title: "新增患者数据失败，请检查信息是否填写完整",
							icon: 'none'
						})
						return;
					}

					// 录入成功
					uni, uni.showToast({
						title: "录入成功",
						icon: 'none'
					})

				}).catch(err => {
					//请求失败
					console.log(err);
					uni, uni.showToast({
						title: "请求失败",
						icon: 'none'
					})
				})
			},
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
