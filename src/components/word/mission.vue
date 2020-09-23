<template>
	<div class="mission_box">
		<span class="title_box">今日任务</span>
		<div class="cont_box">
			<div class="option_box">
				<span class="hr"></span>
				<span>新词数</span>
			</div>
			<div class="option_box">
				<span class="hr"></span>
				<span>复习单词</span>
			</div>
			<div class="option_box">
				<span class="hr"></span>
				<span>未学单词</span>
			</div>
		</div>
		<van-button class="mission_btn" color="#1876FF" hairline round type="primary">开始学习</van-button>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="less" scoped>
.mission_box {
	height: auto;
	width: 670px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.title_box {
		font-family: 'PingFangSC-Regular';
		font-size: 20px;
		color: #41485d;
		margin-top: 73px;
		margin-bottom: 41px;
	}

	.cont_box {
		width: 100%;
		height: auto;
		// background-color: #a2f0ff;
		display: flex;
		justify-content: center;
		margin-bottom: 47px;

		.option_box:nth-child(2) {
			margin-left: 175px;
			margin-right: 150px;
		}

		.option_box {
			height: auto;
			width: auto;
			display: flex;
			flex-direction: column;
			align-items: center;

			.hr {
				height: 6px;
				width: 66px;
				background: #111a34;
				margin-bottom: 30px;
			}

			span {
				font-family: 'PingFangSC-Regular';
				font-size: 20px;
				color: #41485d;
			}
		}
	}

	.mission_btn {
		height: 85px;
		width: 349px;
		font-size: 30px;
		border-color: #e2e4ea !important;
		box-shadow: 0px 5px 5px #1876ff;
	}
}
</style>
