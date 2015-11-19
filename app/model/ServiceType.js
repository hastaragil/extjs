Ext.define('ServiceType', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'type'
  }, {
    name: 'project_id',
    reference: 'Project'
  }]
});