<template>
	<div class="tabbar">
		<div class="tabbar_body">
			<div class="tab_cont">
				<ul>
					<template v-for="(item, index) in list">
						<li :key="index">
							<router-link @click="addClassName(item.path)" :to="item.path" :exact="item.exact">
								<div class="box">
									<img :src="item.path === $route.path ? list[index].active : list[index].img" alt="" />
									{{ item.name }}
								</div>
							</router-link>
						</li>
					</template>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					img: require('../assets/icon/home.png'),
					active: require('../assets/icon/home-active.png'),
					name: '单词',
					path: '/',
					exact:'exact'
				},
				{
					img: require('../assets/icon/course.png'),
					active: require('../assets/icon/course-active.png'),
					name: '课程',
					path: '/course',
					exact:''
				},
				{
					img: require('../assets/icon/discover.png'),
					active: require('../assets/icon/discover-active.png'),
					name: '发现',
					path: '/discover',
					exact:''
				},
				{
					img: require('../assets/icon/my.png'),
					active: require('../assets/icon/my-active.png'),
					name: '我的',
					path: '/my',
					exact:''
				}
			]
		};
	},
	methods: {
		addClassName(path) {
			this.$router.push(path);
		}
	}
};
</script>

<style lang="less" scoped>
.tabbar {
	height: 100%;
	width: 100%;

	.tabbar_body {
		height: 100%;
		width: 100%;

		.tab_cont {
			height: 55px;
			width: 100%;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			z-index: 99;
			border-top: 0.5px solid #F2F3F5;

			ul {
				list-style: none;
				display: flex;
				height: 100%;
				width: 100%;
				justify-content: space-between;

				li:nth-child(1) {
					img {
						height: 20px;
						width: 20px;
						margin-top: 12px;
						margin-bottom: 5px;
					}
				}

				li:nth-child(2) {
					img {
						height: 20px;
						width: 22.5px;
						margin-top: 12px;
						margin-bottom: 5px;
					}
				}

				li:nth-child(3) {
					img {
						height: 15px;
						width: 22px;
						margin-top: 17.5px;
						margin-bottom: 5px;
					}
				}
				
				li:nth-child(4) {
					img {
						height: 22px;
						width: 22px;
						margin-top: 10px;
						margin-bottom: 5px;
					}
				}

				li {
					height: 100%;
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;

					a {
						display: block;
						height: 100%;
						width: 100%;
						color: #999999;
						font-size: 11px;
						font-family: 'PingFangSC-Regular';

						.box {
							height: 100%;
							width: 100%;
							display: flex;
							flex-direction: column;
							align-items: center;
						}

						&.router-link-active {
							color: #111a34;
						}

						&.router-link-exact-active {
							color: #111a34;
						}
					}
				}
			}
		}
	}
}
</style>
