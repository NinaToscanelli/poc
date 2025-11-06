import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".screens-stroll", {
  x: "-66%",
  scrollTrigger: {
    trigger: ".scroller-stroll",
    pin: true,
    scrub: 1,
  },
});

gsap.to(".screens-hunting", {
  x: "-66%",
  scrollTrigger: {
    trigger: ".scroller-hunting",
    pin: true,
    scrub: 1,
  },
});
