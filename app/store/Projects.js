Ext.define('test.store.Projects', {
  extend: 'Ext.data.Store',
  model: 'test.model.Project',
  storeId: 'Projects',

  fields: [
    'name',
    'PM',
    'AM',
    'segmen',
    'start',
    'target',
    'total_link',
    'this_week_active',
    'last_week_active',
    'status',
    'contract_value'
  ],
  autoload: true,

  data: {
    projects: [
      {
        id: 1,
        name: 'Lisa',
        PM: 'lisa@simpsons.com',
        AM: '555-111-1224',
        segmen: 'asd',
        start: 'asd',
        target: 'target',
        total_link: 'total',
        this_week_active: '123',
        last_week_active: '123',
        status: '123',
        contract_value: 'asd',
        service_types: [{
          id: 1,
          type: 'Reston, VA'
        }, {
          id: 2,
          type: 'Providence, RI'
        }]
      },
      {
        id: 2,
        name: 'Lisas',
        PM: 'lisa@simpsons.com',
        AM: '555-111-1224',
        segmen: 'asd',
        start: 'asd',
        target: 'target',
        total_link: 'total',
        this_week_active: '123',
        last_week_active: '123',
        status: '123',
        contract_value: 'asd',
        service_types: [{
          id: 1,
          type: 'Reston, VA'
        }, {
          id: 2,
          type: 'Providence, RI'
        }]
      }
    ]
  },

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'projects'
    }
  }
});