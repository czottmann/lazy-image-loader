( function() {

  function addScript( url ) {
    var s = document.createElement( "script" );
    s.setAttribute( "src", url );
    s.setAttribute( "type", "text/javascript" );
    document.getElementsByTagName( "head" )[ 0 ].appendChild( s );
  }


  chrome.extension.sendRequest(
    { msg: "getState" },
    function( response ) {
      if ( response == false ) {
        console.log( "off" );
        return;
      }

      var i;

      if ( typeof window.jQuery === "undefined" ) {
        addScript( chrome.extension.getURL( "jquery-1.4.3.min.js" ) );
        console.log( "load jq" );
      }

      i = setInterval(
        function() {
          console.log( typeof jQuery );
          if ( typeof window.jQuery !== "undefined" ) {
            window.clearInterval( i );
            jQuery.noConflict();
            addScript( chrome.extension.getURL( "jquery.lazyload.min.js" ) );
            console.log( "load ll" );
            window.setTimeout( function() { jQuery("img").lazyload(); }, 100 );
          }
        },
        100
      );

    }
  );

}() );

