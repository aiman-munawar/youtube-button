var icon=document.querySelector("#button i");

var icon1=document.querySelector("#page2 i");

var loading=document.querySelector("#youtube #loading");

var count=0;

icon.addEventListener("click",function(){
    page1.style.display="none";
    page2.style.display="flex";
    gsap.from("#page2 i",{
             x:"-200px",
             duration:3,

    })
    gsap.from("#youtube",{
        x:"-200px",
        duration:3,

})

    
})
icon1.addEventListener("click",function(){
    var st=setInterval(function(){
    count=count+1;
         loading.style.width=count+"%";  
         if(count===100){
            clearInterval(st);
            count=0;
         }
          
         },50)      
})
