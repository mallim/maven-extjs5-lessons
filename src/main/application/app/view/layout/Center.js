/**
 * Main content region for application
 */
Ext.define('MyApp.view.layout.Center', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.layout.center',
  requires:[
    'MyApp.view.option.List'
  ],
  region: 'center',
  layout: 'fit',
  items: [
    {
      header: false,
      xtype:'option.list',
      reference:'detail'
    }
  ]
});
