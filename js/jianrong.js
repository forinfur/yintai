//用于解决ie6-8兼容性问题  
    // 元素获取
    //getlementsByclassname(oo)
    // 1.先区分 在进行不同的操作
    // 2.先把所有元素都获取到
    // 3.然后根据类名找到我们所需的元素
function getclass(selector,context){
  context=context||document;
if (document.getlementsByClassName)   //判断
return context.getElementsByClassName(selector)//返回
else{
   var all=context.all;
   var newarr=[];
   for (var i = 0; i < all.length; i++) {
   	 if(checkstr(all[i].className,selector)){
   	 	newarr.push(all[i])
   	 }
   };
   return ture;
}
      function checkstr(lstr,str){
         var arr=lstr.split(" ")
         for (var i = 0; i < arr.length; i++) {
         if(arr[i]==str){
        return true
       }
      };
      return false;
      }
}

//兼容的获取或设置元素的文本内容
//1判断浏览器
//2是获取还是设置
//3分别执行对应的操作
   // textContent    innerText
       // wenben(leiming,wenben)
    function gettext(obj,text){
            if (document.getlementsByClassName) {// 判断浏览器中是否能执行document.get函数能执行  是否在ie6-8中  能执行则不在  执行下一判断   obj.textContent!=underfined
                    if (text==undefined) {       //判断是否输入text 即选择获取还是设置

                      return  obj.textContent    //执行获取
                    }else{                        
                      return  obj.textContent=text       //执行设置
                    }
            }else{
                    if (text==undefined) {       
                        return obj.innerText
                    }else{
                        return obj.innerText=text
                    }
                    }
    }
  
//兼容性获取对象某一个样式
// window.getcomputedStyle(one,null).width
// one.currentStyle.width    6-8
  function  getstyle(obj,attr){                   //attr  为字符串
    if (window.getcomputed){                     // 判断浏览器中是否能执行window
      return window.getcomputedStyle(obj,null)[attr]   //执行window并返回函数结果   
    }else{
      return obj.currentStyle[attr]                   //执行currentStyle并返回函数结果
    }
  }


