<template>
	<div class="guidance">
		<div class="guidance_body">
			<div class="dialogue_box">
				<div class="spirit"></div>
				<div class="dialogue"><span>为了更好地推荐课程，请选择你的职业</span></div>
			</div>
			<div class="profession_btn">
				<template v-for="(item, index) in profession">
					<div class="btn" :key="index">{{item}}</div>
				</template>
			</div>
			<div class="purpose_btn"></div>
			<div class="study_btn"><van-button class="btn" hairline round type="info">确定</van-button></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			profession: ['大学生', '上班族', '自由派', '初中生', '高中生', '小学及学前班']
		};
	},
	methods: {}
};
</script>

<style lang="less" scoped>
.guidance {
	height: 100%;
	width: 100%;
	background-color: #f9fafb;

	.guidance_body {
		height: 667px;
		width: 100%;
		background-color: #f9fafb;
		position: relative;

		.dialogue_box {
			height: auto;
			width: auto;
			margin-left: 25.5px;
			// margin-bottom: 270px;
			position: relative;
			top: 120.5px;

			.spirit {
				height: 32px;
				width: 40px;
				background: #0079fe;
				// margin-top: 139.5px;
				// margin-left: 25.5px;
			}

			.dialogue {
				height: 46.5px;
				width: 281.5px;
				border-radius: 8px;
				box-shadow: 0px 0px 1px #e2e4ea;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: 'PingFangSC-Regular';
				font-size: 13px;
				color: #41485d;
				margin-top: 26px;
			}
		}

		.profession_btn {
			width: 331.5px;
			height: 87.5px;
			// background-color: #aaffff;
			margin: 0 auto;
			position: absolute;
			bottom: 61px;
			left: 0;
			right: 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-content:space-between;

			.btn {
				height: 34.5px;
				width: 96px;
				border-radius: 26px;
				background-color: #f9fafb;
				box-shadow: 0px 0px 1px #e2e4ea;
				line-height: 34.5px;
				color: #41485d;
				font-family: 'PingFangSC-Regular';
				font-size: 13px;
			}
		}

		.purpose_btn {
			width: 331.5px;
			height: 142.5px;
			background-color: #eee;
			margin: 0 auto;
			position: absolute;
			bottom: 61px;
			left: 0;
			right: 0;
			display: none;
		}

		.study_btn {
			height: 36.5px;
			width: 241px;
			margin: 0 auto;
			position: absolute;
			bottom: 10.5px;
			left: 0;
			right: 0;

			.btn {
				height: 100%;
				width: 100%;
				border-radius: 26px;
				background-color: #f9fafb;
				border-color: #e2e4ea;
				color: #41485d;
				font-family: 'PingFangSC-Regular';
				font-size: 13px;
			}
		}
	}
}
</style>
