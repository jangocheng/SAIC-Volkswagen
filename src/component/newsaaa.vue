<template>
	<div class="news_header">
	   <div class="xinwen_one">
	   	 <ul class="ul clear-fix">
	    	<li class="fl" v-for="v in arr">
	    		<div class="img">
					<img :src="v.img" style="width: 361px;height: 250px;" />
			    </div>
			    <div class="xiaoliang">
					<a href="javascript:;">{{v.user}}</a>
				</div>
				<div class="news_text">
				    <a href="javascript:;">{{v.text}}</a>
			    </div>
			    <div class="news_hou clear-fix">
			    	<div class="news_left fl">{{v.data}}</div>
			    	<div class="news_right fl">
			    		<span>分享到</span>
			    		<img src="../assets/1.png" style="width: 20px;height: 18px;"/>
			    		<img src="../assets/4.png" style="width: 20px;height: 18px;"/>
			    	</div>
			    </div>
	    	</li>
	    </ul>	
	   </div>
	</div>
</template>

<script>
	
	export default {
		created () {
			$(function(){
				function click(obj){
					$(obj).click(function(){
						$(this).css({'color':'#000','textDecoration':'none'})
					})
				}
				click('.xiaoliang a');
				click('.news_text a');
			})
		},
	  name: 'app',
	  data () {
	    return {
	    	 arr:[
	             {img:'src/assets/sike1.jpg',user:'延续良好势头 上汽大众半年销量再夺冠',text:'随着新年钟声的敲响，2016年车市落下帷幕，全年销量数据也随之出炉。上汽大众2016年实现销售2,001,777辆，蝉联国内乘用车市场年度销量冠军，同时也成为国内首家并且唯一一家年销量突破200万辆的乘用车企业， 树立行业全新里程碑。',data:'2017年07月11日'},
	             {img:'src/assets/xinwen01.jpg',user:'一季度销量数据发布 上汽大众领跑国内乘用车市场',text:'4月11日，乘联会发布最新销量数据，上汽大众继2016年成为国内首家年销量突破200万辆的乘用车企业后，在今年一季度延续良好的市场表现，实现销售504,027辆，领跑国内乘用车市场。',data:'2017年04月11日'},
	             {img:'src/assets/xinwen02.jpg',user:'2017年首月销量夺冠 上汽大众迎新年开门红',text:'2月9日，全国乘用车市场信息联席会发布最新销售数据，上汽大众1月销售213,717辆，位列国内乘用车市场销量第一。继2016年成为国内首家年销量突破200万辆的乘用车企业后，上汽大众延续了良好的市场表现，迎来2017开门红。',data:'2017年02月09日'},
	             {img:'src/assets/xinwen03.jpg',user:'不断超越 上汽大众第1600万辆汽车下线',text:'2月8日，随着一辆天鹅绒棕的Teramont途昂驶下生产线，上汽大众迎来了第1600万辆汽车下线，再度刷新行业纪录。',data:'2017年02月09日'},
	             {img:'src/assets/xinwen04.jpg',user:'上汽大众成为中国唯一年销量突破200万的乘用车企业',text:'随着新年钟声的敲响，2016年车市落下帷幕，全年销量数据也随之出炉。上汽大众2016年实现销售2,001,777辆，蝉联国内乘用车市场年度销量冠军，同时也成为国内首家并且唯一一家年销量突破200万辆的乘用车企业，树立行业全新里程碑。',data:'2017年01月03日'},
	             {img:'src/assets/xinwen05.jpg',user:'人生就像“打怪升级”不如先买辆Polo作装备',text:'游戏中，选对英雄、出装准确，才能不断升级，成就荣耀。人生有时也像一场游戏，初入社会，选好合适的路和得力装备很重要，对于许多年轻人来说，人生中的第一辆车是他们初入社会“打怪升级”的重要装备，怎样的车才能俘获他们的心呢？',data:'2017年06月08日'}
	           ]
	    }
	  }
}
	
</script>

<style>
	.news_header{
		width: 100%;
	}
	.xinwen_one{
		width: 1130px;
		margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
/*    border: 1px solid red;*/
	}
	.xinwen_one .ul{
		width: 1130px;
	}
	.xinwen_one .ul li{
		width: 361px;
		height: 468px;
		background-color: #eeeeee;
		margin-left: 12px;
		margin-top:8px;
		
	}
	.xiaoliang{
		width: 361px;
		height: 17px;
		text-indent: 20px;
		font-size: 15px;
		margin-top: 21px;
	}
	.xiaoliang a:hover{
		text-decoration: none;
		color: #000000;
	}
	.news_text{
		width: 331px;
		height: 69px;
		text-indent: 26px;
		font-size: 12px;
		margin-top: 35px;
		margin-left: 15px;
	}
	.news_text a:hover{
		text-decoration: none;
		color: #000000;
	}
	.news_hou{
		width: 361px;
		height: 18px;
		margin-top: 48px;
	}
	.news_left{
		width: 111px;
		font-size: 12px;
	    color: #b7b7b7;
	    line-height: 20px;
	    height: 20px;
	    margin-left: 18px;
	}
	.news_right{
		 width: 100;
		 height: 20px;
		 padding-right: 10px;
		  margin-left: 117px;
	}
</style>