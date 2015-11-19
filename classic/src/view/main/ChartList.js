/**
 * This view is an example list of people.
 */
Ext.define('test.view.main.ChartList', {
  extend: 'Ext.panel.Panel',
  requires: [
    'Ext.layout.container.Table'
  ],
  layout: {
    type: 'table',
    columns: 5,
    tableAttrs: {
      style: {
        width: '100%'
      }
    }
  },
  defaults: {
    bodyPadding: '15 20',
    border: true
  },
  xtype: 'chartlist',
  autoScroll: true,
  items: [
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'},
    {xtype: 'charts'}
  ]
});
