
var defaultObj = {
    swiper:function()
    {
        var swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
};
$(document).ready(function(){
    defaultObj.swiper();
});