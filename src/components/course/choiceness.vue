<template>
	<div class="choiceness">
		<div class="choiceness_body">
			<!-- 热销 -->
			<hot-top></hot-top>
			<!-- 生活国刊 -->
			<div class="top_print">
				<div class="content">
					<div class="title_box">
						<img src="../../assets/icon/odds.png" alt="" />
						<span>ALLX生活国刊X中读</span>
					</div>
					<div class="cont_box"><img src="../../assets/img/course/BDE8A6A6D611334440A048BCC2A04FEC.png" alt="" /></div>
				</div>
			</div>
			<!-- ALL心选 -->
			<div class="heart_choose">
				<div class="content">
					<div class="title_box">
						<img src="../../assets/icon/recommend.png" alt="" />
						<span>ALL心选</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HotTop from '@/components/course/choiceness/hottop.vue';
export default {
	data() {
		return {};
	},
	methods: {},
	components: {
		HotTop
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
			bottom: 23px;
		}
	}
}
</style>
<style lang="less" scoped>
.choiceness {
	height: 100%;
	width: 100%;
	margin-bottom: 55px;
	background-color: #f9fafb;

	.choiceness_body {
		height: 100%;
		width: 100%;

		.top_print {
			height: 182.5px;
			width: 100%;
			border-bottom: 3.5px solid #e2e4ea;

			.content {
				height: 100%;
				width: 335px;
				margin: 0 auto;
				display: flex;
				flex-direction: column;

				.title_box {
					height: auto;
					width: auto;
					display: flex;
					align-items: center;
					margin-top: 21.5px;
					margin-bottom: 12px;

					img {
						height: 18px;
						width: 18px;
						border-radius: 50px;
					}

					span {
						font-family: 'PingFangSC-Medium';
						font-size: 12px;
						color: #111a34;
						font-weight: 600;
						text-align: center;
						margin-left: 9px;
					}
				}

				.cont_box {
					height: 102.5px;
					width: 100%;
					overflow: hidden;

					img {
						height: 100%;
						width: 100%;
					}
				}
			}
		}

		.heart_choose {
			height: 388px;
			width: 100%;
			background-color: #fff;
			border-bottom: 3.5px solid #e2e4ea;
			
			.content{
				height: 100%;
				width: 335px;
				margin: 0 auto;
				display: flex;
				flex-direction: column;
				
				.title_box {
					height: auto;
					width: auto;
					display: flex;
					align-items: center;
					margin-top: 17.5px;
					margin-bottom: 13.5px;
				
					img {
						height: 18px;
						width: 18px;
						border-radius: 50px;
					}
				
					span {
						font-family: 'PingFangSC-Medium';
						font-size: 12px;
						color: #111a34;
						font-weight: 600;
						text-align: center;
						margin-left: 9px;
					}
				}
			}
		}
	}
}
</style>
