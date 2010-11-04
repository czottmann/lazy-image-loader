chrome.extension.sendRequest(
  { msg: "getState" },
  function( response ) {
    if ( response == false ) {
      // console.log( "off" );
      return;
    }


    function addScriptBlock( src ) {
      var s = document.createElement( "script" );
      s.setAttribute( "type", "text/javascript" );
      s.innerText = src;
      document.getElementsByTagName( "head" )[ 0 ].appendChild( s );
    }


    var src = [
      'window.CZ_LIL = {};',
      'CZ_LIL.addScript = function( url ) {',
      '  var s = document.createElement( "script" );',
      '  s.setAttribute( "src", url );',
      '  s.setAttribute( "type", "text/javascript" );',
      '  document.getElementsByTagName( "head" )[ 0 ].appendChild( s );',
      '};',
      'CZ_LIL.run = function() {',
      '  CZ_LIL.interval = setInterval( function() {',
      '    if ( window.jQuery && window.jQuery.fn && window.jQuery.fn.lazyload ) {',
      '      clearInterval( CZ_LIL.interval );',
      '      jQuery.noConflict();',
      '      jQuery( "img" ).lazyload();',
      '    }',
      '  }, 100 );',
      '};'
    ].join( "" );
    

    if ( typeof window.jQuery === "undefined" ) {
      src += [
        'CZ_LIL.addScript( "', chrome.extension.getURL( "jquery_ll_combined.js" ), '" );',
        'CZ_LIL.run();'
      ].join( "" );
      
      addScriptBlock( src );
      // console.log( "load jqll combined", src );
    }
    else if ( window.jQuery.fn && window.jQuery.fn.lazyload ) {
      src += [
        'CZ_LIL.addScript( "', chrome.extension.getURL( "jquery.lazyload.min.js" ), '" );',
        'CZ_LIL.run();'
      ].join( "" );
      
      addScriptBlock( src );
      // console.log( "load ll", src );
    }

  }
);


