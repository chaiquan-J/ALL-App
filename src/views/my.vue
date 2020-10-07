<template>
	<div class="my">
		<div class="my_body">
			<van-sticky>
				<div class="heard_nav">
					<div class="icon"><van-icon name="scan" color="#fff" size="19.86" /></div>
					<div class="icon"><van-icon name="setting-o" color="#fff" size="22.08" /></div>
				</div>
			</van-sticky>
			<div class="user_box">
				<div class="content">
					<div class="left_box">
						<div class="user_name">用户名称</div>
						<div class="user_describe">点击这里添加个人描述</div>
						<div class="practice">
							<div class="study">
								<div class="time">0</div>
								<div class="title">学习单词</div>
							</div>
							<div class="insist">
								<div class="time">0</div>
								<div class="title">坚持天数</div>
							</div>
						</div>
					</div>
					<div class="right_box">
						<div class="user_img"><img src="../assets/icon/default.png" alt="" /></div>
					</div>
				</div>
			</div>
			<div class="one_cell">
				<template v-for="(item, index) in one_cell">
					<div class="cell_cont" :key="index">
						<div class="icon"><img :src="item.icon" alt="" /></div>
						<div class="title">{{item.title}}</div>
						<div class="link"><van-icon name="arrow" size="18" /></div>
					</div>
				</template>
			</div>
			<div class="two_cell">
				<template v-for="(item, index) in two_cell">
					<div class="cell_cont" :key="index">
						<div class="icon"><img :src="item.icon" alt="" /></div>
						<div class="title">{{item.title}}</div>
						<div class="link"><van-icon name="arrow" size="18" /></div>
					</div>
				</template>
			</div>
			<div class="three_cell">
				<template v-for="(item, index) in three_cell">
					<div class="cell_cont" :key="index">
						<div class="icon"><img :src="item.icon" alt="" /></div>
						<div class="title">{{item.title}}</div>
						<div class="link"><van-icon name="arrow" size="18" /></div>
					</div>
				</template>
			</div>
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
			one_cell: [
				{
					icon: require('../assets/icon/curriculum-0.png'),
					title: '我的课堂',
					to: ''
				},
				{
					icon: require('../assets/icon/ID.png'),
					title: '我的账号',
					to: ''
				},
				{
					icon: require('../assets/icon/news.png'),
					title: '我的消息',
					to: ''
				}
			],
			two_cell:[
				{
					icon: require('../assets/icon/collect.png'),
					title: '我的收藏',
					to: ''
				},
				{
					icon: require('../assets/icon/recharge.png'),
					title: '我的铜板',
					to: ''
				}
			],
			three_cell:[
				{
					icon: require('../assets/icon/feedback.png'),
					title: '我的评论',
					to: ''
				},
				{
					icon: require('../assets/icon/good.png'),
					title: '我的点赞',
					to: ''
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

<style lang="less" scoped>
.my {
	height: 100%;
	width: 100%;

	.my_body {
		height: 100%;
		width: 100%;

		.bg_color {
			max-width: 750px; //按一倍图适配
			overflow: hidden;
			height: 100%;
			position: absolute;
			left: 0px;
			width: 100%;
			top: 50%;
			transform: translateY(-50%);
			background-color: #f9fafb;
		}

		.heard_nav {
			height: 120px;
			width: 100%;
			background-color: #1876ff;
			position: relative;
			z-index: 99;
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.icon:nth-child(1) {
				height: 36px;
				width: 36px;
			}

			.icon:nth-child(2) {
				height: 40px;
				width: 40px;
				margin-right: 43px;
				margin-left: 42px;
				margin-bottom: 5px;
			}
		}

		.user_box {
			height: 168px;
			width: 100%;
			background-color: #1876ff;
			position: relative;
			z-index: 10;

			.content {
				height: 100%;
				width: 670px;
				margin: 0 auto;
				// background-color: #ffe165;
				display: flex;
				justify-content: space-between;

				.left_box {
					height: 100%;
					width: auto;
					// background-color: #f421ea;
					display: flex;
					flex-direction: column;
					align-items: flex-start;

					.user_name {
						height: 50px;
						width: auto;
						font-size: 36px;
						color: #fff;
						margin-bottom: 4.5px;
					}

					.user_describe {
						height: 28px;
						width: auto;
						font-size: 20px;
						color: #fff;
						margin-bottom: 8.8px;
					}

					.practice {
						height: auto;
						width: auto;
						display: flex;

						.study {
							height: 57.9px;
							width: auto;
							display: flex;
							flex-direction: column;
							align-items: flex-start;
							margin-right: 24px;

							.time {
								height: 33px;
								width: auto;
								font-size: 24px;
								color: #fff;
								margin-bottom: 4.9px;
							}

							.title {
								height: 20px;
								width: auto;
								font-size: 14px;
								color: #fff;
							}
						}

						.insist {
							height: 57.9px;
							width: auto;
							display: flex;
							flex-direction: column;
							align-items: flex-start;

							.time {
								height: 33px;
								width: auto;
								font-size: 24px;
								color: #fff;
								margin-bottom: 4.9px;
							}

							.title {
								height: 20px;
								width: auto;
								font-size: 14px;
								color: #fff;
							}
						}
					}
				}

				.right_box {
					height: 100%;
					width: 85px;
					// background-color: #89f447;

					.user_img {
						height: 86px;
						width: 85px;

						img {
							height: 100%;
							width: 100%;
						}
					}
				}
			}
		}

		.one_cell {
			height: auto;
			width: 100%;
			position: relative;
			z-index: 10;
			margin-bottom: 66px;

			.cell_cont {
				height: 87px;
				width: 100%;
				display: flex;
				align-items: center;
				background-color: #fff;
				border-bottom: 0.5px solid #eeeeee;

				.title {
					height: auto;
					width: auto;
					font-size: 34px;
					margin-right: 450px;
				}

				img {
					height: 100%;
					width: 100%;
				}

				.link {
					margin-top: 5px;
				}
			}

			.cell_cont:nth-child(1) {
				.icon{
					height: 32px;
					width: 34px;
					margin-left: 40px;
					margin-right: 31px;
				}
			}
			
			.cell_cont:nth-child(2) {
				.icon{
					height: 40px;
					width: 34px;
					margin-left: 40px;
					margin-right: 31px;
				}
			}
			
			.cell_cont:nth-child(3) {
				.icon{
					height: 37px;
					width: 37px;
					margin-left: 40px;
					margin-right: 31px;
				}
			}
		}
	
		.two_cell{
			height: auto;
			width: 100%;
			margin-bottom: 66px;
			position: relative;
			z-index: 10;
			
			.cell_cont {
				height: 87px;
				width: 100%;
				display: flex;
				align-items: center;
				background-color: #fff;
				border-bottom: 0.5px solid #eeeeee;

				.title {
					height: auto;
					width: auto;
					font-size: 34px;
					margin-right: 450px;
				}
				
				.icon{
					margin-left: 40px;
					margin-right: 31px;
					
					img {
						height: 100%;
						width: 100%;
					}
				}

				.link {
					margin-top: 5px;
				}
			}
			
			.cell_cont:nth-child(1) {
				.icon{
					height: 40px;
					width: 40px;
				}
			}
			
			.cell_cont:nth-child(2) {
				.icon{
					height: 40px;
					width: 40px;
				}
			}
		}
		
		.three_cell{
			height: auto;
			width: 100%;
			position: relative;
			z-index: 10;
			
			.cell_cont {
				height: 87px;
				width: 100%;
				display: flex;
				align-items: center;
				background-color: #fff;
				border-bottom: 0.5px solid #eeeeee;
			
				.title {
					height: auto;
					width: auto;
					font-size: 34px;
					margin-right: 450px;
				}
				
				.icon{
					margin-left: 40px;
					margin-right: 31px;
					
					img {
						height: 100%;
						width: 100%;
					}
				}
			
				.link {
					margin-top: 5px;
				}
			}
			
			.cell_cont:nth-child(1) {
				.icon{
					height: 38px;
					width: 40px;
				}
			}
			
			.cell_cont:nth-child(2) {
				.icon{
					height: 39px;
					width: 40px;
				}
			}
		}
	}
}
</style>
