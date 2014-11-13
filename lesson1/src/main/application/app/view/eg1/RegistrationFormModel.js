Ext.define('MyApp.view.eg1.RegistrationFormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.eg1-registrationform',
    requires:'MyApp.view.eg1.ServerModel',
    data: {
      name: 'MyApp',
      username:null,
      password:null,
      password1:null,
      defaultServer:null
    },
    stores:{
      serverStore:{
        model: 'MyApp.view.eg1.ServerModel',
        storeId : 'server',
        autoLoad:true,
        proxy: {
          type: 'ajax',
          url: 'data/server.json',
          reader: {
            type: 'json',
            rootProperty: 'data'
          }
        }
      }
    }
});
