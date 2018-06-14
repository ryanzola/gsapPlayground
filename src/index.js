'use strict';
import '../style/style.css';
import { TweenMax, CSSPlugin, ScrollToPlugin, Draggable, Elastic, TimelineMax, Linear } from 'gsap/all'; 

CSSPlugin.useSVGTransformAttr = false;

let height = window.innerHeight;
let width = window.innerWidth;

init();

var M2 = TweenMax.to('.luigiImg', 0.3, {repeat:-1,x: -170, ease: SteppedEase.config(1)});
M2.pause();

var M3 = TweenMax.to('.plant', 0.8, {repeat: -1,x: -300, ease: SteppedEase.config(2)}, 1);


var tl0 = new TimelineMax({repeat: -1});
tl0.staggerTo('#bubbleGroup rect', 2, {
  attr: {
    y: -100,
    height: 0,
    width: 0
  }
}, Math.random())

var tl00 = new TimelineMax({repeat: -1});
tl00.staggerTo('#fizz rect', 2, {
  attr: {
    y: -100,
    height: 0,
    width: 0,
    opacity: 0.5
  },
}, Math.random())

var tl1 = new TimelineMax({paused: true});
tl1.to("#grassPattern", 100, {
  attr: {
    x: -(width * 800)
  },
  ease: Linear.easeNone
})

var tl2 = new TimelineMax({paused: true});
tl2.to('.plant-container', 1600, {
    x: -(width * 800),
  ease: Linear.easeNone
})

addEventListener('keydown', e => {
  //Left arrow 
  if (e.keyCode == 37) { 
    tl1.reverse();
    tl2.reverse()
    TweenMax.to('.container, .potion', 0, {rotationY:-180, transformOrigin: 'bottom center', ease:Linear.easeNone})
    TweenMax.to('.potion', 0, {x: 34, rotationY:-180, transformOrigin: 'bottom center', ease:Linear.easeNone})
    M2.play();
  }
//Right arrow 
    if (e.keyCode == 39) { 
    tl1.play();
    tl2.play();
    TweenMax.to('.container, .potion', 0, {rotationY:0, transformOrigin: 'bottom center', ease:Linear.easeNone})
    TweenMax.to('.potion', 0, {x: 5, rotationY:0, transformOrigin: 'bottom center', ease:Linear.easeNone})
    M2.play();
  }
 
  console.log(Math.floor(document.getElementById('grassPattern').getAttribute('x')));
})

addEventListener('keyup', e => {
  tl1.pause();
  tl2.pause();
  M2.pause(0);
})

addEventListener('resize', e => {
  init();
})

function init() {
  height = window.innerHeight;
  width = window.innerWidth;
// TweenMax.to(".heart", 0, {x: 20, y: 20})
// TweenMax.to(".rupie", 0, {x: 120, y: 0})
// TweenMax.to(".luigi", 0, {x: 300, y: 120})
TweenMax.to(".potion", 0, {x: 5, y: -100, zIndex: 2})
TweenMax.to(".grass", 0, {y: height - 160, width: width})
TweenMax.to(".sandFloor", 0, {y: height - 100})
TweenMax.to(".subject", 0, {x: width / 2 - 80, y: height - 490})
TweenMax.to('.container', 0, {x: (width / 2) - 85, y: (height ) - 480});
TweenMax.to('.plant-container', 0, {x: (width / 2), y: (height ) - 560});
}
