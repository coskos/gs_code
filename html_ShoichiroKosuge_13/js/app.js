$('.single').slick({
  autoplay: true, //自動再生
});

$('.multiple').slick({
  autoplay: true, //自動再生
  infinite: true, //スライドのループ有効化
  dots: true, //ドットのナビゲーションを表示
  slidesToShow: 3, //表示するスライドの数
  slidesToScroll: 1, //スクロールで切り替わるスライドの数
  responsive: [{
    breakpoint: 768, //ブレークポイントが768px
    settings: {
      slidesToShow: 3, //表示するスライドの数
      slidesToScroll: 1, //スクロールで切り替わるスライドの数
    }
  }, {
    breakpoint: 480, //ブレークポイントが480px
    settings: {
      slidesToShow: 2, //表示するスライドの数
      slidesToScroll: 2, //スクロールで切り替わるスライドの数
    }
  }]
});
// 
//  モーダルウィンドウJavaScript（↓）
// 
$(function(){
  $('.js-modal-open').on('click',function(){
      $('.js-modal').fadeIn();
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  });
});
// 
//  右下にTOPButtonを浮上させるJS（↓）
// 
$(function() {
  var showFlag = false;
  var topBtn = $('#page-top');    
  topBtn.css('bottom', '-100px');
  var showFlag = false;
  //スクロール2000に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 2000) {
          if (showFlag == false) {
              showFlag = true;
              topBtn.stop().animate({'bottom' : '20px'}, 200); 
          }
      } else {
          if (showFlag) {
              showFlag = false;
              topBtn.stop().animate({'bottom' : '-100px'}, 200); 
          }
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 10);
      return false;
  });
});
// 
//  
// 


