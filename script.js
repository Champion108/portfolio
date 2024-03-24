//header toggle

let menu = document.getElementById('menu');

menu.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    e.currentTarget.classList.toggle('fa-xmark');
});

let typed = new Typed('.auto-input',{
    strings: ['Front- End Developer!','Competitive Coder!'],
    typeSpeed:70,
    backSpeed:50,
    backDelay:50,
    loop:true,
});

//active link state on scroll

let navlinks= document.querySelectorAll('nav ul li a')
let sections=document.querySelectorAll('section')


window.addEventListener('scroll',function(){
    const scrollpos= window.scrollY+20
    sections.forEach(section=>{
        if(scrollpos > section.offsetTop && scrollpos< (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active');
                }
            })
        }
    })
})

let u= "https://formsubmit.co/champion561997@gmail.com"
let form = document.getElementById("form")
form.setAttribute('action', u)

tl=gsap.timeline();

let wid=[75,75,70,60,65,70];

const anime = () =>{
let ski= document.getElementsByClassName("skill-inner-line");
let out= document.getElementsByClassName("skill-outer-line")[0];

let skill=Array.from(ski)
let e = out.offsetWidth;


gsap.registerPlugin(ScrollTrigger);

gsap.to(skill[0],{
    ease: Expo.easeInOut,
    width:(wid[0]/100)*e,
    duration:1,
    scrollTrigger:skill[0],
})

gsap.to(skill[1],{
    ease: Expo.easeInOut,
    width:(wid[1]/100)*e,
    duration:1,
    scrollTrigger:skill[1],
})

gsap.to(skill[2],{
    ease: Expo.easeInOut,
    width:(wid[2]/100)*e,
    duration:1,
    scrollTrigger:skill[2],
})

gsap.to(skill[3],{
    ease: Expo.easeInOut,
    width:(wid[3]/100)*e,
    duration:1,
    scrollTrigger:skill[3],
})

gsap.to(skill[4],{
    ease: Expo.easeInOut,
    width:(wid[4]/100)*e,
    duration:1,
    scrollTrigger:skill[4],
})

gsap.to(skill[5],{
    ease: Expo.easeInOut,
    width:(wid[5]/100)*e,
    duration:1,
    scrollTrigger:skill[5],
})
}

anime()
window.onresize = anime;