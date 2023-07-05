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
