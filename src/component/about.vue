<template>
	<div class="section-enterprise" id="box">
		<div class="enterprise-img">
			<img src="../assets/14.jpg" width="1300px" height="400px" />
		</div>
		<div class="about-enterprise">
			<h2>关于企业</h2>
		</div>
		<div class="about-content">
			<p>上汽大众汽车有限公司是一家中德合资企业，由上汽集团和大众汽车集团合资经营。<br />
			公司于1984年10月签约奠基，是国内历史最悠久的汽车合资企业之一。<br />
			公司总部位于上海安亭，并先后在南京、仪征、乌鲁木齐、宁波、长沙等地建立了生产基地。</p>
		</div>
		<div class="son-router">
			<ul class="clear-fix">
		   		<li class="fl" style="margin-left: 0;">
		   			<router-link to="/about/about-summary" class="active">企业概述</router-link>
		   		</li>
		   		<li class="fl">
		   			<router-link to="/about/about-layout">企业布局</router-link>
		   		</li>
		   		<li class="fl">
		   			<router-link to="/about/about-development">发展历程</router-link>
		   		</li>
		   		<li class="fl">
		   			<router-link to="/about/about-report">企业年报</router-link>
		   		</li>
		   		<li class="fl" style="padding-right: 0;border: none;">
		   			<router-link to="/about/about-honor">企业荣誉</router-link>
		   		</li>
		   	</ul>
		</div>
		<div class="son-router-content">
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
		var aAbout=$('.son-router ul li a');
			aAbout.click(function(){
				aAbout.removeClass('active');
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
	.section-enterprise{
		width: 100%;
	}
	.enterprise-img{
			width: 1300px;
			height: 400px;
			margin: 0 auto;
	}
	.about-enterprise{
		width: 1300px;
		margin: 0 auto;
	}
	.about-enterprise h2{
		text-align: center;
		font-size: 36px;
		font-weight: bold;
		padding-top: 34px;
	}	
	.about-content,.son-router{
		width: 650px;
		margin: 0 auto;
	}
	.about-content p{
		font-size: 14px;
		color: #a2a5b5;
		margin-top: 16px;
		padding-bottom: 10px;
	}
	.son-router ul{
		width: 100%;
		padding-bottom: 16px;
	}
	.son-router ul li{
		height: 58px;
		line-height: 58px;
		margin-left: 28px;
		padding-right: 20px;
		border-right: 1px dashed #cccccc;
	}
	.son-router ul li a{
		display: inline-block;
		/*width: 100%;*/
		height: 42px;
		line-height: 42px;
		font-size: 22px;
		text-decoration: none;
	}
	.son-router ul li a:hover{
		text-decoration: none;
	}
	.son-router .router-link-active{
		background: url(../assets/xiahua001.gif)no-repeat left bottom;
		background-size: 100% 10%;
		color: blue;
	}
	.son-router-content{
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