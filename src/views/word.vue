<template>
	<div class="word">
		<div class="word_body">
			<van-sticky>
				<div class="search_box">
					<van-search class="search" show-action v-model="value" placeholder="查询英文或者中文" shape="round">
						<template #left-icon>
							<div class="left_icon"><img src="../assets/icon/search.png" alt="" /></div>
						</template>
						<template #right-icon>
							<div class="right_icon"><img src="../assets/icon/voice.png" alt="" /></div>
						</template>
						<template #action>
							<div class="action"><img src="../assets/icon/remind.png" alt="" /></div>
						</template>
					</van-search>
				</div>
			</van-sticky>
			<div class="advertising"><img src="../assets/img/home/E9EC8DDC9EF587ADE548D42EAAD687C4.png" alt="" /></div>
			<div class="countent">
				<div class="cent_box">
					<div class="hi_box">
						<div class="text">
							<span>HI</span>
							<span>~</span>
						</div>
						<div class="fun_box">
							<div class="memory_box">
								<img src="../assets/icon/tendency.png" alt="" />
								<span>记忆曲线</span>
							</div>
							<div class="calendar_box">
								<img src="../assets/icon/calendar.png" alt="" />
								<span>打卡日历</span>
							</div>
						</div>
					</div>
					<div class="vocabulary_book"><img src="../assets/img/home/schedule.png" alt="" /></div>
					<!-- 今日任务 -->
					<mission></mission>
				</div>
				<!-- 底部分类导航 -->
				<bot-nav></bot-nav>
			</div>
			<div class="bg_color"></div>
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/tabbar.vue';
import BotNav from '@/components/word/BotNav.vue';
import Mission from '@/components/word/mission.vue';

export default {
	data() {
		return {
			value: '',
			nav: [
				{
					title: '听力',
					src: require('../assets/icon/hearing.png')
				},
				{
					title: '阅读',
					src: require('../assets/icon/read.png')
				},
				{
					title: '对战',
					src: require('../assets/icon/fight.png')
				},
				{
					title: '随身听',
					src: require('../assets/icon/Walkman.png')
				},
				{
					title: '短信',
					src: require('../assets/icon/note.png')
				}
			]
		};
	},
	methods: {},
	components: {
		TabBar,
		BotNav,
		Mission
	}
};
</script>

<style lang="less" scoped>
.word {
	height: 100%;
	width: 100%;

	.word_body {
		height: 100%;
		width: 100%;

		.bg_color {
			max-width: 375px; //按一倍图适配
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

		.search_box {
			position: relative;
			z-index: 10;
			width: 100%;

			.search {
				height: 45px;

				.left_icon {
					height: 100%;
					width: 20px;
					display: flex;
					align-items: center;
					justify-content: center;

					img {
						height: 18px;
						width: 18px;
					}
				}

				.right_icon {
					height: 100%;
					width: auto;
					display: flex;
					align-items: center;
					justify-content: center;

					img {
						height: 20px;
						width: 20px;
					}
				}

				.action {
					height: 100%;
					width: 30px;
					display: flex;
					align-items: center;
					justify-content: center;

					img {
						height: 20px;
						width: 16.5px;
						margin-right: 5px;
					}
				}
			}
		}

		.advertising {
			position: relative;
			z-index: 10;
			height: 57.5px;
			width: 100%;
			margin-top: 5.5px;

			img {
				height: 100%;
				width: 100%;
			}
		}

		.countent {
			height: auto;
			width: 100%;
			position: relative;
			z-index: 10;

			.cent_box {
				height: 420px;
				width: 100%;
				// background-color: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;

				.hi_box {
					height: 85px;
					width: 300.5px;
					display: flex;
					align-items: flex-end;
					justify-content: space-between;

					.text {
						height: auto;
						width: auto;
						display: flex;
						align-items: flex-end;
						// margin-right: 88.5px;

						span:nth-child(1) {
							display: block;
							font-family: 'PingFangSC-Regular';
							font-size: 50px;
							color: #000016;
							line-height: 40px;
						}

						span:nth-child(2) {
							display: block;
							font-family: 'PingFangSC-Regular';
							font-size: 25px;
							color: #000016;
							margin-left: 15px;
						}
					}

					.fun_box {
						height: auto;
						width: auto;
						display: flex;
						align-items: center;
						// justify-content: space-between;

						.memory_box {
							height: auto;
							width: auto;

							span {
								font-size: 10px;
								font-family: 'PingFangSC-Regular';
								color: #41485d;
							}

							img {
								height: 9.5px;
								width: 10px;
								margin-right: 7.5px;
							}
						}

						.calendar_box {
							height: auto;
							width: auto;
							margin-left: 20px;

							span {
								font-size: 10px;
								font-family: 'PingFangSC-Regular';
								color: #41485d;
							}

							img {
								height: 8.5px;
								width: 10px;
								margin-right: 7.5px;
							}
						}
					}
				}

				.vocabulary_book {
					height: 88px;
					width: 335px;
					margin-top: 47px;

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
