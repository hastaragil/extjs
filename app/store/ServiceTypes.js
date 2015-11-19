Ext.define('test.store.ServiceTypes', {
  extend: 'Ext.data.Store',
  model: 'ServiceType',
  storeId: 'ServiceType',

  fields: [
    'id', 'type'
  ],

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'projects'
    }
  }
});