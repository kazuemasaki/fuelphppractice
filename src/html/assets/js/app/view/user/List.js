Ext.define('AM.view.user.List' ,{
    // extend: 'Ext.grid.Panel',
    extend: 'Ext.panel.Panel',
    alias: 'widget.userlist',

    renderTo: Ext.getBody(),
    width: 400,
    height: 200,
    title: 'Container Panel',

    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 15
    },
    items: [{
        title: 'Navigation',
        region:'west',
        floatable: false,
        margins: '5 0 0 0',
        width: 175,
        minWidth: 100,
        maxWidth: 250,
        html: 'Secondary content like navigation links could go here'
    },{
        title: 'heder',
        region: 'north',
        height: 150,
        minHeight: 75,
        maxHeight: 250,
        html: 'header content'
    },{
        title: 'Footer',
        region: 'south',
        height: 150,
        minHeight: 75,
        maxHeight: 250,
        html: 'Footer content'
    },{
        title: 'Main Content',
        collapsible: false,
        region: 'center',
        margins: '5 0 0 0',
        html: 'Main PageThis is where the main content would go'
    }]


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