/* 横スライドメニュー */
jQuery(function($){
  $('#menu').on('click', function() {
    $('nav').toggleClass('open');
    return false;
  });
});

/* ページトップに戻るボタン */
jQuery(function($) {
  const topBtn = $('#pagetop');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
});

/* プロフィール画面 */
jQuery(function ($) {
  $('.profile').modaal({
    overlay_close: true,
    before_open: function () {
      $('html').css('overflow-y', 'hidden');
    },
    after_close: function () {
      $('html').css('overflow-y', 'scroll');
    }
  });
});
