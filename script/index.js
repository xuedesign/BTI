$LAB

//jQuery總碼
//.script("https://code.jquery.com/jquery.min.js")

//Banner輪播
//.script("script/lib/jquery.flexslider-min.js").wait(function(){
//    $(window).load(function(){$(".flexslider").flexslider({animation:"slide"})});
//  })

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

//鎖右鍵
.script("script/lib/no-rightbtn.js")

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

//FB粉絲頁訊息
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'))