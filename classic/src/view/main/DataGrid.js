/**
 * This view is an example list of people.
 */
Ext.define('test.view.main.DataGrid', {
  extend: 'Ext.grid.Panel',
  require: [
    'test.store.Projects'
  ],
  xtype: 'datagrid',
  autoScroll: true,
  tbar: [{
    text: 'Add Book',
    action: 'add',
    iconCls: 'book-add'
  }],
  store: 'Projects',
  title: 'Projects',
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
    {
      text: 'service_type',
      dataIndex: 'service_types',
      renderer: function(value) {
        return value.map(function(value) {
          return value.type;
        }).join('<br>');
      }
    },
    {text: 'contract_value', dataIndex: 'contract_value'},
    {
      header: 'Action', width: 50,
      renderer: function(v, m, r) {
        var id = Ext.id();
        var max = 15;
        Ext.defer(function() {
          Ext.widget('image', {
            renderTo: id,
            name: 'delete',
            src: 'images/book_delete.png',
            listeners: {
              afterrender: function(me) {
                me.getEl().on('click', function() {
                  var grid = Ext.ComponentQuery.query('datagrid')[0];
                  if (grid) {
                    var sm = grid.getSelectionModel();
                    var rs = sm.getSelection();
                    if (!rs.length) {
                      Ext.Msg.alert('Info', 'No Book Selected');
                      return;
                    }
                    Ext.Msg.confirm('Remove Book',
                        'Are you sure you want to delete?',
                        function(button) {
                          if (button == 'yes') {
                            grid.store.remove(rs[0]);
                          }
                        });
                  }
                });
              }
            }
          });
        }, 50);
        return Ext.String.format('<div id="{0}"></div>', id);
      }
    }
  ]

});
