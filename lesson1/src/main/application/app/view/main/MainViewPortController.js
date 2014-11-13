/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainViewPortController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainv',
  /**
   * Handler for navigation item click events
   * @private
   * @param {Ext.button.Button} btn
   * @param {Ext.EventObject} e
   * @param {Object} eOpts
   */
  onNavigationItemClick: function( btn, e, eOpts ) {
    console.log( 'btn.action=', btn.itemId );
    this.redirectTo( btn.itemId );
  }

});
