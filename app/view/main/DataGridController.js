Ext.define('test.view.main.DataGridController', {
  extend: 'Ext.app.Controller',
  stores: ['Projects'],
  views: ['test.view.form.ProjectsForm', 'test.view.main.DataGrid'],
  refs: [{
    ref: 'formWindow',
    xtype: 'projects_form',
    selector: 'projects_form',
    autoCreate: true
  }],
  init: function() {
    this.control({
      'datagrid > toolbar > button[action=add]': {
        click: this.showAddForm
      },
      'datagrid': {
        itemdblclick: this.onRowdblclick
      },
      'projects_form button[action=add]': {
        click: this.addProject
      }
    });
  },
  onRowdblclick: function(me, record, item, index) {
    var win = this.getFormWindow();
    win.setTitle('Edit Projects');
    win.setAction('edit');
    win.setRecordIndex(index);
    win.down('form').getForm().setValues(record.getData());
    win.show();
  },
  showAddForm: function() {
    var win = this.getFormWindow();
    win.setTitle('Add Projects');
    win.setAction('add');
    win.down('form').getForm().reset();
    win.show();
  },
  addProject: function() {
    console.log('called');
    var win = this.getFormWindow();
    var store = this.getProjectsStore();
    var values = win.down('form').getValues();

    var action = win.getAction();
    var project = Ext.create('test.model.Project', values);

    console.log(values, ' store');
    if (action == 'edit') {
      store.removeAt(win.getRecordIndex());
      store.insert(win.getRecordIndex(), project);
    } else {
      store.ad2d(project);
    }
    win.close();
  }
});
