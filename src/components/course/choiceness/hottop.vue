<template>
	<div class="hot_top">
		<div class="content">
			<div class="title_box">
				<img src="../../../assets/icon/recommend.png" alt="" />
				<span>热销TOP</span>
			</div>
			<template v-for="(item, index) in hot_top">
				<div class="cont_box" :key="index">
					<div class="left_box"><img :src="item.src" alt="" /></div>
					<div class="right_box">
						<div class="title">{{ item.title }}</div>
						<div class="desc">{{ item.desc }}</div>
						<div class="price">
							<span>￥{{ item.price1 }}</span>
							<span>
								￥{{ item.price2 }}
								<van-divider />
							</span>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			hot_top: [
				{
					title: '单词会员|柯林斯辞典全年免费',
					desc: '单词随身听.上线!更多特权持续解锁!',
					src: require('../../../assets/img/course/E0A7407B87D236C9528E3A6555E20573.png'),
					price1: '98',
					price2: '129'
				},
				{
					title: '四六级训练营|考不过全额退',
					desc: '适用于12月考试，Care服务 考不过全额退',
					src: require('../../../assets/img/course/B72EB3CE4F9D30D577332122027C5B5E.png'),
					price1: '140',
					price2: '199'
				},
				{
					title: 'ALL编程| Python体验课',
					desc: '零基础学编程，每天20分钟，边学边练,闯关式学习高效有趣。',
					src: require('../../../assets/img/course/7F8D1A3C1ACAAE51B4226067C6C6C0CF.png'),
					price1: '6.9',
					price2: '129'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="less" scoped>
.hot_top {
	height: 850px;
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
			margin-top: 36px;
			margin-bottom: 28px;

			img {
				height: 36px;
				width: 36px;
				border-radius: 50px;
			}

			span {
				font-family: 'PingFangSC-Medium';
				font-size: 24px;
				color: #333333;
				font-weight: 600;
				text-align: center;
				margin-left: 18px;
			}
		}

		& div:nth-child(4) {
			border: none;
		}

		.cont_box {
			height: 235px;
			width: 100%;
			display: flex;
			border-bottom: 1px solid #eeeeee;
			margin-bottom: 10px;

			.left_box {
				height: 225px;
				width: 220px;
				overflow: hidden;
				margin-right: 13px;

				img {
					height: 100%;
					width: 100%;
				}
			}

			.right_box {
				height: 225px;
				width: 454px;
				display: flex;
				flex-direction: column;
				text-align: left;

				.title {
					height: auto;
					width: 100%;
					font-family: 'PingFangSC-Regular';
					font-size: 33px;
					font-weight: 400;
					color: #111a34;
					margin-top: 25px;
				}

				.desc {
					width: 430px;
					height: 85px;
					font-family: 'PingFangSC-Regular';
					font-weight: 400;
					font-size: 20px;
					color: #c5cad5;
					margin-top: 30px;
				}

				.price {
					height: 28px;
					width: auto;
					display: flex;

					span:nth-child(1) {
						font-family: 'PingFangSC-Medium';
						font-size: 20px;
						font-weight: 600;
						color: #1876ff;
						margin-right: 20px;
					}

					span:nth-child(2) {
						font-family: 'PingFangSC-Regular';
						font-size: 20px;
						font-weight: 400;
						color: #999999;
					}
				}
			}
		}
	}
}
</style>
