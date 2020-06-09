var defaultObj = {
  swiper: function () {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
$(document).ready(function () {
  defaultObj.swiper()
})

