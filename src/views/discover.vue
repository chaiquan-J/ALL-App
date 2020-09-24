<template>
	<div class="discover">
		<div class="discover_body">
			<!-- 顶部导航栏 -->
			<van-nav-bar class="navbar" z-index="99" :border="false" fixed placeholder>
				<template #title>
					<span>发现</span>
				</template>
			</van-nav-bar>
			<!-- 轮播 -->
			<div class="advertising_swip">
				<van-swipe class="my-swipe" :autoplay="3000" indicator-color="#a76f6f00">
					<van-swipe-item>
						<div class="img_box"><img src="../assets/img/discover/E099F29270B08DD8B468CE5F5E2D7612.png" alt="" /></div>
					</van-swipe-item>
					<van-swipe-item>
						<div class="img_box"><img src="../assets/img/discover/E099F29270B08DD8B468CE5F5E2D7612.png" alt="" /></div>
					</van-swipe-item>
					<van-swipe-item>
						<div class="img_box"><img src="../assets/img/discover/E099F29270B08DD8B468CE5F5E2D7612.png" alt="" /></div>
					</van-swipe-item>
					<van-swipe-item>
						<div class="img_box"><img src="../assets/img/discover/E099F29270B08DD8B468CE5F5E2D7612.png" alt="" /></div>
					</van-swipe-item>
					<van-swipe-item>
						<div class="img_box"><img src="../assets/img/discover/E099F29270B08DD8B468CE5F5E2D7612.png" alt="" /></div>
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="nav_two">
				<div class="content">
					<template v-for="(item, index) in nav_two">
						<div class="cont_box">
							<div class="icon"><img :src="item.icon" alt="" /></div>
							<span>{{ item.text }}</span>
						</div>
					</template>
				</div>
			</div>
			<div class=""></div>
			<div class="bg_color"></div>
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/tabbar.vue';
export default {
	data() {
		return {
			nav_two: [
				{
					text: '四六级',
					icon: require('../assets/icon/CET.png')
				},
				{
					text: '成长计划',
					icon: require('../assets/icon/plan.png')
				},
				{
					text: '打卡挑战',
					icon: require('../assets/icon/challenge.png')
				},
				{
					text: '每日一句',
					icon: require('../assets/icon/sign.png')
				}
			]
		};
	},
	methods: {},
	components: {
		TabBar
	}
};
</script>

<style lang="less">
.discover {
	.navbar {
		.van-nav-bar {
			height: 88px !important;
		}
	}

	.advertising_swip {
		.van-swipe__indicator {
			height: 10px;
			width: 10px;
			background-color: #a76f6f00;
			border: 1px solid #e2e4ea;
			margin-left: 4.5px;
			margin-right: 4px;
		}
	}
}
</style>

<style lang="less" scoped>
.discover {
	height: 100%;
	width: 100%;

	.discover_body {
		height: 100%;
		width: 100%;

		.bg_color {
			// max-width: 375px; //按一倍图适配
			max-width: 750px; //二倍图
			overflow: hidden;
			height: 100%;
			position: absolute;
			left: 0px;
			width: 100%;
			top: 50%;
			transform: translateY(-50%);
			background-color: #f9fafb;
			z-index: 1;
		}

		.navbar {
			height: 88px !important;
			width: 100%;

			span {
				font-family: 'PingFangSC-Medium';
				font-size: 36px;
				color: #111a34;
				font-weight: 600;
				text-align: center;
			}
		}

		.advertising_swip {
			height: 310px;
			width: 100%;
			position: relative;
			z-index: 99;
			margin-bottom: 28px;

			.my-swipe {
				height: 100%;
				width: 100%;

				.van-swipe-item {
					.img_box {
						height: 292px;
						width: 670px;
						margin: 0 auto;
						margin-top: 20px;

						img {
							height: 100%;
							width: 670px;
						}
					}
				}
			}
		}

		.nav_two {
			height: 136px;
			width: 100%;
			position: relative;
			z-index: 99;

			.content {
				height: 100%;
				width: 670px;
				margin: 0 auto;
				background-color: #eee;
				display: flex;
				justify-content: space-between;

				.cont_box:nth-child(1) {
					.icon {
						height: 108px;
						width: 108px;
						background: #ffa940;
						box-shadow: 0 2px 4px 0 #ffa940;
						border-radius: 100%;
						margin-bottom: 5px;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					img {
						width: 44px;
						height: 22px;
					}
				}

				.cont_box:nth-child(2) {
					.icon {
						height: 108px;
						width: 108px;
						background: #ff7e5d;
						box-shadow: 0 2px 4px 0 #d64d4d;
						border-radius: 100%;
						margin-bottom: 5px;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					img {
						width: 36px;
						height: 38px;
					}
				}

				.cont_box:nth-child(3) {
					height: 100%;
					width: 108px;
					display: flex;
					flex-direction: column;
					align-items: center;

					.icon {
						height: 108px;
						width: 108px;
						background: #54cffe;
						box-shadow: 0 2px 4px 0 #6ac6f2;
						border-radius: 100%;
						margin-bottom: 5px;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					img {
						width: 49px;
						height: 23px;
					}
				}

				.cont_box:nth-child(4) {
					.icon {
						height: 108px;
						width: 108px;
						background: #6ac6f2;
						box-shadow: 0 2px 4px 0 #54cffe;
						border-radius: 100%;
						margin-bottom: 5px;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					img {
						width: 38px;
						height: 39px;
					}
				}

				.cont_box {
					height: 100%;
					width: 108px;
					display: flex;
					flex-direction: column;
					align-items: center;
					
					span {
						font-family: 'PingFangSC-Semibold';
						font-size: 20px;
						color: #111a34;
						font-weight: 700;
						text-align: center;
					}
				}
			}
		}
	}
}
</style>
