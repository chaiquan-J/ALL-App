<template>
	<div class="card">
		<div class="content">
			<div class="shopp_box">
				<template v-for="(item, index) in card">
					<div class="cont_box">
						<img :src="item.src" alt="" />
						<span class="desc">{{ item.desc }}</span>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ['card'],
	methods: {}
};
</script>

<style lang="less" scoped>
.card {
	height: 1350px;
	width: 100%;
	position: relative;
	z-index: 10;
	border-bottom: 7px solid #E2E4EA;

	.content {
		height: 100%;
		width: 670px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;

		.shopp_box {
			width: 670px;
			height: auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-top: 31px;

			.cont_box {
				height: 315px;
				width: 301px;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				margin-bottom: 20px;

				img {
					height: 176px;
					width: 100%;
					margin-bottom: 20px;
				}

				.desc {
					display: block;
					width: 300px;
					height: auto;
					text-align: left;
					line-height: 30px;
					font-family: 'PingFangSC-Semibold';
					font-size: 20px;
					color: #333333;
					font-weight: 700;
				}
			}
		}
	}
}
</style>
