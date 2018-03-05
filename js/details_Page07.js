$(function(){
	let main3_Ulist=`
				<ul class="main3_Ulist clearfix">
					<li>
						<img src="images/xilietu_1_03.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/xilietu_1_05.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/xilietu_1_07.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/xilietu_1_09.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
				</ul>
	`;
	let main2_Ulist=`
	
				<ul class="main2_Ulist clearfix">
					<li><a>
						<img src="images/shopp_main3_03.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span></a>
					</li>
					<li>
						<img src="images/shopp_main3_05.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_07.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_09.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_15.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_16.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_17.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_18.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
				</ul>
	
	`;
	let main2_Ulist1=`
	
				<ul class="main2_Ulist clearfix">
					
					<li>
						<img src="images/shopp_main3_05.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_03.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					
					<li>
						<img src="images/shopp_main3_09.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_18.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_07.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_15.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					
					<li>
						<img src="images/shopp_main3_17.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					<li>
						<img src="images/shopp_main3_16.jpg"/>
						<a href="#" class="mask"></a>
						<h3>星际旅行</h3>
						<p>汽车安全座椅360度旋转</p>
						<span></span>
					</li>
					
				</ul>
	
	`;
	var ini=0;
	$(".main2_Box").append(main2_Ulist);
	$(".ulList li").each(function(i,e){
		var _this=$(this); 
		_this.click(function(){
			ini=$(this).index();
			if(ini%2==0){
				$(".main2_Box").text('').append(main2_Ulist)
			}else{
				$(".main2_Box").text('').append(main2_Ulist1)
			};
			_this.addClass("ac").siblings().removeClass("ac");
		});
	});
		$(".butList1").click(function(){
			
			ini--;
			if(ini%2==0){
				$(".main2_Box").text('').append(main2_Ulist)
			}else{
				$(".main2_Box").text('').append(main2_Ulist1)
			};$(".ulList li").eq(ini).addClass("ac").siblings().removeClass("ac");if(ini<0){ini=4;};
			return false
		});
		$(".butList2").click(function(){
			ini++;if(ini>4){ini=0;};
			if(ini%2==0){
				$(".main2_Box").text('').append(main2_Ulist)
			}else{
				$(".main2_Box").text('').append(main2_Ulist1)
			};$(".ulList li").eq(ini).addClass("ac").siblings().removeClass("ac");return false
		})
	$(".main3_Box").append(main3_Ulist);
	$(".banner_List li").each(function(){
		var _this=$(this),sum=$(this).index();
		_this.mouseenter(function(){
			_this.addClass("ac").siblings().removeClass("ac");
			$(".bannerBackgroundpic").eq(sum).show().siblings(".bannerBackgroundpic").hide();
		});
	});
	var sum=0;
//定时器
		function aotuTime(){
			timer=setInterval(function(){
				$(".banner_List li").eq(sum).addClass("ac").siblings().removeClass("ac");
				$(".bannerBackgroundpic").eq(sum).show().siblings(".bannerBackgroundpic").hide();
				//console.log(sum)
				sum++;
				if(sum>2){
					sum=0;
				}
			},3000)
		}
		aotuTime();
		$(".details_Banner").mouseenter(function(){
			clearInterval(timer);$(".details_Banner button").css("display","block");
			sum-=1;
			console.log(sum)
		});
		$(".details_Banner").mouseleave(function(){
			aotuTime();$(".details_Banner button").css("display","none");
		});

//左切换	
		$(".banner_Btn_left").click(function(){
			sum-=1;
			if(sum<0){sum=2;}
			$(".banner_List li").eq(sum).addClass("ac").siblings().removeClass("ac");
			$(".bannerBackgroundpic").eq(sum).show().siblings(".bannerBackgroundpic").hide();
			return false;
			//console.log(sum)
		});
//右切换	
		$(".banner_Btn_reft").click(function(){
			sum+=1;
			if(sum>2){sum=0;}
			$(".banner_List li").eq(sum).addClass("ac").siblings().removeClass("ac");
			$(".bannerBackgroundpic").eq(sum).show().siblings(".bannerBackgroundpic").hide();
			return false;
			console.log(sum)
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
