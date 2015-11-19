Ext.define('test.view.form.ProjectsForm', {
  extend: 'Ext.window.Window',
  alias: 'projects_form',
  xtype: 'projects_form',
  title: 'Add Projects',
  width: 350,
  layout: 'fit',
  resizable: false,
  closeAction: 'hide',
  modal: true,
  config: {
    recordIndex: 0,
    action: ''
  },
  items: [{
    xtype: 'form',
    layout: 'anchor',
    bodyStyle: {
      background: 'none',
      padding: '10px',
      border: '0'
    },
    defaults: {
      xtype: 'textfield',
      anchor: '100%'
    },
    items: [{
      name: 'name',
      fieldLabel: 'name'
    }, {
      name: 'PM',
      fieldLabel: 'PM'
    }, {
      name: 'AM',
      fieldLabel: 'AM'
    }, {
      name: 'segmen',
      fieldLabel: 'segmen'
    }, {
      name: 'start',
      fieldLabel: 'start'
    }, {
      name: 'target',
      fieldLabel: 'target'
    }, {
      name: 'total_link',
      fieldLabel: 'total_link'
    }, {
      name: 'this_week_active',
      fieldLabel: 'this_week_active'
    }, {
      name: 'last_week_active',
      fieldLabel: 'last_week_active'
    }, {
      name: 'status',
      fieldLabel: 'status'
    }, {
      name: 'contract_value',
      fieldLabel: 'contract_value'
    }]
  }],
  buttons: [{
    text: 'OK',
    action: 'add'
  }, {
    text: 'Reset',
    handler: function() {
      this.up('window').down('form').getForm().reset();
    }
  }, {
    text: 'Cancel',
    handler: function() {
      this.up('window').close();
    }
  }]
});
