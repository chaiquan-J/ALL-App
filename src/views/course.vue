<template>
	<div class="course">
		<div class="course_body">
			<van-nav-bar class="navbar" z-index="99" :border="false" fixed placeholder>
				<template #title>
					<span>课程</span>
				</template>
			</van-nav-bar>
			<div class="top_tab">
				<van-tabs v-model="active">
					<van-tab title="精选">
						<choiceness></choiceness>
					</van-tab>
					<van-tab title="四六级考研">
						<cet></cet>
					</van-tab>
					<van-tab title="阅读">
						<read></read>
					</van-tab>
					<van-tab title="听力口语">
						<tongue></tongue>
					</van-tab>
				</van-tabs>
			</div>
			<div class="bg_color"></div>
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/tabbar.vue';
import Choiceness from '@/components/course/choiceness.vue';
import Cet from '@/components/course/cet.vue';
import Read from '@/components/course/read.vue';
import Tongue from '@/components/course/tongue.vue';

export default {
	data() {
		return {
			active: 0
		};
	},
	methods: {},
	components: {
		TabBar,
		Choiceness,
		Cet,
		Read,
		Tongue
	}
};
</script>

<style lang="less">
.course {
	.van-tab {
		font-family: 'PingFangSC-Regular';
		font-size: 12px;
		color: #333333;
		text-align: center;
	}

	.van-tab--active {
		font-family: 'PingFangSC-Semibold';
		font-size: 15px;
		font-weight: 700;
		color: #1876ff;
	}

	.van-tabs__line {
		height: 2.5px;
		width: 20.5px;
		background: #1876ff;
		box-shadow: 0 1px 1px 0 #1876ff;
		border-radius: 2px;
		border-radius: 2px;
		bottom: 20px;
	}
}
</style>

<style lang="less" scoped>
.course {
	height: 100%;
	width: 100%;

	.course_body {
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

		.navbar {
			span {
				font-family: 'PingFangSC-Medium';
				font-size: 18px;
				color: #111a34;
				font-weight: 600;
				text-align: center;
			}
		}

		.top_tab {
			height: 51px;
			width: 100%;
			background-color: #fff;
			position: relative;
			z-index: 99;
		}
	}
}
</style>
