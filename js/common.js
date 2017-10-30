"use strict"
// 兼容部分机型延迟300s的问题
if ('addEventListener' in document) {  
  document.addEventListener('DOMContentLoaded', function() {  
    FastClick.attach(document.body);  
  }, false);
}
// 适配屏幕大小问题
!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));
//获取url参数
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  decodeURI(r[2]); return null;
}

// Vue.filter("formatDate", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
// 	var newdate=new Date().getFullYear();
//     var Staryear = value.split('')[0]+value.split('')[1]+value.split('')[2]+value.split('')[3];
//     var Starmonth = value.split('')[5]+value.split('')[6];
//     var Starday = value.split('')[8]+value.split('')[9];
//     if(newdate>Staryear){
//     	return Staryear+"年"+Starmonth+"月"+Starday+"日"
//     }else{
//     	return Starmonth+"月"+Starday+"日"
//     }
// }); 

Highcharts.setOptions({
        lang: {
        	loading: '数据载入中...' ,
            numericSymbols: ['万'],
            numericSymbolMagnitude: 10000,
            thousandsSep:","       
        }
    }); 
// 封装select组件
 Vue.component("crselect", {
         data:function() {
             return {
                   val:['未开始','进行中','已结束']
             }
         },
         template:'<ul class="manageStatus">'+
                   		'<li v-for="(item,index) in val" @click="selectStatus(index)">{{item}}</li>'+

                    '</ul>',
         methods:{
            selectStatus:function(index) {
               this.$parent.changeName(index)	
            }
         }
 });
