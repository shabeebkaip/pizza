document.addEventListener('DOMContentLoaded', () => {
  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax();
  timeline
    .from('.section_1_01', 4, {
      y: -100,
      x: -150,
      ease: Power3.easeInOut
    },)
    .from('.section_1_02', 4, {
      y: -150,
      x: -150,
      ease: Power3.easeInOut
    }, '=-4')
    .from('.section_1_03', 4, {
      y: -200,
      x: -150,
      ease: Power3.easeInOut
    }, '=-4')
    .from('.section_1_04', 4, {
      y: -300,
      x: -150,
      ease: Power3.easeInOut
    }, '=-4')
    .from('.section_1_05', 4, {
      y: -400,
      x: -150,
      ease: Power3.easeInOut
    }, '=-4')
    .from('.section_1_06', 4, {
      y: -150,
      x: -150,
      ease: Power3.easeInOut
    }, '=-4')
    .from('.section_1_07', 4, {
      y: -200,
      x: -150,
      ease: Power3.easeInOut
    }, '=-4')
    .from('.section_1_08', 4, {
      y: -100,
      x: -150,
      ease: Power3.easeInOut
    }, '=-4')
    .from('.section_1_09', 4, {
      y: -100,
      x: -150,
      ease: Power3.easeInOut
    }, '=-4')

  let timeline2 = new TimelineMax();
  timeline2
    .to('.top .image-container', 4, {
      height: 0,
    })

  let timeline3 = new TimelineMax();
  timeline3
    .to('.section_3_01', 4, {
      y: -250,
      ease: Power3.easeInOut
    }, '=-4')
    .to('.section_3_02', 4, {
      y: -200,
      ease: Power3.easeInOut
    }, '=-4')
    .to('.section_3_03', 4, {
      y: -100,
      ease: Power3.easeInOut
    }, '=-4')
    .to('.section_3_04', 4, {
      y: 0,
      ease: Power3.easeInOut
    }, '=-4')
    .to('.section_3_05', 4, {
      y: 150,
      ease: Power3.easeInOut
    }, '=-4')
    .to('.section_3_06', 4, {
      y: 250,
      ease: Power3.easeInOut
    }, '=-4')

  let timeline4 = new TimelineMax();
  timeline4
    .to('.section_4_01', 5, {
      autoAlpha: 0,
    })
    .from('.section_4_02', 5, {
      autoAlpha: 0,
    }, '=-4')
    .from('.section_4_03', 5, {
      autoAlpha: 0,
    })
    .from('.section_4_04', 5, {
      autoAlpha: 0,
    })

  let scene = new ScrollMagic.Scene({
    triggerElement: '.first-section',
    duration: '100%',
    triggerHook: 0,
    offset: '300'
  })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);



  let scene2 = new ScrollMagic.Scene({
    triggerElement: '.second-section',
    duration: '100%',
    triggerHook: 0,
    offset: '100'
  })
    .setTween(timeline2)
    .setPin('.second-section')
    .addTo(controller);

  let scene3 = new ScrollMagic.Scene({
    triggerElement: '.third-section',
    duration: '100%',
    triggerHook: 0,
    offset: '0'
  })
    .setTween(timeline3)
    .setPin('.third-section')
    .addTo(controller);
  let scene4 = new ScrollMagic.Scene({
    triggerElement: '.forth-section',
    duration: '100%',
    triggerHook: 0,
    offset: '200'
  })
    .setTween(timeline4)
    .setPin('.forth-section')
    .addTo(controller);
});