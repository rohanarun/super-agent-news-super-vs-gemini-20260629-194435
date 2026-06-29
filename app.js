(function(){
  function safeGSAP(fn){ if (window.gsap) { fn(); } }
  safeGSAP(function(){
    gsap.from('.hero h1', {y: 20, opacity: 0, duration: 0.8, ease: 'power3.out'});
    gsap.from('.hero-sub', {y: 20, opacity: 0, duration: 0.8, delay: 0.1});
    gsap.from('.hero-actions', {y: 10, opacity: 0, duration: 0.6, delay: 0.2});
  });
})();