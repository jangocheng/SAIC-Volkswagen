<template>
	<div class="society-section">
		<div class="society-img"></div>
		<div class="society-duty">
			<h2>社会责任</h2>
			<p>
				上汽大众致力于提供适应中国顾客需求并符合国际标准的汽车，<br />
				以安全、 优质、节能、环保的产品和卓越的服务，提高消费者的生活品质，<br />
				本着回报社会、造福社会的理念，广泛地参与社会公共事务，涉及科学、教育、文化、卫生及各种社会公益事业。
			</p>
			<ul class="son-society clear-fix">
				<li class="fl" style="margin-left: 0;">
					<router-link to="/society/society-one" class="active">企业社会责任</router-link>
				</li>
				<li class="fl" style="margin-right: 0;border: none;">
					<router-link to="/society/society-two" >企业社会责任报告</router-link>
				</li>
			</ul>
		</div>
		<div class="son-society-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	created () {
		$(function(){
		var aA=$('.society-duty .son-society li a');
		    aA.click(function(){
			aA.removeClass('active');
			$(this).addClass('active');
		})
	 })
   }
}
</script>

<style>
	.society-section{
		width: 100%;
	}
	.society-img{
		width: 1300px;
		height: 398px;
		background: url(../assets/32.jpg) no-repeat;
		background-size: 100%;
		margin: 0 auto;
	}
	.society-duty{
		width: 1300px;
		margin: 0 auto;
	}
	.society-duty h2{
		font-size: 33px;
		text-align: center;
		font-weight: bold;
		padding-top: 34px;
	}
	.society-duty p{
		width: 702px;
		margin: 0 auto;
		font-size: 14px;
		color: #9f9f9f;
		padding-top: 14px;
		padding-bottom: 10px;
	}
	.son-society{
		width: 380px;
		padding-bottom: 16px;
		margin: 0 auto;
	}
	.son-society li{
		height: 58px;
		line-height: 58px;
		margin-left: 28px;
		padding-right: 20px;
		border-right: 1px dashed #cccccc;
	}
	.son-society li a{
		display: inline-block;
		/*width: 100%;*/
		height: 42px;
		line-height: 42px;
		font-size: 22px;
		text-decoration: none;
	}
	.son-society  li a:hover{
		text-decoration: none;
	}
	.son-society .router-link-active{
		background: url(../assets/xiahua001.gif)no-repeat left bottom;
		background-size: 100% 10%;
		color: blue;
	}
	.son-society-content{
		width: 100%;
	}
</style>