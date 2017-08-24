<template>
	<div class="news_header">
	   <div class="xinwen_one">
	   	 <ul class="ul clear-fix">
	    	<li class="fl" v-for="v in arr1">
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
	  name: 'app',
	  data () {
	    return {
	    	 arr1:[
	    	     {img:'src/assets/sike1.jpg',user:'棋高“四”着 全新途观L科技范儿受追捧',text:'世界顶级棋手柯洁大战人工智能AlphaGo的硝烟未尽，智能教育机器人Aidam又与6名高考状元PK，挑战今年的高考数学试卷，引来各方关注。随着前沿科技的日新月异，汽车产业也呈现智能化的发展趋势。作为上汽大众德系高端中型SUV，全新途观L前瞻把握汽车智能化方向，搭载四大人工智能配置，成为智能汽车风潮下备受追捧的热门SUV。',data:'2017年06月11日'},
	    	     {img:'src/assets/sike3.jpg',user:'人生就像“打怪升级”不如先买辆Polo作装备',text:'游戏中，选对英雄、出装准确，才能不断升级，成就荣耀。人生有时也像一场游戏，初入社会，选好合适的路和得力装备很重要，对于许多年轻人来说，人生中的第一辆车是他们初入社会“打怪升级”的重要装备，怎样的车才能俘获他们的心呢？',data:'2017年06月11日'},
	    	     {img:'src/assets/sike5.jpg',user:'SUV体验大升级  探索Teramont途昂的6“位”空间',text:'近年来，随着汽车消费升级，大型SUV以更大的空间、更具品质的用车体验，成为市场中的有力增长点。上汽大众Teramont途昂上市仅三个月累计销量达到19,981辆，迅速领跑国内大型SUV市场。这款大型SUV不仅提供7座车型，其6座版也吸引了消费者的广泛关注。',data:'2017年06月11日'},
	    	     {img:'src/assets/sike7.jpg',user:'累计销量逾230万辆  全新帕萨特谱写B级车王者荣耀',text:'最新数据显示，6月全新帕萨特销量达13,323辆，同比增长38%。全新帕萨特自2月焕新升级后，其销量已连续4个月实现快速同比增长。截至6月，帕萨特品牌累计销量突破230万辆，这一成绩再次印证了其在国内B级车市中的标杆地位。',data:'2017年06月11日'},
	    	     {img:'src/assets/sike9.jpg',user:'全新途观L高分荣获C-NCAP五星认证',text:'7月3日，中国汽车技术研究中心公布了2017年第二批C-NCAP车型评价结果。在此次参与碰撞试验的8款车型中，全新途观L以54&nbsp;6分的优秀成绩获得五星认证。',data:'2017年06月11日'},
	    	     {img:'src/assets/sike11.jpg',user:'上市三个月销量节节攀升 Teramont途昂巩固大型SUV市场标杆地位',text:'上汽大众旗舰大型SUV&nbsp;Teramont途昂自上市以来销量节节攀升，截止6月底累计销量已达19,981辆；其中，6月销售6,675辆，领跑大型SUV市场。',data:'2017年06月11日'},
	    	     {img:'src/assets/sike13.jpg',user:'半年圈粉16万 途观持续领跑合资SUV车市',text:'今年1-6月，途观销量持续走高，赢得累计销售160,073辆、同比增长超过四成的佳绩，牢牢占据合资SUV领头羊的位置。6月，途观销量近2&nbsp;9万辆，同比增长近八成；其中，全新途观L&nbsp;单月实现销售近1&nbsp;9万辆，继5月来已连续两个月夺得合资SUV月度销量冠军。在短短半年的时间内，全新途观L已取得了累计销售近8&nbsp;8万辆的佳绩。',data:'2017年06月11日'},
	    	     {img:'src/assets/sike15.jpg',user:'PHIDEON辉昂2018款焕新上市  全面进化成就高价值典范',text:'近日，上汽大众大众品牌C级旗舰座驾——PHIDEON辉昂2018款焕新上市。新车全系车型在舒适性、品质感、智能化配置方面全面进化，以非凡实力引领时代之路，成就德系高价值典范，尽显实干家本色。PHIDEON辉昂2018款提供380TSI、480V6两种动力选择，结合不同配置共推7款车型，售价区间为34&nbsp;9万-65&nbsp;9万元。',data:'2017年06月11日'},
	    	     {img:'src/assets/sike17.jpg',user:'有一种激情叫凌渡 探秘凌渡的赛车基因',text:'2017CTCC中国房车锦标赛已经打响，在前几站比赛中，上汽大众333车队收获了厂商杯冠军、车手冠军等多个奖项，宣告王者归来。制胜之道，不仅取决于车手的精湛车技，还源于赛车的优异性能。作为大众333车队的战车，凌渡GTS赛车在保持传统优势的基础上进行了改装升级，与车手配合更默契，在新赛季书写新记录。',data:'2017年06月11日'},
	    	     {img:'src/assets/sike18.jpg',user:'大有品质 关于Teramont途昂你所不知道的事',text:'要论目前市场上最受关注的大型SUV，非Teramont途昂莫属。其自上市以来，关注度日益攀升，截至5月底累计销量已达13,306辆。作为上汽大众旗舰大型SUV，Teramont途昂不仅拥有看得见的高端品质，还有诸多不为人知的别具匠心之处。',data:'2017年06月11日'},
	    	     {img:'src/assets/sike14.jpg',user:'开一辆“爸气十足”的全新途安L  过最好的父亲节',text:'6月18日父亲节到来之际，全新途安L以大安全、大贴心和大乐趣，向每一位“百变男神”父亲表达敬意的同时，与他们一起全心呵护孩子的健康成长。',data:'2017年06月11日'},
	    	     {img:'src/assets/sike16.jpg',user:'强者用成绩说话 Teramont途昂5月领跑30万以上大型SUV市场',text:'最新数据显示，上汽大众旗舰大型SUV&nbsp;Teramont途昂5月销量为6,033辆，延续了良好的市场表现。Teramont途昂上市仅两个月，累计销量达到13,306辆，不仅领跑大型SUV市场，更迅速成为30万以上大型SUV市场中的标杆，创造了新的行业纪录。',data:'2017年06月11日'},
	             {img:'src/assets/sike12.jpg',user:'延续良好势头 上汽大众半年销量再夺冠',text:'随着新年钟声的敲响，2016年车市落下帷幕，全年销量数据也随之出炉。上汽大众2016年实现销售2,001,777辆，蝉联国内乘用车市场年度销量冠军，同时也成为国内首家并且唯一一家年销量突破200万辆的乘用车企业， 树立行业全新里程碑。',data:'2017年07月11日'},
	             {img:'src/assets/sike10.jpg',user:'一季度销量数据发布 上汽大众领跑国内乘用车市场',text:'4月11日，乘联会发布最新销量数据，上汽大众继2016年成为国内首家年销量突破200万辆的乘用车企业后，在今年一季度延续良好的市场表现，实现销售504,027辆，领跑国内乘用车市场。',data:'2017年04月11日'},
	             {img:'src/assets/sike8.jpg',user:'2017年首月销量夺冠 上汽大众迎新年开门红',text:'2月9日，全国乘用车市场信息联席会发布最新销售数据，上汽大众1月销售213,717辆，位列国内乘用车市场销量第一。继2016年成为国内首家年销量突破200万辆的乘用车企业后，上汽大众延续了良好的市场表现，迎来2017开门红。',data:'2017年02月09日'},
	             {img:'src/assets/sike6.jpg',user:'不断超越 上汽大众第1600万辆汽车下线',text:'2月8日，随着一辆天鹅绒棕的Teramont途昂驶下生产线，上汽大众迎来了第1600万辆汽车下线，再度刷新行业纪录。',data:'2017年02月09日'},
	             {img:'src/assets/sike4.jpg',user:'上汽大众成为中国唯一年销量突破200万的乘用车企业',text:'随着新年钟声的敲响，2016年车市落下帷幕，全年销量数据也随之出炉。上汽大众2016年实现销售2,001,777辆，蝉联国内乘用车市场年度销量冠军，同时也成为国内首家并且唯一一家年销量突破200万辆的乘用车企业，树立行业全新里程碑。',data:'2017年01月03日'},
	             {img:'src/assets/sike2.jpg',user:'人生就像“打怪升级”不如先买辆Polo作装备',text:'游戏中，选对英雄、出装准确，才能不断升级，成就荣耀。人生有时也像一场游戏，初入社会，选好合适的路和得力装备很重要，对于许多年轻人来说，人生中的第一辆车是他们初入社会“打怪升级”的重要装备，怎样的车才能俘获他们的心呢？',data:'2017年06月07日'},
	             
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
	.news_text{
		width: 331px;
		height: 69px;
		text-indent: 26px;
		font-size: 12px;
		margin-top: 35px;
		margin-left: 15px;
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