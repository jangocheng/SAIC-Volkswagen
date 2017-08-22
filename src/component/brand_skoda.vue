<template>
	<div class="Public">
		<div class="Public_header">
			<!--这是导航-->
			<div class="video clear-fix">
				<div class="video_left fl">
					<video src="src/assets/teramont.mp4" id="v1" controls='controls' poster=""></video>
				</div>
				<div class="video_right fl">
					<div class="text">
						<p>2005年上汽大众启动了多品牌战略，大众汽车集团旗下具有良好成长性的百年斯柯达品牌落户上汽大众。2006年，上汽大众斯柯达品牌正式启动，并于2007年推出首款战略车型。目前，上汽大众斯柯达品牌已经完成了由Fabia晶锐、Rapid昕锐、Rapid Spaceback昕动、Octavia明锐、Superb速派、Yeti和KODIAQ柯迪亚克组成的产品构架。</p>
					</div>
				</div>
			</div>
			<!--这是循环图片-->
			<div class="inner">
				<ul class="ul clear-fix">
					<li class="fl li" v-for="v in arr">
						<div class="img">
							<img :src="v.img" />
						</div>
						<div class="car_name">{{v.urse}}</div>
						<div class="car_info">
                             <p>{{v.text}}</p>
                        </div>
                        <div class="one_urse">
                        	<p><a href="javascript:;">{{v.hide}}</a></p>
                        </div>
					</li>
				</ul>
			</div>
		</div>
    </div>
</template>

<script>
	export default {
	  name: 'app',
	  data () {
	    return {
	    	 arr:[
	             {img:'src/assets/inner02.png',urse:'Polo',text:'2016年9月，桑塔纳品牌最新成员Cross Santana上市。Cross Santana在传承桑塔纳品牌设计理念的同时，用全新独具个性的时尚跨界元素，打造动感不羁的城市行车风景。',hide:'凭借魅力十足的时尚外观，Polo 吸引了众多年轻消费者的目光。Polo犀利硬朗又时尚大方的精湛设计，契合时下年轻人追求时尚的审美品味。双高光镀铬饰条上格栅，与富有运动气息的凌厉冲刺线镀铬下格栅搭配，彰显时尚年轻气息。双翼造型钻石切割前大灯与动感斜面前雾灯相互衬托，魅力十足。此外，Polo还拥有流光绿、银河蓝、星耀黄等8种青春靓丽的车身颜色，闪耀多彩。追求激情、向往自由的年轻人更喜欢动力充沛的车，Polo强劲动力带给他们无限驾驶乐趣，奏响激扬的青春旋律。'},
	             {img:'src/assets/dazhong8.png',urse:'Lamando 凌渡',text:'2015年1月，上汽大众高颜值宽体轿车Lamando凌渡上市，开启了上汽大众进军高端A级轿车细分市场的新篇章。',hide:'Cross Polo是上汽大众为坚持自我、突破传统、充满激情的前卫年轻人群度身设计的一款兼具德系经典品质与时尚跨界元素的个性精品小车。作为对Polo品牌的延伸与丰富，除了延续时尚与都会的品牌形象，Cross Polo还以打破传统框架的激情创意，为这一时尚品牌注入更多生机与活力，由内而外地散发出自由不羁的跨界魅力。 凭借彰显跨界理念的外观内饰设计、彰显灵动的操控性能、创造驾驭乐趣的潮流科技，以及秉承德系品质的安全保障，Cross Polo当之无愧地成为个性小车的经典代表，引领国内A0级小车的跨界潮流。'},
	             {img:'src/assets/dazhong1.png',urse:'Lamando GTS 凌渡GTS',text:'Polo GTI外形动感十足，内饰充满活力，让车主在靠近它的那一刻，运动细胞就此激活。',hide:'Polo GTI外形动感十足，内饰充满活力，让车主在靠近它的那一刻，运动细胞就此激活。 Polo GTI前脸采用了错落有致的蜂窝状进气格栅，配以上下两条经典红色装饰条，散发浓浓的运动气息。16·合金轮毂与喷红刹车卡钳均为Polo GTI专门设计，极具视觉冲击力与活力车尾的运动型镀铬双排气尾管释放出疾速诱惑。镶嵌于前脸格栅和车位的GTI炫银徽标，彰显出Polo GTI特有的极致性能和速度激情。Polo GTI内饰多处采用GTI专属装饰，也带动着车内的运动气息，让车主即刻出发的冲动瞬间点燃。'},
	             {img:'src/assets/dazhong8.png',urse:'New Santana 新桑塔纳',text:'自1983年中国首辆桑塔纳成功下线以来，桑塔纳品牌生命力生生不息，成为消费者的真挚之选。',hide:'自1983年中国首辆桑塔纳成功下线以来，桑塔纳品牌深耕中国市场30多年，其务实可靠的品质早已深入人心。作为上汽大众桑塔纳品牌的力作，新桑塔纳是一款大气舒适、至真品质的经典德系中级轿车，为求真进取、值得信赖的新中坚力量度身打造。新桑塔纳在造型设计上融入了最新的设计语言，以简约硬朗的线条融合了经典与创新、和谐与优雅，实现了经典品质与现代时尚的和谐共存，以及美学与功能性的平衡。其采用诸多智能实用的科技装备，营造出创新灵动的驾驭体验和舒适实用的驾乘享受；而泰然自若的德系安全，则为消费者提供了可靠全面的安全保障。'},
	             {img:'src/assets/dazhong7.png',urse:'Cross Santana',text:'2016年9月，桑塔纳品牌最新成员Cross Santana上市。Cross Santana在传承桑塔纳品牌设计理念的同时，用全新独具个性的时尚跨界元素，打造动感不羁的城市行车风景。',hide:'2016年9月，桑塔纳品牌最新成员Cross Santana上市。作为一款实用与时尚兼备的跨界休旅车，Cross Santana融合了动感跨界设计元素，并提供Cross专属座椅、Cross迎宾踏板、Cross内饰条、炫银车顶行李架、16·双色精车轮毂、全车的黑色跨界套件等专属装备。造型方面，Cross Santana在延续桑塔纳品牌简约大气设计理念的同时，融入全新独具个性的跨界元素，将时尚与实用完美结合，为城市行车增添一袭不羁活力。'},
	             {img:'src/assets/dazhong11.png',urse:'Gran Santana 桑塔纳·浩纳',text:'2015年6月,桑塔纳品牌的全新成员桑塔纳·浩纳上市，为桑塔纳品牌注入了更多年轻和活力。',hide:'2015年6月,桑塔纳品牌的全新成员桑塔纳·浩纳上市。 作为一款“实尚旅行车”，桑塔纳·浩纳融合了两厢车的动感与旅行车的实用，为桑塔纳品牌注入了更多年轻和活力。在延续桑塔纳品牌至真品质的同时，以简洁时尚的外观造型，细致安心的科技配置以及自在舒适的驾驭体验，满足更多消费者的时尚用车生活。'},
	             {img:'src/assets/dazhong2.png',urse:'New Lavida 全新朗逸',text:'新朗逸于2012年面向国内A级轿车市场而推出的一款重磅力作，它将大众汽车经典设计理念与中国市场特殊需求完美融和。',hide:'New Lavida全新朗逸是上汽大众在国内A级轿车市场的一款重磅力作，它将大众汽车经典设计理念与中国市场特殊需求完美融和，打造出扎实硬朗、越级舒适的全能高端品质，全面满足现代消费者多元化的需求，成为A级车市的标杆产品。2015年7月，New Lavida全新朗逸焕新上市，凭借外观内饰、安全配置和智能科技的全面升级，打造更人性化、更值得信赖的生活之车。'},
	             {img:'src/assets/dazhong3.png',urse:'Gran Lavida 全新朗行',text:'作为上汽大众2013年在中国市场重磅推出的最新力作，Gran Lavida朗行质感优雅、空间丰富。',hide:'Gran Lavida全新朗行质感优雅、空间丰富，凝聚了大众汽车最新的设计理念，融合上汽大众对中国汽车市场的敏锐洞悉与深刻理解，以简约时尚而质感优雅的大气设计，浑然天成而便捷自如的卓越体验，前瞻科技且周到细致的精湛工艺，为懂得享受生活的消费者带来无限可能。2015年7月，Gran Lavida全新朗行迎来焕新，凭借全新升级的时尚外观、新颖的车身形式和超越同级的空间，打造更实用、更具乐趣的生活之车。'},
	           ]
	    }
	  }
}
</script>

<style>
	.Public{
		width: 100%;
		margin-top: 20px;
	}
	.Public .Public_header{
		width: 1300px;
		margin: 0 auto;
		margin-bottom: 20px;
	}
	.Public_header .video{
		width: 1300px;
		height: 325;
	}
	.Public_header .video_left{
		width: 650px;
		height: 325px;
	}
	.Public_header .video_left video{
		width: 100%;
		height: 100%;
		padding: 0;
	}
	.Public_header .video_right{
		width: 650px;
		height: 325px;
		background: url(../assets/xinwen0001.jpg);
	}
	.video_right .text{
		width: 506px;
		height: 148px;
		margin-left: 26px;
		margin-top: 82px;
	}
	.video_right .text p{
		font-size: 15px;
		color: #2b2b2d;
	}
	.inner{
		width: 1300px;
	}
	.inner .ul{
		width: 1300px;
	}
	.inner .ul li{
		width: 325px;
		height: 320px;
		/*border: 1px solid red;.*/
		position: relative;
		/*background: #ccc;*/
	}
	.li .img{
		width: 325px;
		height: 160px;
	}
	.li .img img{
		width: 100%;
		height: 100%;
	}
	.car_name{
		font-size: 20px;
        color: #424242;
        text-align: center;
	}
	.car_info{
		width: 325px;
		height: 128px;
	}
	.car_info p{
		font-size: 15px;
		/*text-align: center;*/
		margin: 0 auto;
		margin-top: 15px;
		width: 280px;
		color: #ccc;
	}
	.li .one_urse{
		width: 325px;
		height: 320px;
		position: absolute;
		left: 0;
		top: 0;
		background: #000000;
		display: none;
	}
	.li .one_urse a{
		color: white;
		text-decoration: none;
	}
	.li .one_urse p{
	   margin-top: 30px;
	}
</style>