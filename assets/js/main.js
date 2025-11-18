$(document).ready(function () {
  $(".slick_slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    cssEase: "linear",
    arrows: false,
    dots: false,
  });
  /*voice_slider*/
  $(".voice_slider").slick({
    slidesToShow: 3, // 一画面に3つ表示
    slidesToScroll: 1,
    centerMode: true, // 両サイドを見切れさせる
    centerPadding: "40px", // 見切れの幅
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: true, // 前後矢印表示
    dots: true, // 下のページネーション
  });
});

$(function () {
  /*=================================================
  ハンバーガーメニュー
  解説は、「中級編：ストアサイト（インテリア）」参照
  ===================================================*/
  $(".toggle_btn").on("click", function () {
    $(this).toggleClass("open");
    $("#nav, #mask").toggleClass("open"); // ← navにもopenを付ける
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask,#nav a").on("click", function () {
    $(".toggle_btn, #nav, #mask").removeClass("open");
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
});
