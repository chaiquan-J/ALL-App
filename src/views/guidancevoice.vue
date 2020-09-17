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
							<img src="../assets/icon/voice.png" alt="">
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
			this.$router.push('');
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
			margin-left: 27px;

			.box_one {
				height: 97.5px;
				width: 306.5px;
				background: #f9fafb;
				border-radius: 6px;
				box-shadow: 0px 0px 1px #e2e4ea;
				margin-bottom: 34.5px;
				margin-top: 131.5px;

				span {
					display: block;
					height: auto;
					width: 255px;
					font-family: 'PingFangSC-Regular';
					font-size: 15px;
					color: #41485d;
					text-align: left;
					line-height: 23px;
					margin-left: 21px;
					padding-top: 17px;
				}
			}

			.box_two {
				height: 77px;
				width: 198.5px;
				background: #f9fafb;
				border-radius: 6px;
				box-shadow: 0px 0px 1px #e2e4ea;
				font-size: 15px;
				font-family: 'PingFangSC-Regular';
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				span:nth-child(1) {
					margin-top: 12.5px;
					margin-left: 21px;
				}

				span:nth-child(2) {
					display: flex;
					align-items: center;
					margin-left: 21px;
					margin-top: 10px;

					.icon {
						height: 18px;
						width: 20.5px;
						margin-left: 10px;
						
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
			left: 27px;
			bottom: 25px;

			.skip {
				height: 62.5px;
				width: 62.5px;
				background: #f9fafb;
				line-height: 62.5px;
				font-size: 15px;
				font-family: 'PingFangSC-Regular';
				color: #143599;
				box-shadow: 0px 0px 1px #e2e4ea;
				border-radius: 50px;
			}

			.voice_btn {
				height: 57.5px;
				width: 37px;
				// background: #2f86f6;
				margin-left: 85px;
				
				img{
					height: 100%;
					width: 100%;
				}
			}
		}
	}
}
</style>
