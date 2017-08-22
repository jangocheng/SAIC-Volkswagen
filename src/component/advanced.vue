<template>
	<div class="science_header">
		<div class="science_content">
			<div class="science_img">
				<img src="../assets/keji1.jpg" />
			</div>
			<h1 class="titleH1">先进科技</h1>
			<div class="p1">
				<p>上汽大众坚持品质承载责任，致力于为用户提供优质、安全、环保的高性能产品。</p>
			    <p>坚持技术创造优势，致力于通过创新推动产业进步、支撑企业发展和实现产品升级。</p>
			    <p>坚持服务凸显价值，致力于以持续改进的服务满足顾客日益增长的期望。</p>
			</div>
			<div>
			<div class="nav">
		   	   <ul class="ul">
		   	    	<li class="nav-left fl"><router-link to="/advanced/advanced_one" class="active">尖端科技</router-link></li>
		   	        <i class="shu fl"></i>
		   	        <li class="nav-right fr"><router-link to="/advanced/advanced_two">安全技术</router-link></li>
		       </ul>
	       </div>
			</div>
	       <div>
	         	<router-view></router-view>
	       </div>
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
			$('.nav li a').click(function(){
		             //现清空
			$('.nav li a').removeClass('active');
					//添加
			$(this).addClass('active')
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
	.science_header{
		width: 100%;
		margin-top: 20px;
	}
	.science_content{
		width: 1300px;
		margin: 0 auto;
	}
	.science_img{
		width: 1300px;
		height: 397px;
	}
	.science_img img{
		width: 100%;
		height: 100%;
		
	}
	.titleH1{
		font-size: 31px;
	    font-weight: bold;
	    text-align: center;
	    padding: 30px 0 5px 0;
	}
	.science_content .p1{
		width: 513px;
		margin: 0 auto;
		margin-top: 25px;
		margin-bottom: 20px;
	}
	.science_content .p1 p{
		font-size: 14px;
		color: #a5adc3;
	}
	.nav{
		width: 1300px;
		height: 55px;
		margin: 0 auto;
	}
	.nav .ul{
		width: 242px;
		height: 55px;
		margin: 0 auto;
	}
	.nav .ul li{
		/*width: 100%;*/
		height: 58px;
		line-height: 58px;
		font-size: 22px;
		text-decoration: none;
	}
	.nav .ul a:hover{
		text-decoration: none;
	}
	.nav .nav-left{
		width: 94px;
		height: 55;
		color: #000000;
		font-size: 22px;
		line-height: 53px;
		list-style: none;
	}
	.nav .nav-right{
		width: 94px;
		height: 55;
		color: #000000;
		font-size: 22px;
		line-height: 53px;

		list-style: none;
	}
	.nav .shu{
		width: 1px;
		height: 50px;
		border: 1px dashed #cccccc;
		margin-left: 22px;
	}
	.nav li a{
		display: inline-block;
		/*width: 100%;*/
		height: 42px;
		line-height: 42px;
		font-size: 22px;
		text-decoration: none;
	}
	.nav .router-link-active{
		background: url(../assets/xiahua001.gif)no-repeat left bottom;
		background-size: 100% 10%;
		color: blue;
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