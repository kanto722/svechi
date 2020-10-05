'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var parallaxHits = document.querySelector('.js-parallax-hits');
  var parallaxBeauty = document.querySelector('.js-parallax-beuty');
  var parallaxCategory = document.querySelector('.js-parallax-category');

  if (windowWidth >= LAPTOP_WIDTH) {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        duration: '200%'
      }
    });

    if (parallaxHits) {
      new ScrollMagic.Scene({
        triggerElement: parallaxHits
      })
        .setTween('.js-parallax-hits > div', {y: '-120%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
    }

    if (parallaxBeauty) {
      new ScrollMagic.Scene({
        triggerElement: parallaxBeauty
      })
      .setTween('.js-parallax-beuty > div', {y: '90%', ease: Linear.easeNone})
      // .addIndicators()
      .addTo(controller);
    }

    if (parallaxCategory) {
      new ScrollMagic.Scene({
        triggerElement: parallaxCategory
      })
        .setTween('.js-parallax-category > div', {y: '90%', ease: Linear.easeNone})
        // .addIndicators()
        .addTo(controller);
    }
  }

})();
