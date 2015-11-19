Ext.define('test.view.modal.ChartDetail', {
  extend: 'Ext.window.Window',
  alias: 'modal_chart_detail',
  xtype: 'modal_chart_detail',
  title: 'Chart Detail',
  width: 350,
  layout: 'fit',
  resizable: false,
  closeAction: 'hide',
  modal: true,
  config: {
    recordIndex: 0,
    action: ''
  },
  items: [],
  buttons: [{
    text: 'OK',
    action: 'add'
  }]
});
