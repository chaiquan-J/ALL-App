<template>
	<div class="start">
		<div class="start_body">
			<div class="cont_box">
				<div class="text">知道你在改变</div>
				<div class="logo"><img src="../assets/icon/logo.svg" alt="" /></div>
				<div class="title">ALL</div>
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
		goGuidance() {
			setTimeout(() => {
				this.$router.push('Guidance');
			}, 1500);
		}
	},
	mounted() {
		this.goGuidance()
	}
};
</script>

<style lang="less" scoped>
.start {
	height: 100%;
	width: 100%;
	background-color: #f9fafb;

	.start_body {
		height: 667px;
		width: 100%;
		background-color: #f9fafb;
		display: flex;
		align-items: center;

		.cont_box {
			height: auto;
			width: 100%;
			
			.text {
				height: 147px;
				width: 15px;
				font-family: PingFangSC-Regular;
				font-size: 18px;
				color: #111a34;
				letter-spacing: 0;
				line-height: 29px;
				margin: 0 auto;
			}

			.logo {
				height: 60px;
				width: 60px;
				border-radius: 13px;
				margin: 0 auto;
				margin-top: 122px;

				img {
					height: 60px;
					width: 60px;
				}
			}

			.title {
				height: 25px;
				width: 33px;
				font-family: PingFangSC-Regular;
				font-size: 18px;
				color: #111a34;
				letter-spacing: 0;
				margin: 0 auto;
				margin-top: 45.5px;
			}
		}
	}
}
</style>
