/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    name: 'MyApp',
    requires: [
      'Deft.promise.*',
      'Ext.util.History',
      'MyApp.controller.App',
      'MyApp.view.main.MainViewPort'
    ],
    controllers: [
      'App'
    ],
    init: function() {
      Ext.setGlyphFontFamily( 'FontAwesome' );
    },
   /**
    * launch is called immediately upon availability of our app
    */
    launch: function () {
	
	    console.log( "Lodash version=", _.VERSION );
	    console.log( "moment().format() =", moment().format() );
	  
      // "this" = Ext.app.Application
      // var me = this;

    } // launch

});
