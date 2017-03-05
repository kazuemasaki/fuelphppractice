    var cardNav = function(incr){
        var l = Ext.getCmp('card-wizard-panel').getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        l.setActiveItem(next);
        Ext.getCmp('card-prev').setDisabled(next===0);
        Ext.getCmp('card-next').setDisabled(next===2);
    };
Ext.define('AM.view.user.List' ,{
    // extend: 'Ext.grid.Panel',
    extend: 'Ext.panel.Panel',
    alias: 'widget.userlist',

    renderTo: Ext.getBody(),
    width: 400,
    height: 200,

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        frame: true
    },
    items: [{
        title: 'Panel 1',
        flex: 1,
        margin: '0 0 0 0',
        html: 'flex : 1'
    }, {
        title: 'Panel 2',
        width: 100,
        margin: '0 0 0 0',
        html: 'width : 100'
    }, {
        title: 'Panel 3',
        flex: 2,
        html: 'flex : 2'
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