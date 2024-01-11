// start animation type efect
var typed = new Typed('#type', {
    strings: [
        ' برترین مهندسین کشور',
        '  بهترین مصالح بازار',
        ' همراه تضمین کیفیت کار'
    ],
    loop: true,
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000
});


// start time in header
setInterval(s, 1000);
let time = document.getElementById("date");
function s() {
    const d = new Date().toLocaleString('fa-IR-u-nu-latn');
    time.innerHTML = d;
}


// start scroll top
let scrol = document.getElementById("scrolll");
document.addEventListener('scroll', scroll_func);
function scroll_func() {
    let all = document.body.clientHeight;
    let size_window = window.innerHeight;
    let now = window.scrollY;
    let final = Math.round((now * 100) / (all - size_window));
    scrol.style.width = final + '%'
}


// start tab menu
$('.tab-button').on('click', 'li', function () {
    let tabmenu = $(this).attr('id');
    $(this).addClass('active').siblings().removeClass('active');
    $('#' + tabmenu + "-content").addClass('active1').siblings().removeClass('active1');
})


// start slider
$(document).ready(function () {
    $('#lightSlider').lightSlider({
        rtl: true,
        autoWidth: true,
        auto: true,
        loop: true,
        slideMove: 1,
        slideMargin: 30,
        speed: 700,
        pause: 2500
    });
});


// start partner



// start customer
$('.counter').counterUp({
    delay: 20,
    time: 2000
});


//details
if (document.querySelector('details')) {
    const details = document.querySelectorAll('details');
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });
}


//rellax header
var rellax = new Rellax('.rellax');


// start hamber menu
first = true;
let ul = document.getElementById('ul');
function menu() {
    let menu = document.getElementById('ham-menu');
    if (first) {
        menu.removeAttribute('class');
        menu.setAttribute('class', 'fas fa-times-circle');
        first = false;
        ul.style.right = '0px'
    }
    else {
        menu.removeAttribute('class');
        menu.setAttribute('class', 'fas fa-bars');
        ul.style.right = '-300px'
        first = true
    }
}
/* <i class="far fa-times"></i> */
