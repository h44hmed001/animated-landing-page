const tl=gsap.timeline()
tl.from(".logo,.nav-centered>p,.nav-buttons>.nav-button",{
    y:-100,
    opacity:0,
    delay:0.3,
    stagger:0.2,
})
tl.from(".text-block>h1",{
    opacity:0,
    stagger:0.4,
    y:100,
})
tl.from(".img-left,.img-right",{
    scale:0,
    opacity:0,
    stagger:0.4,

})
tl.from(".scroll-down",{
 
    opacity:0,
    scale:0,
})
tl.to(".scroll-down",{
    yoyo:true,
    repeat:-1,
    y:40,
    duration:0.7,
})