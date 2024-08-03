gsap.from("header", { duration: 1, opacity: 0, y: -50 });
gsap.from("main", { duration: 1, opacity: 0, y: 50 });
gsap.from("footer", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
gsap.from(".section", { duration: 1, opacity: 0, scale: 0.9, stagger: 0.3 });
gsap.from(".topic-item, .partner", { duration: 1, opacity: 0, scale: 0.9, stagger: 0.3 });
