/* ═══════════════════════════════════════════
   Portfolio v2.0  —  Shared JavaScript
   Author: Muhammad Rubait Zakria
   ═══════════════════════════════════════════ */
(function () {
  "use strict";

  /* Custom Cursor */
  var dot  = document.getElementById("cursor-dot");
  var ring = document.getElementById("cursor-ring");
  if (dot && ring && window.matchMedia("(pointer: fine)").matches) {
    var mx=0, my=0, rx=0, ry=0;
    document.addEventListener("mousemove", function(e){ mx=e.clientX; my=e.clientY; dot.style.left=mx+"px"; dot.style.top=my+"px"; });
    (function anim(){ rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12; ring.style.left=rx+"px"; ring.style.top=ry+"px"; requestAnimationFrame(anim); })();
    document.querySelectorAll("a,button,[role='button']").forEach(function(el){
      el.addEventListener("mouseenter",function(){ ring.classList.add("hovered"); });
      el.addEventListener("mouseleave",function(){ ring.classList.remove("hovered"); });
    });
  }

  /* Scroll Progress */
  var prog = document.getElementById("scroll-progress");
  if (prog) {
    window.addEventListener("scroll",function(){
      var t=document.body.scrollHeight-window.innerHeight;
      prog.style.width=(t>0?(window.scrollY/t)*100:0)+"%";
    },{passive:true});
  }

  /* Nav Frosted */
  var nav = document.getElementById("main-nav");
  if (nav) { window.addEventListener("scroll",function(){ nav.classList.toggle("scrolled",window.scrollY>50); },{passive:true}); }

  /* Mobile Menu */
  var toggle = document.getElementById("nav-toggle");
  var links  = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click",function(){ toggle.classList.toggle("open"); links.classList.toggle("open"); });
    document.addEventListener("click",function(e){ if(nav && !nav.contains(e.target)){ toggle.classList.remove("open"); links.classList.remove("open"); } });
  }

  /* Number Counter */
  document.querySelectorAll("[data-count]").forEach(function(el){
    var target=parseInt(el.dataset.count,10);
    var suffix=el.dataset.suffix||"+";
    var obs=new IntersectionObserver(function(entries){
      if(!entries[0].isIntersecting) return;
      obs.disconnect();
      var start=null,dur=1200;
      requestAnimationFrame(function step(ts){ if(!start) start=ts; var p=Math.min((ts-start)/dur,1),e=1-Math.pow(1-p,3); el.textContent=Math.round(e*target)+suffix; if(p<1) requestAnimationFrame(step); });
    });
    obs.observe(el);
  });

  /* Skill Bar Animate-in */
  document.querySelectorAll(".skill-fill").forEach(function(bar){
    var cls=bar.className.match(/w-(\d+)/);
    if(!cls) return;
    var target=cls[1]+"%";
    bar.style.width="0%";
    var o=new IntersectionObserver(function(entries){
      if(!entries[0].isIntersecting) return;
      o.disconnect();
      setTimeout(function(){ bar.style.width=target; },200);
    },{threshold:0.4});
    o.observe(bar);
  });

  /* Scroll Reveal (.anim-reveal) */
  var style=document.createElement("style");
  style.textContent=".anim-reveal{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(0.16,1,0.3,1),transform .7s cubic-bezier(0.16,1,0.3,1)}.anim-reveal.in-view{opacity:1;transform:translateY(0)}";
  document.head.appendChild(style);
  var revObs=new IntersectionObserver(function(entries){ entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in-view"); revObs.unobserve(e.target); } }); },{threshold:0.1});
  document.querySelectorAll(".anim-reveal").forEach(function(el){ revObs.observe(el); });

})();