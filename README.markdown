# Lazy Image Loader, a Google Chrome extension

Applies lazy image loading to every web page, i.e. it'll only load the images
currently visible.  Scroll further down, and more images will be loaded.  It's
great for image-heavy forum threads etc.


## How it works

First, it checks whether the current page makes use of jQuery.  If it doesn't,
it'll load the library (it's part of the extension itself).  Next, it'll load
[jney's fork of jquery_lazyload](https://github.com/jney/jquery_lazyload)
(also part of the extension).


## Acknowledgements

This extension uses:

* [jQuery](http://jquery.com/), [MIT & GPL](http://docs.jquery.com/Licensing) licensed
* [jney's fork of jquery_lazyload](https://github.com/jney/jquery_lazyload), MIT licensed


## License

The extension itself (apart from the libraries listed above) is WTF licensed.
See LICENSE.markdown.

