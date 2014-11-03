
Ext.define("MyApp.view.eg1.LHSMenu",{
  extend: "Ext.panel.Panel",
  alias: 'widget.eg1-lhsmenu',
  controller: "eg1-lhsmenu",
  requires:[
    'MyApp.view.eg1.LHSMenuModel',
    'MyApp.view.eg1.LHSMenuController'
  ],
  viewModel: {
    type: "eg1-lhsmenu"
  },
  title: 'Navigation',
  layout: 'anchor',
  region:'west',
  collapsible: true,
  split: true,
  titleCollapse: true,
  bodyPadding: 5,
  minWidth: 125,
  width: 125,
  items: [
    {
      xtype: 'button',
      text: 'Registration Form',
      action: 'eg1-registrationform',
      handler: 'switchScreen'
    },
    {
      xtype: 'button',
      text: 'Option List',
      action: 'option.list',
      handler: 'switchScreen'
    },
    {
      xtype: 'button',
      text: 'Navi Button 3'
    },
    {
      xtype: 'button',
      text: 'Navi Button 4'
    },
    {
      xtype: 'button',
      text: 'Navi Button 5'
    },
    {
      xtype: 'button',
      text: 'Navi Button 6'
    },
    {
      xtype: 'button',
      text: 'Navi Button 7'
    },
    {
      xtype: 'button',
      text: 'Navi Button 8'
    }
  ]

});
