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
// var additionalOptions = {
//   start_at_end: true,
//   default_bg_color: { r: 0, g: 0, b: 0 },
//   timenav_height: 250
// };

$.ajax({
  url: 'js/data.json',
  type: 'GET',
  success: (response) => {
    // console.log(response.events.length);
    var i;
    var nul = [];
    
    for (var i = 0; i < response.events.length; i++) {
      if (response.events[i].id % 2 !== 0) {
        // response.events[i].id.push(response.events[i].id.splice(i, 1)[0]);
        // console.log(i + ': ' + response.events[i].id.join(' '));
        // nul.push(response.events)
        var dates = response.events[i].id;
        // console.log(dates);
        $(".dedidedi").append(`
          <div class="font-bold">${dates}</div>
        `)
      }
    }
    // var odds = response.events[i].id.filter(number => {
    //   return number % 2 !== 0;
    // });
    // // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    // console.log(odds); 

  
  // console.log(response.events);
    // for (a = 0; a < response.events.length; a++) {


    //   $(".dedidedi").append(`

    //     <div class="dedidedi__1">
    //       <div class="odd"></div>
    //       <div class="even"></div>
    //     </div>

    //   `)
    //   // console.log(response.events[a].start_date);

    // }

  }
})

$(window).on('scroll', function () {
  fnOnScroll();
});

$(window).on('resize', function () {
  fnOnResize();
});


var agTimeline = $('.js-timeline'),
  agTimelineLine = $('.js-timeline_line'),
  agTimelineLineProgress = $('.js-timeline_line-progress'),
  agTimelinePoint = $('.js-timeline-card_point-box'),
  agTimelineItem = $('.js-timeline_item'),
  agOuterHeight = $(window).outerHeight(),
  agHeight = $(window).height(),
  f = -1,
  agFlag = false;

function fnOnScroll() {
  agPosY = $(window).scrollTop();

  fnUpdateFrame();
}

function fnOnResize() {
  agPosY = $(window).scrollTop();
  agHeight = $(window).height();

  fnUpdateFrame();
}

function fnUpdateWindow() {
  agFlag = false;

  agTimelineLine.css({
    top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
    bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
  });

  f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
}

function fnUpdateProgress() {
  var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

  i = agTop + agPosY - $(window).scrollTop();
  a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
  n = agPosY - a + agOuterHeight / 2;
  i <= agPosY + agOuterHeight / 2 && (n = i - a);
  agTimelineLineProgress.css({ height: n + "px" });

  agTimelineItem.each(function () {
    var agTop = $(this).find(agTimelinePoint).offset().top;

    (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
  })
}

function fnUpdateFrame() {
  agFlag || requestAnimationFrame(fnUpdateWindow);
  agFlag = true;
}


