var hls=document.URL.replace(/^https/, "http");

if (hls.substr(-1,1)!="/")hls += "/";
hls+="hls";

document.getElementsByTagName("object")[0].pauseVideo();
window.open(hls,"twitchHLS","status=0,toolbar=0,menubar=0,height=405,width=720,top="+(screen.height/2-250)+",left="+(screen.width/2-360))