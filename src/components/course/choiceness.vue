<template>
	<div class="choiceness">
		<div class="choiceness_body">
			<!-- 热销 -->
			<hot-top :title="hot_top.title" :icon="hot_top.icon" :hot_top="hot_top.shopp"></hot-top>
			<!-- 生活国刊 -->
			<topp-print :title="topp_print.title" :icon="topp_print.icon" :img="topp_print.src"></topp-print>
			<!-- ALL心选 -->
			<heart-choose :title="heart_choose.title" :icon="heart_choose.icon" :shopp="heart_choose.shopp"></heart-choose>
			<!-- 特惠专区 -->
			<hot-top :title="discounts.title" :icon="discounts.icon" :hot_top="discounts.shopp"></hot-top>
			<!-- 效率提升营 -->
			<topp-print :title="efficiency.title" :icon="efficiency.icon" :img="efficiency.src"></topp-print>
			<!-- 精选课程 -->
			<heart-choose :title="selectedcourse.title" :icon="selectedcourse.icon" :shopp="selectedcourse.shopp"></heart-choose>
			<!-- 开学加油站 -->
			<hot-top :title="petrol.title" :icon="petrol.icon" :hot_top="petrol.shopp"></hot-top>
			<!-- 掌握考研秘笈 -->
			<div class="grasp">
				<div class="content">
					<div class="title_box">
						<img src="../../assets/icon/odds.png" alt="" />
						<span>掌握考研秘笈</span>
					</div>
					<div class="cont_box"><img src="../../assets/img/course/IMG_0331(20200902-153640).png" alt="" /></div>
				</div>
			</div>
			<!-- 底线 -->
			<baseline></baseline>
		</div>
	</div>
</template>

<script>
import HotTop from '@/components/course/choiceness/hottop.vue';
import HeartChoose from '@/components/course/choiceness/HeartChoose.vue';
import ToppPrint from '@/components/course/choiceness/ToppPrint.vue';
import Baseline from '@/components/Baseline.vue';

export default {
	data() {
		return {
			// 热销
			hot_top: {
				title: '热销TOP',
				icon: require('../../assets/icon/recommend.png'),
				shopp: [
					{
						title: '单词会员|柯林斯辞典全年免费',
						desc: '单词随身听.上线!更多特权持续解锁!',
						src: require('../../assets/img/course/E0A7407B87D236C9528E3A6555E20573.png'),
						price: true,
						price1: '98',
						price2: '129'
					},
					{
						title: '四六级训练营|考不过全额退',
						desc: '适用于12月考试，Care服务 考不过全额退',
						src: require('../../assets/img/course/B72EB3CE4F9D30D577332122027C5B5E.png'),
						price: true,
						price1: '140',
						price2: '199'
					},
					{
						title: 'ALL编程| Python体验课',
						desc: '零基础学编程，每天20分钟，边学边练,闯关式学习高效有趣。',
						src: require('../../assets/img/course/7F8D1A3C1ACAAE51B4226067C6C6C0CF.png'),
						price: true,
						price1: '6.9',
						price2: '129'
					}
				]
			},
			// 生活国刊
			topp_print: {
				title: 'ALLX生活国刊X中读',
				icon: require('../../assets/icon/recommend.png'),
				src: require('../../assets/img/course/BDE8A6A6D611334440A048BCC2A04FEC.png')
			},
			// ALL心选
			heart_choose: {
				title: 'ALL心选',
				icon: require('../../assets/icon/odds.png'),
				shopp: [
					{
						src: require('../../assets/img/course/E8AF7139B15D6D5F1614817F5523E205.png'),
						desc: '考研7天训练营|百日冲刺，助你一臂之力',
						free: true,
						tag: false,
						price1: '',
						price2: ''
					},
					{
						src: require('../../assets/img/course/11C763A98CBD4E411FB4DF957AB1DD46.png'),
						desc: '考研英语训练营| - 站式学齐，来得及!',
						free: false,
						tag: true,
						price1: 999,
						price2: 1199
					},
					{
						src: require('../../assets/img/course/42B8D3CCEF7C87FCC9FB5A3BB0157667.png'),
						desc: '考研7天训练营|百日冲刺，助你一臂之力',
						free: false,
						tag: true,
						price1: 999,
						price2: 199
					},
					{
						src: require('../../assets/img/course/07BD031DF5E34952CB29AD732CF8FBED.png'),
						desc: '考研英语训练营| - 站式学齐，来得及!',
						free: false,
						tag: true,
						price1: 999,
						price2: 199
					}
				]
			},
			// 特惠专区
			discounts: {
				title: '特惠专区',
				icon: require('../../assets/icon/odds.png'),
				shopp: [
					{
						title: '365计划 | 养成终身好习惯',
						desc: '打卡得限定礼盒，你的坚持值得奖励～',
						src: require('../../assets/img/course/61E1CE0E081CF144743B00DC060C515E.png'),
						price1: '59',
						price2: '129'
					},
					{
						title: '畅读会员 | 限时5折再减40',
						desc: '《小王子》... 1000+英文原版免费读，精品课程免费学！',
						src: require('../../assets/img/course/0300127242CC1B0A3DFBA2C6C7B2C469.png'),
						price1: '40',
						price2: '199'
					},
					{
						title: '听力口语会员 | 助跑开学季',
						desc: '12w听力素材、每日精选、学习计划…每天15分钟，英语听得懂。',
						src: require('../../assets/img/course/8C14CC540631F9207411CCC75235F932.png'),
						price1: '6.9',
						price2: '69'
					}
				]
			},
			// 效率提升营
			efficiency: {
				title: '效率提升营',
				icon: require('../../assets/icon/recommend.png'),
				src: require('../../assets/img/course/BDE8A6A6D611334440A048BCC2A04FEC.png')
			},
			// 精选课程
			selectedcourse: {
				title: '精选课程',
				icon: require('../../assets/icon/odds.png'),
				shopp: [
					{
						src: require('../../assets/img/course/IMG_0330.png'),
						desc: '会员免费 | 初学者60天刷完15部美剧',
						free: false,
						tag: false,
						price1: 149,
						price2: 249
					},
					{
						src: require('../../assets/img/course/B1AC5CE505834FB5CB9F244338796957.png'),
						desc: '考研长难句 | 每天10分钟，攻克长难句',
						free: false,
						tag: false,
						price1: 49,
						price2: 199
					},
					{
						src: require('../../assets/img/course/BB6E6BB6C81AC962F0B4EFA502FD074E.png'),
						desc: '基础音标课 丨每天15分钟，掌握基础发音',
						free: true,
						tag: false,
						price1: 999,
						price2: 199
					},
					{
						src: require('../../assets/img/course/72F51587B2475382650F7B7F73E7893E.png'),
						desc: '编程基础课｜零基础学编程，新时代职场利器',
						free: false,
						tag: false,
						price1: 699,
						price2: 199
					}
				]
			},
			// 开学加油站
			petrol: {
				title: '开学加油站',
				icon: require('../../assets/icon/recommend.png'),
				shopp: [
					{
						title: '高中单词特训 | 完成计划得礼',
						desc: '60天搞定高考词汇，B站会员、QQ音乐会员、错题机等你来拿！',
						src: require('../../assets/img/course/731E895F6AA882A056DB9B9C3EB74C18.png'),
						price: false,
						price1: '',
						price2: ''
					},
					{
						title: '初中单词特训 | 完成计划得礼',
						desc: '60天搞定中考词汇，赢取精美文具礼包、英文原版书！',
						src: require('../../assets/img/course/46C87C6582C9CBC6CB246D0431642ED6.png'),
						price: false,
						price1: '',
						price2: ''
					},
					{
						title: '小学单词特训 | 完成计划得好',
						desc: '60天打好英语单词基础，更有精美学习大礼包！ ',
						src: require('../../assets/img/course/DB2978FB16D0E0FE2AD41C7544CF54AB.png'),
						price: false,
						price1: '',
						price2: ''
					}
				]
			}
		};
	},
	methods: {},
	components: {
		HotTop,
		HeartChoose,
		ToppPrint,
		Baseline
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

		.grasp {
			height: 350px;
			width: 100%;

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
					margin-bottom: 32px;

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
