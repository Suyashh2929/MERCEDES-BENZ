function init(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()


var crsr=document.querySelector('.cursor');
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+'px';
    crsr.style.top=dets.y+'px';
})

gsap.from("#page1>h1",{
    opacity:0,
    y:70,
    duration:"2"
})
gsap.from("#page1>h2",{
    opacity:0,
    y:70,
    duration:"2"
})

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:'#page1>h1',
        scroller:'#main',
        // markers:true,
        start:'top 20%',
        end:'top -60%',
        scrub:1
    }
});

tl.to("#page1>h1",{
    x:-160,
    duration:1,
},'anim')

tl.to("#page1>h2",{
    x:160,
    duration:1,
    },'anim')

tl.to('#page1 video',{
    width:'95%',
    duration:1
},'anim')






var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:'#page1>h1',
        scroller:'#main',
        // markers:true,
        start:'top -105%',
        end:'top -115%',
        scrub:1
    }
});

tl2.to('#main',{
    backgroundColor:'white',
    duration:2
})


var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:'#page1>h1',
        scroller:'#main',
        // markers:true,
        start:'top -380%',
        end:'top -390%',
        scrub:1
    }
});

tl3.to('#main',{
    backgroundColor:'#111'
})

var boxes=document.querySelectorAll('.box');
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att=elem.getAttribute("data-image");
        crsr.style.height='200px';
        crsr.style.width='400px';
        crsr.style.borderRadius='10px';
        crsr.style.backgroundImage=`url(${att})`; 
        crsr.style.zIndex='102'; 
        crsr.style.objectFit='cover';      
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.height='20px';
        crsr.style.width='20px';
        crsr.style.borderRadius='50px';
        crsr.style.backgroundImage=`none`;

        })
})


var h4=document.querySelectorAll("#nav h4");
var purple=document.querySelector('#purple');
h4.forEach(function(elem){
    elem.addEventListener('mousemove',function(){
        purple.style.opacity='1';
        purple.style.display='block';
    })

    elem.addEventListener('mouseleave',function(){
        purple.style.opacity='0';
        purple.style.display='none';
    })
})

