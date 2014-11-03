"use strict";

Ext.define('MyApp.view.eg1.MainViewPort', {
  extend: 'Ext.container.Container',
  requires:[
    'Ext.layout.container.Border',
    // 'MyApp.view.eg1.RegistrationForm',
    'MyApp.view.eg1.LHSMenu',
    // 'MyApp.view.option.List',
    'MyApp.view.layout.Center'
  ],
  layout: {
    type: 'border'
  },
  items: [
    {
      region: 'north',
      margins: 5,
      height: 50,
      xtype: 'container',
      html: '<h1 class="x-panel-header">Welcome to MyApp Demo</h1>'
    },
    {
      xtype: 'eg1-lhsmenu'
    },
    {
      xtype:'layout.center'
    },
    /**
    {
      title: 'Center / Srodkowy',
      region: 'center',
      layout:'fit',
      items: [
        {
          header: false,
          itemId: 'center-region',
          xtype:'option.list'
        }
      ]
    },
    **/
    {
      title: 'East / Wschodni',
      region: 'east',
      margins: '0 5 0 5',
      width: 200,
      collapsible: true,
      collapsed: true
    },
    {
      title: 'South / Południowy',
      region: 'south',
      margins: '0 5 5 5',
      flex: .1,
      split: true,
      html: 'Information goes here'
    }
  ]
});



