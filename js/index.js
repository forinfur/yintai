	window.onload=function(){
  var bto=document.getElementsByClassName('banner-bto');
	var tu=document.getElementsByClassName("pngtu");
	var bg=document.getElementsByClassName("banner-bg")[0];
	var bgcol=["#0089CD", "#F1F1EF","#DF3C37","#A4D5F5"];
	var chaozhichange=document.getElementsByClassName('chaozhi');
  var rexiaoxiatu=document.getElementsByClassName('rexiaoxiatu');
  var remen=document.getElementsByClassName('zi-remen');
  var remenkuang=document.getElementsByClassName('zhuanguitukuang');
  var selfs=document.getElementsByClassName("self");
  var zzs=document.getElementsByClassName("zz");
  var sixiaotu=document.getElementsByClassName("mp-youtu");
  var one=document.getElementsByClassName('chaozhitu1');
  var box=document.getElementsByClassName('mp-zhongtu');
  var leftbtn=document.getElementsByClassName('btnl');
  var rightbtn=document.getElementsByClassName('btnr');
  var con1=document.getElementsByClassName('con1');
  var con2=document.getElementsByClassName('con2');
  var inner=document.getElementsByClassName("inner");
  var daohang=document.getElementsByClassName("banner-daohangkuang");
  var neirong=document.getElementsByClassName("liebiao-neirong");
  var chuangkou=document.documentElement;
  var mpkuang=document.getElementsByClassName('mingpinkuang');
  // var scrzhi=[1890,2337,2767];
  var spanbianse=document.getElementsByClassName("spanbianse")[0]
  var spanbianse2=document.getElementsByClassName("spanbianse")[1]
  var spanbianse3=document.getElementsByClassName("spanbianse")[2]
  var wxewm =document.getElementsByClassName("wxewm")[0]
  var sjewm=document.getElementsByClassName("sjewm")[0]
  var wdyt=document.getElementsByClassName("wdyt")[0]
  var dhnei=document.getElementsByClassName("zz")                 
  var ceng=document.getElementsByClassName("mingpinkuang")
  var doc=getDoc()

//按需加载

var floor=$(".mingpinkuang")
console.log(floor)
    var arr=[]
        
         for (var z = 0; z < floor.length; z++) {
          arr.push(floor[z].offsetTop)
         }
          doc.scrollTop=1
          on(window,"scroll",function(){
            var wh=document.documentElement.clientHeight
              for (var i = 0; i < floor.length; i++) {
              if((doc.scrollTop+700)>arr[i]&&!floor[i].getAttribute("flag")){
                console.log(1)
                var imgs=$("img",floor[i])
                for (var j = 0; j < imgs.length; j++) {
                  imgs[j].src=imgs[j].getAttribute("asrc")
                }
                floor[i].setAttribute("flag",true)
              }
            }
          }
          )
          

//我的银泰
   spanbianse3.onmouseover=function(){
    spanbianse3.style.backgroundColor="#fff"
    wdyt.style.opacity=1
   }
     spanbianse3.onmouseout=function(){
    spanbianse3.style.backgroundColor="#eee"
    wdyt.style.opacity=0
   }

on(window,"scroll",dyxs)
function dyxs(){
      
      var op=doc.scrollTop+200

        for (var j = 0; j < ceng.length; j++) {  

          if(op>(ceng[j].offsetTop-10)){
            for (var i = 0; i < ceng.length; i++) {
              dhnei[i].style.backgroundColor=""
              zzs[i].style.opacity="0"
            }
          dhnei[j].style.backgroundColor="#e5004f"
          zzs[j].style.opacity="1"
          
        }
        }
    }


   
//二维码显示

     spanbianse.onmouseover=function(){
           wxewm.style.opacity=1
           spanbianse.style.backgroundColor="#fff"
     }
     spanbianse.onmouseout=function(){
           wxewm.style.opacity=0
            spanbianse.style.backgroundColor="#eee"
     }
     spanbianse2.onmouseover=function(){
           sjewm.style.opacity=1
           spanbianse2.style.backgroundColor="#fff"
     }
     spanbianse2.onmouseout=function(){
           sjewm.style.opacity=0
           spanbianse2.style.backgroundColor="#eee"
     }
     
        

//侧栏消失
         var dh=document.getElementsByClassName('self-box')[0]
        
         var kg1=true;
         var kg2=true;

         if (document.documentElement.scrollTop==1) {
          var scrolltopobj=document.documentElement;
         }else{
          var scrolltopobj=document.body
         }
        // 到固定位置显示
        on(window,"scroll",xianshi)
         function xianshi(){
          
          if (scrolltopobj.scrollTop>650) {
            if (kg1) {
              kg1=false;
              kg2=true;
           
            animate(dh,{ width:50,height:545,opacity:1},1000)
           }
          }else {
            if (kg2) {
            kg1=true ;
            kg2=false;
           
            animate(dh,{width:0,height:0,opacity:0},1000)
          
          }
         }}


         
         document.documentElement.scrollTop=1

         if (document.documentElement.scrollTop==1) {
          var scrolltopobj=document.documentElement;
         }else{
          var scrolltopobj=document.body
         }
         

//滚动条定位
      
                 var dhnei=document.getElementsByClassName("zz")
                 
                 var ceng=document.getElementsByClassName("mingpinkuang")
                 
                 for (var i = 0; i < dhnei.length-1; i++) {
                   dhnei[i].aa=i
                  dhnei[i].onclick=function(){
                    
                  var numceng=ceng[this.aa].offsetTop;
                  
                     animate(scrolltopobj,{scrollTop:numceng})
                  }
                 }




        //小无限轮播

      
      var innr=document.getElementsByClassName("xia-tukuang")
      
      var left1=document.getElementsByClassName("zuojiantou")

      var right1=document.getElementsByClassName("youjiantou")
       
       for (var i = 0; i < innr.length; i++) {
        lunbo2(innr[i],left1[i],right1[i])
        
      }

      function lunbo2(innr,left1,right1){
      right1.onclick=function(){
       
        animate(innr,{marginLeft:-200},1000,function(){
          var first=getFirst(this);
          this.appendChild(first);
          this.style.marginLeft=0;
        })
      }
        left1.onclick=function(){
           
          var last=getLast(innr);
          
          var first=getFirst(innr);
          innr.insertBefore(last,first);
          innr.style.marginLeft="-200px";
          animate(innr,{marginLeft:0},1000)
        }
      }
         

        //导航列表
      
       
                 
                 for (var i = 0; i < dhnei.length-1; i++) {
                   dhnei[i].aa=i
                  dhnei[i].onclick=function(){
                  var numceng=ceng[this.aa].offsetTop;
                  
                     animate(scrolltopobj,{scrollTop:numceng})
                  }
                 }
                 var dh10=document.getElementsByClassName("za")[0]
                 dh10.onclick=function(){
                  animate(scrolltopobj,{scrollTop:0})
                 }


        var liebiao1=function(a){

    function bb(){
      for (var i = 0; i < neirong.length; i++) {
        daohang[i].style.zIndex='0'
      }
      daohang[a].style.zIndex='9999'
    
    } return bb;
  }

     
    for (var i = 0; i < daohang.length; i++) {
          neirong[i].onmouseover=(liebiao1)(i)
          daohang[i].onmouseover=(liebiao1)(i)
          neirong[i].onmouseout=function(){
              for (var i = 0; i < neirong.length; i++) {
                daohang[i].style.zIndex="0"
              };
          }
           daohang[i].onmouseout=function(){         
              for (var i = 0; i < neirong.length; i++) {
                daohang[i].style.zIndex="0"
              };            
          }
        };

 
        
   

//banner切换
	var aa=function(a){
	    function bb(){
	    	num=a
			for (var i = 0; i < bto.length; i++) {
				tu[i].style.zIndex='1'
				bto[i].style.backgroundColor="#211616"
			}
			bto[a].style.backgroundColor="#E5004F"
			tu[a].style.zIndex='99'
			bg.style.background=bgcol[a]
		}
		return bb;
	}
    for (var i = 0; i < bto.length; i++) {
	    bto[i].onmouseover=(aa)(i)
}
//右侧
    for (var k = 0; k < selfs.length; k++){
        selfs[k].index=k;
        selfs[k].onmouseover=function(){
        zzs[this.index].style.opacity="1"
            };
        selfs[k].onmouseout=function(){
        zzs[this.index].style.opacity="0";
        }
        }
	//动画
	var num=0
	var donghua=setInterval(move,2000)
	 function move(){
          num++
          if (num==bto.length) {
          	num=0
          }
		for (var i = 0; i < bto.length; i++) {
				tu[i].style.zIndex='1';
				bto[i].style.backgroundColor="#211616";
			}
			bto[num].style.backgroundColor="#E5004F";
			tu[num].style.zIndex="99";
			bg.style.backgroundColor=bgcol[num]
	}

bg.onmouseover=function(){
	clearInterval(donghua);
}
bg.onmouseout=function(){
	donghua=setInterval(move,2000);
}


//超值
var chaozhi=function(a){
		function bb(){
			for (var i = 0; i < chaozhichange.length; i++) {
				rexiaoxiatu[i].style.zIndex='1'
			}
			rexiaoxiatu[a].style.zIndex='9'
			
		}
		return bb;
	}
for (var i = 0; i < chaozhichange.length; i++) {
	chaozhichange[i].onmouseover=(chaozhi)(i)}

//热门
var remenchange=function(a){
		function bb(){
			for (var i = 0; i < remen.length; i++) {
				remenkuang[i].style.zIndex='1'
			}
			remenkuang[a].style.zIndex='9'
		
		}
		return bb;
	}
for (var j = 0; j < remen.length; j++) {
	remen[j].onmouseover=(remenchange)(j)}


//轮播
        
       function  lunbo(box,leftbtn,rightbtn,con1,con2,inner){
        var VAL=true
        //鼠标移入移出容器
        box.onmouseover=function(){
        	animate(leftbtn,{left:0},200)
        	animate(rightbtn,{right:0},200)
        
        }
        box.onmouseout=function(){
        	animate(leftbtn,{left:-60},200)
        	animate(rightbtn,{right:-60},200)
        	
        }
        //鼠标移入移出按钮变色
        leftbtn.onmouseover=function(){
        	leftbtn.style.backgroundPosition="left bottom";
        }
       
        rightbtn.onmouseover=function(){ 
        	if (VAL) {
        	rightbtn.style.backgroundPosition="right bottom";
              }
         }
        
        leftbtn.onmouseout=function(){
        	leftbtn.style.backgroundPosition="left top";
        }
        rightbtn.onmouseout=function(){
        	rightbtn.style.backgroundPosition="right top";
        }

        //按钮圆圈点击效果
        rightbtn.onclick=moveright
        leftbtn.onclick=moveleft
        con1.onclick=moveleft
        con2.onclick=moveright
        function moveleft (){
        	VAL=true
        	animate(inner,{marginLeft:0},200)
        	 	con1.style.backgroundColor="#e5004f";
        	con2.style.backgroundColor="#eee";        	
        }
        function moveright(){
        	VAL=false
        	animate(inner,{marginLeft:-390},200)
        	con1.style.backgroundColor="#eee";
        	con2.style.backgroundColor="#e5004f";
        }
        }
        for (var i = 0; i < box.length; i++) {
        	lunbo(box[i],leftbtn[i],rightbtn[i],con1[i],con2[i],inner[i])
        };
        
//框效果
         function border(obj){
             obj.style.position="relative"
             var div1=document.createElement("div")
             var div2=document.createElement("div")
             var div3=document.createElement("div")
             var div4=document.createElement("div")
        
          div1.style.cssText="position:absolute;background:#666;right:-1px;bottom:-1px;width:1px;"
          div2.style.cssText="position:absolute;background:#666;right:-1px;bottom:-1px;height:1px;"
          div3.style.cssText="position:absolute;background:#666;left:-1px;top:-1px;width:1px;"
          div4.style.cssText="position:absolute;background:#666;left:-1px;top:-1px;;height:1px;"
         
             obj.appendChild(div1)
             obj.appendChild(div2)
             obj.appendChild(div3)
             obj.appendChild(div4)
             num1=window.getComputedStyle(obj,null).width
             num2=window.getComputedStyle(obj,null).height
           
             var width=parseInt(num1)+2
              var height=parseInt(num2)+2
              obj.onmouseover=function(){
                animate(div1,{height:height},500,Tween.Quad.easeIn)
                animate(div2,{width:width},500 ,Tween.Quad.easeIn)
                animate(div3,{height:height},500,Tween.Quad.easeIn)
                animate(div4,{width:width},500,Tween.Quad.easeIn)
              }

              obj.onmouseout=function(){
                animate(div1,{height:0},500)
                animate(div2,{width:0},500)
                animate(div3,{height:0},500)
                animate(div4,{width:0},500)
              }
}

    
    
     
     for (var i = 0; i < one.length; i++) {
                border(one[i])
              };
     for (var i = 0; i < sixiaotu.length; i++) {
                border(sixiaotu[i])
              }


  
}
