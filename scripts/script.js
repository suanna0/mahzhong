gsap.registerPlugin(ScrollTrigger);

gsap.to("#mahzhong", {
  delay: 1.8,
  opacity: 0,
  y: -200,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".background-video", {
  delay: 2.8,
  scale: 0.25,
  duration: 0.8,
  ease: "power3.out"
});

gsap.to(".background-video", {
  opacity: 1
});

gsap.utils.toArray("img").forEach((imgEl) => {
  gsap.from(imgEl, {
    scrollTrigger: { trigger: imgEl, start: "top 80%" },
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});

gsap.utils.toArray("video").forEach((videoEl) => {
  gsap.from(videoEl, {
    scrollTrigger: { trigger: videoEl, start: "top 80%" },
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});
