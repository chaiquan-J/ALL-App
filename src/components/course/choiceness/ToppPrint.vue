<template>
	<div class="top_print">
		<div class="content">
			<div class="title_box">
				<img :src="icon" alt="" />
				<span>{{title}}</span>
			</div>
			<div class="cont_box"><img :src="img" alt="" /></div>
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
		},
		props:[
			'title','icon','img'
		]
	}
</script>

<style lang="less" scoped>
	.top_print {
		height: 338px;
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
</style>
