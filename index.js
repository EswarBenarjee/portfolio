function bgChange() {
    if(document.body.scrollTop > 0) {
        //document.getElementById("navbar").setAttribute("data-aos", "fade-up");
        document.getElementById("nav").style.opacity = 0.75;
        document.getElementById("nav").style.backgroundColor = "Black";
    }

    if(document.body.scrollTop < 50) {
        document.getElementById("navbar").setAttribute("data-aos", "");
        document.getElementById("nav").style.backgroundColor = "inherit";
        document.getElementById("nav").style.opacity = 1;
    }
}

window.onscroll = function() { bgChange(); };
