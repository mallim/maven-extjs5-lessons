
Ext.define("MyApp.view.lhs.LHSMenu",{
  extend: "Ext.panel.Panel",
  alias: 'widget.lhsmenu',
  title: 'Navigation',
  layout: 'anchor',
  region:'west',
  collapsible: true,
  split: true,
  titleCollapse: true,
  bodyPadding: 5,
  minWidth: 125,
  width: 132,
  items: [
    {
      xtype: 'button',
      text: 'Registration Form',
      itemId: 'registrationform',
      listeners: {
        click: 'onNavigationItemClick'
      }
    },
    {
      xtype: 'button',
      text: 'Option List',
      itemId: 'optlist',
      listeners: {
        click: 'onNavigationItemClick'
      }
    },
    {
      xtype: 'button',
      text: 'Search Field Demo',
      itemId: 'searchFieldDemo',
      listeners: {
        click: 'onNavigationItemClick'
      }
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
