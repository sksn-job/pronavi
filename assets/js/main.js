$(document).ready(function () {
  //ハンバーガーメニュー
  $(".toggle_btn").on("click", function () {
    $(this).toggleClass("open");
    $("#nav, #mask").toggleClass("open");
    $(".btn").toggleClass("is-hidden");
    $(".to_top").toggleClass("is-hidden");
  });

  $("#mask,#nav a").on("click", function () {
    $(".toggle_btn, #nav, #mask").removeClass("open");
    $(".btn").removeClass("is-hidden");
    $(".to_top").removeClass("is-hidden");
  });
});

//スムーススクロール
$('a[href^="#"]').on("click", function (e) {
  if ($(this).attr("id") === "to_top") return;
  e.preventDefault(); // デフォルトのジャンプをキャンセル
  var target = $(this.getAttribute("href")); // 対象要素

  if (target.length) {
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      1500
    ); // 600ms でスクロール
  }
});

//下からふわっとフェードイン
const fadeUps = $(".fade_up");
const subtitle = $(".subtitle.fade_up");
const envItems = $(".env_catch_contents.fade_up");

$(window).on("scroll load", function () {
  const scroll = $(window).scrollTop();
  const windowHeight = $(window).height();

  // ① ふつうの fade_up（共通処理）
  fadeUps.each(function () {
    const elemPos = $(this).offset().top;

    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass("is_active");
    }
  });

  // ② subtitle が画面に入ったら即フェードアップ
  const subtitlePos = subtitle.offset().top;
  if (scroll > subtitlePos - windowHeight / 2) {
    subtitle.addClass("is_active");
  }

  // ③ env_catch_contents → 左から順番に遅延つき
  const envPos = $(".env_catch").offset().top;
  if (scroll > envPos - windowHeight / 2) {
    envItems.each(function (i) {
      const item = $(this);
      setTimeout(function () {
        item.addClass("is_active");
      }, i * 250); // ← 遅延：0 / 250 / 500 ms
    });
  }
});

const scaleUps = $(".scale_up");

$(window).on("scroll load", function () {
  const scroll = $(window).scrollTop();
  const windowHeight = $(window).height();

  scaleUps.each(function () {
    const elemPos = $(this).offset().top;

    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass("is_active");
    }
  });
});

// $(window).on("scroll load", function () {
//   fadeUps.each(function () {
//     const elemPos = $(this).offset().top;
//     const scroll = $(window).scrollTop();
//     const windowHeight = $(window).height();

//     if (scroll > elemPos - windowHeight + 100) {
//       $(this).addClass("is_active");
//     }
//   });
// });

//左右、スクロールイン
const targets = $(".scroll_in_left, .scroll_in_right");

$(window).on("scroll load", function () {
  targets.each(function () {
    const elemPos = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    const triggerPoint = scroll + windowHeight / 3; // 画面中央

    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass("is_active");
    }
  });
});

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
/*voice_slider*/
$(".voice_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  centerMode: true,
  dots: true,
  arrows: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//qa開閉アニメーション//

$(".qa_question").on("click", function () {
  const item = $(this).parent();

  $(".qa_item").not(item).removeClass("active").find(".qa_answer").slideUp(200);
  item.toggleClass("active");
  item.find(".qa_answer").slideToggle(200);
});

// flow_slider 本体（margin設定は削除）
$(".flow_slider").slick({
  slidesToShow: 3, // 見える枚数は3
  slidesToScroll: 1,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 2500,
  dots: true,
  arrows: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  variableWidth: true, // ★CSSのwidthをそのまま使う
  centerMode: false, // ★勝手に中央寄せさせない
  responsive: [
    {
      breakpoint: 787,
      settings: {
        slidesToShow: 2,
        variableWidth: false, // SPでは横幅100%にするとでかすぎる787だと。あとで修正が必要。
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        variableWidth: false, // SPでは横幅100%にするとでかすぎる787だと。あとで修正が必要。
      },
    },
  ],
});

/* ------フッター読み込み-------- */
$(function () {
  $("#footer").load("footer.html"); // パスだけ注意！
});

/*=================================================
  トップに戻る
  ===================================================*/
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
});
