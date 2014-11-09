
Ext.define("MyApp.view.eg1.RegistrationForm",{
    extend: "Ext.panel.Panel",
    alias: 'widget.eg1-registrationform',
    requires:[
      'MyApp.view.eg1.ServerStore',
      'MyApp.view.eg1.RegistrationFormModel',
      'MyApp.view.eg1.RegistrationFormController'
    ],
    controller: "eg1-registrationform",
    viewModel: {
        type: "eg1-registrationform"
    },
    layout: {
      type: 'card',
      activeItem: 1
    },
    items: [
      {
        xtype: 'form',
        frame: true,
        title: 'Registration Form',
        bodyPadding: '10 10 0',
        defaults: {
          anchor: '100%',
          allowBlank: false,
          msgTarget: 'side',
          labelWidth: 120
        },
        items: [
          {
            xtype: 'textfield',
            name: 'username',
            emptyText: 'Enter User Name / Mail id',
            fieldLabel: 'User Name/Mail Id',
            bind: '{username}'
          },
          {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            emptyText: 'Enter Password',
            fieldLabel: 'Password',
            bind: '{password}'
          },
          {
            xtype: 'textfield',
            name: 'retype-password',
            inputType: 'password',
            emptyText: 'Re-Enter Password',
            fieldLabel: 'Re-Enter Password',
            bind: '{password1}'
          },
          {
            xtype: 'combo',
            name: 'server',
            allowBlank: true,
            fieldLabel: 'Server',
            displayField: 'name',
            editable: false,
            valueField: 'name',
            bind: {
              store: '{serverStore}',
              value: {
                bindTo: '{defaultServer}'
              }
            }
          }
        ], // items 2
        buttons:[
          {
            // iconCls:'fa fa-check',
            glyph:0xf00c,
            text: 'Ok',
            handler: 'onLoginOkButton'
          },
          {
            // iconCls:'fa fa-close',
            glyph:0xf00d,
            text: 'Cancel',
            handler: 'onCancel'
          }
        ] // buttons
      }
    ] // items 1
});
