//requires carouFredsel.js
//pen by Beatrize

jQuery(document).ready(function() {
  "use strict";
  $(".carousel").carouFredSel({
    responsive: true,
    width: "100%",
    circular: true,
    scroll: {
      item: 1,
      duration: 700,
      pauseOnHover: false
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 1
      },
      height: "variable"
    },
    pagination: {
      container: ".sliderpagnation",
      anchorBuilder: false
    }
  });
});

