<template>
	<div class="brand_header">
		<div class="brand_Models">
			  <h1 class="titleH1">品牌与车型</h1>
		   <div class="nav_ul">
		   	   <ul class="ul">
		   	    	<li class="nav_left fl"><router-link to="/brand/brand_Public" class="active">大众品牌车型</router-link></li>
		   	        <i class="shu fl"></i>
		   	        <li class="nav_right fr"><router-link to="/brand/brand_skoda">斯柯达品牌车型</router-link></li>
		       </ul>
	       </div>
	       <div>
	       	<router-view></router-view>
	       </div>
		</div>
		
	</div>
</template>

<script>
export default {
	created () {
		$(function(){
		    $('.nav_ul li a').click(function(){
             //现清空
			$('.nav_ul li a').removeClass('active');
			//添加
			$(this).addClass('active')
		})
	 })
   }
}
</script>

<style>
	.brand_header{
		width: 100%;
	}
	.brand_Models{
		width: 1300px;
		margin: 0 auto;
	}
	.titleH1{
		font-size: 36px;
	    font-weight: bold;
	    text-align: center;
	    padding: 30px 0 5px 0;
	}
	.nav_ul{
		width: 1300px;
		height: 55px;
		margin: 0 auto;
	}
	.nav_ul .ul{
		width: 340px;
		height: 55px;
		margin: 0 auto;
	}
	.nav_ul .ul li{
		/*width: 100%;*/
		height: 58px;
		line-height: 58px;
		font-size: 22px;
		text-decoration: none;
	}
	.nav_ul .ul a:hover{
		text-decoration: none;
	}
	.nav_ul .nav_left{
		width: 135px;
		height: 55;
		color: #000000;
		font-size: 22px;
		line-height: 55px;
		list-style: none;
	}
	.nav_ul .nav_right{
		width: 155px;
		height: 55;
		color: #000000;
		font-size: 22px;
		line-height: 55px;
		list-style: none;
	}
	.nav_ul .shu{
		width: 1px;
		height: 55px;
		border: 1px dashed #cccccc;
		margin-left: 22px;
	}
	.nav_ul li a{
		display: inline-block;
		height: 42px;
		line-height: 42px;
		font-size: 22px;
		text-decoration: none;
	}
	.nav_ul .router-link-active{
		background: url(../assets/xiahua001.gif)no-repeat left bottom;
		background-size: 100% 10%;
		color: blue;
	}
</style>