/**
 * Main controller for all top-level application functionality
 */
Ext.define('MyApp.controller.App', {
  extend: 'Ext.app.Controller',
  alias: 'controller.app',
  requires: [
    'MyApp.view.main.MainViewPort',
    'MyApp.view.lhs.LHSMenu',
    'MyApp.view.option.List',
    'MyApp.view.eg1.RegistrationForm'
  ],
  views: [
    'MyApp.view.main.MainViewPort',
    'MyApp.view.lhs.LHSMenu',
    'MyApp.view.option.List'
  ],
  routes: {
    'optlist': {
      action: 'onOptionList'
    },
    'registrationform': {
      action: 'onRegistrationForm'
    }
  },
  init: function() {
    this.addRef([{
      ref: 'main',
      selector: '[xtype=mainv]'
    }]);
    this.callParent();
  },
  /**
   * Handler for matched 'optList' route
   * @private
   */
  onOptionList: function() {
    this.addContentToCenterRegion({
      xtype: 'option.list'
    });
  },
  /**
   * Handler for matched 'registrationform' route
   * @private
   */
  onRegistrationForm: function() {
    this.addContentToCenterRegion({
      xtype: 'eg1-registrationform'
    });
  },
  /**
   * Cleans up center view main region and adds new component based on passed config object
   * @param {Object} config
   */
  addContentToCenterRegion: function( config ) {
    var view = this.getMain();
    var center = view.down( '#center' );
    var cmp = center.down( '[xtype=' + config.xtype + ']' );
    // check if the current view is the target view
    if( !cmp ) {
      // remove all content
      center.removeAll();
      // add content
      cmp = center.add( config );
    }
    return cmp;
  }
});