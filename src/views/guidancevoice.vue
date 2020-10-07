<template>
	<div class="guidancevoice">
		<div class="guidancevoice_body">
			<div class="dialogue_box">
				<div class="box_one"><span>小菜可以通过一句话测试你当前英语水平。即将开始跟读，请允许访问您的麦克风.</span></div>
				<div class="box_two">
					<span>请稍后</span>
					<span>
						NIce to meet you
						<div class="icon">
							<img src="../assets/icon/phonate.png" alt="">
						</div>
					</span>
				</div>
			</div>
			<div class="btn_box">
				<div class="skip" @click="navHome">跳过</div>
				<div class="voice_btn">
					<img src="../assets/icon/microphone.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		navHome() {
			this.$router.push('word');
		}
	}
};
</script>

<style lang="less" scoped>
.guidancevoice {
	height: 100%;
	width: 100%;

	.guidancevoice_body {
		height: 100%;
		width: 100%;

		.dialogue_box {
			height: auto;
			width: auto;
			margin-left: 54px;

			.box_one {
				height: 195px;
				width: 613px;
				background: #f9fafb;
				border-radius: 12px;
				box-shadow: 0px 0px 1px #e2e4ea;
				margin-bottom: 69px;
				margin-top: 303px;

				span {
					display: block;
					height: auto;
					width: 510px;
					font-family: 'PingFangSC-Regular';
					font-size: 30px;
					color: #41485d;
					text-align: left;
					line-height: 46px;
					margin-left: 42px;
					padding-top: 34px;
				}
			}

			.box_two {
				height: 154px;
				width: 397px;
				background: #f9fafb;
				border-radius: 12px;
				box-shadow: 0px 0px 1px #e2e4ea;
				font-size: 30px;
				font-family: 'PingFangSC-Regular';
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				span:nth-child(1) {
					margin-top: 30px;
					margin-left: 42px;
				}

				span:nth-child(2) {
					display: flex;
					align-items: center;
					margin-left: 42px;
					margin-top: 20px;

					.icon {
						height: 36px;
						width: 41px;
						margin-left: 20px;
						
						img{
							height: 100%;
							width: 100%;
						}
					}
				}
			}
		}

		.btn_box {
			height: auto;
			width: auto;
			display: flex;
			align-items: flex-start;
			position: absolute;
			left: 54px;
			bottom: 50px;

			.skip {
				height: 125px;
				width:125px;
				background: #f9fafb;
				line-height: 125px;
				font-size: 30px;
				font-family: 'PingFangSC-Regular';
				color: #143599;
				box-shadow: 0px 0px 1px #e2e4ea;
				border-radius: 100px;
			}

			.voice_btn {
				height: 115px;
				width: 74px;
				// background: #2f86f6;
				margin-left: 165px;
				
				img{
					height: 100%;
					width: 100%;
				}
			}
		}
	}
}
</style>
