$(document).ready(function(){
    $('.btnActiveage').mouseenter(function(e){
        
        var 
        $this = $(this),
        top = $this.offset().top,
        left = $this.offset().left,
        pageX = e.pageX,
        pageY = e.pageY;
        console.log(top)
        $('.btnActiveage .fill-btn').css({
            "top": pageY-top,
            "left": pageX-left,
        });
    });
});

$(document).ready(function(){
    $('.buttonAnimation').mouseenter(function(e){
        
        var 
        $this = $(this),
        top = $this.offset().top,
        left = $this.offset().left,
        pageX = e.pageX,
        pageY = e.pageY;
        console.log(top)
        $('.buttonAnimation .fill-btn').css({
            "top": pageY-top,
            "left": pageX-left,
        });
    });
});
const textPath = document.querySelector("#text-path");

const h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

document.addEventListener("scroll", e => {
  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  textPath.setAttribute("startOffset", (-percent * 40) + 1200)
});