<template>
	<div class="growup">
		<div class="growup_body">
			<van-nav-bar class="navbar" @click-left="backDisc" z-index="99" :border="false" placeholder>
				<template #title>
					<span>成长计划</span>
				</template>
				<template #left>
					<van-icon name="arrow-left" color="#ccc" size="25" />
				</template>
			</van-nav-bar>
			<div class="content">
				<template v-for="(item, index) in growup">
					<div class="cont_box" :key="index"><img :src="item.src" alt="" /></div>
				</template>
			</div>
			<div class="bg_color"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			growup: [
				{ src: require('../assets/img/discover/IMG_0339.png') },
				{ src: require('../assets/img/discover/IMG_0340.png') },
				{ src: require('../assets/img/discover/IMG_0341.png') }
			]
		};
	},
	methods: {
		backDisc(){
			this.$router.go(-1)
		}
	}
};
</script>

<style lang="less">
.growup {
	.navbar {
		.van-nav-bar {
			height: 88px !important;
		}
	}
}
</style>

<style lang="less" scoped>
.growup {
	height: 100%;
	width: 100%;

	.growup_body {
		height: 100%;
		width: 100%;

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
			background-color: #f9fafb !important;

			span {
				font-family: 'PingFangSC-Medium';
				font-size: 36px;
				color: #111a34;
				font-weight: 600;
				text-align: center;
			}
		}

		.content {
			height: auto;
			width: 100%;
			position: relative;
			z-index: 10;
			margin: 0 auto;
			margin-top: 3px;
			display: flex;
			flex-direction: column;
			background-color: #f9fafb;

			.cont_box {
				width: 688px;
				height: 467px;
				margin: 0 auto;
				margin-bottom: 18px;

				img {
					height: 100%;
					width: 100%;
				}
			}
		}
	}
}
</style>
