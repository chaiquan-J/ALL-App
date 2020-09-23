<template>
	<div class="bottom_nav">
		<van-grid class="nav_grid" :border="false" :column-num="5">
			<template v-for="(item, index) in nav">
				<van-grid-item>
					<div class="cont_box" :key="index">
						<img :src="item.src" alt="" />
						<span>{{ item.title }}</span>
					</div>
				</van-grid-item>
			</template>
		</van-grid>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nav: [
				{
					title: '听力',
					src: require('../../assets/icon/hearing.png')
				},
				{
					title: '阅读',
					src: require('../../assets/icon/read.png')
				},
				{
					title: '对战',
					src: require('../../assets/icon/fight.png')
				},
				{
					title: '随身听',
					src: require('../../assets/icon/Walkman.png')
				},
				{
					title: '短信',
					src: require('../../assets/icon/note.png')
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="less" scoped>
.bottom_nav {
	height: 114px;
	width: 100%;
	background-color: #fff;
	border-top: 13px solid #e2e4ea;
	border-bottom: 13px solid #e2e4ea;

	.nav_grid {
		height: 100%;
		width: 100%;

		.cont_box {
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			span {
				font-family: 'PingFangSC-Medium';
				font-size: 20px;
				color: #41485d;
				text-align: center;
			}
		}

		div:nth-child(1) {
			img {
				width: 42px;
				height: 34px;
				margin-bottom: 16px;
			}
		}

		div:nth-child(2) {
			img {
				width: 36px;
				height: 36px;
				margin-bottom: 16px;
			}
		}

		div:nth-child(3) {
			img {
				width: 36px;
				height: 35px;
				margin-bottom: 16px;
			}
		}

		div:nth-child(4) {
			img {
				width: 36px;
				height: 36px;
				margin-bottom: 16px;
			}
		}

		div:nth-child(5) {
			img {
				width: 36px;
				height: 35px;
				margin-bottom: 16px;
			}
		}
	}
}
</style>
