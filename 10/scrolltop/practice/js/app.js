$(function () {
    //topbtnにトップへ戻るリンクを設定する
    let topbtn = $('#scrollTop');
    
    //最初は非表示
    topbtn.hide();

    //200px以上スクロールされたら表示する
    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 200) {
    //         topbtn.fadeIn();
    //     }else{
    //         topbtn.fadeOut();
    //     }
    // })
    
    //4秒後に表示する
    topbtn.fadeIn(4000);


})