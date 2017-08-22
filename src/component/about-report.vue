<template>
	<div class="report-content">
		<div class="report-carousel">
			<div class="carousel-desktop"></div>
			<div class="carousel-img">
				<ul class="clear-fix report-img">
					<li class="fl">
						<a href="javascript:;">
							<img src="../assets/20162.png" />
							<img src="../assets/41.png" />
							<img src="../assets/40.png" />
						</a>
					</li>
					<li class="fl">
						<a href="javascript:;">
							<img src="../assets/43.png" />
							<img src="../assets/44.png" />
							<img src="../assets/45.png" />
						</a>
					</li>
					<li class="fl">
						<a href="javascript:;">
							<img src="../assets/46.png" />
							<img src="../assets/47.png" />
							<img src="../assets/48.png" />
						</a>
					</li>
					<li class="fl">
						<a href="javascript:;">
							<img src="../assets/49.png" />
							<img src="../assets/50.png" />
							<img src="../assets/51.png" />
						</a>
					</li>
				</ul>
			</div>
			<b class="report-page" style="left: 54px;">←</b>
			<b class="report-next" style="right: 54px;">→</b>
		</div>
	</div>
</template>

<script>
export default {
	created () {
		function carousel(obj,objli,page,next){
		 var aLen = $(objli).length;
	    	var now = 0;
	    	function nextpage () {
	    		now++;
	    		if(now > aLen-1) {
	    			now=aLen-1;
	    			return;
	    		} else {
	    			$(obj).stop().animate({left:-890 * now});
	    		}
	    	}
	    	function previouspage () {
	    	now--;
	    		if(now < 0){
	    			now=0;
	    			return;
	    		} else {
	    			$(obj).stop().animate({left:-890*now});
	    		}
	    	}
	    	$(next).on('click',nextpage);
	    	$(page).on('click',previouspage);
	}
	$(function(){
		carousel('.report-img','.report-img li','.report-page','.report-next');
	})
   }
}
	
</script>

<style>
	.report-content{
		width: 100%;
		padding-top: 34px;
		padding-bottom: 34px;
	}
	.report-carousel{
		width: 1300px;
		/*height: 410px;*/
		margin: 0 auto;
		padding-top: 75px;
		padding-bottom: 60px;
		background: #f4f4f4;
		position: relative;
		/*transform: perspective(1200px);
		transform-style: preserve-3d;*/
	}
	.carousel-desktop{
		position: absolute;
		width: 890px;
		height: 200px;
		top: 300px;
		left: 190px;
		background: #cbcbcb;
		z-index: 1;
		background: url(../assets/2016top.png) no-repeat;
		background-size: 100%;
		/*transform:rotateX(70deg);*/
	}
	.carousel-img{
		width: 890px;
		height: 253px;
		position: relative;
		top: 0;
		left: 205px;
		overflow: hidden;
		
	}
	.report-img{
		width: 3560px;
		height:253px ;
		position: absolute;
		top:0;
		left: 0;
		z-index: 10;
	}
	.report-img li{
		width: 890px;
		height: 253px;
	}
	.report-img li img{
		width: 180px;
		height: 253px;
		margin-left: 78px;
	}
	.report-page,.report-next{
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid #999999;
		font-size: 30px;
		line-height: 36px;
		text-align: center;
		color: #999999;
		position: absolute;
		top: 187px;
		cursor: pointer;
	}
</style>