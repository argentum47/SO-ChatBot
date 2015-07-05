(function() {
  bot.addCommand({
    name: 'b> ',
    fun: babelTranspile,
    permissions: {
      del: 'NONE'
    }
  });

  // bot.listen(/^b?>\s(.*)$/,
  //            tanspilerListener
  //           );

  function babelTranspile ( args ) {
    var command;
    setTimeout( function() {
	    IO.injectScript( 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.js' );
    }, 1000 );

    command = args.parse();

  }
}());
