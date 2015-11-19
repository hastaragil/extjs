/**
 * This view is an example list of people.
 */
Ext.define('test.view.main.Chart', {
  extend: 'Ext.container.Container',
  xtype: 'charts',

  requires: [
      'Ext.chart.theme.*',
      'Ext.chart.series.Bar3D',
      'Ext.chart.grid.VerticalGrid3D',
      'Ext.chart.grid.HorizontalGrid3D',
      'Ext.chart.axis.Numeric3D',
      'Ext.chart.axis.Category3D'
  ],

  title: 'Charts',

  items: [{
    xtype: 'cartesian',
    theme: 'Muted',
    width: 200,
    height: 200,
    store: {
      fields: ['name', 'green', 'red'],
      data: [
        {'name': 'Success', 'green': 60,'red': 50},
        {'name': 'Error', 'green': 50, 'red': 60}
      ]
    },

    //define the x and y-axis configuration.
    axes: [{
      type: 'numeric3d',
      position: 'left',
      title: 'GAP',
      grid: true,
      minimum: 0
    }, {
      type: 'category3d',
      position: 'bottom',
      grid: true
    }],

    //define the actual bar series.
    series: [{
      type: 'bar3d',
      xField: 'name',
      yField: ['green', 'red'],
      axis: 'bottom',
      // Cycles the green and blue fill mode over 2008 and 2009
      // subStyle parameters also override style parameters
      subStyle: {
        fill: ['#115fa6', '#94ae0a']
      }
    }]
  }]
});
