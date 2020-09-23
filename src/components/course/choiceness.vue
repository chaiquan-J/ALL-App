<template>
	<div class="choiceness">
		<div class="choiceness_body">
			<!-- 热销 -->
			<hot-top></hot-top>
			<!-- 生活国刊 -->
			<topp-print></topp-print>
			<!-- ALL心选 -->
			<heart-choose></heart-choose>
			<!-- 特惠专区 -->
		</div>
	</div>
</template>

<script>
import HotTop from '@/components/course/choiceness/hottop.vue';
import HeartChoose from '@/components/course/choiceness/HeartChoose.vue';
import ToppPrint from '@/components/course/choiceness/ToppPrint.vue';

export default {
	data() {
		return {};
	},
	methods: {},
	components: {
		HotTop,
		HeartChoose,
		ToppPrint
	}
};
</script>
<style lang="less">
.choiceness {
	.hot_top {
		.van-divider {
			position: relative;
			background-color: #999999;
			border-color: #999999;
			right: 0px;
			bottom: 29px;
		}
	}

	.heart_choose {
		.van-divider {
			position: relative;
			background-color: #333333;
			border-color: #333333;
			right: 0px;
			bottom: 29px;
		}
	}
}
</style>
<style lang="less" scoped>
.choiceness {
	height: 100%;
	width: 100%;
	margin-bottom: 110px;
	background-color: #f9fafb;

	.choiceness_body {
		height: 100%;
		width: 100%;

		// 国刊
		.top_print {
			height: 365px;
			width: 100%;
			border-bottom: 7px solid #e2e4ea;

			.content {
				height: 100%;
				width: 670px;
				margin: 0 auto;
				display: flex;
				flex-direction: column;

				.title_box {
					height: auto;
					width: auto;
					display: flex;
					align-items: center;
					margin-top: 43px;
					margin-bottom: 24px;

					img {
						height: 36px;
						width: 36px;
						border-radius: 50px;
					}

					span {
						font-family: 'PingFangSC-Medium';
						font-size: 24px;
						color: #111a34;
						font-weight: 600;
						text-align: center;
						margin-left: 18px;
					}
				}

				.cont_box {
					height: 205px;
					width: 100%;
					overflow: hidden;

					img {
						height: 100%;
						width: 100%;
					}
				}
			}
		}
	}
}
</style>
