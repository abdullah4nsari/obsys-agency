let crsr=document.querySelector('#crsr');
let videoContainer=document.querySelector("#video-container");
let video=document.querySelector("#video-container video");
let flag=false;
let imgFlag = document.querySelector("#flag");
let hero3=document.querySelector("#hero3");
function videoContainerAnimation() {
  videoContainer.addEventListener('mousemove',(dets)=>{
    crsr.style.scale=0;
    const rect = videoContainer.getBoundingClientRect();
    gsap.to("#video-cursor",{
      left:dets.x-rect.left,
      top:dets.y-rect.top
    })
  })
videoContainer.addEventListener('mouseleave',()=>{
  crsr.style.scale=1;
  gsap.to("#video-cursor",{
    left:"70%",
    top:"-10%"
  })
})
videoContainer.addEventListener('click',()=>{
  if(!flag){
      video.play();
    video.style.opacity=1;
    document.querySelector("#video-cursor").innerHTML=`<i class="ri-pause-line"></i>`;
    gsap.to("#video-cursor",{
      scale:0.7,
    })
    flag=true;
  }else{
      video.pause();
    video.style.opacity=0;
    document.querySelector("#video-cursor").innerHTML=`<i class="ri-play-fill"></i>`;
    gsap.to("#video-cursor",{
      scale:1,
  })
  flag=false;
  }
})
  
}
function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

  
}
function locomotiveScroll2() {
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
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
    // 🔥 Refresh ScrollTrigger after Locomotive has initialized
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  
}
function loadingAnimation() {
  var t1 = gsap.timeline();
t1.from(".line h1,.line h2", {
  y: 150,
  opacity: 0,
  // stagger: 0.4,
  // duration: 0.6,
  // delay: 0.5,
});
// t1.from('.line h2',{
//     animaationName:'nowAnime',
//     y:150,
// })
t1.from("#loading-part1", {
  opacity: 0,
  onStart: function () {
    let count = 0;
    let elem = document.querySelector("#loading-part1 h5");
    let cntID = setInterval(() => {
      count++;
      if (count >= 100) {
        clearInterval(cntID);
      }
      elem.innerHTML = count;
    }, /*30*/1);
  },
});
t1.to("#loader",{
    opacity:0,
    duration:0.4,
    // delay:3
})
t1.from("#main",{
    // delay:0.2,
    y:1600,
    opacity:0,
})
t1.to("#loader",{
    display:"none",
})
t1.from("#nav",{
  opacity:0,
  y:-120,
})
t1.from("#hero-section",{
  opacity:0,
  duration:0.1
})
t1.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
  y:120,
  stagger:0.1,
  ease: "power2.out" ,
},"-=0.2")
t1.from("#page02",{
  y:120,
  opacity:0
})
}
function cursorAnimation() {
document.addEventListener("mousemove",(evt)=>{
  // Get the cursor's dimensions
  let crsrWidth = crsr.offsetWidth / 2;
  let crsrHeight = crsr.offsetHeight / 2;
  crsr.style.left=evt.clientX-crsrWidth+"px";
  crsr.style.top=evt.clientY-crsrHeight+"px";
})
}
function sheryAnime(){
  Shery.makeMagnet("#nav-part2 ul li", {});
  Shery.imageEffect(".image-div", {
    style: 5, //Select Style
    // debug: true, // Debug Panel
    gooey:true,
    config:
      {"a":{"value":0.92,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.53,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}
    },
    preset: "./presets/wigglewobble.json",
  });
  }

document.addEventListener("mousemove",(dets)=>{
  gsap.to("#flag",{
    x:dets.x,
    y:dets.y,
  })
})
hero3.addEventListener("mouseenter",()=>{
    gsap.to("#flag",{
      opacity:1,
      scale:1
    })
})
hero3.addEventListener("mouseleave",()=>{
  gsap.to("#flag",{
    scale:0,
    opacity:0
  })
})
function pageAnimations() {
 let t2=gsap.timeline();
  t2.from("#page03-heading", {
    opacity: 0,
    y: 100,
    scrollTrigger: { // `scrollTrigger` should be inside this object
      trigger: "#page03-heading",
      scroller: "#main",
      // markers: true,  // Remove in production
      start: "top 130%", // Adjusted for better visibility
      end: "top 110%", // Longer animation duration
      scrub: 1
    }
  });
  t2.from("#image-div-container", {
    opacity: 0,
    y: 120,
    stagger:0.2,
    scrollTrigger: { // `scrollTrigger` should be inside this object
      trigger: "#image-div-container",
      scroller: "#main",
      // markers: true,  // Remove in production
      start: "top 120%", // Adjusted for better visibility
      end: "top 80%", // Longer animation duration
      scrub: 1
    }
  });
}
loadingAnimation();
cursorAnimation();
locomotiveScroll2();
// locomotiveScroll();
sheryAnime();
videoContainerAnimation();
pageAnimations();