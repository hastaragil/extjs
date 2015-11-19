Ext.define('test.view.main.ProjectFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.project_form',
  onItemSelected: function (sender, record) {
    Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
  },
  onConfirm: function (choice) {
    if (choice === 'yes') {
      //
    }
  }
});
