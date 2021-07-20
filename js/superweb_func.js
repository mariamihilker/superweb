/**
 * is this really needed???
 * what does this exactly do?
 */

 function preloadPic2(obj) {
    if (obj.src && obj.src.indexOf('1.') != -1) {
     x = new Image();
     x.src = obj.src.replace(/1\./g,'2.');
    }
   }
   
   i=0; while (imgobj = document.getElementsByTagName('img')[i++]) preloadPic2(imgobj);
   i=0; while (imgobj = document.getElementsByTagName('input')[i++]) preloadPic2(imgobj);
   
   
   
   
   function animateLayer(){
    if (document.cookie.indexOf('newlayer=1')!=-1) return;
   
    document.getElementById('neulayerbox').style.display = 'block';
   
    position=0;
    timer = window.setInterval(function() {
     position+=10;
   
     document.getElementById('neulayer').style.top = (-235 + position) +'px';
     if (position - 45 > 0) document.getElementById('content').style.marginTop = position - 45 +'px';
   
     if (position>=260) window.clearInterval(timer);
    },50);
   }
   
   function updatevisibility(checkbox){
       if(checkbox.checked) {
           document.cookie = "newlayer=1; expires=" + (new Date(2010, 1, 1)).toGMTString();
       }
   }
   
   function animateLayerBack(){
     dojo.style('neulayerbox', 'display', 'none');
     dojo.style('content', 'marginTop', 0);
   }