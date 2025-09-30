gsap.registerPlugin(ScrollTrigger);

gsap.to("#mahzhong", {
  delay: 1.8,
  opacity: 0,
  y: -200,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".background-video", {
  delay: 0.2,
  opacity: 0,
  duration: 0.2,
  ease: "power3.out"
});

gsap.from(".background-video", {
  delay: 2.8,
  scale: 0.25,
  opacity: 1,
  duration: 0.8,
  ease: "power3.out"
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
