/**
 * Created by Patrick on 12/02/16.
 */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        fs: 0,
        width: '640',
        videoId: 'Awf45u6zrP0',
        playerVars:{'controls': 0, 'disablekb': 0, 'autoplay':1,'iv_load_policy': 3,'showinfo':0, 'rel':0, 'modestbranding':1},
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player.getDuration();
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 12000);
        done = true;

    }
}
function stopVideo() {
    player.stopVideo();
}

//function getfocus() {
//    document.getElementById("body").focus();
//}
