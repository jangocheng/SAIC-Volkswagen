<template>
	<div>
		<div class="section-img">
			<div id="myCarousel" class="carousel slide">
				<ol class="carousel-indicators">
				    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				    <li data-target="#myCarousel" data-slide-to="1"></li>
				    <li data-target="#myCarousel" data-slide-to="2"></li>
				    <li data-target="#myCarousel" data-slide-to="3"></li>
				    <li data-target="#myCarousel" data-slide-to="4"></li>
				</ol>
				  <!-- Carousel items -->
				<div class="carousel-inner">
				    <div class="active item">
				    	<a href="javascript:;">
				    		<img src="../assets/2.jpg" />
				    	</a>
				    </div>
				    <div class="item">
				    	<a href="javascript:;">
				    		<img src="../assets/3.jpg" />
				    	</a>
				    </div>
				    <div class="item">
				    	<a href="javascript:;">
				    		<img src="../assets/4.jpg" />
				    	</a>
				    </div>
				    <div class="item">
				    	<a href="javascript:;">
				    		<img src="../assets/5.jpg" />
				    	</a>
				    </div>
				    <div class="item">
				    	<a href="javascript:;">
				    		<img src="../assets/6.jpg" />
				    	</a>
				    </div>
				</div>
				<!-- Carousel nav -->
				<a class="carousel-control left" href="#myCarousel" data-slide="prev"></a>
				<a class="carousel-control right" href="#myCarousel" data-slide="next"></a>
			</div>
		</div>
		<div class="focus-news">
			<div class="focus-content">
				<ul class="ulhome clear-fix">
					<li class="fl" style="margin-left: 12px;">
						<a href="javascript:;">
							<img src="../assets/7.jpg" />
							<span class="title">要闻</span>
						</a>
						<p class="introduce">
							<span class="introduce-content">延续良好势头  上汽大众上半年销量再夺冠</span>
						</p>
					</li>
					<li class="fl">
						<a href="javascript:;">
							<img src="../assets/8.jpg"/>
							<span class="title">视频</span>
						</a>
						<p class="introduce">
							<span class="introduce-content">KODIAQ 柯迪亚克</span>
						</p>
					</li>
					<li class="fl">
						<a href="javascript:;">
							<img src="../assets/9.jpg"/>
							<span class="title">活动</span>
						</a>
						<p class="introduce">
							<span class="introduce-content">超越新里程 上汽大众迎来第1500万辆汽车下线</span>
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
</template>
<script>
export default {
	created () {
		$(function(){
		$('.carousel').carousel({
  			interval: 2000
		});
	})
   }
}
	
</script>

<style>
	
	.setion-img{
		width: 100%;
	}
	.carousel-inner .item a img{
		width: 100%;
		height: 397px;
	}
	.focus-news{
		width: 100%;
		padding-bottom: 20px;
		padding-top: 46px;

	}
	.focus-news .focus-content{
		width: 1105px;
		margin: 0 auto;
	}
	.focus-content .ulhome{
		width: 100%;
	}
	.ulhome li{
		width: 358px;
		margin-left: 3px;
		padding-bottom: 20px;
		position: relative;
	}
	.ulhome li a {
		display: inline-block;
		width: 358px;
		height: 156px;
		overflow: hidden;
	}
	.ulhome li a:hover{
		color: black;
	}
	.ulhome li a img{
		width: 358px;
		height: 156px;
		-webkit-transition: 1s all ease; 
	}
	.ulhome li a img:hover{
		-webkit-transform: scale(1.5);
	}
	.ulhome li .introduce{
		width: 358px;
	
		position: absolute;
		top: 132px;
		left: 0;
	}
	.ulhome li .introduce .introduce-content{
		display: inline-block;
		width: 100%;
		height: 24px;
		background: #8e979c;
		line-height: 24px;
		color: #fff;
		font-size: 14px;
		text-align: center;
	}
	.ulhome li a .title{
		display: inline-block;
		width: 100%;
		height: 34px;
		line-height: 34px;
		text-align: center;
		font-size: 22px;
		font-weight: bold;
	}
</style>