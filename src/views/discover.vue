<template>
	<div class="discover">
		<div class="discover_body">
			<!-- 顶部导航栏 -->
			<van-nav-bar class="navbar" z-index="99" :border="false" placeholder>
				<template #title>
					<span>发现</span>
				</template>
			</van-nav-bar>
			<!-- 轮播 -->
			<div class="advertising_swip">
				<van-swipe class="my-swipe" :autoplay="3000" indicator-color="#a76f6f00">
					<template v-for="index in 5">
						<van-swipe-item>
							<div class="img_box" :key="index"><img src="../assets/img/discover/E099F29270B08DD8B468CE5F5E2D7612.png" alt="" /></div>
						</van-swipe-item>
					</template>
				</van-swipe>
			</div>
			<!-- 分类航栏 -->
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
			<!-- 分类导航 -->
			<div class="nav_three">
				<van-grid class="nav_grid" :border="false">
					<template v-for="(item, index) in nav_three">
						<van-grid-item class="cont">
							<div class="cont_box" :key="index">
								<img :src="item.icon" alt="" />
								<span>{{ item.text }}</span>
							</div>
						</van-grid-item>
					</template>
				</van-grid>
			</div>
			<!-- 每日一句 -->
			<div class="sentence">
				<div class="content">
					<div class="everyday">
						<div class="title">
							每日一句
							<van-icon name="arrow" size="10" color="#41485D" />
						</div>
						<span class="desc">this universe is not outside of you Look inside yourse…</span>
						<div class="btn">查看图片</div>
					</div>
					<div class="FAQ">
						<div class="title">
							你问我答 日更
							<van-icon name="arrow" size="10" color="#41485D" />
						</div>
						<span class="desc">wood=木头，knock on wood=？</span>
						<div class="btn">查看答案</div>
					</div>
				</div>
			</div>
			<!-- 卡片 -->
			<card :card="card"></card>
			<!-- 底线 -->
			<div class="bottom-divider"><van-divider :hairline="false">页面有尽头，学习无止境</van-divider></div>
			<!-- 背景 -->
			<div class="bg_color"></div>
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/tabbar.vue';
import Card from '@/components/discover/card.vue';

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
			],
			nav_three: [
				{
					text: '考研资讯',
					icon: require('../assets/icon/curriculum.png')
				},
				{
					text: '经验帖',
					icon: require('../assets/icon/book.png')
				},
				{
					text: '小挑战',
					icon: require('../assets/icon/trophy.png')
				},
				{
					text: '话题',
					icon: require('../assets/icon/gambit.png')
				}
			],
			card: [
				{
					src: require('../assets/img/course/IMG_0330.png'),
					desc: '会员免费 | 初学者60天刷完15部美剧'
				},
				{
					src: require('../assets/img/course/B1AC5CE505834FB5CB9F244338796957.png'),
					desc: '考研长难句 | 每天10分钟，攻克长难句'
				},
				{
					src: require('../assets/img/course/BB6E6BB6C81AC962F0B4EFA502FD074E.png'),
					desc: '基础音标课 丨每天15分钟，掌握基础发音'
				},
				{
					src: require('../assets/img/course/72F51587B2475382650F7B7F73E7893E.png'),
					desc: '编程基础课｜零基础学编程，新时代职场利器'
				},
				{
					src: require('../assets/img/course/BB6E6BB6C81AC962F0B4EFA502FD074E.png'),
					desc: '基础音标课 丨每天15分钟，掌握基础发音'
				},
				{
					src: require('../assets/img/course/BB6E6BB6C81AC962F0B4EFA502FD074E.png'),
					desc: '基础音标课 丨每天15分钟，掌握基础发音'
				},
				{
					src: require('../assets/img/course/BB6E6BB6C81AC962F0B4EFA502FD074E.png'),
					desc: '基础音标课 丨每天15分钟，掌握基础发音'
				},
				{
					src: require('../assets/img/course/BB6E6BB6C81AC962F0B4EFA502FD074E.png'),
					desc: '基础音标课 丨每天15分钟，掌握基础发音'
				}
			]
		};
	},
	methods: {},
	components: {
		TabBar,
		Card
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

	.nav_three {
		.van-grid {
			.van-grid-item__content {
				background-color: #f9fafb !important;
			}
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
		background-color: #f9fafb;
		margin-bottom: 110px;

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
			z-index: 10;
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

		// 导航栏
		.nav_two {
			height: 136px;
			width: 100%;
			position: relative;
			z-index: 10;
			margin-bottom: 54px;

			.content {
				height: 100%;
				width: 670px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;

				.cont_box:nth-child(1) {
					.icon {
						background: #ffa940;
						box-shadow: 0 2px 4px 0 #ffa940;
					}

					img {
						width: 44px;
						height: 22px;
					}
				}

				.cont_box:nth-child(2) {
					.icon {
						background: #ff7e5d;
						box-shadow: 0 2px 4px 0 #d64d4d;
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
						background: #54cffe;
						box-shadow: 0 2px 4px 0 #6ac6f2;
					}

					img {
						width: 49px;
						height: 23px;
					}
				}

				.cont_box:nth-child(4) {
					.icon {
						background: #6ac6f2;
						box-shadow: 0 2px 4px 0 #54cffe;
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

					.icon {
						height: 108px;
						width: 108px;
						border-radius: 100%;
						margin-bottom: 5px;
						display: flex;
						align-items: center;
						justify-content: center;
					}

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

		.nav_three {
			height: 125px;
			width: 100%;
			position: relative;
			z-index: 10;
			margin-bottom: 25px;

			.nav_grid {
				height: 100%;

				.cont:nth-child(1) {
					img {
						height: 29px;
						width: 32px;
						margin-bottom: 21px;
					}
				}

				.cont:nth-child(2) {
					img {
						height: 26px;
						width: 24px;
						margin-bottom: 22px;
					}
				}

				.cont:nth-child(3) {
					img {
						height: 30px;
						width: 32px;
						margin-bottom: 19px;
					}
				}

				.cont:nth-child(4) {
					img {
						height: 34px;
						width: 32px;
						margin-bottom: 17px;
					}
				}

				.cont_box {
					height: 100%;
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					span {
						font-family: 'PingFangSC-Semibold';
						font-size: 20px;
						color: #333333;
						font-weight: 700;
						text-align: center;
					}
				}
			}
		}

		// 每日一句
		.sentence {
			height: 297px;
			width: 100%;
			border-top: 14px solid #e2e4ea;
			border-bottom: 14px solid #e2e4ea;
			position: relative;
			z-index: 10;

			.content {
				height: 100%;
				width: 670px;
				margin: 0 auto;
				display: flex;
				flex-direction: column;

				.everyday {
					height: auto;
					width: 100%;
					display: flex;
					flex-direction: column;
					margin-top: 19px;

					.title {
						height: 28px;
						width: auto;
						font-family: 'PingFangSC-Semibold';
						font-size: 20px;
						font-weight: 700;
						color: #41485d;
						display: flex;
						align-items: center;
						margin-bottom: 20px;
					}

					.desc {
						height: 37px;
						width: 100%;
						font-family: 'PingFangSC-Regular';
						font-size: 26px;
						font-weight: 400;
						color: #41485d;
						text-align: left;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 5px;
					}

					.btn {
						height: 44px;
						width: 142px;
						background-image: linear-gradient(180deg, #ff805f 0%, #ff6d44 100%);
						border-radius: 35.5px;
						font-family: 'PingFangSC-Regular';
						font-size: 20px;
						font-weight: 400;
						color: #ffffff;
						text-align: center;
						line-height: 43px;
						margin-left: 530px;
					}
				}

				.FAQ {
					height: auto;
					width: 100%;
					display: flex;
					flex-direction: column;
					margin-top: 5px;

					.title {
						height: 28px;
						width: auto;
						font-family: 'PingFangSC-Semibold';
						font-size: 20px;
						font-weight: 700;
						color: #41485d;
						display: flex;
						align-items: center;
						margin-bottom: 20px;
					}

					.desc {
						height: 37px;
						width: 100%;
						font-family: 'PingFangSC-Regular';
						font-size: 26px;
						font-weight: 400;
						color: #41485d;
						text-align: left;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 5px;
					}

					.btn {
						height: 44px;
						width: 142px;
						background-image: linear-gradient(180deg, #ff805f 0%, #ff6d44 100%);
						border-radius: 35.5px;
						font-family: 'PingFangSC-Regular';
						font-size: 20px;
						font-weight: 400;
						color: #ffffff;
						text-align: center;
						line-height: 43px;
						margin-left: 530px;
					}
				}
			}
		}

		.bottom-divider {
			margin: 0 auto;
			width: 670px;
			margin-top: 102px;
			margin-bottom: 57px;
			font-family: "PingFangSC-Regular";
			font-weight: 400;
			font-size: 20px;
			color: #C5CAD5;
		}
	}
}
</style>
