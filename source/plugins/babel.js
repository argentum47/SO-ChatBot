(function() {
  IO.injectScript( 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.js' );

  bot.addCommand({
    name: 'b>',
    fun: babelTranspile,
    permissions: {
      del: 'NONE'
    }
  });

  function babelTranspile ( args, callback ) {
    var es5Command = '> ' + babel.transform( args ).code;

    bot.prettyEval( es5Command,   function( result ) {
      if( callback && callback.call) {
        callback( result );
      } else {
        args.directreply( result );
      }
    } );
  }
}());
