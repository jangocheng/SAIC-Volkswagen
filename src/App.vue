<template>
  <div id="box">
  	<header>
  		<div class="header-log">
  			<h1>
  				<a href="javascript:;">
  					<img src="src/assets/9logo.png" width="144px" height="44px"/>
  				</a>
  			</h1>
  		</div>
  	</header>
  	<!--导航栏-->
  	<nav>
  		<div id="app" class="clear-fix">
		   	<ul class="ul1 fl">
		   		<li class="fl" style="margin-left: 0;">
		   			<router-link to="/home">首页</router-link>
		   		</li>
		   		<li class="fl">
		   			<router-link to="/about">关于企业<span class="triangle"></span></router-link>
		   		</li>
		   		<li class="fl">
		   			<router-link to="/news">新闻中心<span class="triangle"></span></router-link>
		   		</li>
		   		<li class="fl">
		   			<router-link to="/advanced">先进科技<span class="triangle"></span></router-link>
		   		</li>
		   		<li class="fl">
		   			<router-link to="/society">社会责任<span class="triangle"></span></router-link>
		   		</li>
		   		<li class="fl">
		   			<router-link to="/brand">品牌与车型<span class="triangle"></span></router-link>
		   		</li>
		   		<li class="fl">
		   			<router-link to="/recruit">企业招聘</router-link>
		   		</li>
		   	</ul>
		   	<div class="search fr">
		   		<a href="jacascript:;" class="search-img fl"></a>
		   		<input type="text" class="fl" placeholder="搜索" />
		   	</div>
		  </div>
  	</nav>
  	<section>
		  <router-view></router-view>
  	</section>
  	<footer>
  		<ul class="clear-fix footer-href">
  			<li class="fl"><a style="padding-left: 0;" href="javascript:;">大众品牌网站</a></li>
  			<li class="fl"><a href="javascript:;">斯柯达品牌网站</a></li>
  			<li class="fl"><a href="javascript:;">经销商招募</a></li>
  			<li class="fl"><a href="javascript:;">留学生免税车</a></li>
  			<li class="fl"><a href="javascript:;">友情链接</a></li>
  			<li class="fl"><a href="javascript:;">下载专区</a></li>
  			<li class="fl"><a href="javascript:;">联系我们</a></li>
  			<li class="fl"><a href="javascript:;">法律声明</a></li>
  			<li class="fl" style="border: none;"><a href="javascript:;">隐私保护</a></li>
  		</ul>
  		<p class="follow">关注我们：
  			<a href="javascript">
  				<img src="src/assets/1.png" />
  			</a>
  			<a href="javascript">
  				<img src="src/assets/2.png" />
  			</a>
  			<a href="javascript">
  				<img src="src/assets/4.png" />
  			</a>
  		</p>
  		<p class="footer-tel">客户服务热线400-820-1111</p>
  		<div class="footer-copyright clear-fix">
  			<div class="fl copyright-left">
  				<span>上海大众汽车版权所有</span>
  				<a href="javascript:;">&nbsp;沪ICP备&nbsp;15002176号-1</a>
  			</div><br/>
  			<div class="fr copyright-right">
  				<a href="javascript">沪公网安备&nbsp;31011402001355号</a>
  			</div>
  			<div class="qr-code">
	  			<img src="src/assets/52.jpg" />
	  		</div>
  		</div>
  	</footer>
  	
  	<!--回顶-->
		<div class="back-top">
		  	<a href="javascript:;">
		  		<img src="src/assets/下载.gif" />
		  	</a>
		</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
	  	$(function(){
	//		移入显示微信二维码
			var oA=$('footer .follow a').eq(1);
			oA.hover(function(){
				$('.footer-copyright .qr-code').css('display','block');
			},function(){
				$('.footer-copyright .qr-code').css('display','none');
			});
			
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
  },
  data () {
    return {
    }
  }
}

</script>
<style lang="scss">
	#box{
		width: 100%;
		position: relative;
		header{
			width: 100%;
			height: 95px;
			.header-log{
				width: 1105px;
				margin: 0 auto;
				h1{
					width: 140px;
					margin: 0;
					a{
						margin-top: 26px;
						display: inline-block;
						width: 140px;
						height: 44px;
						/*background: url(assets/1.jpg) no-repeat;*/
						/*background-size: 100%;*/
					}
				}
			}
		}
		nav{
			width: 100%;
			border-top: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
			#app{
				width: 1105px;
				margin: 0 auto;
				.ul1{
					width: 900px;
					li{
						margin-left: 50px;
						height: 50px;
						a:hover{
							text-decoration: none;
						}
						a{
							display: inline-block;
							height: 50px;
							color: #808080;
							font-size: 14px;
							font-weight: bold;
							line-height: 50px;
							.triangle{
								margin-left: 8px;
								display: inline-block;
								width: 0;
								height: 0;
								border: 5px solid transparent;
								border-top-width:10px;
								border-bottom-width:0;
								border-top-color: #808080;
							}
						}
					}
				}
				.search{
					width: 132px;
					height: 30px;
					background: #ccc;
					margin-top: 10px;
					border-radius: 5px;
					.search-img{
						display: inline-block;
						width: 16px;
						height: 16px;
						margin-top: 5px;
						margin-left: 5px;
						background: url(assets/3.png) no-repeat;
						background-size: 100%;
					}
					input{
							width: 100px;
							height: 30px;
							border: none;
							outline: medium;
							margin-left: 5px;
							background: #ccc;
					}
				}
			}
		}
		section{
			width: 100%;
		}
		footer{
			width: 100%;
			background: #eeeeee;
			.footer-href{
				width: 860px;
				padding-top: 22px;
				margin: 0 auto;
				li{
					height: 22px;
					border-right: 1px dashed #9d9d9d;
				}
				a{
					display: inline-block;
					height: 22px;
					padding-left: 12px;
					padding-right: 9px;
					color: #9d9d9d;
					font-size: 12px;
				}
			}
			.follow{
				width: 200px;
				margin: 0 auto;
				margin-top: 12px;
				height: 26px;
				font-size: 14px;
				line-height: 26px;
				color: #9D9D9D;
				font-weight: bold;
				a img{
					width: 26px;
					height: 26px;
				}
			}
			.footer-tel{
				text-align: center;
				font-size: 22px;
				color: #9D9D9D;
				padding-bottom: 10px;
			}
			.footer-copyright{
				width: 457px;
				border-top: 1px solid #5f5f5f;
				margin: 0 auto;
				position: relative;
				.qr-code{
					width: 200px;
					/*height: 200px;*/
					position: absolute;
					top: -280px;
					left: 163px;
					display: none;
				}			
				.copyright-left{
					width: 100%;
					text-align:center;
					margin-top:5px;
					span{
						color: #535353;
					}
					a{
						color: #4d9cc2;
					}
				}
				.copyright-right a{
					color: #65717d;
					display: inline-block;
					padding-left: 20px;
					background: url(assets/5.png) no-repeat left;
				}
			}
			.qr-code{
				position: absolute;
				width: 200px;
				height: 200px;
				top: -150px;
				
			}
		}
	}
	
	
		/*回顶*/
	.back-top{
		display: none;
		position: fixed;
		top: 530px;
		right: 33px;
		a{
	    display: inline-block;
	    width: 40px;
		height: 40px;
	}
}
</style>
