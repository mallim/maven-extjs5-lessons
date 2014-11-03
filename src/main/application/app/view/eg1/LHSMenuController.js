Ext.define('MyApp.view.eg1.LHSMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.eg1-lhsmenu',
    requires:[
      'MyApp.view.layout.Center'
    ],
    refs: [
      {
        ref: 'centerRegion',
        selector: 'layout.center'
      }
    ],
    switchScreen: function(btn) {
      console.log('btn.action=',btn.action);
      console.log('center-region=',this.getCenterRegion());
    }
    
});
