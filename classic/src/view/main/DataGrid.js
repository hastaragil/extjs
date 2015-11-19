/**
 * This view is an example list of people.
 */
Ext.define('test.view.main.DataGrid', {
  extend: 'Ext.panel.Panel',
  require: [
      'test.store.Projects'
  ],

  xtype: 'datagrid',

  autoScroll: true,

  items: [{
    xtype: 'gridpanel',
    store: 'Projects',
    title: 'Projects',
    //columns: [
    //  {header: 'Name',  dataIndex: 'name'},
    //  {header: 'Email', dataIndex: 'email'}
    //]
    columns: [
      {text: 'name', dataIndex: 'name'},
      {text: 'PM', dataIndex: 'PM'},
      {text: 'AM', dataIndex: 'AM'},
      {text: 'segmen', dataIndex: 'segmen'},
      {text: 'start', dataIndex: 'start'},
      {text: 'target', dataIndex: 'target'},
      {text: 'total_link', dataIndex: 'total_link'},
      {text: 'this_week_active', dataIndex: 'this_week_active'},
      {text: 'last_week_active', dataIndex: 'last_week_active'},
      {text: 'status', dataIndex: 'status'},
      {text: 'contract_value', dataIndex: 'contract_value'}
    ]
  }]
});
