<template>
	<div class="heart_choose">
		<div class="content">
			<div class="shopp_box">
				<template v-for="(item, index) in shopp">
					<div class="cont_box">
						<img :src="item.src" alt="" />
						<span class="desc">{{ item.desc }}</span>
						<template v-if="item.free">
							<span class="free">免费</span>
						</template>
						<template v-else>
							<div class="price">
								<span>￥{{ item.price1 }}</span>
								<span>
									￥{{ item.price2 }}
									<van-divider />
								</span>
							</div>
						</template>
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
	props: ['shopp'],
	methods: {}
};
</script>

<style lang="less" scoped>
.heart_choose {
	height: 1090px;
	width: 100%;

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
				position: relative;
				margin-bottom: 35px;

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
					margin-bottom: 20px;
				}

				.free {
					font-family: 'PingFangSC-Semibold';
					font-size: 20px;
					font-weight: 700;
					color: #1876ff;
				}

				.price {
					height: 28px;
					width: auto;
					display: flex;

					span:nth-child(1) {
						font-family: 'PingFangSC-Semibold';
						font-size: 20px;
						color: #1876ff;
						font-weight: 700;
						margin-right: 9.5px;
					}

					span:nth-child(2) {
						display: block;
						font-family: 'PingFangSC-Regular';
						font-size: 20px;
						color: #333333;
						font-weight: 400;
					}
				}
			}
		}
	}
}
</style>
