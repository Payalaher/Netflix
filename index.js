var p1 = gsap.timeline();

p1.from(".left-nav h1",{


    y:40,
    duration:2,
    yoyo:true,
    repeat:-1

})

p1.from(".right-nav .languages",{

    y:-70,
    opacity:0,
    duration:.2,
    stagger:1
})

p1.from(".right-nav .Signin",{

    y:70,
    opacity:0,
    duration:.3,
    stagger:1
})

p1.from(".container h1",{

    y:40,
    opacity:0,
    duration:.2,
    stagger:1,
    
})


p1.from(" .container h3",{

    y:-40,
    opacity:0,
    duration:.3,
    stagger:1
})

p1.from("  .container p",{

    x:-40,
    y:60,
   
    opacity:0,
    duration:.2,
    stagger:1
})

p1.from(".input-content input",{

    y:-60,


    opacity:0,
    duration:.2,
    stagger:1

})




p1.from(" .input-content .gets",{

    y:60,
    // y:-60,
    x:60,

    opacity:0,
    duration:.3,
    stagger:1

})