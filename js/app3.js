// alert(1);

// $(window).scroll(function () {
//   //zoom
//   var top = $(window).scrollTop(),
//     scale = top / 2000;
//   $(".inner").css({
//     transform: "scale(" + scale + "," + scale + ")",
//     "-webkit-transform": "scale(" + scale + "," + scale + ")",
//   });

//   var scroll = $(window).scrollTop();
//   // console.log(scroll);
//   var header = $("header");
//   return scroll > 20 ? header.addClass("stuck") : header.removeClass("stuck");
//   // }
// });

$(() => {
  $(window).on("load", function () {
    $(".preloader").fadeOut(10000);
    $(".preloader").remove();
  });
  new WOW().init();
  var mobile = $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
    // alert(1);
  });
  $(document).on("click", ".close-btn", () => {
    $(".menu").hide();
    // alert(1);
  });

  if ($(window).width() > 768) {
    // $(".m-menu").click(() => {
    // });
  }

  // const tilt = $(".js-tilt").tilt();
  // // tilt.on("change", callback); // parameters: event, transforms
  // // tilt.on("tilt.mouseLeave", callback); // parameters: event
  // // tilt.on("tilt.mouseEnter", callback); // parameters: event

  // $(".js-tilt").tilt({
  //   max: 30,
  //   speed: 600,
  //   scale: 1,
  //   transition: true,
  //   // easing: "cubic-bezie$(.03,.98,.52,.99)",
  //   perspective: 600,
  //   // glare: true,
  // });
});

//timeline js
// http://timeline.knightlab.com/docs/options.html
/*$.ajax({
  url: 'js/data.json',
  type: 'GET',
  success: (response) => {
    // console.log(response.events.length);
    var a;
    for (a = 0; a < response.events.length; a++) {
      $(".lala").append(`
          <div class="wrap">
            <div class="date_">${response.events[a].start_date.day}-${response.events[a].start_date.month}-${response.events[a].start_date.year}</div>
          </div>
        `)

    }

    // const scrollContainer = document.getElementById("main");

    // scrollContainer.addEventListener("wheel", (evt) => {
    //   evt.preventDefault();
    //   scrollContainer.scrollLeft += evt.deltaY;
    // });
  }
})*/

/**
* By Alvaro Trigo 
* Follow me on Twitter: https://twitter.com/imac2
*/

(function () {
  $.ajax({
    url: 'js/data.json',
    type: 'GET',
    success: (response) => {
      // console.log(response.events.length);
      var a;
      for (a = 0; a < response.events.length; a++) {
        $(".datax").append(
          `
          <section>
            <h1>${response.events[a].text.headline}</h1>
          </section>
          `
        )
      }
    }
  })
  init();
  var g_containerInViewport;
  function init() {
    setStickyContainersSize();
    bindEvents();
  }

  function bindEvents() {
    window.addEventListener("wheel", wheelHandler);
  }

  function setStickyContainersSize() {
    document.querySelectorAll('.sticky-container').forEach(function (container) {
      const stikyContainerHeight = container.querySelector('main').scrollWidth;
      container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  function wheelHandler(evt) {

    const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
      return isElementInViewport(container);
    })[0];

    if (!containerInViewPort) {
      return;
    }

    var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
    var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
    let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
    }
  }
})();

