//Po zmene obrazovky prosim refreshnete stranku aby fungovala spravne
$(document).ready(function(){
    if (window.matchMedia('(max-width: 992px)').matches) {
        $("#navbar-toggle,.navbar-item").click(function(){
            $(".navbar > ul").toggle(1000);
        });
    }

    const sections = document.querySelectorAll("section");
    const navbarItems = document.querySelectorAll(".navbar-item");

    window.onscroll = () => {
        var link = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop) {
            link = "#" + section.getAttribute("id"); }
        });

        navbarItems.forEach((item) => {
            item.classList.remove("active");
            var a = item.children[1]
            if (a.getAttribute("href") == link) {
                item.classList.add("active");
            }
        });
    };

    var before = $(this).width();

    $(window).resize(function() {
        var after = $(this).width();
        if (after != before) {
            location.reload()
        }
    })
});