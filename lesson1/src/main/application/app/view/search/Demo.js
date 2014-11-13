Ext.define('MyApp.view.search.Demo', {
  extend: 'Ext.Panel',
  alias: 'widget.search',
  requires: [
    'XExt.search.SearchField',
    'XExt.search.SearchFieldController'
  ],
  bodyPadding: 50,
  title: 'Search Field Demo from <a href="https://github.com/stoeffel/extjs5-the-missing-components">https://github.com/stoeffel/extjs5-the-missing-components</a>',
  items: [{
    xtype: 'x-searchfield',
    listeners: {
      search: function(value) {
        panel.getComponent('searchResult').setValue('searching for: ' + value);
      },
      clear: function() {
        panel.getComponent('searchResult').setValue('cleared');
      }
    } // listeners
  }, // x-searchfield
  {
    itemId: 'searchResult',
    xtype: 'displayfield',
    value: ''
  }] // searchResult
});
