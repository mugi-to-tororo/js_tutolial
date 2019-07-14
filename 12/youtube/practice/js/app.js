// request parameter setting
const KEY = 'AIzaSyAQEpIKlTydcwbl0-fo7GdOv03ruux5t-U';
let url = 'https://www.googleapis.com/youtube/v3/search?';
url += 'type=video';
url += '&channelId=UCqRBWtTdNgdy242-CE4fvTA'
url += '&part=snippet';
url += '&q=roland';
url += '&order=viewCount';
url += '&key=' + KEY;


// request
$(function() {
    $.ajax({
        url: url,
        dataType : 'jsonp'
    }).done(function(data) {
        if (data.items) {
            setData(data);
            console.log(data);
        } else {
            console.log(data);
            alert('該当するデータが見つかりませんでした');
        }
    }).fail(function(data) {
        alert('通信に失敗しました');
    });
});


// after successful data acquision
function setData(data) {
    let result = '';
    let video = '';
    for ( let i = 0; i < data.items.length; i ++) {
        video  = '<iframe src="https://www.youtube.com/embed/';
        video  +=  data.items[i].id.videoId;
        video  += '"allowfullscreen></iframe>';
        result += '<div class="video">' + video + '</div>'
    }
    // reflect HTML
    $('#videoList').html(result);
}
