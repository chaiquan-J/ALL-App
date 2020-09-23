<template>
	<div class="heart_choose">
		<div class="content">
			<div class="title_box">
				<img src="../../../assets/icon/recommend.png" alt="" />
				<span>ALL心选</span>
			</div>
			<div class="shopp_box">
				<template v-for="(item,index) in shopp">
					<div class="cont_box">
						<img :src="item.src" alt="" />
						<span class="desc">{{item.desc}}</span>
						<template v-if="item.free">
							<span class="free">免费</span>
						</template>
						<template v-else>
							<div class="price">
								<span>￥{{item.price1}}</span>
								<span>
									￥{{item.price2}}
									<van-divider />
								</span>
								<div class="tag">ALL抵用￥5</div>
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
		return {
			shopp: [
				{
					src: require('../../../assets/img/course/E8AF7139B15D6D5F1614817F5523E205.png'),
					desc: '考研7天训练营|百日冲刺，助你一臂之力',
					free: true,
					price1: '',
					price2: ''
				},
				{
					src: require('../../../assets/img/course/11C763A98CBD4E411FB4DF957AB1DD46.png'),
					desc: '考研英语训练营| - 站式学齐，来得及!',
					free: false,
					price1: 999,
					price2: 1199
				},
				{
					src: require('../../../assets/img/course/42B8D3CCEF7C87FCC9FB5A3BB0157667.png'),
					desc: '考研7天训练营|百日冲刺，助你一臂之力',
					free: false,
					price1: 999,
					price2: 199
				},
				{
					src: require('../../../assets/img/course/07BD031DF5E34952CB29AD732CF8FBED.png'),
					desc: '考研英语训练营| - 站式学齐，来得及!',
					free: false,
					price1: 999,
					price2: 199
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="less" scoped>
.heart_choose {
	height: 800px;
	width: 100%;
	background-color: #fff;
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
			margin-top: 35px;
			margin-bottom: 27px;

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

		.shopp_box {
			width: 670px;
			height: auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.cont_box {
				height: 315px;
				width: 319px;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				position: relative;
				margin-bottom: 35px;

				img {
					height: 194px;
					width: 100%;
					margin-bottom: 6px;
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

					.tag {
						height: 30px;
						width: 150px;
						line-height: 30px;
						background-image: linear-gradient(180deg, #ff9200, #ff9200, #fadb14);
						border-radius: 13px;
						font-size: 5px;
						color: #fff;
						position: absolute;
						bottom: 10px;
						right: 0px;
					}
				}
			}
		}
	}
}
</style>
