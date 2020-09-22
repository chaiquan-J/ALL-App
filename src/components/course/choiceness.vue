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
					<div class="cont_box">
						<img src="../../assets/img/course/BDE8A6A6D611334440A048BCC2A04FEC.png" alt="">
					</div>
				</div>
			</div>
			<!-- ALL心选 -->
			<div class="heart_choose">
				
			</div>
		</div>
	</div>
</template>

<script>
import HotTop from '@/components/course/choiceness/hottop.vue'
export default {
	data() {
		return {
			hot_top: [
				{
					title: '单词会员|柯林斯辞典全年免费',
					desc: '单词随身听.上线!更多特权持续解锁!',
					src: require('../../assets/img/course/E0A7407B87D236C9528E3A6555E20573.png'),
					price1: '98',
					price2: '129'
				},
				{
					title: '四六级训练营|考不过全额退',
					desc: '适用于12月考试，Care服务 考不过全额退',
					src: require('../../assets/img/course/B72EB3CE4F9D30D577332122027C5B5E.png'),
					price1: '140',
					price2: '199'
				},
				{
					title: 'ALL编程| Python体验课',
					desc: '零基础学编程，每天20分钟，边学边练,闯关式学习高效有趣。',
					src: require('../../assets/img/course/7F8D1A3C1ACAAE51B4226067C6C6C0CF.png'),
					price1: '6.9',
					price2: '129'
				}
			]
		};
	},
	methods: {},
	components:{
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
		
		.top_print{
			height: 182.5px;
			width: 100%;
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
						color: #111A34;
						font-weight: 600;
						text-align: center;
						margin-left: 9px;
					}
				}
				
				.cont_box{
					height: 102.5px;
					width: 100%;
					overflow: hidden;
					
					img{
						height: 100%;
						width: 100%;
					}
				}
			}
		}
		
		.heart_choose{
			height: 388px;
			width: 100%;
			background-color: #FFF;
			border-bottom: 3.5px solid #e2e4ea;
		}
	}
}
</style>
