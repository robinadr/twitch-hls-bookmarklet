# Twitch HLS Bookmarklet

This is a bookmarklet designed to make it easy to open a Twitch stream in HLS (see below for more information).

**Requirements**: a browser that supports [HLS streams](http://en.wikipedia.org/wiki/HTTP_Live_Streaming). **Currently only Safari on OS X and iOS** and this was designed for that.

## How to Install

Drag this link to your favorites bar: <a href="javascript:var%20hls=document.URL.replace(/^https/,%20%22http%22);if%20(hls.substr(-1,1)!=%22/%22)hls%20+=%20%22/%22;hls+=%22hls%22;document.getElementsByTagName(%22object%22)[0].pauseVideo();window.open(hls,%22twitchHLS%22,%22status=0,toolbar=0,menubar=0,height=405,width=720,top=%22+(screen.height/2-250)+%22,left=%22+(screen.width/2-360))">**Twitch HLS**</a>.

## How to Use

When you're on a stream page (e.g. `twitch.com/yourfavstreamer`), just click the bookmarklet and it will do the following:

1. Pause the Flash-based stream
2. Open popup with the HLS-based stream

## Behind the Scenes

The regular Twitch stream viewer uses Adobe Flash, which is a huge power hog. So when you're watching streams on a laptop, this [isn't a good thing](http://robinadr.com/2014/01/watch-twitch-without-flash). HLS is short for [HTTP Live Streaming](http://en.wikipedia.org/wiki/HTTP_Live_Streaming) and is a protocol that Apple came up with. Basically it's a way to stream video using native technologies that don't drain battery.

## How to Build It Yourself

The JavaScript is within `hls.js` and it needs to be converted to a bookmarklet-friendly version with the `make_bookmarklet.pl` script:

	cat hls.js | ./make_bookmarklet.pl

This copies the bookmarklet (`javascript:...`) to your clipboard.

`make_bookmarklet.pl` is included and is by [John Gruber](http://daringfireball.net/2007/03/javascript_bookmarklet_builder) of Daring Fireball.

## License

Licensed under the [MIT License](http://choosealicense.com/licenses/mit/).

## Changelog

**1/29/14**

Initial release.

## Further Reading

* My first blog post about this, "[Watch Twitch Without Flash](http://robinadr.com/2014/01/watch-twitch-without-flash)"
* [Apple's documentation on HLS](https://developer.apple.com/streaming/)