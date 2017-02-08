Ext.define('AM.view.user.List' ,{
    // extend: 'Ext.grid.Panel',
    extend: 'Ext.panel.Panel',
    alias: 'widget.userlist',

    renderTo: Ext.getBody(),
    width: 400,
    height: 300,
    title: 'Container Panel',
    items: [
        {
            xtype: 'panel',
            title: 'Child Panel 1',
            height: 100,
            width: '75%'
        },
        {
            xtype: 'panel',
            title: 'Child Panel 2',
            height: 100,
            width: '75%'
        }
    ]

    // title: 'All Users',

    // store: 'Users',
    // initComponent: function() {
    //     this.columns = [
    //         {header: 'Name',  dataIndex: 'name',  flex: 1},
    //         {header: 'Email', dataIndex: 'email', flex: 1}
    //     ];

    //     this.callParent(arguments);
    // }
});

Ext.create('Ext.panel.Panel', {
    // renderTo: Ext.getBody(),
    // width: 400,
    // height: 300,
    // title: 'Container Panel',
    // items: [
    //     {
    //         xtype: 'panel',
    //         title: 'Child Panel 1',
    //         height: 100,
    //         width: '75%'
    //     },
    //     {
    //         xtype: 'panel',
    //         title: 'Child Panel 2',
    //         height: 100,
    //         width: '75%'
    //     }
    // ]
});