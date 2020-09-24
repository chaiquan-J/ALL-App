<template>
	<div class="cet">
		<div class="cet_body">
			<!-- 第一组课程 -->
			<shopp-box :shopp="top"></shopp-box>
			<!-- 分割线 -->
			<div class="hr"></div>
			<!-- 第二组课程 -->
			<shopp-box :shopp="bottom"></shopp-box>
			<!-- 底线 -->
			<baseline></baseline>
		</div>
	</div>
</template>

<script>
import ShoppBox from '@/components/course/cet/ShoppBox.vue';
import Baseline from '@/components/Baseline.vue';

export default {
	data() {
		return {
			top: [
				{
					src: require('../../assets/img/course/A599F21510B0EE547541ED184D1E297B.png'),
					desc: '四六级训练营 | Care考不过全额退',
					free: true,
					price1: 149,
					price2: 249
				},
				{
					src: require('../../assets/img/course/E8AF7139B15D6D5F1614817F5523E205.png'),
					desc: '考研7天训练营｜百日冲刺，助你一臂之力',
					free: false,
					price1: 99,
					price2: 199
				},
				{
					src: require('../../assets/img/course/AC9C76746CA35509A8B38221CBAEC1EA.png'),
					desc: '四六级考前冲刺包 | 逆袭9月考试',
					free: false,
					price1: 599,
					price2: 1919
				},
				{
					src: require('../../assets/img/course/DDD0E0F6C90E1DAE8420F71C33ECBD92.png'),
					desc: '考研英语训练营｜一站式学齐，来得及！',
					free: false,
					price1: 0.1,
					price2: 199
				},
				{
					src: require('../../assets/img/course/IMG_0332.png'),
					desc: '会员免费 | 每天15分钟，轻松听懂英语',
					free: false,
					price1: 69,
					price2: 140
				},
				{
					src: require('../../assets/img/course/07BD031DF5E34952CB29AD732CF8FBED.png'),
					desc: '考研英语训练营｜30天实现高分阅读！',
					free: false,
					price1: 49,
					price2: 199
				}
			],
			bottom: [
				{
					src: require('../../assets/img/course/8F0E044F027F994C6858DBB9D7F7F7E3.png'),
					desc: '考研长难句 | 每天10分钟，攻克难句',
					free: false,
					price1: 69,
					price2: 140
				},
				{
					src: require('../../assets/img/course/61A4017C1357EE4BD0DC8F630A07A78C.png'),
					desc: '考研真题词汇书',
					free: false,
					price1: 49,
					price2: 199
				},
				{
					src: require('../../assets/img/course/99846FEED7EB1A148FFE0F334C6A556C.png'),
					desc: '四级真题词汇书',
					free: false,
					price1: 69,
					price2: 149
				},
				{
					src: require('../../assets/img/course/B8533F098581412A5DAB7AE02971A6AE.png'),
					desc: '六级真题词汇书',
					free: false,
					price1: 49,
					price2: 199
				},
				{
					src: require('../../assets/img/course/IMG_0334.png'),
					desc: '扇贝精听 | 打卡返学费，一起逆袭听力！',
					free: false,
					price1: 69,
					price2: 140
				},
				{
					src: require('../../assets/img/course/IMG_0333.png'),
					desc: '四六级听力冲刺课 | 直击听力正确选项',
					free: false,
					price1: 49,
					price2: 199
				}
			]
		};
	},
	methods: {},
	components: {
		ShoppBox,
		Baseline
	}
};
</script>

<style lang="less">
.cet {
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
.cet {
	height: 100%;
	width: 100%;
	margin-bottom: 110px;
	background-color: #f9fafb;

	.cet_body {
		height: 100%;
		width: 100%;
		
		.hr{
			height: 15px;
			width: 100%;
			background-color: #E2E4EA;
		}
	}
}
</style>
