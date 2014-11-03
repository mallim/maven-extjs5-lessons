Ext.define('MyApp.view.eg1.ServerStore', {
  extend : 'Ext.data.Store',
  requires:['MyApp.view.eg1.ServerModel'],
  model: 'MyApp.view.eg1.ServerModel',
  storeId : 'server',
  proxy: {
    type: 'ajax',
    url: 'data/server.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
