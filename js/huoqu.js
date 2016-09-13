//通过多种方式获取元素
function  $(selector,context){
   context=context||document;   //接收方式
   if (typeof selector=="string") {
   if (selector.charAt(0)=="."){
    return getclass(selector.slice(1),context)
   }else if(selector.charAt(0)=="#")
    {return document.getElementById(selector.slice(1))
       }else{
      return context.getElementsByTagName(selector)
            }
    }else if (typeof(selector)=="function") {
  window.onload=selector}
}