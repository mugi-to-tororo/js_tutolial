$(function() {
    $('#btn').on('click', function() {
        //webapiに住所情報をリクエストする
        $.ajax({
            url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
            dataType: 'jsonp',
        }).done(function(data) {
            if (data.results) {
                setData(data.results[0])
            } else {
                alert('該当するデータは見つかりませんでした。')
            }
        }).fail(function(data) {
            alert('通信に失敗しました。')
        });
    });

    //データ取得後の処理
    function setData(data) {
        $('#prefecture').val(data.address1);
        $('#city').val(data.address2);
        $('#address').val(data.address3);
    }
});

