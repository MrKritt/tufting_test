document.addEventListener("DOMContentLoaded", function () {
    const railText = document.getElementById("rail-text");
  
    function onScroll() {
      const rect = railText.getBoundingClientRect();
      const inView =
        rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  
      if (inView) {
        railText.style.animationPlayState = "running";
      } else {
        railText.style.animationPlayState = "paused";
      }
    }
  
    window.addEventListener("scroll", onScroll);
    onScroll();
  });
  