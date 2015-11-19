Ext.define('test.view.main.ChartController', {
  extend: 'Ext.app.Controller',
  stores: ['Projects'],
  views: ['test.view.main.Chart'],
  refs: [{
    ref: 'modalChartDetail',
    xtype: 'modal_chart_detail',
    selector: 'modal_chart_detail',
    autoCreate: true
  }],
  init: function() {
    this.control({
      'charts': {
        click: this.chartsClick
      }
    });
  },
  chartsClick: function(me, record, item, index) {
    console.log('called');
    //var win = this.getFormWindow();
    //win.setTitle('Edit Projects');
    //win.setAction('edit');
    //win.setRecordIndex(index);
    //win.down('form').getForm().setValues(record.getData());
    //win.show();
  }
});
