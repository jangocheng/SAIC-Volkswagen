<template>
	<div class="xinwen">
		<div class="header">
			<img src="../assets/xinwen.jpg" />
		</div>
		<h1 class="uese">新闻中心</h1>
		<div class="news-router">
			<ul class="clear-fix">
				<li class="fl" style="margin-left: 0;">
					<router-link to="/news/newsaaa" class="active">企业新闻</router-link>
				</li>
				<li class="fl">
					<router-link to="/news/newsbbb">斯柯达新闻</router-link>
				</li>
				<li class="fl">
					<router-link to="/news/newsccc">大众品牌新闻</router-link>
				</li>
				<li class="fl">
					<router-link to="/news/newsddd">媒体服务网站</router-link>
				</li>
				<li class="fl" style="padding-right: 0;border: none;">
					<router-link to="/news/newseee">企业广告</router-link>
				</li>
		   </ul>
		</div>
		<div>
			<router-view></router-view>
		</div>
		
		<!--回顶-->
		<div class="back-top">
		  	<a href="javascript:;">
		  		<img src="../assets/下载.gif" />
		  	</a>
		</div>
	</div>
</template>

<script>
	export default {
	created () {
		$(function(){
			$('.news-router ul li a ').click(function(){
			//现清空
		    $('.news-router ul li a ').removeClass('active');
			//添加
			$(this).addClass('active');
		})
		
		var bTop=$('.back-top');
		var oAtop=$('.back-top a');
		$(window).bind("scroll", function(){
          var top = $(this).scrollTop(); // 当前窗口的滚动距离
		   if(top>110){
		   	bTop.css('display','block');
		   }else{
		   	bTop.css('display','none');
		   }
		   oAtop.click(function(){
				$(window).scrollTop(0);
			})
		});
	 })
   }
}
</script>

<style>
	.xinwen {
		width: 100%;
	}
	
	.xinwen .header {
		width: 1300px;
		height: 400px;
		margin: 0 auto;
	}
	
	.xinwen .header img {
		width: 1300px;
		height: 400px;
	}
	
	.xinwen .uese {
		font-size: 36px;
		font-weight: bold;
		text-align: center;
		padding: 30px 0 5px 0;
		color: #2b2b2d;
	}
	.news-router{
		width: 750px;
		margin: 0 auto;
	}
	.news-router ul{
		width: 100%;
		padding-bottom: 16px;
	}
	.news-router ul li{
		height: 58px;
		line-height: 58px;
		margin-left: 28px;
		padding-right: 20px;
		border-right: 1px dashed #cccccc;
	}
	.news-router ul li a{
		display: inline-block;
		/*width: 100%;*/
		height: 42px;
		line-height: 42px;
		font-size: 22px;
		text-decoration: none;
	}
	.news-router ul li a:hover{
		text-decoration: none;
	}
	.news-router .router-link-active{
		background: url(../assets/xiahua001.gif)no-repeat left bottom;
		background-size: 100% 10%;
		color: blue;
	}
	.news-router-content{
		width: 100%;
	}
	
	/*回顶*/
	.back-top{
		display: none;
		position: fixed;
		top: 530px;
		right: 33px;
	}
	.back-top a{
	    display: inline-block;
	    width: 40px;
		height: 40px;
	}
</style>