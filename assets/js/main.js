$(document).ready(function () {
  // slick_slider（トップなど）
  $(".slick_slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    cssEase: "linear",
    arrows: false,
    dots: false,
  });

  // voice_slider 初期化前に margin 設定（余白問題対策）
  $(".voice_slider").on("init", function (event, slick) {
    slick.$slides.each(function (index, slide) {
      $(slide).css("margin-right", "20px");
    });
  });

  // voice_slider 本体
  $(".voice_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // other_person-slider（サブページ用）
  $(".other_person-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    infinite: true,
    dots: true,
  });

  /*=================================================
    ハンバーガーメニュー
  ===================================================*/
  $(".toggle_btn").on("click", function () {
    $(this).toggleClass("open");
    $("#nav, #mask").toggleClass("open");
  });

  $("#mask,#nav a").on("click", function () {
    $(".toggle_btn, #nav, #mask").removeClass("open");
  });
});

/*=================================================
  トップに戻る
  ===================================================
  let pagetop = $("#to_top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
  pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    return false;
  });*/
