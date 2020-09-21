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
		<van-button class="mission_btn" color="#1876FF" round type="primary">开始学习</van-button>
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
	width: 335px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.title_box {
		font-family: 'PingFangSC-Regular';
		font-size: 10px;
		color: #41485d;
		margin-top: 36.5px;
		margin-bottom: 20.5px;
	}

	.cont_box {
		width: 100%;
		height: auto;
		// background-color: #a2f0ff;
		display: flex;
		justify-content: center;
		margin-bottom: 27px;

		.option_box:nth-child(1) {
			margin-right: 75px;
		}

		.option_box:nth-child(2) {
			margin-right: 75px;
		}

		.option_box {
			height: auto;
			width: 50px;
			display: flex;
			flex-direction: column;
			align-items: center;

			.hr {
				height: 3px;
				width: 40px;
				background: #111a34;
				margin-bottom: 20px;
			}

			span {
				font-family: 'PingFangSC-Regular';
				font-size: 10px;
				color: #41485d;
			}
		}
	}

	.mission_btn {
		height: 40px;
		width: 174.5px;
		font-size: 15px;
		border: 1px solid #e2e4ea;
		box-shadow: 0px 2.5px 2.5px #1876ff;
	}
}
</style>
