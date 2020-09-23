<template>
	<div class="top_print">
		<div class="content">
			<div class="title_box">
				<img src="../../../assets/icon/odds.png" alt="" />
				<span>ALLX生活国刊X中读</span>
			</div>
			<div class="cont_box"><img src="../../../assets/img/course/BDE8A6A6D611334440A048BCC2A04FEC.png" alt="" /></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
		}
	}
</script>

<style lang="less" scoped>
	.top_print {
		height: 365px;
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
				margin-top: 43px;
				margin-bottom: 24px;
	
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
</style>
