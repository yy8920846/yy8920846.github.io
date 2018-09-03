window.onload=function(){
    search();
};
var search = function () {
    var searchBox = document.querySelector('.apple_nav');
    /*监听页面滚动事件*/
    window.onscroll = function () {
        var scrollTop = document.body.scrollTop;
        if (scrollTop > 50) {
            searchBox.addClass('fixed');
        } else {
            searchBox.removeClass('fixed');
        }

    }
};