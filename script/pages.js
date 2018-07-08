$LAB

//jQuery總碼
.script("https://code.jquery.com/jquery.min.js")

//圖片延遲載入
.script("https://cdn.jsdelivr.net/npm/lazyload@1.8.4/jquery.lazyload.min.js").wait(function(){
    $("img.lazyload").lazyload();
  })

//區塊載入動畫
.script("https://cdn.rawgit.com/graingert/WOW/34712a3d/dist/wow.min.js").wait(function(){
    wow=new WOW({animateClass:"animated",offset:100,callback:function(a){console.log("WOW: animating <"+a.tagName.toLowerCase()+">")}}),wow.init();
  })

//totop
.script("script/lib/jquery.ui.totop.js")
.script("script/lib/easing.js").wait(function(){
    $(document).ready(function(){$().UItoTop({easingType:"easeOutQuart"})}); 
})

//行動版選單
.script("script/lib/overlay.modernizr.custom.js")
.script("script/lib/overlay-classie.js")
.script("script/lib/overlay-set.js")

// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;