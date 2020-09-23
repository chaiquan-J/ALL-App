<template>
	<div class="discounts">
		<div class="content">
			<div class="title_box">
				<img src="../../../assets/icon/odds.png" alt="" />
				<span>特惠专区</span>
			</div>
			<template v-for="(item, index) in discounts">
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
	export default{
		data(){
			return{
				discounts:[
					{
						title: '365计划 | 养成终身好习惯',
						desc: '打卡得限定礼盒，你的坚持值得奖励～',
						src: require('../../../assets/img/course/61E1CE0E081CF144743B00DC060C515E.png'),
						price1: '59',
						price2: '129'
					},
					{
						title: '畅读会员 | 限时5折再减40',
						desc: '《小王子》... 1000+英文原版免费读，精品课程免费学！',
						src: require('../../../assets/img/course/0300127242CC1B0A3DFBA2C6C7B2C469.png'),
						price1: '40',
						price2: '199'
					},
					{
						title: '听力口语会员 | 助跑开学季',
						desc: '12w听力素材、每日精选、学习计划…每天15分钟，英语听得懂。',
						src: require('../../../assets/img/course/8C14CC540631F9207411CCC75235F932.png'),
						price1: '6.9',
						price2: '69'
					}
				]
			}
		},
		methods:{}
	}
</script>

<style lang="less" scoped>
	.discounts {
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
