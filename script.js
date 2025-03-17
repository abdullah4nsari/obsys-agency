let crsr=document.querySelector('#crsr');
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
//     // animaationName:'nowAnime',
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
t1.from("#page01",{
    delay:0.2,
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
t1.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
  y:120,
  stagger:0.1,
  ease: "power2.out" ,
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
Shery.makeMagnet("#nav-part2 ul li", {});
}
loadingAnimation();
cursorAnimation();
