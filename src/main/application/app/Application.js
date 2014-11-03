/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    name: 'MyApp',
    requires: [
      'Ext.util.History',
      'MyApp.controller.App'
    ],
    controllers: [
      'App'
    ],
   /**
    * launch is called immediately upon availability of our app
    */
    launch: function () {
	
	  console.log( "Lodash version=", _.VERSION );
	  
	  console.log( "moment().format() =", moment().format() );
	  
      // "this" = Ext.app.Application
      var me = this;

     // init Ext.util.History on app launch; if there is a hash in the url,
     // our controller will load the appropriate content
     Ext.util.History.init(function(){
       var hash = document.location.hash;
       me.getAppController().fireEvent( 'tokenchange', hash.replace( '#', '' ) );
     });
     // add change handler for Ext.util.History; when a change in the token
     // occurs, this will fire our controller's event to load the appropriate content
     Ext.util.History.on( 'change', function( token ){
       me.getAppController().fireEvent( 'tokenchange', token );
     });
    } // launch
});
